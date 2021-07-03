import React from "react";

function CaseStudy(props) {
    return (
        <div className="casestudy">
            <div className="top">
            <h1>{props.project.name}</h1>
            <img src={props.project.img} alt="design"/>
            </div>

            <div className="overview">
            <h2>OVER VIEW</h2>
            <p>{props.project.description}</p>
            </div>

            <div className="roles">
            <h2>Role</h2>
            <p>{props.project.roleDesc}</p>
            <ul>
                {props.project.roles.map((role, id) => {
                    return (
                        <li key={id}>{role.role}</li>
                    )
                })}
            </ul>
            </div>

            <div className="researchMethods">
                <h2>RESEARCH METHODS</h2>
                {props.project.researchMethod.map((researches, id)=> {
                    return (
                        <div key={id}>
                        {researches.research.map((research, index)=> {
                        return (
                            <div key={index} className="research">
                                <h4>
                                    {research.head}
                                </h4>

                                <p className="listitem">{research.list}</p>
                            </div>
                        )
                    })}
                        </div>
                    )
                })}
            </div>

            <div className="challenges">
                <h2>THE CHALLENGE</h2>
                {props.project.challeneges.map((challenege, id) => {
                    return (
                        <p key={id}>
                            {challenege.challenege}
                        </p>
                    )
                })}
            </div>
            <div className="researches">
                <h2>RESEARCH</h2>
                {props.project.researches.map((research, id) => {
                    return (
                        <p key={id}>
                            {research.research}
                        </p>
                    )
                })}
            </div>
            <div className="extra">
                {props.project.extras.map((extra, id) => {
                    return (
                        <div key={id}>
                        <h2>{extra.head}</h2>
                        <div className="list">
                            <h3>{extra.name}</h3>
                            <p>{extra.comment}</p>
                        </div>
                        </div>
                    )
                })}
            </div>

            <div className="personas">
                <h2>PERSONAS</h2>
                <img src={props.project.personas} alt=""/>
            </div>

            <div className="journeymap">
                <h2>Customer Journey Map</h2>
                <div className="map">
                {props.project.jorneyMaps.map((map, id) => {
                    return (
                        <div key={id}>
                        <h3>for {map.name}</h3>
                        <img src={map.img} alt=""/>
                        </div>
                    )
                })}
                </div>
            </div>

            <div className="solutions">
                <h2>THE SOLUTIONS</h2>
                <div className="solution">
                {props.project.solutions.map((solution, id) => {
                    return (
                        <p key={id}>
                        {solution.solution}
                        </p>
                    )
                })}
                </div>
            </div>

            <div className="processes">
                <h2>THE PROCESS</h2>
                <div className="process">
                {props.project.process.map((items, id) => {
                    return (
                        <div className="items">
                            <p key={id}>
                        {items.p}
                        </p>
                        <img src={items.img} alt=""/>
                        </div>
                    )
                })}
                </div>
            </div>
        </div>
    )
}

export default CaseStudy;