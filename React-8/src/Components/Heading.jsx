import React from "react";
import Color from "./Color";
import Greetings from "./Greetings";

function Heading() {
  return (
    <h1 className="heading" style={{ color: Color() }}>
      {Greetings()}
    </h1>
  );
}

export default Heading;
