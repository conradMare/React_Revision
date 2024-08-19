import React from "react";
import Emoji from "./Emoji";

function Entry(props) {
    return(
        <Emoji 
            name={props.name}
            emoji={props.emoji}
            meaning={props.meaning}
        />
    );
}

export default Entry;