import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import "../style/silo.css";

gsap.registerPlugin(ScrollTrigger);

const NoMoreSilos = ({
  heading = " Say Goodbye to Disconnected Systems",
  paragraph = "",
  buttonText = " Start Your Project Today",
  onButtonClick = () => {},
}) => {
  const sectionRef = useRef(null);
  const headingRef = useRef(null);
  const paraRef = useRef(null);
  const buttonRef = useRef(null);

  useEffect(() => {
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: sectionRef.current,
        start: "top 80%",
        toggleActions: "play none none none", // sirf ek dafa play
      },
    });

    tl.from(headingRef.current, {
      y: -50,
      opacity: 0,
      duration: 1,
      ease: "power3.out",
    });

    if (paraRef.current) {
      tl.from(
        paraRef.current,
        {
          y: 40,
          opacity: 0,
          duration: 1,
          ease: "power3.out",
        },
        "-=0.5"
      );
    }

    tl.from(
      buttonRef.current,
      {
        scale: 0.8,
        opacity: 0,
        duration: 0.8,
        ease: "back.out(1.7)",
      },
      "-=0.3"
    );
  }, []);

  return (
    <div className="no-more-silos-container">
      {/* img same rahegi without animation */}
      <div className="floating-image">
        <img
          src="https://diggitglobal.com/assets/images/vector_3.png"
          alt="Floating Cube"
        />
      </div>

      <section ref={sectionRef} className="silos-section">
        <div className="silos-content">
          <h2 ref={headingRef} className="silo-heading">
            {heading}
          </h2>

          {paragraph && (
            <p ref={paraRef} className="silo-paragraph">
              {paragraph}
            </p>
          )}

          <button
            ref={buttonRef}
            className="silo-button"
            onClick={onButtonClick}
          >
            {buttonText}
          </button>
        </div>
      </section>
    </div>
  );
};

export default NoMoreSilos;
