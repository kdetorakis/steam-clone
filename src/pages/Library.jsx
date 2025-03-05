import GameCard from "../components/GameCard";
import games from "../data/gameData";

function Library() {
    return (
      <div className="library-page">
        <h1>Game Library</h1>
        <div className="library-grid">
          {games.map((game) => (
            <GameCard key={game.id} game={game} />
          ))}
        </div>
      </div>
    );
  }
  
  export default Library;