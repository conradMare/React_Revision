import React from "react";
import "./App.css";
import Card from "./components/Card";
import contacts from "./contacts";

function createCard(contacts) {
  return (
    <Card
      key={contacts.id}
      name={contacts.name}
      img={contacts.imgURL}
      description={contacts.description}
    />
  );
}

function App() {
  return (
    <div>
      <h1 className="heading">Inspirational Quotes</h1>
      {contacts.map(createCard)}

    </div>
  );
}

export default App;