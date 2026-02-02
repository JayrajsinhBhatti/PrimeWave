import React from "react";
import { useParams } from "react-router-dom";
import { movies, series } from "../data/content";

function Genres() {
  const { genre } = useParams();

  const filteredMovies = movies.filter(m => m.genre === genre);
  const filteredSeries = series.filter(s => s.genre === genre);

  return (
    <div className="home">
      <h2 className="section-title">{genre} Movies</h2>
      <div className="movie-row">
        {filteredMovies.map(m => (
          <div key={m.id} className="movie-card">
            <img src={m.image} alt={m.title} />
          </div>
        ))}
      </div>

      <h2 className="section-title">{genre} Web Series</h2>
      <div className="movie-row">
        {filteredSeries.map(s => (
          <div key={s.id} className="movie-card">
            <img src={s.image} alt={s.title} />
          </div>
        ))}
      </div>
    </div>
  );
}

export default Genres;
