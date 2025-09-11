
const logos = [
  "https://diggitglobal.com/assets/images/logo_1.png",
  "https://diggitglobal.com/assets/images/logo_22.png",
  "https://diggitglobal.com/assets/images/logo_3.png",
  "https://diggitglobal.com/assets/images/logo_23.png",
  "https://diggitglobal.com/assets/images/logo_24.png",
  "https://diggitglobal.com/assets/images/logo_25.png",
  "https://diggitglobal.com/assets/images/logo_26.png",
];


import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "../../style/marquee.css";

function AutoPlay() {
  const settings = {
  infinite: true,
  speed: 5000,
  slidesToShow: 10,
  slidesToScroll: 1,
  autoplay: true,
  autoplaySpeed: 0,
  cssEase: "linear",
  arrows: false,
  pauseOnHover: false,
  swipe: false,
  draggable: false,

  responsive: [
    {
      breakpoint: 1200,
      settings: {
        slidesToShow: 8,
      },
    },
    {
      breakpoint: 1000,
      settings: {
        slidesToShow: 6,
      },
    },
    {
      breakpoint: 768,
      settings: {
        slidesToShow: 4,
      },
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 3,
      },
    },
  ],
};


  return (
    <div className="slider-container max-w-7xl mx-auto">
      <Slider {...settings}>
        {[...logos, ...logos].map((logo, index) => (
          <div  key={index}>
            <img src={logo} alt={`logo-${index}`} />
          </div>
        ))}
      </Slider>
    </div>
  );
}

export default AutoPlay;
