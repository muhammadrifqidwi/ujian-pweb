import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import axios from "axios";

const EditGame = () => {
  const { id } = useParams(); // Mengambil ID dari URL
  const navigate = useNavigate(); // Untuk navigasi kembali ke halaman utama
  const [formData, setFormData] = useState({
    name: "",
    developer: "",
    genre: "",
    price: "",
  });

  useEffect(() => {
    const fetchGame = async () => {
      try {
        const response = await axios.get(
          `https://ujian-pweb-be.vercel.app/api/games/${id}`
        );
        setFormData(response.data);
      } catch (error) {
        console.error("Error fetching game:", error);
      }
    };

    fetchGame();
  }, [id]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.put(
        `https://ujian-pweb-be.vercel.app/api/games/${id}`,
        formData
      );
      navigate("/"); // Navigasi ke halaman utama setelah berhasil
    } catch (error) {
      console.error("Error updating game:", error);
    }
  };

  const handleBack = () => {
    navigate("/"); // Navigasi ke halaman utama saat teks diklik
  };

  return (
    <div className="max-w-lg mx-auto mt-10 bg-white p-8 shadow-lg rounded-lg relative">
      <h2 className="text-2xl font-bold text-gray-800 mb-4 text-center">
        Edit Game
      </h2>
      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <label className="block text-gray-700 mb-2">Name</label>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            className="w-full border border-gray-300 rounded-lg px-4 py-2"
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 mb-2">Developer</label>
          <input
            type="text"
            name="developer"
            value={formData.developer}
            onChange={handleChange}
            className="w-full border border-gray-300 rounded-lg px-4 py-2"
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 mb-2">Genre</label>
          <input
            type="text"
            name="genre"
            value={formData.genre}
            onChange={handleChange}
            className="w-full border border-gray-300 rounded-lg px-4 py-2"
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 mb-2">Price</label>
          <input
            type="number"
            name="price"
            value={formData.price}
            onChange={handleChange}
            className="w-full border border-gray-300 rounded-lg px-4 py-2"
          />
        </div>
        <button
          type="submit"
          className="w-full px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition"
        >
          Save Changes
        </button>
      </form>

      {/* Teks untuk kembali ke halaman utama */}
      <p
        onClick={handleBack}
        className="mt-4 text-blue-600 hover:text-blue-800 cursor-pointer text-center"
      >
        Back to Home Page
      </p>
    </div>
  );
};

export default EditGame;
