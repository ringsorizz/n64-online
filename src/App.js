import React, { useEffect } from "react";
import EmulatorCanvas from "./components/EmulatorCanvas";
import RomUpload from "./components/RomUpload";
import RomLibrary from "./components/RomLibrary";

function App() {
  useEffect(() => {
    const handleBeforeUnload = (e) => {
      e.preventDefault();
      e.returnValue = ""; // Chrome requires returnValue to show prompt
    };
    window.addEventListener("beforeunload", handleBeforeUnload);
    return () =>
      window.removeEventListener("beforeunload", handleBeforeUnload);
  }, []);

  return (
    <div
      style={{
        maxWidth: 780,
        margin: "0 auto",
        padding: "2rem 0.5rem",
        fontFamily: "Segoe UI, Arial, sans-serif",
      }}
    >
      <h1
        style={{
          fontSize: "2rem",
          fontWeight: "bold",
          letterSpacing: "0.02em",
          textAlign: "center",
          color: "#70e0ff",
          marginBottom: "0.8rem",
        }}
      >
        N64 Online Emulator
      </h1>
      <div style={{ textAlign: "center", marginBottom: "2rem", color: "#aaa" }}>
        Play Nintendo 64 games in your browser.<br />
        Upload your own ROM (legal use only), or try homebrew demos below.
      </div>
      <RomLibrary />
      <RomUpload />
      <EmulatorCanvas />
      <div
        style={{
          marginTop: "2rem",
          color: "#888",
          fontSize: "0.95rem",
          textAlign: "center",
        }}
      >
        Made for educational purposes. <br />
        Please use only public domain or homebrew ROMs you have rights to.
      </div>
    </div>
  );
}

export default App;
