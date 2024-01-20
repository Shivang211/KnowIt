import { Box, Stack, Typography } from "@mui/material";

import Timer from "../components/Timer";
import QuestionTransition from "./QuestionTransition";
import { QuestionPage } from "../pages/QuestionPage";
import ScorePage from "../pages/ScorePage";

interface Player {
  id: string;
  answers: string[];
}

const getCurrentUserAnswer = (
  currentUserSocketID: string,
  playersList: string[],
  currentQnNo: number,
) => {
  const currentPlayer: Player = playersList.find(
    (player: any) => player.id === currentUserSocketID,
  ) as unknown as Player;

  if (currentPlayer === undefined) {
    return "";
  } else {
    const playerAnswer = currentPlayer.answers[currentQnNo];
    if (playerAnswer === undefined) {
      return "No answer submitted";
    } else {
      return playerAnswer;
    }
  }
};

const GameView = ({
  playerAnswer,
  setPlayerAnswer,
  gameState,
}: {
  playerAnswer: string;
  setPlayerAnswer: (_: string) => void;
  gameState: any;
}) => {
  console.log(gameState);
  const socketId = localStorage.getItem("socketId");
  const playerInfo = gameState.players
  const questionRoundStatus = gameState.questionRoundStatus;
  return (
    <>
      {questionRoundStatus === "pending" && (
        <QuestionTransition
          questionNo={gameState.currentQuestionNo}
          duration={gameState.duration}
        />
      )}
      {questionRoundStatus === "started" && (
        <>
          <Timer duration={gameState.duration} />
          <QuestionPage question={gameState.questions[gameState.currentQuestionNo - 1].payload} questionNo={gameState.currentQuestionNo} answer={playerAnswer} setAnswer={setPlayerAnswer} />
          {/* question element render, for user to answer */}
        </>
      )}
      {questionRoundStatus === "ended" && (
        <ScorePage user1={playerInfo[0].name} user2={playerInfo[1].name} score1={playerInfo[0].score}
        score2={playerInfo[1].score}/>
      )}
    </>
  );
};

export default GameView;
