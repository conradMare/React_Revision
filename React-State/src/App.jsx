import React from "react";
import "./App.css";

function App() {

    let isDone = true;

    function strike() {
        document.getElementById('root').style.textDecoration = "line-through";
    }

    function unStrike() {
        document.getElementById('root').style.textDecoration = null;
    }

    return (
        <div>
            <h1 style={isDone ? { textDecoration: "line-through "} : null}>Buy Milk</h1>
            <button onClick={strike}>Change to Strike-Through</button>
            <button onClick={unStrike}>Change Back</button>
        </div>
    );
}

export default App;