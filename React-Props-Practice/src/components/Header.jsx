import React from "react";

function Header() {

    const currentTime = new Date().getHours();

    let greeting;

    const customStyle = {
        color: ""
    }

    if (currentTime < 12) {
        greeting = "Good Morning";
        customStyle.color = "red";
    } else if (currentTime < 18) {
        greeting = "Good Afternoon";
        customStyle.color = "green";
    } else {
        greeting = "Good Evening";
        customStyle.color = "blue";
    }

    return (
        <div className="header">
            <h1 style={customStyle}>{greeting}</h1>
        </div>
    );
}

export default Header;