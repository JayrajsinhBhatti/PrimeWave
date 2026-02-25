import React from "react";
import { useParams } from "react-router-dom";
import { movies, series } from "../../../data/content";

function Genres() {
  const { genre } = useParams();
  const navigate = useNavigate();

  const filteredMovies = genre!=="All" ? movies.filter(m => m.genre === genre) : movies;
  const filteredSeries = genre!=="All" ? series.filter(s => s.genre === genre) : series;

  const handleWatch = (item, type) => {
    navigate(`/watch/${item.id}`, {
      state: { ...item, type }
    });
  };

  return (
    <div className="home">
      <h2 className="section-title">{genre} Movies</h2>
      <div className="movie-row">
        {filteredMovies.map(m => (
          <div key={m.id} className="movie-wrapper">
            <div className="movie-card">
              <img src={m.image} alt={m.title} />
            </div>

            <div className="movie-popup-card">
              <img src={m.image} alt={m.title} />
              <div className="popup-info">
                <h3>{m.title}</h3>
                <p className="meta">
                  {m.year} • {m.duration}
                </p>
                <p className="rating">⭐ {m.rating}</p>
                <p className="desc">{m.description}</p>
                <button
                  className="watch-btn"
                  onClick={() => handleWatch(m, "movie")}
                >
                  ▶ Watch Now
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>

      <h2 className="section-title">{genre} Web Series</h2>
      <div className="movie-row">
        {filteredSeries.map(s => (
          <div key={s.id} className="movie-wrapper">
            <div className="movie-card">
              <img src={s.image} alt={s.title} />
            </div>

            <div className="movie-popup-card">
              <img src={s.image} alt={s.title} />
              <div className="popup-info">
                <h3>{s.title}</h3>
                <p className="meta">
                  {s.year} • {s.seasons}
                </p>
                <p className="rating">⭐ {s.rating}</p>
                <p className="desc">{s.description}</p>
                <button
                  className="watch-btn"
                  onClick={() => handleWatch(s, "series")}
                >
                  ▶ Watch Now
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Genres;
