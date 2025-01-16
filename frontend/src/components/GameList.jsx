import { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import coverImage from "../assets/controller.jpg";

const GameList = () => {
  const [games, setGames] = useState([]);

  const fetchGames = async () => {
    try {
      const response = await axios.get(
        "https://ujian-pweb-be.vercel.app/api/games"
      );
      setGames(response.data);
    } catch (error) {
      console.error("Error fetching games:", error);
    }
  };

  const handleDelete = async (id) => {
    try {
      await axios.delete(`https://ujian-pweb-be.vercel.app/api/games/${id}`);
      fetchGames();
    } catch (error) {
      console.error("Error deleting game:", error);
    }
  };

  useEffect(() => {
    fetchGames();
  }, [games]);

  return (
    <div className="max-w-6xl mx-auto mt-10">
      <h2 className="text-3xl font-bold text-gray-800 mb-6">Game List</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {games.map((game) => (
          <div
            key={game._id}
            className="bg-white shadow-lg rounded-lg overflow-hidden"
          >
            <img
              src={coverImage}
              alt="Game Default"
              className="w-full h-48 object-cover"
            />
            <div className="p-4">
              <h3 className="text-xl font-bold text-gray-800 mb-2">
                {game.name}
              </h3>
              <p className="text-gray-600 mb-1">
                <span className="font-semibold">Developer :</span>{" "}
                {game.developer}
              </p>
              <p className="text-gray-600 mb-3">
                <span className="font-semibold">Price :</span> ${game.price}
              </p>
              <div className="flex justify-end">
                <Link
                  to={`/edit-game/${game._id}`}
                  className="px-3 py-1 bg-yellow-500 text-white rounded-lg hover:bg-yellow-600 transition mr-2"
                >
                  Edit
                </Link>
                <button
                  onClick={() => handleDelete(game._id)}
                  className="px-3 py-1 bg-red-500 text-white rounded-lg hover:bg-red-600 transition"
                >
                  Delete
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
      {games.length === 0 && (
        <div className="text-center py-6 text-gray-600">
          No games available.
        </div>
      )}
    </div>
  );
};

export default GameList;
