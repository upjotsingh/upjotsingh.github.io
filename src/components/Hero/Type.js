import React from "react";
import Typewriter from "typewriter-effect";

function Type() {
  return (
    <Typewriter
      options={{
        strings: [
          "Software Engineer",
          "Frontend Developer",
          "React Developer",
          "Freelancer",
        ],
        delay: 100,
        autoStart: true,
        loop: true,
        deleteSpeed: 5,
      }}
    />
  );
}

export default Type;
