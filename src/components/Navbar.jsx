import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav className="header">
      <div className="container mx-auto flex justify-between items-center">
        {/* Logo */}
        <div className="flex items-center space-x-8">
          <Link to="/" className="navbar-logo text-2xl font-bold text-[#66c0f4]">
            Steam Clone
          </Link>
        </div>

        {/* Navigation Links (Styled as Buttons) */}
        <div className="flex items-center space-x-4">
          <Link
            to="/"
            className="navbar-button bg-[#2a475e] hover:bg-[#1b2838] text-white font-semibold py-2 px-4 rounded transition-all duration-300"
          >
            Store
          </Link>
          <Link
            to="/library"
            className="navbar-button bg-[#2a475e] hover:bg-[#1b2838] text-white font-semibold py-2 px-4 rounded transition-all duration-300"
          >
            Library
          </Link>
          <Link
            to="/community"
            className="navbar-button bg-[#2a475e] hover:bg-[#1b2838] text-white font-semibold py-2 px-4 rounded transition-all duration-300"
          >
            Community
          </Link>
        </div>

        {/* Login/Sign Up Buttons */}
        <div className="flex items-center space-x-4">
          <button className="primary-button">Login</button>
          <button className="secondary-button">Sign Up</button>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;