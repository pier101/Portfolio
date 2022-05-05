import React from "react";
import "./nav.css";
import { AiTwotoneHome, AiOutlineUser } from "react-icons/ai";
import { BiBook, BiGame } from "react-icons/bi";
import { BiMessageSquareDetail } from "react-icons/bi";
import { GrPersonalComputer } from "react-icons/gr";
import { useState } from "react";
const Nav = () => {
    const [activeNav, setActiveNav] = useState("");
    return (
        <nav>
            <a
                href="#"
                onClick={() => setActiveNav("#")}
                className={activeNav === "#" ? "active" : ""}
            >
                <AiTwotoneHome />
            </a>
            <a
                href="#about"
                onClick={() => setActiveNav("#about")}
                className={activeNav === "#about" ? "active" : ""}
            >
                <AiOutlineUser />
            </a>
            <a
                href="#experience"
                onClick={() => setActiveNav("#experience")}
                className={activeNav === "#experience" ? "active" : ""}
            >
                <BiBook />
            </a>
            <a
                href="#portfolio"
                onClick={() => setActiveNav("#portfolio")}
                className={activeNav === "#portfolio" ? "active" : ""}
            >
                <BiGame />
            </a>
            <a
                href="#contact"
                onClick={() => setActiveNav("#contact")}
                className={activeNav === "#contact" ? "active" : ""}
            >
                <BiMessageSquareDetail />
            </a>
        </nav>
    );
};

export default Nav;
