import React, { useEffect, useRef } from "react";
import "../style/WhoWeBuildFor.css";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

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

export default function WhoWeBuildFor() {
  const containerRef = useRef(null);
  const stickyRef = useRef(null);

  useEffect(() => {
    let ctx = gsap.context(() => {
      // Calculate the total scrollable distance
      const scrollDistance = containerRef.current.offsetHeight - window.innerHeight;
      
      ScrollTrigger.create({
        trigger: containerRef.current,
        start: "top top",
        end: `+=${scrollDistance}`,
        pin: stickyRef.current,
        pinSpacing: false,
        scrub: true,
        markers: false, // Set to true for debugging if needed
      });
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <div style={{ width: "100%", overflowX: "hidden" }}>
      <div className="industries-section" ref={containerRef}>
        <div className="industries-content">
          <div className="industries-left" ref={stickyRef}>
            <h2>Who We Partner With</h2>
            <p>
              We collaborate with businesses that are ready to grow, streamline, or launch something new. If you’re focused on solving real challenges and need technology that adapts as you scale, we’re here to deliver tailored solutions and integrated systems built for your success.
            </p>
            <button className="bg-[#00317B] hover:bg-blue-700 text-white py-4 px-6 rounded-full text-xl transition duration-300">Let’s Build Something</button>
          </div>

          <div className="industries-scroll">
            <div className="industries-column column-top">
              {cardsData.slice(0, 5).map((card, index) => (
                <div className="industry-card" key={index}>
                  <img src={card.img} alt={card.title} />
                  <p>{card.title}</p>
                </div>
              ))}
            </div>
            <div className="industries-column column-bottom">
              {cardsData.slice(5).map((card, index) => (
                <div className="industry-card" key={index}>
                  <img src={card.img} alt={card.title} />
                  <p>{card.title}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}