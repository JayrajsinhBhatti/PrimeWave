import { useParams } from "react-router-dom";

function MovieDetails() {
  const { id } = useParams();

  const movies = [
    {
      id: 1,
      title: "Inception",
      image: "https://image.tmdb.org/t/p/w500/9gk7adHYeDvHkCSEqAvQNLV5Uge.jpg",
      description: "A mind-bending thriller about dreams within dreams."
    },
    {
      id: 2,
      title: "Interstellar",
      image: "https://image.tmdb.org/t/p/w500/gEU2QniE6E77NI6lCU6MxlNBvIx.jpg",
      description: "A journey beyond the stars to save humanity."
    },
    {
      id: 3,
      title: "Avengers",
      image: "https://image.tmdb.org/t/p/w500/or06FN3Dka5tukK1e9sl16pB3iy.jpg",
      description: "Earth’s mightiest heroes unite to fight a global threat."
    },
    {
      id: 4,
      title: "Joker",
      image: "https://image.tmdb.org/t/p/w500/udDclJoHjfjb8Ekgsd4FDteOkCU.jpg",
      description: "The dark origin story of Gotham’s most infamous villain."
    },
  ];

  const movie = movies.find(m => m.id === parseInt(id));

  if (!movie) return <h2 style={{ padding: "40px" }}>Movie not found</h2>;

  return (
    <div style={{ padding: "40px", display: "flex", gap: "30px" }}>
      <img
        src={movie.image}
        alt={movie.title}
        style={{ width: "300px", borderRadius: "10px" }}
      />

      <div>
        <h1>{movie.title}</h1>
        <p style={{ maxWidth: "500px", lineHeight: "1.6" }}>
          {movie.description}
        </p>
        <button
          style={{
            padding: "10px 20px",
            background: "#e50914",
            border: "none",
            color: "white",
            borderRadius: "5px",
            cursor: "pointer"
          }}
        >
          Watch Now
        </button>
      </div>
    </div>
  );
}

export default MovieDetails;
