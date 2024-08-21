import React, { useState } from "react";
import "./App.css";

function App() {

    const [time, setTime] = useState(new Date().toLocaleTimeString());

    function getTime() {
        const newTime = new Date().toLocaleTimeString();
        setTime(newTime);
    }

   return(
    <div className="container">
        <h1>{time}</h1>
        <button onClick={getTime}>Get time</button>
    </div>
   );
}
export default App;