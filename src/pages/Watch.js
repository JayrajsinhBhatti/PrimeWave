import { useParams, Navigate } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "../context/AuthContext";

function Watch() {
  const { user } = useContext(AuthContext);
  const { id } = useParams();

  //  Protect page: login required
  if (!user) {
    return <Navigate to="/login" />;
  }

  //  All 5 movies
  const movies = {
    1: {
      title: "Inception",
      video: "https://www.w3schools.com/html/mov_bbb.mp4",
    },
    2: {
      title: "Interstellar",
      video: "https://www.w3schools.com/html/mov_bbb.mp4",
    },
    3: {
      title: "Avengers: Endgame",
      video: "https://www.w3schools.com/html/movie.mp4",
    },
    4: {
      title: "Joker",
      video: "https://www.w3schools.com/html/mov_bbb.mp4",
    },
    5: {
      title: "The Dark Knight",
      video: "https://www.w3schools.com/html/mov_bbb.mp4",
    },
  };

  const movie = movies[id];

  //  Invalid movie ID
  if (!movie) {
    return (
      <h2 style={{ padding: "40px", textAlign: "center" }}>
        Movie not found
      </h2>
    );
  }

  return (
    <div style={{ padding: "20px" }}>
      <h2 style={{ marginBottom: "20px" }}>{movie.title}</h2>

      <video
        src={movie.video}
        controls
        autoPlay
        width="100%"
        style={{ borderRadius: "10px" }}
      />
    </div>
  );
}

export default Watch;
