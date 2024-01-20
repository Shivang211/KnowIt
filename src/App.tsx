import { Route, Routes } from "react-router-dom";

import CategorySelect from "./pages/CategorySelect";
import { FinalScore } from "./pages/FinalScore";
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
        <Route path="/score-page" element={<ScorePage />} />
        <Route path="/category" element={<CategorySelect />} />
        <Route path="/question-page" element={<QuestionPage />} />
        <Route path="/final-score" element={<FinalScore />} />
        <Route path="/game-start" element={<GameStartPage />} />
        <Route path="/join-room" element={<JoinRoomPage />} />
      </Routes>
    </>
  );
}

export default App;
