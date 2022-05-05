import React, { useState } from "react";
import "./about.css";
import ME from "../../assets/me.jpg";
import Introduce from "./tabMenu/Introduce";
import Education from "./tabMenu/Education";
import Career from "./tabMenu/Career";
import OtherCareer from "./tabMenu/OtherCareer";

const About = () => {
    const [isActive, setIsActive] = useState(1);

    const clickedFocus = document.getElementsByClassName("about__card");
    const handleTab = (num, e) => {
        console.log(clickedFocus);
        console.log(num);
        console.log(e.currentTarget.classList);
        setIsActive(num);

        for (var i = 0; i < clickedFocus.length; i++) {
            clickedFocus[i].classList.remove("active");
        }
        e.currentTarget.classList.add("active");
    };

    const obj = {
        1: <Introduce />,
        2: <Education />,
        3: <Career />,
        4: <OtherCareer />,
    };

    return (
        <section id="about">
            <div className="container about__container">
                <div className="about__me">
                    <div className="about__me-image">
                        <img
                            src={ME}
                            alt="About Image"
                            style={{ height: 500 }}
                        />
                    </div>
                </div>

                <div className="about__content">
                    <div className="about__cards">
                        <button
                            className={`about__card active`}
                            onClick={(e) => handleTab(1, e)}
                        >
                            <h5>Introduce</h5>
                        </button>
                        <button
                            className={`about__card`}
                            onClick={(e) => handleTab(2, e)}
                        >
                            <h5>Education</h5>
                        </button>
                        <button
                            className={`about__card`}
                            onClick={(e) => handleTab(3, e)}
                        >
                            <h5>Career</h5>
                        </button>
                        <button
                            className={`about__card`}
                            onClick={(e) => handleTab(4, e)}
                        >
                            <h5>Other Career</h5>
                        </button>
                    </div>
                    <p>{obj[isActive]}</p>
                    {/* <a href="#contact" className="btn btn-primary">
                        {" "}
                        Let's Talk
                    </a> */}
                </div>
            </div>
        </section>
    );
};

export default About;
