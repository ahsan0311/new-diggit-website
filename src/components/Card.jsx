import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);
import "../style/card.css";

const Card = () => {
   const sectionRef = useRef(null);
  const headingRef = useRef(null);
  const paraRef = useRef(null);
  const blueLineRef = useRef(null);

  useEffect(() => {
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: sectionRef.current,
        start: "top 80%",
        toggleActions: "play none none none",
      },
    });

    // Heading animation (left se)
    tl.from(headingRef.current, {
      x: -100,
      opacity: 0,
      duration: 1,
      ease: "power3.out",
    });

    // Paragraph animation (bottom se)
    tl.from(
      paraRef.current,
      {
        y: 50,
        opacity: 0,
        duration: 1,
        ease: "power3.out",
      },
      "-=0.5"
    );

    // Blue line animation (scale in)
    tl.from(
      blueLineRef.current,
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
    <>
      <section className="py-20 px-4">
         <div ref={sectionRef} className="text-left max-w-3xl mx-auto md:text-center mb-16">
      <h2
        ref={headingRef}
        className="text-4xl md:text-4xl font-bold text-black mb-6 leading-tight"
      >
        Your Business Deserves Technology Built Around You
        <br />
        <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-sky-500">For You. Ours Are.</span>
      </h2>

      <p
        ref={paraRef}
        className="text-base text-gray-700 max-w-3xl md:mx-auto mb-8"
      >
        Growth shouldn’t be held back by outdated tools and disjointed systems.
        Off-the-shelf software often adds complexity instead of solving
        problems. That’s why we create tailored solutions designed to scale with
        your business, streamline workflows, and deliver real results—without
        the clutter.
      </p>

      {/* <p
        ref={blueLineRef}
        className="text-2xl font-semibold text-blue-600"
      >
        We're here to fix that.
      </p> */}
    </div>

        {/* <div className="vector-container">
          <img
            className="vector-img-1"
            src="https://diggitglobal.com/assets/images/vector_1.png"
            alt="Vector 1"
          />
          <img
            className="vector-img-2"
            src="https://diggitglobal.com/assets/images/vector_2.png"
            alt="Vector 2"
          />
        </div> */}

        <div className="cards-container">
          <div className="card flip-card">
            <div className="flip-card-inner">
              <div className="flip-card-front">
                <div className="card-number">01</div>
                <p>One Size Doesn't Fit Anyone</p>
              </div>
              <div className="flip-card-back">
                <p>
                  Most platforms try to force your business into a box. We build
                  custom software right from scratch that fits your team,
                  workflow, and long-term goals.
                </p>
              </div>
            </div>
          </div>

          <div className="card flip-card">
            <div className="flip-card-inner">
              <div className="flip-card-front">
                <div className="card-number">02</div>
                <p>Disconnected Systems Waste Time</p>
              </div>
              <div className="flip-card-back">
                <p>
                  We know you're tired of juggling five tools just to complete
                  one task. That's why we unify your CRM, ERP, dashboards, and
                  back-office tools into one powerful, seamless system.
                </p>
              </div>
            </div>
          </div>

          <div className="card flip-card">
            <div className="flip-card-inner">
              <div className="flip-card-front">
                <div className="card-number">03</div>
                <p>Generic UX = Lost Customers</p>
              </div>
              <div className="flip-card-back">
                <p>
                  Your customers deserve more than clunky, outdated interfaces.
                  We craft intuitive, responsive user experiences that boost
                  engagement and conversions.
                </p>
              </div>
            </div>
          </div>

          <div className="card flip-card">
            <div className="flip-card-inner">
              <div className="flip-card-front">
                <div className="card-number">04</div>
                <p>Slow Tech Kills Momentum</p>
              </div>
              <div className="flip-card-back">
                <p>
                  Whether you need cloud migration, AI-powered dashboards, or
                  smarter automation, we help you scale with speed, security,
                  and confidence.
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="text-center mt-10">
          <button className="bg-gradient-to-r from-blue-600 to-sky-500 text-white px-[60px] py-3 rounded-full hover:bg-blue-700 text-[20px]">
            Explore
          </button>
        </div>
      </section>
    </>
  );
};

export default Card;
