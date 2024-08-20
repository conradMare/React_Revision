import React from "react";
import "./App.css";
import Card from "./components/Card";
import inspiration from "./inspiration";



function App() {
    return (
        <div>
            <h1 className="heading">Inspirational Quotes</h1>
            {inspiration.map(inspiration =>
                <Card
                    key={inspiration.id}
                    name={inspiration.name}
                    img={inspiration.imgURL}
                    description={inspiration.description}
                />
            )}
        </div>
    );
}

export default App;