import { useState } from "react";

const AboutModal = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleModal = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <button
        onClick={toggleModal}
        className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition">
        About
      </button>

      {isOpen && (
        <div className="fixed inset-0 flex justify-center items-center z-50 m-0 p-0">
          <div className="bg-white rounded-lg shadow-lg w-3/4 md:w-1/2 p-6">
            <h2 className="text-2xl font-bold mb-4 text-slate-800">
              Tentang Website
            </h2>
            <p className="mb-4 text-slate-800">
              Website katalog game ini dibuat oleh :
            </p>
            <ul className="list-disc list-inside mb-4 text-slate-800">
              <li>
                <strong>Muhammad Sanusi Amir Bayquni</strong> - Bertanggung
                jawab atas design untuk frontend.
              </li>
              <li>
                <strong>Muhammad Rifqi Dwi Putra</strong> - Bertanggung jawab
                atas backend dan juga database.
              </li>
            </ul>
            <p className=" text-slate-800">
              Website ini dibuat untuk memenuhi ujian akhir praktikum yang akan
              berlangsung pada tanggal 18 Januari 2025
            </p>
            <div className="mt-6 flex justify-end">
              <button
                onClick={toggleModal}
                className="px-4 py-2 bg-red-600 text-white rounded-lg hover:bg-red-700 transition">
                Close
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default AboutModal;
