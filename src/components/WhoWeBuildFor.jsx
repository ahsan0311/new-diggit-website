// import React, { useEffect, useRef } from "react";
// import "../style/WhoWeBuildFor.css";
// import { gsap } from "gsap";
// import { ScrollTrigger } from "gsap/ScrollTrigger";
// gsap.registerPlugin(ScrollTrigger);

// const cardsData = [
//   { img: "https://diggitglobal.com/assets/images/icon_7.png", title: "Healthcare & Wellness" },
//   { img: "https://diggitglobal.com/assets/images/icon_8.png", title: "Finance & Fintech" },
//   { img: "https://diggitglobal.com/assets/images/icon_9.png", title: "Logistics & Transportation" },
//   { img: "https://diggitglobal.com/assets/images/icon_10.png", title: "Hospitality & Travel" },
//   { img: "https://diggitglobal.com/assets/images/icon_7.png", title: "E-Commerce & Retail" },
//   { img: "https://diggitglobal.com/assets/images/icon_8.png", title: "Education & E-Learning" },
//   { img: "https://diggitglobal.com/assets/images/icon_9.png", title: "Real Estate & Property Tech" },
//   { img: "https://diggitglobal.com/assets/images/icon_10.png", title: "Automotive" },
//   { img: "https://diggitglobal.com/assets/images/icon_7.png", title: "Manufacturing" },
//   { img: "https://diggitglobal.com/assets/images/icon_8.png", title: "Media & Entertainment" },
// ];

// export default function WhoWeBuildFor() {
//   const containerRef = useRef(null);
//   const stickyRef = useRef(null);

//   useEffect(() => {
//     let ctx = gsap.context(() => {
//       // Calculate the total scrollable distance
//       const scrollDistance = containerRef.current.offsetHeight - window.innerHeight;
      
//       ScrollTrigger.create({
//         trigger: containerRef.current,
//         start: "top top",
//         end: `+=${scrollDistance}`,
//         pin: stickyRef.current,
//         pinSpacing: false,
//         scrub: true,
//         markers: false, // Set to true for debugging if needed
//       });
//     }, containerRef);

//     return () => ctx.revert();
//   }, []);

//   return (
//     <div style={{ width: "100%", overflowX: "hidden" }}>
//       <div className="industries-section" ref={containerRef}>
//         <div className="industries-content">
//           <div className="industries-left" ref={stickyRef}>
//             <h2 className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-sky-500 mb-4">Who We Partner With</h2>
//             <p>
//               We collaborate with businesses that are ready to grow, streamline, or launch something new. If you’re focused on solving real challenges and need technology that adapts as you scale, we’re here to deliver tailored solutions and integrated systems built for your success.
//             </p>
//             <button className="bg-gradient-to-r from-blue-600 to-sky-500 hover:bg-blue-700 text-white py-4 px-6 rounded-full text-xl transition duration-300 mt-4">Let’s Build Something</button>
//           </div>

//           <div className="industries-scroll">
//             <div className="industries-column column-top">
//               {cardsData.slice(0, 5).map((card, index) => (
//                 <div className="industry-card" key={index}>
//                   <img src={card.img} alt={card.title} />
//                   <p>{card.title}</p>
//                 </div>
//               ))}
//             </div>
//             <div className="industries-column column-bottom">
//               {cardsData.slice(5).map((card, index) => (
//                 <div className="industry-card" key={index}>
//                   <img src={card.img} alt={card.title} />
//                   <p>{card.title}</p>
//                 </div>
//               ))}
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }











import React from "react";
import "../style/WhoWeBuildFor.css";

const cardsData = [
  { img: "https://diggitglobal.com/assets/images/icon_7.png", title: "Healthcare & Wellness" },
  { img: "https://diggitglobal.com/assets/images/icon_8.png", title: "Finance & Fintech" },
  { img: "https://diggitglobal.com/assets/images/icon_9.png", title: "Logistics & Transportation" },
  { img: "https://diggitglobal.com/assets/images/icon_10.png", title: "Hospitality & Travel" },
  { img: "https://diggitglobal.com/assets/images/icon_7.png", title: "E-Commerce & Retail" },
  { img: "https://diggitglobal.com/assets/images/icon_8.png", title: "Education & E-Learning" },
  { img: "https://diggitglobal.com/assets/images/icon_9.png", title: "Real Estate & Property Tech" },
  { img: "https://diggitglobal.com/assets/images/icon_10.png", title: "Automotive" },
  { img: "https://diggitglobal.com/assets/images/icon_7.png", title: "Manufacturing" },
  { img: "https://diggitglobal.com/assets/images/icon_8.png", title: "Media & Entertainment" },
];

const IndustryCard = ({ img, title }) => (
  <div className="industry-card shrink-0 mx-4">
    <img src={img} alt={title} />
    <p>{title}</p>
  </div>
);

export default function WhoWeBuildFor() {
  return (
    <div style={{ width: "100%", overflowX: "hidden" }}>
     <style>{`
  @keyframes marqueeScroll {
    0% { transform: translateX(0%); }
    100% { transform: translateX(-50%); }
  }

  .marquee-inner {
    animation: marqueeScroll 30s linear infinite;
  }

  .marquee-reverse {
    animation-direction: reverse;
  }

  @media (max-width: 1024px) {
    .industry-card {
      width: 260px;
    }
  }

  @media (max-width: 768px) {
    .industry-card {
      width: 220px;
    }
  }

  @media (max-width: 480px) {
    .industry-card {
      width: 180px;
      padding: 30px 20px;
    }

    .industry-card p {
      font-size: 18px;
    }

    .industry-card img {
      width: 60px;
      height: 60px;
    }
  }
`}</style>

      <div className="industries-section">
        <div className="industries-content-center">
          <div className="industries-left">
            <h2 className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-sky-500 mb-4">
              Who We Partner With
            </h2>
            <p>
              We collaborate with businesses that are ready to grow, streamline, or launch something new. If you’re focused on solving real challenges and need technology that adapts as you scale, we’re here to deliver tailored solutions and integrated systems built for your success.
            </p>
            <button className="bg-gradient-to-r from-blue-600 to-sky-500 hover:bg-blue-700 text-white py-4 px-6 rounded-full text-xl transition duration-300 mt-4">
              Let’s Build Something
            </button>
          </div>
        </div>

        {/* Horizontal Marquee Section */}
        <div className="industries-marquee-wrapper max-w-7xl mx-auto px-4">
          <div className="marquee-row overflow-hidden relative">
            <div className="marquee-inner flex min-w-[200%] py-4">
              {[...cardsData, ...cardsData].map((card, index) => (
                <IndustryCard key={index} img={card.img} title={card.title} />
              ))}
            </div>
          </div>

          <div className="marquee-row overflow-hidden relative mt-6">
            <div className="marquee-inner marquee-reverse flex min-w-[200%] py-4">
              {[...cardsData, ...cardsData].map((card, index) => (
                <IndustryCard key={index} img={card.img} title={card.title} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}











