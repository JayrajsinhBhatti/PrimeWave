import { useParams, Navigate } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "../../auth/AuthContext";

function Series() {
  const { user } = useContext(AuthContext);
  const { id } = useParams();

  if (!user) {
    return <Navigate to="/login" />;
  }

  const seriesData = {
    101: {
      title: "Money Heist",
      episodes: [
        { id: 1, title: "Episode 1 – The Heist Begins" },
        { id: 2, title: "Episode 2 – Hostages" },
        { id: 3, title: "Episode 3 – The Plan" },
      ],
    },
    102: {
      title: "Breaking Bad",
      episodes: [
        { id: 1, title: "Episode 1 – Pilot" },
        { id: 2, title: "Episode 2 – Cat's in the Bag" },
        { id: 3, title: "Episode 3 – And the Bag's in the River" },
      ],
    },
    103: {
      title: "Stranger Things",
      episodes: [
        { id: 1, title: "Episode 1 – The Vanishing" },
        { id: 2, title: "Episode 2 – The Weirdo" },
        { id: 3, title: "Episode 3 – Holly, Jolly" },
      ],
    },
  };

  const show = seriesData[id];

  if (!show) {
    return <h2 style={{ padding: "30px" }}>Series not found</h2>;
  }

  return (
    <div style={{ padding: "30px" }}>
      <h2>{show.title}</h2>

      <ul style={{ marginTop: "20px" }}>
        {show.episodes.map((ep) => (
          <li
            key={ep.id}
            style={{
              background: "#222",
              marginBottom: "10px",
              padding: "15px",
              borderRadius: "8px",
              cursor: "pointer",
            }}
          >
            ▶ {ep.title}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Series;
