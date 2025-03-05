import { Link } from "react-router-dom";

function GameCard({ game }) {
  return (
    <div className="game-card bg-gray-900 rounded-lg overflow-hidden shadow-lg w-64">
      <img src={game.image} alt={game.title} className="w-full h-40 object-cover" />
      <div className="p-4">
        <h3 className="text-lg font-bold text-white">{game.title}</h3>
        <p className="text-sm text-gray-400">{game.genre}</p>
        <p className="text-lg font-semibold text-green-400 mt-2">
          {game.price === "Free" ? "Free to Play" : `$${game.price}`}
        </p>
        <Link to={`/game/${game.id}`} className="glow-button block text-center mt-3">
          View Details →
        </Link>
      </div>
    </div>
  );
}

export default GameCard;
