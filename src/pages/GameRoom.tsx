import { Box, Button, CircularProgress, Typography } from "@mui/material";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import io, { Socket } from "socket.io-client";

import GameView from "../components/GameView";
import { FinalScore } from "./FinalScore";

let socket: Socket;

export function GameRoom() {
  const [isSocketJoined, setIsSocketJoined] = useState(false);
  const [isReady, setIsReady] = useState(false);
  const [gameStatus, setGameStatus] = useState("pending");
  const [gameState, setGameState] = useState(null);
  const [leaderboard, setLeaderboard] = useState([]);

  const [users, setUsers] = useState([]);
  const [playerAnswer, setPlayerAnswer] = useState("");

  const { id } = useParams();

  const navigate = useNavigate();

  const name = localStorage.getItem("username");
  const topic = localStorage.getItem("topic");

  const ENDPOINT = "https://knowit-backend-82tg.onrender.com";

  useEffect(() => {
    socket = io(ENDPOINT);

    socket.emit(
      "join",
      { name: name, room: id, topic: topic },
      ({ error, user }) => {
        if (error) {
          alert(error);
        } else {
          setIsSocketJoined(true);
        }
      },
    );
    return () => {
      socket.disconnect();
    };
  }, [id, name]);

  useEffect(() => {
    socket.on("roomData", ({ users }) => {
      setUsers(users);
    });
    socket.on("updateGameState", ({ gameState }) => {
      setGameState(gameState);
      setGameStatus(gameState.status);
      setPlayerAnswer("");
    });
    socket.on("updateLeaderboard", ({ leaderboard }) => {
      setLeaderboard(leaderboard);
    });
  }, []);

  const sendReadyStatus = () => {
    socket.emit(
      "player-ready",
      { name: name, room: id },
      ({ games, error }) => {
        if (error === undefined) {
          setIsReady(true);
        }
      },
    );
  };

  const inputResponse = ({ answer }) => {
    setPlayerAnswer(answer);
    socket.emit(
      "player-answer",
      {
        name: name,
        room: id,
        questionID: gameState.questions[gameState.currentQuestionNo - 1].id,
        answer: answer,
      },
      ({ games, error }) => {
        if (error !== undefined) alert(error);
      },
    );
  };

  return (
    <>
      <Typography
        sx={{
          fontWeight: "bolder",
          fontFamily: "Gralliec",
          whiteSpace: "nowrap",
          display: "flex",
          flexDirection: "row",
          letterSpacing: "0.02em",
          justifyContent: "center",
        }}
        variant={"h1"}
        gutterBottom
      >
        <div className="k">k</div>
        <div className="h">n</div>
        <div className="d">o</div>
        <div className="r">w</div>
        <div className="i">i</div>
        <div className="t">t</div>
        <div className="s">?</div>
      </Typography>

      <Typography
        sx={{
          fontWeight: "bolder",
          fontFamily: "Inter",
          color: "white",
        }}
        variant="h5"
      >
        Your Room ID is
      </Typography>
      <Typography
        sx={{
          fontWeight: "bolder",
          fontFamily: "monospace",
          color: "white",
        }}
        variant="h4"
      >
        {id}
      </Typography>
      {!isSocketJoined && (
        <>
          <CircularProgress size="5rem" sx={{ marginY: "5rem" }} />
          <Typography
            sx={{
              fontWeight: "bolder",
              fontFamily: "Inter",
              color: "white",
            }}
            variant="h4"
          >
            So lonely ;)
          </Typography>
          <Typography
            sx={{
              fontWeight: "bolder",
              fontFamily: "Inter",
              color: "white",
            }}
            variant="h4"
          >
            Let's wait for your friend to join!
          </Typography>
        </>
      )}

      {isSocketJoined && (
        <>
          {gameStatus === "pending" && (
            <>
              <Button
                sx={{ marginY: "2rem" }}
                disabled={isReady}
                onClick={sendReadyStatus}
                variant="contained"
              >
                <Typography
                  sx={{
                    fontWeight: "bolder",
                    fontFamily: "Gralliec",
                    letterSpacing: "0.09rem",
                  }}
                  variant={"h3"}
                >
                  {isReady ? "Waiting for players" : "Ready"}
                </Typography>
              </Button>
            </>
          )}
          {gameStatus === "started" && (
            <GameView
              playerAnswer={playerAnswer}
              setPlayerAnswer={setPlayerAnswer}
              gameState={gameState}
              inputResponse={inputResponse}
            />
          )}
          {gameStatus === "ended" && (
            <>
              <FinalScore
                user1={gameState.players[0].name}
                user2={gameState.players[1].name}
                score1={gameState.players[0].score}
                score2={gameState.players[1].score}
              />
            </>
          )}
        </>
      )}
    </>
  );
}
