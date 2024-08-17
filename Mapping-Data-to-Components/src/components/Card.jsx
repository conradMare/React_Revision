import React from "react";
import Avatar from "./Avatar";
import Name from "./Name";
import Detail from "./Detail";

function Card(props) {
    return (
        <div className="card">
            <div className="top">
                <Name name={props.name} />
                <Avatar img={props.img} />
            </div>
            <div className="bottom">
                <Detail description={props.description} />
            </div>
        </div>
    );
}

export default Card;