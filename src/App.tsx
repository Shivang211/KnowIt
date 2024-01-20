import { Route, Routes } from "react-router-dom";

import CategorySelect from "./pages/CategorySelect";
import HomePage from "./pages/Homepage";
import ScorePage from "./pages/ScorePage";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/scorepage" element={<ScorePage />} />
        <Route path="/category" element={<CategorySelect />} />
      </Routes>
    </>
  );
}

export default App;
