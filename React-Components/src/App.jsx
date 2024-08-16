import React from "react";
import Heading from "./components/Heading";
import List from "./components/List";
import "./App.css";

function App() {
    return (
        <div className="heading">
            <Heading />
            <Heading />
            <List />
            <List />
        </div>
    );
}

export default App;