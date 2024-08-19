import React from "react";
// import numbers from "./numbers";

// Map - Create a new array by doing something with each item in an array:
// function App() {
//     const newNumbers = numbers.map(function (x) {
//         return x * 2;
//     });

//     return (
//         console.log(newNumbers)
//     );
// }

// Filter - Create a new array by keeping the items that return true:
// function App() {
//     const newNumbers = numbers.filter(function (num) {
//         return num < 10;
//     });

//     return(
//         console.log(newNumbers)
//     );
// }

// Reduce - Accumulate a value by doing something to each item in an array:
// function App() {
//     let newNumber = numbers.reduce(function (accumulator, currentNumber) {
//         console.log("accumulator = " + accumulator)
//         console.log("currentNumber = " + currentNumber)
//         return accumulator + currentNumber;
//     });

//     return(
//         console.log(newNumber)
//     );
// }

// Find - Find the first item that matches from an array:
// function App() {
//     let findNumber = numbers.find(function (num) {
//         return num > 10;
//     });

//     return (
//         console.log(findNumber)
//     );
// }

// FindIndex - Find the index of the first item that matches:
// function App() {
//     let findIndex = numbers.findIndex(function (num) {
//         return num > 10;
//     })
//     return(
//         console.log(findIndex)
//     );
// }

//  Challenge:
import emojipedia from "./emojipedia";

function App() {

    let newEmojipedia = emojipedia.map(function (emojiEntry) {
        return emojiEntry.meaning.substring(0, 100)
    })

    return(
        console.log(newEmojipedia)
    );
}

export default App;
