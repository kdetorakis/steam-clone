import { useParams } from "react-router-dom";

function GameDetails() {
  const { id } = useParams();

  return (
    <div className="text-center text-white text-3xl mt-10">
      Game Details for Game ID: {id}
    </div>
  );
}

export default GameDetails;
