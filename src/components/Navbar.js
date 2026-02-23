import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./Navbar.css";

function Navbar() {
  const [open, setOpen] = useState(false);
  const navigate = useNavigate();

  const genres = ["All", "Action", "Sci-Fi", "Crime", "Drama", "Thriller"];

  const handleGenreClick = (genre) => {
    setOpen(false);
    navigate(`/genres/${genre}`);
  };

  return (
    <div className="navbar">
      <div className="logo" onClick={() => navigate("/")}>
        PrimeWave
      </div>

      <div className="nav-links">
        {}
        <div className="genre-dropdown">
          <button
            className="genre-btn"
            onClick={() => setOpen(!open)}
          >
            Genres ▾
          </button>

          {open && (
            <div className="dropdown-menu">
              {genres.map((g) => (
                <div
                  key={g}
                  className="dropdown-item"
                  onClick={() => handleGenreClick(g)}
                >
                  {g}
                </div>
              ))}
            </div>
          )}
        </div>

        <Link to="/">Home</Link>
        <Link to="/login">Login</Link>
        <Link to="/register">Register</Link>
      </div>
    </div>
  );
}

export default Navbar;
