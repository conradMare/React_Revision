import React from "react";
import ReactDOM from "react-dom";

const name = "Conrad";
const fName = "John";
const lName = "Doe";
const luckyNumber = 7;

ReactDOM.render(
  <div>
    <h1>Hello {name}</h1>
    <h2>Name with Template literals: {`${fName} ${lName}`}</h2>
    <p>Your lucky number created with an expression is: {Math.floor(Math.random() * 10)}</p>
    <p>Your luck number that is hard-coded is: {luckyNumber}</p>
  </div>,
  document.getElementById('root')
);