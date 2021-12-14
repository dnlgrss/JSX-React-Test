//Create a react app from scratch.
import React from "react";
import ReactDOM from "react-dom";
//It should display a h1 heading.
//It should display an unordered list (bullet points).
//It should contain 3 list elements.

ReactDOM.render(
  <div>
    <h1>This is a test</h1>
    <ul>
      <li>1 Element</li>
      <li>2 Element</li>
      <li>3 Element</li>
    </ul>
  </div>,
  document.getElementById("root")
);
