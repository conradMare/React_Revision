import React from "react";

function Card(props) {
    return (
        <div className="my-style">
            <h2>{props.name}</h2>
            <img src={props.img} />
            <p>{props.tel}</p>
            <p>{props.email}</p>

            <h2>{props.name2}</h2>
            <img src={props.img2} />
            <p>{props.tel2}</p>
            <p>{props.email2}</p>
        </div>
    );
}

export default Card;