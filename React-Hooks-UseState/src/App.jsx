import React, {useState} from "react";
import "./App.css";

function App() {

    const [count, setCount] = useState(0);

    // Destructuring Example:
    // const [red, green ,blue] = [9, 132, 227];
    // console.log(blue);

    function increase() {
        setCount(count + 1);
    }

    function decrease() {
        setCount(count - 1);
    }

    return (
        <div className="container">
            <h1>{count}</h1>
            <button onClick={increase}>+</button>
            <button onClick={decrease}>-</button>
        </div>
    );
}

export default App;