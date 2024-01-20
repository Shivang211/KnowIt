import { Button, CircularProgress, Typography } from "@mui/material";
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
  const ENDPOINT = "http://localhost:8000";

  useEffect(() => {
    socket = io(ENDPOINT);

    socket.emit("join", { name: name, room: id }, ({ error, user }) => {
      if (error) {
        alert(error);
      } else {
        setIsSocketJoined(true);
      }
    });
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
        variant="h3"
      >
        Your Room ID is {id}
      </Typography>
      {!isSocketJoined && <CircularProgress />}

      {isSocketJoined && (
        <>
          {gameStatus === "pending" && (
            <Button disabled={isReady} onClick={sendReadyStatus}>
              {isReady ? "Waiting for players" : "Ready"}
            </Button>
          )}
          {gameStatus === "started" && (
            <GameView
              playerAnswer={playerAnswer}
              setPlayerAnswer={setPlayerAnswer}
              gameState={gameState}
            />
          )}
          {gameStatus === "ended" && (
            <>
            {localStorage.clear()}
            <FinalScore />
            </>
          )}
        </>
      )}
    </>
  );
}
