import React from "react";
import { useParams, useNavigate } from "react-router-dom";
import { movies, series } from "../../../data/content";

function Watch() {
  const { id } = useParams();
  const navigate = useNavigate();

  const allContent = [...movies, ...series];

  const item = allContent.find(
    (content) => content.id === Number(id)
  );

  if (!item) {
    return (
      <div style={{ padding: "20px" }}>
        <h2>Video not found</h2>
      </div>
    );
  }

  return (
    <div style={{ background: "black", minHeight: "100vh", padding: "20px" }}>
      <button
        onClick={() => navigate(-1)}
        style={{
          background: "#e50914",
          border: "none",
          padding: "8px 12px",
          color: "white",
          borderRadius: "5px",
          cursor: "pointer"
        }}
      >
        ← Back
      </button>

      <h2 style={{ color: "white", marginTop: "20px" }}>
        {item.title}
      </h2>

      <div style={{ marginTop: "20px" }}>
        <video
          controls
          autoPlay
          style={{
            width: "80%",
            maxHeight: "80vh",
            borderRadius: "10px"
          }}
        >
          <source src={item.video} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>
    </div>
  );
}

export default Watch;