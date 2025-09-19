import React from "react";

function EmulatorCanvas() {
  // This is a placeholder. Integrate n64js here for real emulation.
  return (
    <div style={{ margin: "2rem 0", textAlign: "center" }}>
      <canvas
        id="n64-canvas"
        width="640"
        height="480"
        style={{
          background: "#111",
          border: "2px solid #70e0ff",
          borderRadius: "8px",
        }}
      ></canvas>
      <div style={{ color: "#aaa", fontSize: "0.95rem", marginTop: "0.6rem" }}>
        Emulator output will appear here after loading a ROM.
      </div>
    </div>
  );
}

export default EmulatorCanvas;
