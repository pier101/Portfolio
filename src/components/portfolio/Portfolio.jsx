import React from "react";
import "./portfolio.css";
import IMG1 from "../../assets/ProjectMain1.gif";
import IMG2 from "../../assets/ProjectMain2.png";
import IMG3 from "../../assets/ProjectMain4.gif";
import IMG4 from "../../assets/ProjectMain3.png";

import Solidity from "../../assets/skills/solidity.png";
import Docker from "../../assets/skills/docker.png";
import Nextjs from "../../assets/skills/nextjs.png";
import Javascript from "../../assets/skills/javascript.png";
import Nodejs from "../../assets/skills/nodejs.png";
import Ec2 from "../../assets/skills/aws-ec2.png";
import MySql from "../../assets/skills/mysql.png";
import _React from "../../assets/skills/_react.png";
import Nunjucks from "../../assets/skills/nunjucks.webp";

import Wookverse from "./detail/Wookverse";
import Doremigames from "./detail/Doremigames";
import Onedayclass from "./detail/Onedayclass";
import POWblockchain from "./detail/POWblockchain";

const data = [
    {
        id: 1,
        image: IMG1,
        title: "Doremi Games",
        subTitle: "ERC 기반 P2E game 프로젝트",
        github: "https://github.com/domisolidity/NFT_GAME",
        demo: "데모사이트",
    },
    {
        id: 2,
        image: IMG2,
        title: "POW blockchian",
        subTitle: "POW(작업증명방식) 블록체인 사이트",
        github: "https://github.com/domisolidity/NFT_GAME",
        demo: "데모사이트",
    },
    {
        id: 3,
        image: IMG3,
        title: "WookVerse",
        subTitle: "아티스트와 팬 간 프라이빗 소통 플랫폼",
        github: "https://github.com/pier101/PROJECT_WooksChilds",
        demo: "데모사이트",
    },
    {
        id: 4,
        image: IMG4,
        title: "One Day Class",
        subTitle: "원데이 클래스 서비스",
        github: "https://github.com/pier101/PROJECT_onedayclass",
        demo: "데모사이트",
    },
];
const Portfolio = () => {
    return (
        <section id="portfolio">
            <h5>My Recent Work</h5>
            <h2>Portfolio</h2>

            <div className="container portfolio__container">
                {data.map(({ id, image, title, subTitle, github, demo }) => {
                    return (
                        <artice key={id} className="portfolio__item">
                            <div>
                                <div className="portfolio__item-image">
                                    <img src={image} alt={title} />
                                </div>
                                <h3>{title}</h3>
                                <h4 className="sub">{subTitle}</h4>
                                <div>
                                    <h4>주요 기술</h4>
                                    <div className="portfolio_item-skills">
                                        <img
                                            className="portfolio_item-skill"
                                            src={Javascript}
                                            alt="javascript"
                                        />
                                        {id === 1 || id === 2 ? (
                                            <img
                                                className="portfolio_item-skill"
                                                src={Nextjs}
                                                alt="nextjs"
                                            />
                                        ) : id === 3 ? (
                                            <img
                                                className="portfolio_item-skill"
                                                src={_React}
                                                alt="react"
                                            />
                                        ) : (
                                            <img
                                                className="portfolio_item-skill"
                                                src={Nunjucks}
                                                alt="nunjucks"
                                            />
                                        )}
                                        <img
                                            className="portfolio_item-skill"
                                            src={Nodejs}
                                            alt="nodejs"
                                        />
                                        <img
                                            className="portfolio_item-skill"
                                            src={MySql}
                                            alt="mysql"
                                        />
                                        {id === 1 && (
                                            <>
                                                <img
                                                    className="portfolio_item-skill"
                                                    src={Solidity}
                                                    alt="solidity"
                                                />
                                                <img
                                                    className="portfolio_item-skill"
                                                    src={Docker}
                                                    alt="docker"
                                                />
                                                <img
                                                    className="portfolio_item-skill"
                                                    src={Ec2}
                                                    alt="ec2"
                                                />
                                            </>
                                        )}
                                    </div>
                                </div>
                                <div className="portfolio__item-cta">
                                    <a
                                        href={github}
                                        className="btn"
                                        target="_blank"
                                    >
                                        Github
                                    </a>
                                    {id === 1 && (
                                        <a
                                            href={demo}
                                            className="btn btn-primary"
                                            target="_blank"
                                        >
                                            Live Demo
                                        </a>
                                    )}
                                </div>
                            </div>
                            <div className="myTask">
                                <h4>맡은 업무</h4>
                                {id === 1 ? (
                                    <Doremigames />
                                ) : id === 2 ? (
                                    <POWblockchain />
                                ) : id === 3 ? (
                                    <Wookverse />
                                ) : (
                                    <Onedayclass />
                                )}
                            </div>
                        </artice>
                    );
                })}
            </div>
        </section>
    );
};

export default Portfolio;
