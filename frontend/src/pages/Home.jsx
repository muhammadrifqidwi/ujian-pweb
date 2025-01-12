import GameList from "../components/GameList";
import { Link } from "react-router-dom";

const Home = () => (
  <div className="max-w-6xl mx-auto mt-8">
    <div className="flex justify-between items-center mb-8">
      <h1 className="text-4xl font-bold text-gray-800">Game Catalog</h1>
      <Link
        to="/add-game"
        className="px-4 py-2 bg-green-500 text-white rounded-lg hover:bg-green-600 transition">
        Add New Game
      </Link>
    </div>
    <GameList />
  </div>
);

export default Home;
