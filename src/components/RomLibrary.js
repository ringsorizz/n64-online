import React from "react";

const homebrewRoms = [
  {
    name: "64brew Intro",
    url: "https://64brew.com/files/64brew_intro.z64",
  },
  {
    name: "Brew Mario Demo",
    url: "https://64brew.com/files/brew_mario_demo.z64",
  },
  {
    name: "Pong 64",
    url: "https://64brew.com/files/pong64.z64",
  },
];

function RomLibrary() {
  const handleDownload = (rom) => {
    window.open(rom.url, "_blank");
  };

  return (
    <div style={{ margin: "2rem 0" }}>
      <h2 style={{ color: "#70e0ff", fontSize: "1.2rem" }}>Homebrew ROMs</h2>
      <div>
        {homebrewRoms.map((rom) => (
          <div
            key={rom.name}
            style={{
              background: "#292d36",
              margin: "0.5rem 0",
              padding: "0.6rem",
              borderRadius: "6px",
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
            }}
          >
            <span>{rom.name}</span>
            <button
              style={{
                background: "#70e0ff",
                color: "#23272f",
                border: "none",
                borderRadius: "4px",
                padding: "0.4rem 0.8rem",
                cursor: "pointer",
                fontWeight: "bold",
              }}
              onClick={() => handleDownload(rom)}
            >
              Download
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default RomLibrary;
