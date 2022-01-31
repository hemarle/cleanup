import React from "react";
import "./About.css";
import AboutCard from "./AboutCard";
import AboutOption from "./AboutOption";
import cleanIcon1 from "./images/clean-1.svg";
import cleanIcon2 from "./images/clean-2.png";
import cleanIcon3 from "./images/clean-3.png";
import quadBlueIcon from "./images/quad-blue.svg";
import quadRedIcon from "./images/quad-red.png";

function About({title, summary}) {
    return (
        <div className="about">
            <div className="about__Left">
                <h2 className="about__LeftTitle">
                    Make your home as good as
                    <span>new</span>
                </h2>
                <div className="about__Cards">
                    <AboutCard image={cleanIcon1}
                        about="General Janitorial Cleaning"/>
                    <AboutCard image={cleanIcon2}
                        about="Home and Office
                                                                                                                                                                                                                                                                                                                                            Interior Decoration"/>
                    <AboutCard image={cleanIcon3}
                        about="Funmigation
                                                                                                                                                                                                                                                                                                                                            and
                                                                                                                                                                                                                                                                                                                                            Pest Control"/>
                    <AboutCard image={cleanIcon1}
                        about="Project
                                                                                                                                                                                                                                                                                                                                            Management"/>
                </div>
            </div>

            <div className="about__Right">
                <h4 className="about__RightSummary">
                    {summary}</h4>

                <AboutOption icon={quadBlueIcon}
                    title="Our Agents"
                    about="Goal is the one we recommend for most people the best people for for the job."/>
                <AboutOption icon={quadRedIcon}
                    title="Service Apartments"
                    about="Please fill in your write up into this space, Same as the top, I’m only trying to design the interface"/>
            </div>
        </div>
    );
}

export default About;
