import React from "react";
import "./App.css";
import Card from "./components/Card";
import contacts from "./Contacts";
import Avatar from "./components/Avatar";

function App() {
    return (
        <div >
            <h1 className="heading">Inspirational Quotes</h1>
            <Avatar img="https://hips.hearstapps.com/cosmouk.cdnds.net/15/08/768x978/gallery_nrm_1424345024-11.jpg?resize=640:*"/>
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