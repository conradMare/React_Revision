import React from "react";
import emojipedia from "./emojipedia";

function App() {
    let newEmojipedia = emojipedia.map(function (emojiMeaningUpdated) {
        return emojiMeaningUpdated.meaning.substring(0, 100);
    })
    return(
        <p>{newEmojipedia}</p>
    );
}

export default App;