import React from "react";
import { Link } from "react-router-dom";

function MobileLinks(props) {
    return (
        <div className="mobileLinks" onClick={props.hamburgerCaller}>
            <Link to='/'>Home</Link>
            <Link to='/about'>About</Link>
            <Link to='/work'>Work</Link>
            <Link to='/contact'>Contacts</Link>
        </div>
    )
}

export default MobileLinks