import { Route, Routes } from "react-router-dom";

import HomePage from "./pages/Homepage";
import ScorePage from "./pages/ScorePage";
import CategorySelect from "./pages/CategorySelect";


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