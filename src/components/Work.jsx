import React from "react";
import Project from "./Project";

function Work(props) {
    return(
        <div className="work">
            <h1>My Projects</h1>
            <div className="projectSection">
            {props.projects.map((project, id) => {
                return (
                    <Project
                 key={id}
                 project={project}
                 />
                )
            })}
            </div>
        </div>
    )
}

export default Work;