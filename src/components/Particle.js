import React from "react";
import Particles from "react-tsparticles";
import { useTheme } from "../context/ThemeContext";

function Particle({ id = "tsparticles" }) {
  const { theme } = useTheme();
  const particleColor = theme === "dark" ? "#ffffff" : "#7c3aed";

  return (
    <Particles
      id={id}
      params={{
        particles: {
          number: {
            value: 70,
            density: {
              enable: true,
              value_area: 900,
            },
          },
          color: {
            value: particleColor,
          },
          shape: {
            type: "circle",
          },
          size: {
            value: 2,
            random: true,
          },
          opacity: {
            value: theme === "dark" ? 0.6 : 0.45,
            anim: {
              enable: true,
              speed: 0.6,
              opacity_min: 0.1,
            },
          },
          line_linked: {
            enable: false,
            color: particleColor,
          },
          move: {
            enable: true,
            direction: "none",
            random: true,
            straight: false,
            speed: 0.4,
            out_mode: "out",
          },
        },
        interactivity: {
          events: {
            onhover: {
              enable: true,
              mode: "grab",
            },
            onclick: {
              enable: true,
              mode: "push",
            },
          },
          modes: {
            grab: {
              distance: 140,
              line_linked: {
                opacity: theme === "dark" ? 0.5 : 0.4,
              },
            },
            push: {
              particles_nb: 2,
            },
          },
        },
        retina_detect: true,
      }}
    />
  );
}

export default Particle;
