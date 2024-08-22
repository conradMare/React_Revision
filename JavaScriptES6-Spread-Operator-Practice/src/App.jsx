import React, { useState } from "react";
import "./App.css";

function App() {

  const [contact, setContact] = useState({
    fName: "",
    lName: "",
    email: ""
  })

  const [isMouseOver, setIsMouseOver] = useState(false);

  function handleChange(event) {
    const { value, name } = event.target;

    setContact(prevValue => {
      return {
        ...prevValue,
        [name]: value
      }
    })
  }

  function handleMouseOver() {
    setIsMouseOver(true);
  }

  function handleMouseOut() {
    setIsMouseOver(false);
  }

  return (
    <div className="container">
      <h1>Hello {contact.fName} {contact.lName}</h1>
      <p>{contact.email}</p>
      <input onChange={handleChange} name="fName" placeholder="First Name" />
      <input onChange={handleChange} name="lName" placeholder="Last Name" />
      <input onChange={handleChange} name="email" placeholder="E-Mail" />
      <button
        style={{ backgroundColor: isMouseOver ? "black" : "white" }}
        onMouseOver={handleMouseOver}
        onMouseOut={handleMouseOut}
      >Submit</button>
    </div>
  );
}

export default App;