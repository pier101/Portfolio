import React from "react";
import { BsTwitter } from "react-icons/bs";
import { BsGithub } from "react-icons/bs";
import { SiBlogger } from "react-icons/si";
const HeaderSocials = () => {
    return (
        <div className="header__socials">
            <a href="https://twitter.com/gimdong77504411" target="_blank">
                <BsTwitter />
            </a>
            <a href="https://github.com/pier101" target="_blank">
                <BsGithub />
            </a>
            <a href="https://velog.io/@pier101" target="_blank">
                <SiBlogger />
            </a>
        </div>
    );
};

export default HeaderSocials;
