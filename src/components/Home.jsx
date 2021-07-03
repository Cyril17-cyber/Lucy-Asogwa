import React from "react";
import svg from "../images/researching.svg";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import TwitterIcon from "@material-ui/icons/Twitter";
import EmailIcon from "@material-ui/icons/Email";

function Home() {
    return(
        <div className="home">
            <div className="top">
                <img src={svg} alt="svg illustration"/>
                <div className="texts">
                    <h1>Hello there!</h1>
                    <h2>I'm Lucy Asogwa</h2>
                    <p className="more">
                        Explore what I do with the menu tab.
                    </p>
                </div>
            </div>

            <div className="bottom">
                <div className="content">
                <h2>Intrested in working with me?</h2>
                <p className="link">Reach out to me through <a href="mailto: kosia861@gmail.com">kosia861@gmail.com</a></p>
                </div>
                <div className="content">
                    <h2>Find me on social media</h2>
                    <div className="links">
                        <a href="https://linkedin.com/in/lucy-asogwa-8b6b51207">
                        <LinkedInIcon />
                        </a>
                        <a href="https://dribbble.com/Lu-cee">
                            <TwitterIcon />
                        </a>
                        <a href="mailto: kosia861@gmail.com">
                            <EmailIcon />
                        </a>
                        <a href="https://dribbble.com/Lu-cee">
                            <i className="fab fa-dribbble"></i>
                        </a>
                        <a href="https://www.behance.net/lucyasogwa">
                            <i className="fab fa-behance"></i>
                        </a>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Home;