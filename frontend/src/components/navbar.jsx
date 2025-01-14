import { Link } from "react-router-dom";
import AboutModal from "./AboutModal";

const Navbar = () => {
  return (
    <nav className="bg-blue-600 text-white py-4">
      <div className="max-w-6xl mx-auto flex justify-between items-center">
        <h1 className="text-2xl font-bold">Game Catalog</h1>
        <div className="flex items-center space-x-4">
          <Link
            to="/add-game"
            className="px-4 py-2 bg-green-500 rounded-lg hover:bg-green-600 transition">
            Add Game
          </Link>
          <AboutModal />
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
