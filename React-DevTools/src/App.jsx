import React from "react";
import "./App.css";
import Card from "./components/Card";
import contacts from "./Contacts";

function App() {
    return (
        <div >
            <h1 className="heading">Inspirational Quotes</h1>
            <Card
                name={contacts[0].name}
                img={contacts[0].imgURL}
                description={contacts[0].description} />
            <Card
                name={contacts[1].name}
                img={contacts[1].imgURL}
                description={contacts[1].description}
            />
            <Card 
                name={contacts[2].name}
                img={contacts[2].imgURL}
                description={contacts[2].description}
            />
        </div>
    );
}

export default App;