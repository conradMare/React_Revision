import React from "react";
import "./App.css";
import contacts from "./contacts";
import Card from "./components/Card";

function createCard(contact) {
    return (
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

            {/* <Card 
                name={contacts[0].name}
                img={contacts[0].imgURL}
                description={contacts[0].description}
            />
            <Card 
                name={contacts[1].name}
                img={contacts[1].imgURL}
                description={contacts[1].description}
            />
            <Card 
                name={contacts[2].name}
                img={contacts[2].imgURL}
                description={contacts[2].description}
            /> */}
        </div>
    );
}

export default App;