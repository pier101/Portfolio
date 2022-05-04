import React from "react";
import "./testimonials.css";
import Project1 from "../../assets/ProjectMain1.gif";
// import Project2 from "../../assets/ProjectMain2.gif";
import Project3 from "../../assets/ProjectMain3.gif";
import Project4 from "../../assets/ProjectMain4.gif";

// import Swiper core and required modules
import { Pagination } from "swiper";

import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

const data = [
    {
        project: Project1,
        name: "동욱",
        review: "ddddk어쩌고 저쩌고",
    },
    {
        project: Project3,
        name: "동욱",
    },
    {
        project: Project3,
        name: "동욱",
    },
    {
        project: Project4,
        name: "동욱",
    },
];

const Testimonials = () => {
    return (
        <section id="testimonials">
            <h5>Review from clients</h5>
            <h2>Gallery</h2>

            <Swiper
                className="container testimonials__container"
                modules={[Pagination]}
                spaceBetween={50}
                slidesPerView={1}
                pagination={{ clickable: true }}
            >
                {data.map(({ project }, index) => {
                    return (
                        <SwiperSlide key={index} className="testimonial">
                            <div className="testimonial__gallery">
                                <img src={project} alt="" />
                            </div>
                        </SwiperSlide>
                    );
                })}
            </Swiper>
        </section>
    );
};

export default Testimonials;
