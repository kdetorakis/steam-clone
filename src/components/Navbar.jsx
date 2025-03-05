import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav className="bg-gray-900 p-4 flex justify-center gap-6 text-white text-lg">
      <Link to="/">Home</Link>
      <Link to="/library">Library</Link>
    </nav>
  );
}

export default Navbar;
