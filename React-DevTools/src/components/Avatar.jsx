import React from "react";

function Avatar(props) {
    return (
        <div>
            <img className="circle-img" src={props.img} alt="Inspirational quote image" />
        </div>
    );
}

export default Avatar;