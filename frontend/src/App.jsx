import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import AddGame from "./pages/AddGame";
import EditGameForm from "./components/EditGameForm";

const App = () => (
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/add-game" element={<AddGame />} />
      <Route path="/edit-game/:id" element={<EditGameForm />} />
    </Routes>
  </BrowserRouter>
);

export default App;
