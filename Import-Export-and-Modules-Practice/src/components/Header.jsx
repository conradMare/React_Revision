import React from "react";

function Header() {

    const date = new Date();
    const currentTime = date.getHours();

    let greeting;

    const customColor = {
        color: ""
    }

    if(currentTime < 12) {
        greeting = "Good Morning";
        customColor.color = "red";
    } else if(currentTime < 18) {
        greeting = "Good Afternoon";
        customColor.color = "green";
    } else {
        greeting = "Good Evening";
        customColor.color = "blue";
    }

    return(
        <h1 className="header" style={customColor}>{greeting}</h1>
    );
}

export default Header;