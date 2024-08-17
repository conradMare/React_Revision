import React from "react";
import "./App.css";
import Card from "./components/Card";
import contacts from "./contacts";

function createCard(contact) {
    return(
        <Card 
            key={contact.id}
            id={contact.id}
            name={contact.name}
            img={contact.imgURL}
            description={contact.description}
        />
    )
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