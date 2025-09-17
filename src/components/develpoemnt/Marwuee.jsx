// import React, { useEffect } from "react";
// import Slider from "react-slick";
// import "slick-carousel/slick/slick.css";
// import "slick-carousel/slick/slick-theme.css";
// import "../../style/marquee.css";

// const defaultLogos = [
//   "https://diggitglobal.com/assets/images/logo_1.png",
//   "https://diggitglobal.com/assets/images/logo_22.png",
//   "https://diggitglobal.com/assets/images/logo_3.png",
//   "https://diggitglobal.com/assets/images/logo_23.png",
//   "https://diggitglobal.com/assets/images/logo_24.png",
//   "https://diggitglobal.com/assets/images/logo_25.png",
//   "https://diggitglobal.com/assets/images/logo_26.png",
// ];

// const AutoPlay = ({ logos = defaultLogos, slidesToShow = 10, speed = 5000 }) => {
//   useEffect(() => {
//     // jab component mount ho ya page change ho
//     setTimeout(() => {
//       window.dispatchEvent(new Event("resize"));
//     }, 300);
//   }, []);

//   const settings = {
//     infinite: true,
//     speed: speed,
//     slidesToShow: slidesToShow,
//     slidesToScroll: 1,
//     autoplay: true,
//     autoplaySpeed: 0,
//     cssEase: "linear",
//     arrows: false,
//     pauseOnHover: false,
//     swipe: false,
//     draggable: false,
//   };

//   return (
//     <div className="slider-container max-w-7xl mx-auto py-6">
//       <Slider {...settings}>
//         {[...logos, ...logos].map((logo, index) => (
//           <div key={index} className="flex items-center justify-center px-3">
//             <img
//               src={logo}
//               alt={`logo-${index}`}
//               className="h-16 w-auto object-contain"
//               draggable={false}
//             />
//           </div>
//         ))}
//       </Slider>
//     </div>
//   );
// };

// export default AutoPlay;



import React from 'react';

const defaultLogos = [
  "https://diggitglobal.com/assets/images/logo_1.png",
  "https://diggitglobal.com/assets/images/logo_22.png",
  "https://diggitglobal.com/assets/images/logo_3.png",
  "https://diggitglobal.com/assets/images/logo_23.png",
  "https://diggitglobal.com/assets/images/logo_24.png",
  "https://diggitglobal.com/assets/images/logo_25.png",
  "https://diggitglobal.com/assets/images/logo_26.png",
];

const LogoMarquee = ({ 
  logos = defaultLogos, 
  speed = 20,        // seconds
  imgHeight = "h-16" 
}) => {
  return (
    <>
      <style>{`
        .marquee-container {
          overflow: hidden;
          position: relative;
          width: 100%;
          max-width: 1280px; /* max-w-7xl equivalent */
          margin: 0 auto;
          user-select: none;
        }

        .marquee-track {
          display: flex;
          flex-wrap: nowrap;
          width: max-content;
          animation: scroll ${speed}s linear infinite;
          will-change: transform;
        }

        @keyframes scroll {
          0% { transform: translateX(0); }
          100% { transform: translateX(-33.333%); } /* Adjusted for tripled logos */
        }

        .marquee-track img {
          flex-shrink: 0;
          margin: 0 1.5rem; /* mx-6 equivalent */
          object-fit: contain;
        }

        .fade-left {
          position: absolute;
          left: 0;
          top: 0;
          height: 100%;
          width: 5rem; /* w-20 */
          pointer-events: none;
          background: linear-gradient(to right, white, transparent);
          z-index: 10;
        }

        .fade-right {
          position: absolute;
          right: 0;
          top: 0;
          height: 100%;
          width: 5rem; /* w-20 */
          pointer-events: none;
          background: linear-gradient(to left, white, transparent);
          z-index: 10;
        }

        @media (min-width: 768px) {
          .fade-right {
            width: 10rem; /* md:w-40 */
          }
        }
      `}</style>

      <div className="marquee-container">
        <div className="fade-left" />
        <div className="marquee-track">
          {[...logos, ...logos, ...logos].map((logo, index) => (
            <img
              key={index}
              src={logo}
              alt={`logo-${index}`}
              className={`${imgHeight} w-auto`}
              draggable={false}
            />
          ))}
        </div>
        <div className="fade-right" />
      </div>
    </>
  );
};

export default LogoMarquee;









