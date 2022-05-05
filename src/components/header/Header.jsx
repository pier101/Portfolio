import React from "react";
import "./header.css";
import CTA from "./CTA";
import ME from "../../assets/me.png";
import HeaderSocials from "./HeaderSocials";
const Header = () => {
    return (
        <header>
            <div className="container header__container">
                <h5>Hello I'm</h5>
                <h1>Dong-Wook Kim</h1>
                <h5 className="text-lignt">Blockchain Developer</h5>
                <CTA />

                {/* <div className="me">
                    <img
                        src={ME}
                        alt="me"
                        style={{ borderRadius: "20rem 20rem 0 0" }}
                    />
                </div> */}
            </div>
        </header>
    );
};

export default Header;
