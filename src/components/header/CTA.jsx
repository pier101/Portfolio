import React from "react";
// import CV from '../../assets/cv.pdf'
import { BsTwitter } from "react-icons/bs";
import { BsGithub } from "react-icons/bs";
import { SiBlogger } from "react-icons/si";
import { MdCall } from "react-icons/md";
const CTA = () => {
    return (
        <div className="cta">
            <a href="https://github.com/pier101" target="_blank">
                <BsGithub size={30} />
            </a>
            <a href="https://velog.io/@pier101" target="_blank">
                <SiBlogger size={30} />
            </a>
            <a href="https://twitter.com/gimdong77504411" target="_blank">
                <BsTwitter size={30} />
            </a>
            <a href="#contact">
                <MdCall size={30} />
            </a>
        </div>
    );
};

export default CTA;
