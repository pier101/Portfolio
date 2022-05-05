import React from "react";
import { BsPatchCheckFill } from "react-icons/bs";

const Education = () => {
    return (
        <>
            <h2>
                <BsPatchCheckFill />{" "}
                <span style={{ marginLeft: 10 }}>경일게임 아카데미</span>
            </h2>
            <h3 style={{ display: "inline-block", marginLeft: 35 }}>
                블록체인 응용 sw 개발과정
            </h3>
            <h4 style={{ display: "inline-block", marginLeft: 10 }}>
                (2021.08 - 2022.05)
            </h4>
        </>
    );
};

export default Education;
