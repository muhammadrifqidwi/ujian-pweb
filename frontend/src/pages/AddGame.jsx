// import GameForm from "../components/GameForm";

// import { useNavigate } from "react-router-dom";

// const AddGame = () => {
//   const navigate = useNavigate();

//   const handleBack = () => {
//     navigate("/"); // Arahkan ke halaman utama
//   };

//   return (
//     <div>
//       {/* Konten edit game */}
//       <GameForm />
//       {/* Tombol kembali ke halaman utama */}
//       <button
//         onClick={handleBack}
//         className="mt-4 px-4 py-2 bg-blue-500 text-white rounded">
//         Kembali ke Halaman Utama
//       </button>
//     </div>
//   );
// };

// export default AddGame;

import GameForm from "../components/GameForm";
import { useNavigate } from "react-router-dom";

const AddGame = () => {
  const navigate = useNavigate();

  const handleBack = () => {
    navigate("/"); // Arahkan ke halaman utama
  };

  return (
    <div>
      {/* Konten form untuk menambahkan game */}
      <GameForm />

      {/* Teks untuk kembali ke halaman utama */}
      <p
        onClick={handleBack}
        className="mt-4 text-blue-600 hover:text-blue-800 cursor-pointer text-center">
        Back to Home Page
      </p>
    </div>
  );
};

export default AddGame;
