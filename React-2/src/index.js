import React from "react";
import ReactDOM from "react-dom";
let fname = "Vishakh";
let lname = " M V";
let num = 7;
ReactDOM.render(
  <div>
    <h1>Hello World!</h1>
    <p>This is a paragraph</p>
    <h1>
      Hello {fname}
      {lname}!
    </h1>
    <p>Your favourite number is {num}</p>
    <h1>
      Hello
      {`${fname}
      ${lname}`}
      !
    </h1>
    <p>3 + 4 is {3 + 4}</p>
    <p>This is a random number {Math.floor(Math.random() * 100)}</p>
  </div>,
  document.getElementById("root")
);
