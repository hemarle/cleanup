import React from "react";
import "./AboutOption.css";
function AboutOption({icon, title, about}) {
    return (
        <div className="aboutOption">
            <img src={icon}
                alt=""/>
            <div className="aboutOption__Text">
                <h3> {title} </h3>
                <p> {about} </p>
            </div>
        </div>
    );
}

export default AboutOption;
