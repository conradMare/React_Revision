import React from "react";
import "./App.css";
import { useState } from "react";

function App() {

  const [contact, setContact] = useState({
    fName: "",
    lName: "",
    email: ""
  });

  const [isMouseOver, setIsMouseOver] = useState(false);

  function handleChange(e) {
    const { value, name } = e.target;

    setContact(prevValue => {
      // if (name === "fName") {
      //   return {
      //     fName: value,
      //     lName: prevValue.lName,
      //     email: prevValue.email
      //   }
      // } else if (name === "lName") {
      //   return {
      //     fName: prevValue.fName,
      //     lName: value,
      //     email: prevValue.email
      //   }
      // } else if (name === "email") {
      //   return {
      //     fName: prevValue.fName,
      //     lName: prevValue.lName,
      //     email: value
      //   }
      // }

      return {
        ...prevValue,
        [name] : value
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
      <form>
        <input onChange={handleChange} name="fName" placeholder="First Name" />
        <input onChange={handleChange} name="lName" placeholder="Last Name" />
        <input onChange={handleChange} name="email" placeholder="E-Mail" />
        <button
          style={{ backgroundColor: isMouseOver ? "black" : "white" }}
          onMouseOver={handleMouseOver}
          onMouseOut={handleMouseOut}
        >Submit</button>
      </form>
    </div>
  );
}

export default App;