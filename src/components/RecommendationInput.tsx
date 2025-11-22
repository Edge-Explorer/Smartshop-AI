import { useState } from "react";

export default function RecommendationInput({ onRecommend }: { onRecommend: (query: string) => void }) {
  const [query, setQuery] = useState("");

  const handleClick = () => {
    if (query.trim().length === 0) return;
    onRecommend(query);
  };

  return (
    <div style={{ display: "flex", gap: "10px", marginBottom: "30px" }}>
      <input
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        placeholder="e.g. phone under 500"
        style={{
          padding: "12px",
          width: "350px",
          borderRadius: "6px",
          border: "1px solid #444",
          background: "#222",
          color: "white",
        }}
      />
      <button
        onClick={handleClick}
        style={{
          padding: "12px 18px",
          background: "#007bff",
          color: "white",
          border: "none",
          borderRadius: "6px",
          cursor: "pointer",
        }}
      >
        Recommend
      </button>
    </div>
  );
}


