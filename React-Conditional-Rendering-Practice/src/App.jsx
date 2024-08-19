import React from "react";
import "./App.css";
import Login from "./components/Login";

let isLoggedIn = "false";

const currentTime = new Date().getHours();

function App() {
    return (
        <div className="container">
            {isLoggedIn === "true" ? <h1>Hello</h1> : <Login />}
        </div>
    );
}

export default App;