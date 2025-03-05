import { Link } from "react-router-dom";

function GameCard({ game }) {
  return (
    <div className="game-card">
      <img src={game.image} alt={game.title} className="w-full h-40 object-cover" />
      <div className="p-4">
        <h3 className="text-lg font-bold">{game.title}</h3>
        <p className="text-sm text-gray-400">{game.genre}</p>
        <p className="price">
          {game.price === "Free" ? "Free to Play" : `$${game.price}`}
        </p>
        <p className="text-sm text-gray-400 mt-1">Rating: {game.rating}</p>
        <p className="text-sm text-gray-400 mt-1">Developer: {game.developer}</p>
        <p className="text-sm text-gray-400 mt-1">Publisher: {game.publisher}</p>
        <p className="text-sm text-gray-400 mt-1">Release Date: {game.releaseDate}</p>
        <p className="text-sm text-gray-400 mt-1">
          Platforms: {game.platforms.join(", ")}
        </p>
        <Link
          to={`/game/${game.id}`}
          className="block mt-3 text-blue-400 hover:underline"
        >
          View Details →
        </Link>
      </div>
    </div>
  );
}

export default GameCard;