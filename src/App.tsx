import { Route, Routes } from "react-router-dom";

import HomePage from "./pages/Homepage";
import ScorePage from "./pages/ScorePage";
import { QuestionPage } from "./pages/QuestionPage";
import { FinalScore } from "./pages/FinalScore";
import { GameStartPage } from "./pages/GameStartPage";


function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/scorepage" element={<ScorePage />} />
        <Route path="/questionpage" element={<QuestionPage />} />
        <Route path="/final-score" element={<FinalScore/>} />
        <Route path="/game-start" element={<GameStartPage/>}/>
      </Routes>
    </>
  );
}

export default App;