
// function Button() {

//     let count = 0;

//     let name = "Conrad";

//     const handleClick = (name) => {
//         if(count < 3) {
//             count++;
//             console.log(`${name} clicked me ${count} time/s`);
//         }
//         else {
//             count++;
//             console.log(`${name} stop clicking me!`);
//         }
//     }

//     return (
//         <button onClick={() => handleClick(name)}>Click Me</button>
//     );
// }

// export default Button

function Button() {
    const handleClick = (e) => {
        e.target.textContent = "Ouch";
    };

    return(
        <button onDoubleClick={(e) => handleClick(e)}>Click Me</button>
    )
}

export default Button