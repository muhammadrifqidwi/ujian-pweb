import "react";
import { FaReact, FaNode, FaServer } from "react-icons/fa";
import { SiTailwindcss, SiMongodb } from "react-icons/si";

const Footer = () => {
  return (
    <footer className="bg-red py-10 border-t-4">
      <div className="container mx-auto text-center">
        {/* Logo dan Judul */}
        <h2 className="text-2xl font-bold text-gray-800 mb-2">Game Catalog</h2>
        <p className="text-sm text-gray-600 mb-6">Ujian PWEB</p>

        {/* Ikon Teknologi */}
        <div className="flex justify-center space-x-6 mb-6">
          {/* React.js */}
          <a className="text-gray-900 hover:text-gray-700 transition">
            <FaReact className="text-4xl" />
          </a>

          {/* Node.js */}
          <a className="text-gray-900 hover:text-gray-700 transition">
            <FaNode className="text-4xl" />
          </a>

          {/* Express.js */}
          <a className="text-gray-900 hover:text-gray-700 transition">
            <FaServer className="text-4xl" />
          </a>

          {/* Tailwind CSS */}
          <a className="text-gray-900 hover:text-gray-700 transition">
            <SiTailwindcss className="text-4xl" />
          </a>

          {/* MongoDB */}
          <a className="text-gray-900 hover:text-gray-700 transition">
            <SiMongodb className="text-4xl" />
          </a>
        </div>

        {/* Tombol GitHub */}
        <div className="flex justify-center items-center space-x-10 ml-10">
          <div className="text-center">
            <h5 className="font-bold">Muhammad Rifqi Dwi Putra</h5>
            <a
              href="https://github.com/muhammadrifqidwi"
              className="text-gray-400 hover:text-gray-700 transition"
              target="_blank"
              rel="noopener noreferrer">
              GitHub
            </a>
          </div>

          {/* Garis Pemisah */}
          <div className="border-l border-gray-400 h-16"></div>

          <div className="text-center">
            <h5 className="font-bold">Muhammad Sanusi Amir Bayquni</h5>
            <a
              href="https://github.com/"
              className="text-gray-400 hover:text-white transition"
              target="_blank"
              rel="noopener noreferrer">
              GitHub
            </a>
          </div>
        </div>

        <div>
          <p className="text-sm text-center mt-5">
            &copy; 2025 Game Catalog. All Rights Reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
