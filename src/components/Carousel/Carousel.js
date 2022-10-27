import React, { useState, useEffect } from "react";
import Slider from "react-slick";
import { db } from "../../firebaseConfig/firebase.config";
import { ref, onValue, set } from "firebase/database";
import "./carousel.scss";

const Carousel = ({ carouselLangArr }) => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    cssEase: "linear",
    pauseOnHover: true,

    appendDots: (dots) => (
      <div id="dots-bg">
        <ul> {dots} </ul>
      </div>
    ),
    customPaging: (i) => <button id="pagination-dot"></button>,
  };
  return (
    <div id="home" className="carousel">
      <div className="wrapper">
        <div className="slider">
          <Slider {...settings}>
            {carouselLangArr?.map((info, index) => (
              <div key={index} className="slide-cont">
                <h3 className={`title title${index}`}>{info.title}</h3>
                <p className={`p${index}`}>{info.context}</p>
              </div>
            ))}
          </Slider>
        </div>
      </div>
    </div>
  );
};

export default Carousel;
