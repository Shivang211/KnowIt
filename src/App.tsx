import { Route, Routes } from "react-router-dom";

import HomePage from "./pages/Homepage";
import ScorePage from "./pages/ScorePage";


function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/scorepage" element={<ScorePage />} />
      </Routes>
    </>
  );
}

export default App;