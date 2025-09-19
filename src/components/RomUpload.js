import React from "react";

function RomUpload() {
  const handleUpload = (e) => {
    const file = e.target.files[0];
    if (!file) return;
    // You'd pass this file to the emulator logic here
    alert(`Selected ROM: ${file.name}\n(Emulator integration needed!)`);
  };

  return (
    <div style={{ margin: "2rem 0", textAlign: "center" }}>
      <label
        htmlFor="rom-upload"
        style={{
          display: "inline-block",
          padding: "0.5rem 1rem",
          background: "#70e0ff",
          color: "#222",
          borderRadius: "6px",
          fontWeight: "bold",
          cursor: "pointer",
        }}
      >
        Upload N64 ROM
      </label>
      <input
        id="rom-upload"
        type="file"
        accept=".n64,.z64,.v64"
        style={{ display: "none" }}
        onChange={handleUpload}
      />
      <div style={{ color: "#aaa", fontSize: "0.95rem", marginTop: "0.5rem" }}>
        Only use legal, public domain, or homebrew ROMs!
      </div>
    </div>
  );
}

export default RomUpload;
