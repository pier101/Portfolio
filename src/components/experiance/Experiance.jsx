import React from "react";
import "./experiance.css";
import { BsPatchCheckFill } from "react-icons/bs";

const Experiance = () => {
    return (
        <section id="experience">
            <h5>What Skills I have</h5>
            <h2>My Experience</h2>

            <div className="container experience__container">
                <div className="experience__blockchain">
                    <h3>Blockchain Development</h3>
                    <div className="experience__content">
                        <article className="experience__detail">
                            <BsPatchCheckFill className="experience__detail-icon" />
                            <div>
                                <h4>Solidity</h4>

                                <small className="text-light">
                                    Experienced
                                </small>
                            </div>
                        </article>
                        <article className="experience__detail">
                            <BsPatchCheckFill className="experience__detail-icon" />
                            <div>
                                <h4>Truffle</h4>
                                <small className="text-light">basic</small>
                            </div>
                        </article>
                        <article className="experience__detail">
                            <BsPatchCheckFill className="experience__detail-icon" />
                            <div>
                                <h4>Web3.js</h4>
                                <small className="text-light">basic</small>
                            </div>
                        </article>
                        <article className="experience__detail">
                            <BsPatchCheckFill className="experience__detail-icon" />
                            <div>
                                <h4>IPFS</h4>
                                <small className="text-light">basic</small>
                            </div>
                        </article>
                    </div>
                </div>
                <div className="experience__frontend">
                    <h3>Frontend Development</h3>
                    <div className="experience__content">
                        <article className="experience__detail">
                            <BsPatchCheckFill className="experience__detail-icon" />
                            <div>
                                <h4>HTML</h4>
                                <small className="text-light">
                                    Experienced
                                </small>
                            </div>
                        </article>
                        <article className="experience__detail">
                            <BsPatchCheckFill className="experience__detail-icon" />
                            <div>
                                <h4>CSS</h4>
                                <small className="text-light">
                                    Intermediate
                                </small>
                            </div>
                        </article>
                        <article className="experience__detail">
                            <BsPatchCheckFill className="experience__detail-icon" />
                            <div>
                                <h4>JavaScript</h4>
                                <small className="text-light">
                                    Experienced
                                </small>
                            </div>
                        </article>
                        <article className="experience__detail">
                            <BsPatchCheckFill className="experience__detail-icon" />
                            <div>
                                <h4>React</h4>
                                <small className="text-light">
                                    Experienced
                                </small>
                            </div>
                        </article>
                        <article className="experience__detail">
                            <BsPatchCheckFill className="experience__detail-icon" />
                            <div>
                                <h4>Redux</h4>
                                <small className="text-light">
                                    Experienced
                                </small>
                            </div>
                        </article>
                        <article className="experience__detail">
                            <BsPatchCheckFill className="experience__detail-icon" />
                            <div>
                                <h4>Next.js</h4>
                                <small className="text-light">
                                    Experienced
                                </small>
                            </div>
                        </article>
                    </div>
                </div>
                <div className="experience__backend">
                    <h3>Backend Development</h3>
                    <div className="experience__content">
                        <article className="experience__detail">
                            <BsPatchCheckFill className="experience__detail-icon" />
                            <div>
                                <h4>Node.js</h4>
                                <small className="text-light">
                                    Experienced
                                </small>
                            </div>
                        </article>
                        <article className="experience__detail">
                            <BsPatchCheckFill className="experience__detail-icon" />
                            <div>
                                <h4>Express</h4>
                                <small className="text-light">
                                    Experienced
                                </small>
                            </div>
                        </article>
                        <article className="experience__detail">
                            <BsPatchCheckFill className="experience__detail-icon" />
                            <div>
                                <h4>MySQL</h4>
                                <small className="text-light">basic</small>
                            </div>
                        </article>
                    </div>
                </div>
                <div className="experience__devops">
                    <h3>Dev Ops</h3>
                    <div className="experience__content">
                        <article className="experience__detail">
                            <BsPatchCheckFill className="experience__detail-icon" />
                            <div>
                                <h4>AWS EC2</h4>
                                <small className="text-light">
                                    Experienced
                                </small>
                            </div>
                        </article>
                        <article className="experience__detail">
                            <BsPatchCheckFill className="experience__detail-icon" />
                            <div>
                                <h4>AWS S3</h4>
                                <small className="text-light">
                                    Experienced
                                </small>
                            </div>
                        </article>
                        <article className="experience__detail">
                            <BsPatchCheckFill className="experience__detail-icon" />
                            <div>
                                <h4>AWS RDS</h4>
                                <small className="text-light">
                                    Experienced
                                </small>
                            </div>
                        </article>
                        <article className="experience__detail">
                            <BsPatchCheckFill className="experience__detail-icon" />
                            <div>
                                <h4>Docker</h4>
                                <small className="text-light">basic</small>
                            </div>
                        </article>
                        <article className="experience__detail">
                            <BsPatchCheckFill className="experience__detail-icon" />
                            <div>
                                <h4>Nginx</h4>
                                <small className="text-light">basic</small>
                            </div>
                        </article>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Experiance;
