import GameList from "../components/GameList";

const Home = () => {
  return (
    <div className="max-w-7xl mx-auto mt-6 px-4 sm:px-6 lg:px-8">
      {/* Header Section */}
      <header className="text-center mb-8">
        <h1 className="text-4xl font-bold text-gray-800 mb-4">
          Welcome to Game Catalog
        </h1>
        <p className="text-gray-600 text-lg">
          Explore a wide variety of games and manage your collection easily.
        </p>
      </header>
      <section>
        <GameList />
      </section>
    </div>
  );
};

export default Home;
