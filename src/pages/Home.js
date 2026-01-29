import { useNavigate } from "react-router-dom";

function Home() {
  const navigate = useNavigate();

  const movies = [
    {
      id: 1,
      title: "Inception",
      image: "https://image.tmdb.org/t/p/w500/9gk7adHYeDvHkCSEqAvQNLV5Uge.jpg",
      year: "2010",
      duration: "2h 28m",
      language: "English",
      rating: "⭐ 8.8",
      description:
        "A thief who steals corporate secrets through dream-sharing technology.",
    },
    {
      id: 2,
      title: "Interstellar",
      image: "https://image.tmdb.org/t/p/w500/gEU2QniE6E77NI6lCU6MxlNBvIx.jpg",
      year: "2014",
      duration: "2h 49m",
      language: "English",
      rating: "⭐ 8.6",
      description:
        "A team travels through a wormhole in space to save humanity.",
    },
    {
      id: 3,
      title: "Avengers: Endgame",
      image: "https://image.tmdb.org/t/p/w500/or06FN3Dka5tukK1e9sl16pB3iy.jpg",
      year: "2019",
      duration: "3h 1m",
      language: "English",
      rating: "⭐ 8.4",
      description:
        "Earth’s mightiest heroes assemble for one final showdown.",
    },
    {
      id: 4,
      title: "Joker",
      image: "https://image.tmdb.org/t/p/w500/udDclJoHjfjb8Ekgsd4FDteOkCU.jpg",
      year: "2019",
      duration: "2h 2m",
      language: "English",
      rating: "⭐ 8.5",
      description:
        "The origin story of Gotham’s most infamous villain.",
    },
    {
      id: 5,
      title: "The Dark Knight",
      image: "https://image.tmdb.org/t/p/w500/qJ2tW6WMUDux911r6m7haRef0WH.jpg",
      year: "2008",
      rating: "⭐ 9.0",
      duration: "2h 32m",
      language: "English",
      description: "Batman faces the Joker, a criminal mastermind spreading chaos."
    }
    
  ];

  return (
    <div className="home">
      <h2 className="section-title">Latest Releases</h2>

      <div className="movie-row">
        {movies.map((movie) => (
          <div key={movie.id} className="movie-wrapper">
            {/* NORMAL CARD */}
            <div className="movie-card">
              <img src={movie.image} alt={movie.title} />
            </div>

            {/* POPUP CARD (HOTSTAR STYLE) */}
            <div className="movie-popup-card">
              <img src={movie.image} alt={movie.title} />

              <div className="popup-info">
                <h3>{movie.title}</h3>

                <p className="meta">
                  {movie.year} • {movie.duration} • {movie.language}
                </p>

                <p className="rating">{movie.rating}</p>

                <p className="desc">{movie.description}</p>

               <button
  className="watch-btn"
  onClick={() => navigate("/watch/" + movie.id)}
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

export default Home;
