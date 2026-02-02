import React from "react";
import { useParams, useLocation } from "react-router-dom";
import { movies, series } from "../data/content";

function Watch() {
  const { id } = useParams();
  const location = useLocation();

  // 1️⃣ Try getting data from navigation state
  let item = location.state;

  // 2️⃣ If state is missing (refresh / direct URL), find by ID
  if (!item) {
    const allContent = [...movies, ...series];
    item = allContent.find(i => i.id === Number(id));
  }

  // 3️⃣ Still not found → real error
  if (!item) {
    return (
      <div className="home">
        <h2>❌ Content Not Found</h2>
      </div>
    );
  }

  return (
    <div className="home">
      <h2 className="section-title">{item.title}</h2>

      <div style={{ display: "flex", gap: "30px", marginTop: "20px" }}>
        <img
          src={item.image}
          alt={item.title}
          style={{
            width: "300px",
            borderRadius: "12px"
          }}
        />

        <div>
          <p><strong>Year:</strong> {item.year}</p>
          <p>
            <strong>
              {item.duration ? "Duration" : "Seasons"}:
            </strong>{" "}
            {item.duration || item.seasons}
          </p>
          <p><strong>Rating:</strong> ⭐ {item.rating}</p>
          <p style={{ maxWidth: "600px", marginTop: "10px" }}>
            {item.description}
          </p>

          <button className="watch-btn" style={{ marginTop: "20px" }}>
            ▶ Play
          </button>
        </div>
      </div>
    </div>
  );
}

export default Watch;
