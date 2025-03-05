import { Link } from "react-router-dom";

function GameCard({ game }) {
  return (
    <div className="game-card">
      <img src={game.image} alt={game.title} className="w-full h-48 object-cover" />
      <div className="p-4">
        <h3 className="text-lg font-bold">{game.title}</h3>
        <p className="text-sm text-gray-400">{game.genre}</p>
        <p className="price">
          {game.price === "Free" ? "Free to Play" : `$${game.price}`}
        </p>
        <Link
          to={`/game/${game.id}`}
          className="block mt-3 text-[#66c0f4] hover:underline"
        >
          View Details →
        </Link>
      </div>
    </div>
  );
}

export default GameCard;