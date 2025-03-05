import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Library from "./pages/Library";
import GameDetails from "./pages/GameDetails";
import Navbar from "./components/Navbar";

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/library" element={<Library />} />
        <Route path="/game/:id" element={<GameDetails />} />
      </Routes>
    </Router>
  );
}

export default App;