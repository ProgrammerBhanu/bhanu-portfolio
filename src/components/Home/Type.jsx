import React from "react";
import Typewriter from "typewriter-effect";

function Type() {
  return (
    <Typewriter
      options={{
        strings: [
          "Backend Engineer",
          "Java & .NET Developer",
          "Event-Driven Systems Builder"
        ],
        autoStart: true,
        loop: true,
        deleteSpeed: 50
      }}
    />
  );
}

export default Type;
