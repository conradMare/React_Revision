import React, { useState } from "react";
import "./App.css";

function App() {

    const [headingText, setHeadingText] = useState("Hello")
    const [isMousedOver, setIsMousedOver] = useState(false);

    function handleClick() {
        setHeadingText("Submitted")
    }

    function handleMouseOver() {
        setIsMousedOver(true);
    }

    function handleMouseOut() {
        setIsMousedOver(false);
    }

    return (
        <div className="container">
            <h1>{headingText}</h1>
            <input type="text" placeholder="What's your name?" />
            <button
                style={{ backgroundColor: isMousedOver ? "black" : "white" }}
                onClick={handleClick} onMouseOver={handleMouseOver}
                onMouseOut={handleMouseOut}>Submit</button>
        </div>
    );
}

export default App;