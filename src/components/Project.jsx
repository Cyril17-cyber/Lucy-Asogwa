import React from "react";
import { Link } from "react-router-dom";

function Project(props) {
    return(
        <div className="project">
            <img src={props.project.img} alt="design"/>
            <div className="bottom">
                <h2>{props.project.name}</h2>
                <p>{props.project.description}</p>
                <div className="links">
                <Link className="view" to={props.project.link}>View Case Study</Link>
                <a href={props.project.mediumLink} className="mediums">
                    Read On Medium
                </a>
                </div>
            </div>
        </div>
    )
}

export default Project;