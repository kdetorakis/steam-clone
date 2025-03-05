import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav className="header">
      <div className="container mx-auto flex justify-between items-center">
        <div className="flex items-center space-x-8">
          <Link to="/" className="navbar-logo text-2xl font-bold text-[#66c0f4]">
            Steam Clone
          </Link>
          <Link to="/" className="navbar-link">
            Store
          </Link>
          <Link to="/library" className="navbar-link">
            Library
          </Link>
          <Link to="/community" className="navbar-link">
            Community
          </Link>
        </div>
        <div className="flex items-center space-x-4">
          <button className="primary-button">Login</button>
          <button className="secondary-button">Sign Up</button>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;