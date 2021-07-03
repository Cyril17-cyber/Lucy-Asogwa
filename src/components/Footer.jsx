import React from "react";
import LocationIcon from "@material-ui/icons/LocationOnOutlined";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import TwitterIcon from "@material-ui/icons/Twitter";
import EmailIcon from "@material-ui/icons/Email";
import PhoneIcon from "@material-ui/icons/Phone";

function Footer() {
    const year = new Date().getFullYear();
    return (
        <div className="footer">
            <div className="top">
            <a href="https://www.google.com.ng/maps/place/Enugu/@9.0338725,8.677457,6z/data=!4m5!3m4!1s0x1044a3cf887d1a25:0x9e342e82908e0c3d!8m2!3d6.4583661!4d7.5463885?hl=en&authuser=0" className="link">
                <LocationIcon />
                <p>Enugu, Nigeria || Remote</p>
            </a>
            <div className="middle">
                <a href="tel: +2348196267715" className="link">
                    <PhoneIcon />
                    <p>+23408196267715</p>
                </a>
                <a href="mailto: kosia861@gmail.com" className="link">
                    <EmailIcon />
                    <p>kosia861@gmail.com</p>
                </a>
            </div>
            <div className="socialLinks">
                <a href="https://linkedin.com/in/lucy-asogwa-8b6b51207"><LinkedInIcon /></a>
                <a href="https://twitter.com/lucy_asogwa"><TwitterIcon /></a>
                <a href="https://dribbble.com/Lu-cee">
                <i className="fab fa-dribbble"></i>
                    </a>
                <a href="ttps://www.behance.net/lucyasogwa">
                <i className="fab fa-behance"></i>
                </a>
            </div>
            </div>
            <p className="year">Made by <a href="https://cyrillic.herokuapp.com">Cyril™</a>. Copyright ©{year}. All Right Reserved</p>
        </div>
    )
}

export default Footer;