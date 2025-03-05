import { useParams } from "react-router-dom";
import games from "../data/gameData";

function GameDetails() {
    const { id } = useParams();
    const game = games.find((game) => game.id === parseInt(id));
  
    if (!game) {
      return (
        <div className="text-center text-white text-3xl mt-10">
          Game not found!
        </div>
      );
    }
  
    return (
      <div className="game-details bg-gray-800 p-8 rounded-lg shadow-lg max-w-3xl mx-auto text-white">
        <img
          src={game.image}
          alt={game.title}
          className="w-full h-64 object-cover rounded-lg"
        />
        <h1 className="text-3xl font-bold mt-4">{game.title}</h1>
        <p className="text-lg text-gray-400">{game.genre}</p>
        <p className="text-lg text-gray-300 mt-2">
          {game.price === "Free" ? "Free to Play" : `$${game.price}`}
        </p>
        <p className="text-lg text-gray-400 mt-2">Rating: {game.rating}</p>
        <p className="text-lg text-gray-400 mt-2">Developer: {game.developer}</p>
        <p className="text-lg text-gray-400 mt-2">Publisher: {game.publisher}</p>
        <p className="text-lg text-gray-400 mt-2">
          Release Date: {game.releaseDate}
        </p>
        <p className="text-lg text-gray-400 mt-2">
          Platforms: {game.platforms.join(", ")}
        </p>
        <p className="text-lg text-gray-300 mt-4">{game.description}</p>
        <a
          href="/library"
          className="inline-block mt-6 text-blue-400 hover:underline"
        >
          ← Back to Library
        </a>
      </div>
    );
  }
  
  export default GameDetails;