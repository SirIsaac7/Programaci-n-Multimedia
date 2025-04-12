// src/ParticlesBackground.js
import { useCallback } from "react";
import Particles from "react-tsparticles";
import { loadFull } from "tsparticles";

const ParticlesBackground = () => {
  const particlesInit = useCallback(async (engine) => {
    await loadFull(engine);
  }, []);

  return (
    <Particles
      id="tsparticles"
      init={particlesInit}
      options={{
        fullScreen: {
          enable: true,
          zIndex: 0,
        },
        background: {
          color: {
            value: "#000",
          },
        },
        particles: {
          number: {
            value: 80,
          },
          color: {
            value: ["#ff007f", "#00ffff", "#ffea00", "#00ff6a", "#ff00ff"],
          },
          shape: {
            type: "circle",
          },
          opacity: {
            value: 0.8,
          },
          size: {
            value: 10,
            random: true,
          },
          move: {
            enable: true,
            speed: 3,
            bounce: true,
            direction: "none",
            outModes: {
              default: "bounce",
            },
          },
          collisions: {
            enable: true,
          },
        },
        detectRetina: true,
      }}
    />
  );
};

export default ParticlesBackground;
