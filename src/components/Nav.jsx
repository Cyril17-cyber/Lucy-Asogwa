import React from "react";
import { Link } from "react-router-dom";

function Nav(props) {
    return(
        <nav>
            <div className="empty"></div>
            <div className="links">
                <Link to='/'>Home</Link>
                <Link to='/about'>About</Link>
                <Link to='/work'>Work</Link>
                <Link to='/contact'>Contacts</Link>
            </div>
            
            <div id="hamburger" onClick={props.hamburgerCaller}>
                <span></span>
                <span></span>
                <span></span>
            </div>
        </nav>
    )
}

export default Nav