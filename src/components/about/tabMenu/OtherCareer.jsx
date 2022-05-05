import React from "react";
import { BsPatchCheckFill } from "react-icons/bs";
const OtherCareer = () => {
    return (
        <>
            <div>
                <h2>
                    <BsPatchCheckFill />{" "}
                    <span style={{ marginLeft: 10 }}>
                        CJ제일제당 식품연구소
                    </span>
                </h2>
                <h3 style={{ display: "inline-block", marginLeft: 40 }}>
                    Lactobacillales 배양 최적화.분석
                </h3>
                <h4 style={{ display: "inline-block", marginLeft: 10 }}>
                    (2017.11 - 2021.05)
                </h4>
            </div>
            {/* <div style={{ marginTop: 20 }}>
                <h2>
                    {" "}
                    <BsPatchCheckFill /> Jw중외제약
                </h2>
                <h3 style={{ display: "inline-block", marginLeft: 25 }}>
                    미생물 QC
                </h3>
                <h4 style={{ display: "inline-block", marginLeft: 10 }}>
                    (2015.08 - 2017.05)
                </h4>
            </div> */}
        </>
    );
};

export default OtherCareer;
