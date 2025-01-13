import { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

const GameList = () => {
  const [games, setGames] = useState([]);

  const fetchGames = async () => {
    try {
      const response = await axios.get("http://localhost:5000/api/games");
      setGames(response.data);
    } catch (error) {
      console.error("Error fetching games:", error);
    }
  };

  const handleDelete = async (id) => {
    try {
      await axios.delete(`http://localhost:5000/api/games/${id}`);
      fetchGames();
    } catch (error) {
      console.error("Error deleting game:", error);
    }
  };

  useEffect(() => {
    fetchGames();
  }, []);

  return (
    <div className="max-w-4xl mx-auto mt-10">
      <h2 className="text-3xl font-bold text-gray-800 mb-6">Game List</h2>
      <div className="overflow-x-auto bg-white shadow-md rounded-lg">
        <table className="min-w-full border-collapse">
          <thead className="bg-blue-600 text-white">
            <tr>
              <th className="px-6 py-3 text-left text-sm font-medium">Name</th>
              <th className="px-6 py-3 text-left text-sm font-medium">
                Developer
              </th>
              <th className="px-6 py-3 text-left text-sm font-medium">Genre</th>
              <th className="px-6 py-3 text-left text-sm font-medium">Price</th>
              <th className="px-6 py-3 text-center text-sm font-medium">
                Actions
              </th>
            </tr>
          </thead>
          <tbody>
            {games.map((game) => (
              <tr key={game._id} className="even:bg-gray-100">
                <td className="px-6 py-4 text-sm">{game.name}</td>
                <td className="px-6 py-4 text-sm">{game.developer}</td>
                <td className="px-6 py-4 text-sm">{game.genre}</td>
                <td className="px-6 py-4 text-sm">${game.price.toFixed(2)}</td>
                <td className="px-6 py-4 text-center">
                  <Link
                    to={`/edit-game/${game._id}`}
                    className="px-3 py-1 bg-yellow-500 text-white rounded-lg hover:bg-yellow-600 transition mr-2">
                    Edit
                  </Link>
                  <button
                    className="px-3 py-1 bg-red-500 text-white rounded-lg hover:bg-red-600 transition"
                    onClick={() => handleDelete(game._id)}>
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
        {games.length === 0 && (
          <div className="text-center py-6 text-gray-600">
            No games available.
          </div>
        )}
      </div>
    </div>
  );
};

export default GameList;
