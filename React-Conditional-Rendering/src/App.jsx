import React from "react";
import "./App.css";
import Login from "./components/Login";

let isLoggedIn = "true";

const currentTime = new Date().getHours();

function App() {
    return (
        <div className="container">
        {/* {isLoggedIn ? <h1>Hello</h1> : <Login />} */}

        {currentTime < 12 && <h1>Working</h1>}
        </div>
    );
}

export default App;
