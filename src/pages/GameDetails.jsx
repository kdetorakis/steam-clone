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
      <div className="game-details">
        <img src={game.image} alt={game.title} />
        <h1>{game.title}</h1>
        <p>{game.genre}</p>
        <p>{game.price === "Free" ? "Free to Play" : `$${game.price}`}</p>
        <p>Rating: {game.rating}</p>
        <p>Developer: {game.developer}</p>
        <p>Publisher: {game.publisher}</p>
        <p>Release Date: {game.releaseDate}</p>
        <p>Platforms: {game.platforms.join(", ")}</p>
        <p className="description">{game.description}</p>
        <a href="/library">← Back to Library</a>
      </div>
    );
  }
  
  export default GameDetails;