// src/App.js
import React from "react";
import "./App.css";
import ParticlesBackground from "./ParticlesBackground";

function App() {
  return (
    <div className="App">
      <div className="animated-gradient" />
      <ParticlesBackground />
      <div className="content fire-text">
        {"¡Hola Mundo!".split("").map((char, index) => (
          <span key={index}>{char}</span>
        ))}
        <p>Por Isaac Alejandro Tola</p>
      </div>
    </div>
  );
}

export default App;
