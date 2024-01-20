const games = {};

import moment from "moment";
import { v4 as uuidv4 } from "uuid";

import { getQuestions } from "./services.js";

import { stringSimilarity } from "string-similarity-js";

export const createGame = async (id) => {
  let questions = [];
  try {
    const data = await getQuestions(5);
    questions = await data.map((q) => {
      return {
        id: uuidv4(),
        payload: q.question,
        answer: q.answer
      };
    });
    // Parse data
  } catch (err) {
    console.log(err);
    throw new Error(err.message || "Get trivia questions failed");
  }

  games[id] = {
    status: "pending",
    players: [],
    questionRoundStatus: "not-started",
    currentQuestionNo: 1,
    questions: questions,
  };
};

export const addPlayer = ({ id, name, room }) => {
  if (games[room] !== undefined) {
    games[room].players.push({
      id,
      name,
      isReady: false,
      answers: {},
      score: 0,
    });
  }
  return { error: "Game not found" };
};

export const disconnectPlayer = ({ id, room }) => {
  if (games[room] !== undefined) {
    const newPlayerList = [...games[room].players];
    const existingPlayer = games[room].players.findIndex(
      (player) => player.id === id,
    );
    if (existingPlayer !== -1) {
      newPlayerList.splice(existingPlayer, 1);
      games[room].players = newPlayerList;
    }
    return { error: "Player not found" };
  }
  return { error: "Game not found" };
};

// Game loop that controls the flow & updating of game state
export const gameLoop = async (
  { room },
  updateLeaderboardEmitter,
  updateGameStateEmitter,
) => {
  const roundStartTransitionDuration = 5000; // in milliseconds
  const roundEndTransitionDuration = 8000; // in milliseconds
  const roundDuration = 10000; // in milliseconds
  let currentQuestion = games[room].currentQuestionNo;
  const questions = games[room].questions;
  updateGameStatus(room, "started");

  while (currentQuestion <= games[room].questions.length) {
    updateQuestionRoundStatus(room, "pending");
    games[room].duration = roundStartTransitionDuration;
    updateGameStateEmitter(games[room], room);
    await new Promise((resolve) =>
      setTimeout(resolve, roundStartTransitionDuration),
    );
    updateQuestionRoundStatus(room, "started");
    games[room].duration = roundDuration;
    const momentRoundStarted = moment().format();
    updateGameStateEmitter(games[room], room);

    await new Promise((resolve) => setTimeout(resolve, roundDuration));
    updateQuestionRoundStatus(room, "ended");
    // Update player scores
    const newPlayersList = [...games[room].players];
    games[room].players = newPlayersList.map((player) => {
      const currentQuestionID = questions[currentQuestion - 1].id;
      const playerAnswer = player.answers[currentQuestionID];
      if (playerAnswer !== undefined) {
        if (playerAnswer.answerID === questions[currentQuestion - 1].answerID) {

          const maxPoints = 1000;
          const responseTime = moment(playerAnswer.answeredAt).diff(
            moment(momentRoundStarted),
            "seconds",
          );
          const responseRatio = responseTime / (roundDuration / 1000);
          const score = maxPoints * responseRatio * stringSimilarity(playerAnswer, answer);
          return {
            ...player,
            score: score
          };
        }
      }
      return player;
    });
    updateLeaderboardEmitter(games[room].players, room);
    // Socket Emit event to update game state, sending game status, correct answer & updated leaderboard
    games[room].duration = roundEndTransitionDuration;
    updateGameStateEmitter(games[room], room);
    await new Promise((resolve) =>
      setTimeout(resolve, roundEndTransitionDuration),
    );

    // if (currentQuestion < games[room].questions.length) {
    //   updateQuestionRoundStatus(room, "pending");
    //   // Socket Emit event to update game state
    //   updateGameStateEmitter(games[room], room);
    // }
    currentQuestion += 1;
    games[room].currentQuestionNo = currentQuestion;
  }

  updateGameStatus(room, "ended");
  // Socket Emit event to update game state
  updateGameStateEmitter(games[room], room);
  // Remove game room since game has ended
  delete games[room];
};

export const updateGameStatus = (room, newStatus) => {
  if (games[room] !== undefined) {
    games[room].status = newStatus;
  }
};

export const updateQuestionRoundStatus = (room, newQuestionRoundStatus) => {
  if (games[room] !== undefined) {
    games[room].questionRoundStatus = newQuestionRoundStatus;
  }
};

export const updatePlayerReadyStatus = ({ id, name, room }) => {
  if (games[room] !== undefined) {
    const newPlayersList = [...games[room].players];
    const existingUser = newPlayersList.findIndex((user) => user.id === id);
    if (existingUser !== -1) {
      newPlayersList[existingUser] = {
        ...newPlayersList[existingUser],
        isReady: true,
      };
      games[room].players = newPlayersList;
      // Check if all players in game room are ready
      const notReadyUser = games[room].players.find(
        (user) => user.isReady === false,
      );
      if (notReadyUser === undefined) {
        // Set game status to started
        updateGameStatus(room, "started");
        updateQuestionRoundStatus(room, "pending");
      }
      return { game: games[room] };
    }
    return { error: "Player id not found" };
  }
  return { error: "Game not found" };
};

export const updatePlayerAnswer = ({
  id,
  name,
  room,
  questionID,
  answerID,
  momentAnswered,
}) => {
  // Add validation for questionID to check if answer submitted is for current question
  if (games[room] !== undefined) {
    const newPlayersList = [...games[room].players];
    const existingUser = newPlayersList.findIndex((user) => user.id === id);
    if (existingUser !== -1) {
      newPlayersList[existingUser].answers[questionID] = {
        answerID,
        answeredAt: momentAnswered,
      };
      games[room].players = newPlayersList;
      return { game: games[room] };
    }
    return { error: "Player id not found" };
  }
  return { error: "Game not found" };
};

export const getGameByID = (id) => {
  if (games[id] !== undefined) {
    return { game: games[id] };
  }
  return { error: "Game not found" };
};

const removeEndedGame = () => {};
