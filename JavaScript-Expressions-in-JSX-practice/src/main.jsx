import React from "react";
import ReactDOM from "react-dom";

const fName = "Conrad";
const lName = "Mare";
const year = new Date();

ReactDOM.render(
  <div>
    <p>Created by {`${fName} ${lName}`}</p>
    <p>Copyright © {year.getFullYear()}</p>
  </div>,
  document.getElementById('root')
);