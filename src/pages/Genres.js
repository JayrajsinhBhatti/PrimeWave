import React, { useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { movies, series } from "../../../data/content";

function Genres() {
  const { genre } = useParams();
  const navigate = useNavigate();

  const filteredMovies = movies.filter(
    (movie) => movie.genre === genre
  );

  const filteredSeries = series.filter(
    (show) => show.genre === genre
  );

  const Card = ({ item }) => {
    const [hover, setHover] = useState(false);

    return (
      <div
        className="movie-wrapper"
        onMouseEnter={() => setHover(true)}
        onMouseLeave={() => setHover(false)}
      >
        <div className="movie-card">
          <img src={item.image} alt={item.title} />
        </div>

        {hover && (
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
        )}
      </div>
    );
  };

  return (
    <div className="home">
      <h2 className="section-title">{genre} Movies</h2>
      <div className="movie-row">
        {filteredMovies.map((movie) => (
          <Card key={"movie-" + movie.id} item={movie} />
        ))}
      </div>

      <h2 className="section-title">{genre} Web Series</h2>
      <div className="movie-row">
        {filteredSeries.map((show) => (
          <Card key={"series-" + show.id} item={show} />
        ))}
      </div>
    </div>
  );
}

export default Genres;