import React from "react";

function Footer() {

    const date = new Date();
    const year = date.getFullYear();

    return(
        <p className="footer">Copyright {year}</p>
    );
}

export default Footer;