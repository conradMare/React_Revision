import React from "react";
import ReactDOM from "react-dom";
import "./index.css";

const customStyle = {
  color: "red",
  fontSize: "50px",
  background: "green",
  border: "1px solid black",
  boxShadow: "5px 5px gray",
  borderRadius: "20px"
}

customStyle.color = "blue";

ReactDOM.render(
  <div>
    <h1 style={customStyle}>Hello World!</h1>
    <button className="button">Click Me!</button>
  </div>,
  document.getElementById('root')
);