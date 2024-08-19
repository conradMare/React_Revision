import React from "react";
import Name from "./Name";
import Avatar from "./Avatar";
import Description from "./Description";

function Card(props) {
    return (
        <div className="card">
            <div className="top">
                <Name name={props.name} />
                <Avatar img={props.img} />
            </div>
            <div className="bottom">
                <Description description={props.description} />
            </div>

        </div>
    );
}

export default Card;