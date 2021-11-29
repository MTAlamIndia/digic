import React from "react";
import Slider from "react-slick";
import Slide from "./Slide";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import "./HomeMainSlider.scss";

const HomeMainSlider = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
  };
  return (
    <>
      <Slider {...settings} className="home__main__slider">
        <Slide
          image="./images/slide1.jpg"
          heading="new arrivals smartphone x11"
          link="/"
        />
        <Slide image="./images/slide2.jpg" heading="Home pod mini 3" link="/" />
        <Slide
          image="./images/slide3.jpg"
          heading="x-game controller 18"
          link="/"
        />
      </Slider>
    </>
  );
};

export default HomeMainSlider;
