import React from "react";
import "./App.css";
import Entry from "./components/Entry";
import emojipedia from "./emojipedia";

function createEmoji(emojipedia) {
    return (
        <Entry
            key={emojipedia.id}
            emoji={emojipedia.emoji}
            name={emojipedia.name}
            meaning={emojipedia.meaning}
        />
    );
}

function App() {
    return (
        <div>
            <h1>
                <span>emojipedia</span>
            </h1>
            <dl className="dictionary">
                {emojipedia.map(createEmoji)}
            </dl>
        </div>
    );
}

export default App;
