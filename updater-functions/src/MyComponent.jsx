// updater-function = A function passed as an argument to setState() usually
//                    ex. setYear(updater function / arrow function).
//                    Allowing for safe updates based on the previous state.
//                    Used with multiple state updates and asynchronous functions.
//                    It is good practice to use updater functions.

import { useState } from "react";

function MyComponent() {

    const [count, setCount] = useState(0);

    function increment() {
        setCount(count + 1);
    }

    function reset() {
        setCount(0);
    }

    function decrement() {
        setCount(count - 1);
    }

    return(
        <div>
            <h1>Count: {count}</h1>
            <button onClick={increment} >Increment</button>
            <button onClick={reset}>Reset</button>
            <button onClick={decrement}>Decrement</button>
        </div>
    );
}

export default MyComponent