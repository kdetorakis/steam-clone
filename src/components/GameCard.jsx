import { Link } from "react-router-dom";

function GameCard({ game }) {
  return (
    <div className="game-card">
      <img src={game.image} alt={game.title} />
      <div className="py-4">
        <h3>{game.title}</h3>
        <p>{game.genre}</p>
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