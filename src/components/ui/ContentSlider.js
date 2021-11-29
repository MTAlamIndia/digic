import React from "react";
import Slider from "react-slick";
import { RiArrowRightSLine, RiArrowLeftSLine } from "react-icons/ri";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const CustomArrow = ({ className, onClick }) => {
  const arrow = className.includes("slick-next") ? (
    <RiArrowRightSLine />
  ) : (
    <RiArrowLeftSLine />
  );
  return (
    <button className={className} onClick={onClick}>
      {arrow}
    </button>
  );
};

const ContentSlider = ({ children, settings }) => {
  const setting = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 4,
    arrows: true,
    nextArrow: <CustomArrow />,
    prevArrow: <CustomArrow />,
    ...settings,
  };

  return (
    <>
      <Slider {...setting}>{children}</Slider>
    </>
  );
};

export default ContentSlider;
