import games from "../data/gameData";
import GameCard from "../components/GameCard";

function Home() {
  return (
    <div className="p-10 bg-gray-900 min-h-screen">
      <h1 className="text-4xl font-extrabold mb-8 text-center text-blue-400">
        🎮 Featured Games
      </h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {games.map((game) => (
          <GameCard key={game.id} game={game} />
        ))}
      </div>
    </div>
  );
}

export default Home;
