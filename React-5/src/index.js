import React from "react";
import ReactDOM from "react-dom";

const custumStyle = {
  color: "red",
  fontSize: "10px",
  border: "2px solid black",
};

custumStyle.color = "blue";

ReactDOM.render(
  <h1 style={custumStyle}>Hello World!</h1>,
  document.getElementById("root")
);
