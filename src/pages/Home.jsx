import games from "../data/gameData";
import GameCard from "../components/GameCard";

function Home() {
  return (
    <div className="p-10 bg-gray-950 min-h-screen">
      <h1 className="text-4xl font-extrabold mb-8 text-center text-blue-400">
        🎮 Featured Games
      </h1>
      <div className="flex flex-wrap justify-center gap-8">
        {games.map((game) => (
          <GameCard key={game.id} game={game} />
        ))}
      </div>
    </div>
  );
}

export default Home;
