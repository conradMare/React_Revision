import React from "react";
// import numbers from "./numbers";

// Map with Arrow function - Create a new array by doing something with each item in an array:
// function App() {
//     const newNumbers = numbers.map(x => x * 2);

//     return (
//         console.log(newNumbers)
//     );
// }

// Filter with Arrow function- Create a new array by keeping the items that return true:
// function App() {
//     const newNumbers = numbers.filter(num => num < 10);

//     return(
//         console.log(newNumbers)
//     );
// }

// Reduce with Arrow function - Accumulate a value by doing something to each item in an array:
// function App() {
//     let newNumber = numbers.reduce((accumulator, currentNumber) => {
//         return accumulator + currentNumber;
//     });

//     return(
//         console.log(newNumber)
//     );
// }

// Find with Arrow Function - Find the first item that matches from an array:
// function App() {
//     let findNumber = numbers.find(num => num > 10);

//     return (
//         console.log(findNumber)
//     );
// }

// FindIndex - Find the index of the first item that matches:
// function App() {
//     let findIndex = numbers.findIndex(num => num > 10)
//     return(
//         console.log(findIndex)
//     );
// }

// Challenge - Turn the emojipedia functions into arrow functions:
import emojipedia from "./emojipedia";
import Entry from "./components/Entry";
import "./App.css";



function App() {
    return (
        <div>
            <h1>
                <span>emojipedia</span>
            </h1>
            <dl className="dictionary">
                {emojipedia.map(emojiTerm =>
                    <Entry
                        key={emojiTerm.id}
                        name={emojiTerm.name}
                        emoji={emojiTerm.emoji}
                        meaning={emojiTerm.meaning}
                    />
                )}
            </dl>
        </div>
    );
}

export default App;
