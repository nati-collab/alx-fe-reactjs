// src/App.jsx
import React from "react";

function App() {
  return (
    <div style={{ textAlign: "center", marginTop: "50px" }}>
      <h1>🔍 GitHub User Search</h1>
      <input
        type="text"
        placeholder="Enter GitHub username..."
        style={{ padding: "8px", width: "250px" }}
      />
      <button style={{ marginLeft: "10px", padding: "8px 16px" }}>
        Search
      </button>
    </div>
  );
}

export default App;
