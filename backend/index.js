import cors from "cors";
import express from "express";
import http from "http";
import moment from "moment";
import { Server } from "socket.io";

import {
  addPlayer,
  createGame,
  disconnectPlayer,
  gameLoop,
  getGameByID,
  updatePlayerAnswer,
  updatePlayerReadyStatus,
} from "./game.js";
import { addUser, removeUser } from "./users.js";

const app = express();
app.use(
  express.urlencoded({
    extended: true,
  }),
);
app.use(express.json());
app.use(cors());

const server = http.createServer(app);
const io = new Server(server, {
  cors: {
    origin: "*",
    methods: ["GET", "POST"],
  },
});

// Socker Emitters
const updateLeaderboard = (data, room) => {
  io.to(room).emit("updateLeaderboard", {
    leaderboard: data,
  });
};
const updateGameState = (gameState, room) => {
  io.to(room).emit("updateGameState", {
    gameState,
  });
};

io.on("connect", (socket) => {
  console.log(`${socket.id} connected!`);

  // Join room handler
  socket.on("join", async ({ name, room, topic }, callback) => {
    const { error, user } = addUser({ id: socket.id, name, room });

    if (error) return callback({ error: error });

    socket.join(user.room);
    const { game, error: getGameError } = getGameByID(room);
    if (getGameError) {
      await createGame(room, topic);
      addPlayer({ id: socket.id, name, room });
    } else {
      if (game.status !== "pending") {
        return callback({ error: "Game already started" });
      }
      addPlayer({ id: socket.id, name, room });
    }

    io.to(user.room).emit("roomData", {
      room: user.room,
      users: getGameByID(user.room).game.players,
    });

    callback({
      user: user,
    });
  });

  // Set player ready status handler
  socket.on("player-ready", ({ name, room }, callback) => {
    const { game, error } = updatePlayerReadyStatus({
      id: socket.id,
      name,
      room,
    });

    io.to(room).emit("roomData", {
      room,
      users: getGameByID(room).game.players,
    });

    if (game.status === "started") {
      gameLoop({ room }, updateLeaderboard, updateGameState);
    }
    callback({ game, error });
  });

  // Set player's answer
  socket.on("player-answer", ({ name, room, questionID, answer }, callback) => {
    const { game, error } = updatePlayerAnswer({
      id: socket.id,
      name,
      room,
      questionID,
      answer,
    });
    callback({ game, error });
  });

  socket.on("disconnect", () => {
    console.log(`${socket.id} disconnected.`);
    const user = removeUser(socket.id);

    if (user) {
      const { error } = disconnectPlayer({ id: socket.id, room: user.room });
      if (error !== "Game not found") {
        io.to(user.room).emit("roomData", {
          room: user.room,
          users: getGameByID(user.room).game.players,
        });
      }
    }
  });
});

const port = process.env.PORT || 8000;
server.listen(port, () => console.log(`Server has started on port ${port}`));
