//Create a React app from scratch.
import React from "react";
import ReactDOM from "react-dom";
//Show a single h1 that says "Good morning" if between midnight and 12PM.
let time = new Date().getHours();
let c = "";
//or "Good Afternoon" if between 12PM and 6PM.
let heading = "";
if (time >= 0 && time < 12) {
  heading = "Good Morning";
  c = "red";
} else if (time >= 12 && time < 18) {
  heading = "Good Afternoon";
  c = "green";
} else {
  heading = "Good Night";
  c = "blue";
}
ReactDOM.render(
  <h1 className="heading" style={{ color: c }}>
    {heading}
  </h1>,
  document.getElementById("root")
);
//or "Good evening" if between 6PM and midnight.
//Apply the "heading" style in the styles.css
//Dynamically change the color of the h1 using inline css styles.
//Morning = red, Afternoon = green, Night = blue.
