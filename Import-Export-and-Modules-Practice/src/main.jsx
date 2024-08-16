import React from "react";
import ReactDOM from "react-dom";
import { add, subtract, multiply, divide } from "./calculator";

ReactDOM.render(
  <ul>
    <li>Add: 5 + 3 = {add(5, 3)}</li>
    <li>Subtract: 5 - 3 = {subtract(5, 3)}</li>
    <li>Multiply: 5 * 3 = {multiply(5, 3)}</li>
    <li>Divide: 5 / 3 = {divide(5, 3)}</li>
  </ul>,
  document.getElementById('root')
);