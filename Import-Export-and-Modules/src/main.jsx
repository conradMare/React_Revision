import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import pi, {doublePi, triplePi} from "./math";

// Wildcard imports are not encouraged in style guides: (Not specific on what you are importing)
// import * as pi from "./math";

ReactDOM.render(
  <div>
    <ul>
      <li>Pi: {pi}</li>
      <li>Double Pi: {doublePi()}</li>
      <li>Triple Pi: {triplePi()}</li>
    </ul>
  </div>,
  document.getElementById('root')
);