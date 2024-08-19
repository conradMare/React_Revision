import React from "react";
import "./App.css";
import emojipedia from "./emojipedia";
import Card from "./components/Card";

function createCard(emojipedia) {
    return(
        <Card 
            key={emojipedia.id}
            emoji={emojipedia.emoji}
            name={emojipedia.name}
            meaning={emojipedia.meaning}
        />
    )
}

function App() {
  return (
    <div>
      <h1>
        <span>emojipedia</span>
      </h1>

      <dl className="dictionary">
        {emojipedia.map(createCard)}
      </dl>
    </div>
  );
}

export default App;
