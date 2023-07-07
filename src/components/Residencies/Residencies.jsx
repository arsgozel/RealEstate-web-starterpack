import React from "react";

import data from "../../utils/slider.json";
import { Swiper, SwiperSlide, useSwiper } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import { sliderSettings } from "../../utils/common";
import "./Residencies.css";

const Residencies = () => {
    return (
        <section className="r-wrapper">
            <div className="paddings innerWidth r-container">
                <div className="r-head flexColStart">
                    <span className="orangeText">Best Choices</span><span className="primaryText">Popular Residencies</span>
                </div>

                <Swiper {...sliderSettings}>
                    <SliderButtons/>
                    {
                        data.map((card, i) => (
                            <SwiperSlide key={i}>
                                <div className="flexColStart r-card">
                                <img src={card.image} alt="home" />

                                <span className="seconndaryText r-price">
                                    <span style={{color:'orange'}}>$</span>
                                    <span>{card.price}</span>
                                </span>

                                <span className="primaryText">
                                    {card.name}
                                </span>

                                <span className="secondaryText">
                                    {card.detail}
                                </span>
                                </div>
                            </SwiperSlide>
                        ))
                    }
                </Swiper>
            </div>
        </section>
    )
}

export default Residencies

const SliderButtons = () => {
    const swiper = useSwiper();
    return (
        <div className="flexCenter r-buttons">
            <button onClick={() => swiper.slidePrev()}>&lt;</button>
            <button onClick={() => swiper.slideNext()}>&gt;</button>
        </div>
    )
}
