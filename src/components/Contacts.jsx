import React from "react";
import social from "../images/social.svg"

function Contacts() {
    return(
        <div className="contacts">
            <img src={social} alt="illustration"/>

            <h2>Trying To Reach Me?</h2>

            <p>Send an email to <a href="mailto: kosia861@gmail.com.com">kosia861@gmail.com</a> to get in touch with me for work reasons.</p>
        </div>
    )
}

export default Contacts;