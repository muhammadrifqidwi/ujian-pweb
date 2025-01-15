import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import Home from "./pages/Home";
import AddGame from "./pages/AddGame";
import EditGame from "./components/EditGame";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer"; // Import Footer

const AppContent = () => {
  const location = useLocation();

  // Menentukan halaman yang tidak akan menampilkan Footer
  const hideFooter =
    location.pathname === "/add-game" ||
    location.pathname.startsWith("/edit-game");

  return (
    <div className="flex flex-col min-h-screen">
      {/* Navbar */}
      <Navbar />

      {/* Main Content */}
      <main className="flex-grow">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/add-game" element={<AddGame />} />
          <Route path="/edit-game/:id" element={<EditGame />} />
        </Routes>
      </main>

      {/* Footer, hanya tampil jika bukan di halaman AddGame atau EditGame */}
      {!hideFooter && (
        <div className="mt-10">
          <Footer />
        </div>
      )}
    </div>
  );
};

const App = () => (
  <BrowserRouter>
    <AppContent />
  </BrowserRouter>
);

export default App;
