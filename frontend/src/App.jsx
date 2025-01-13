import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import AddGame from "./pages/AddGame";
import EditGame from "./components/EditGame";

const App = () => (
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/add-game" element={<AddGame />} />
      <Route path="/edit-game/:id" element={<EditGame />} />
    </Routes>
  </BrowserRouter>
);

export default App;
