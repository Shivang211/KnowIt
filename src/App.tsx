import { Route, Routes } from "react-router-dom";

import CategorySelect from "./pages/CategorySelect";
import { FinalScore } from "./pages/FinalScore";
import { GameRoom } from "./pages/GameRoom";
import { GameStartPage } from "./pages/GameStartPage";
import HomePage from "./pages/Homepage";
import { JoinRoomPage } from "./pages/JoinRoomPage";
import { QuestionPage } from "./pages/QuestionPage";
import ScorePage from "./pages/ScorePage";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/category" element={<CategorySelect />} />
        <Route path="/final-score" element={<FinalScore />} />
        <Route path="/game-start" element={<GameStartPage />} />
        <Route path="/join-room" element={<JoinRoomPage />} />
        <Route path="/room/:id" element={<GameRoom />} />
      </Routes>
    </>
  );
}

export default App;
