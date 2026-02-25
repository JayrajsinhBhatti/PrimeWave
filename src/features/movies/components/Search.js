import React from "react";
import { useParams, useNavigate } from "react-router-dom";
import { movies, series } from "../../../data/content";

function Search() {
  const { query } = useParams();
  const navigate = useNavigate();

  const allContent = [...movies, ...series];

  const filtered = allContent.filter((item) =>
    item.title.toLowerCase().includes(query.toLowerCase())
  );

  return (
    <div className="home">
      <h2 className="section-title">
        Search Results for "{query}"
      </h2>

      {filtered.length === 0 ? (
        <p>No results found.</p>
      ) : (
        <div className="movie-row">
          {filtered.map((item) => (
            <div key={item.id} className="movie-wrapper">
              
              {/* Image Card */}
              <div className="movie-card">
                <img src={item.image} alt={item.title} />
              </div>

              {/* Popup */}
              <div className="movie-popup-card">
                <img src={item.image} alt={item.title} />
                <div className="popup-info">
                  <h3>{item.title}</h3>
                  <p className="meta">
                    {item.year} • {item.duration || item.seasons}
                  </p>
                  <p className="rating">⭐ {item.rating}</p>
                  <p className="desc">{item.description}</p>

                  <button
                    className="watch-btn"
                    onClick={() => navigate(`/movie/${item.id}`)}
                  >
                    ▶ Watch Now
                  </button>
                </div>
              </div>

            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default Search;