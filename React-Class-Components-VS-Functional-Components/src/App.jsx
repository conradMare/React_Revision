import React, { useState } from "react";
import "./App.css";

function App() {

  const [name, setName] = useState("");
  const [headingText, setHeadingText] = useState("");
  const [isMouseOver, setIsMouseOver] = useState(false);

  function handleChange(event) {
    setName(event.target.value)
  }

  function handleClick() {
    setHeadingText(name);

    event.preventDefault();
  }

  function handleMouseOver() {
    setIsMouseOver(true);
  }

  function handleMouseOut() {
    setIsMouseOver(false);
  }

  return (
    <div className="container">
      <form onSubmit={handleClick}>
        <h1>Hello {headingText}</h1>
        <input
          onChange={handleChange}
          type="text"
          placeholder="What is your name?" />
        <button
          type="submit"
          style={{ backgroundColor: isMouseOver ? "black" : "white" }}
          onMouseOver={handleMouseOver}
          onMouseOut={handleMouseOut}>Submit</button>
      </form>
    </div>
  )
}

export default App;