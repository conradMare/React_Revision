// updater-function = A function passed as an argument to setState() usually
//                    ex. setYear(updater function / arrow function).
//                    Allowing for safe updates based on the previous state.
//                    Used with multiple state updates and asynchronous functions.
//                    It is good practice to use updater functions.

import { useState } from "react";

function MyComponent() {

    const [count, setCount] = useState(0);

    function increment() {

        // Uses the CURRENT state to calculate the NEXT state.
        // set functions DO NOT trigger an update.
        // React batches together state updates for performance reasons.
        // NEXT state becomes the CURRENT state after an update.

        // setCount(count + 1);
        // // UPDATE
        // setCount(count + 1);
        // // UPDATE
        // setCount(count + 1);
        // // UPDATE

        // UPDATER FUNCTION:
        // Takes the PENDING state to calculate NEXT state.
        // React puts your updater function in a queue (waiting in line)
        // During the next render, it will call them in the same order.

        setCount(c => c + 1);
        setCount(c => c + 1);
        setCount(c => c + 1);
    }

    function reset() {
        setCount(0);
    }

    function decrement() {
        // setCount(count - 1);

        // UPDATER FUNCTION
        setCount(c => c - 1);
    }

    return (
        <div>
            <h1>Count: {count}</h1>
            <button onClick={increment} >Increment</button>
            <button onClick={reset}>Reset</button>
            <button onClick={decrement}>Decrement</button>
        </div>
    );
}

export default MyComponent