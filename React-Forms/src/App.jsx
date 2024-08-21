import React, { useState } from "react";
import "./App.css";

function App() {

  const [name, setName] = useState("");
  const [headingText, setHeadingText] = useState("");
  const [isMouseOver, setIsMouseOver] = useState(false);

  function handleChange(event) {
    setName(event.target.value)
  }

  function handleClick(event) {
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
      <h1>Hello {headingText}</h1>
      <form onSubmit={handleClick}>
        <input
          onChange={handleChange}
          type="text"
          placeholder="What's your name?"
          value={name}
        />
        <button
          style={{ backgroundColor: isMouseOver ? "black" : "white" }}
          onMouseOver={handleMouseOver}
          onMouseOut={handleMouseOut}
          type="submit">
          Submit
        </button>
      </form>
    </div>
  );
}

export default App;