//Create a react app from scratch.
import React from "react";
import ReactDOM from "react-dom";
//It should display 2 paragraph HTML elements.
let name = "Vishakh M V";
let year = new Date().getFullYear();
ReactDOM.render(
  <div>
    <p>Created by {name}</p>
    <p>Copywrite {year}</p>
  </div>,
  document.getElementById("root")
);
//The paragraphs should say:
//Created by YOURNAME.
//Copyright CURRENTYEAR.
//E.g.
//Created by Angela Yu.
//Copyright 2019.
