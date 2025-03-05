import { Link } from "react-router-dom";

function GameCard({ game }) {
  return (
    <div className="game-card bg-gray-800 rounded-lg overflow-hidden shadow-lg w-64 transform transition-all duration-300 hover:scale-105 hover:shadow-blue-500/50">
      <img src={game.image} alt={game.title} className="w-full h-40 object-cover" />
      <div className="p-4">
        <h3 className="text-lg font-bold">{game.title}</h3>
        <p className="text-sm text-gray-400">{game.genre}</p>
        <p className="price">{game.price === "Free" ? "Free to Play" : `$${game.price}`}</p>
        <Link to={`/game/${game.id}`} className="block mt-3 text-blue-400 hover:underline">
          View Details →
        </Link>
      </div>
    </div>
  );
}

export default GameCard;
