import React from "react";
import "../style/card.css";

const Card = () => {
  return (
    <>
      <section className="py-20 px-4">
        <div className="text-left md:text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-black mb-6 leading-tight">
            Your Tools Weren't Built
            <br />
            <span className="text-black">For You. Ours Are.</span>
          </h2>
          <p className="text-xl text-gray-700 max-w-3xl md:mx-auto mb-8">
            You're growing, but your tech isn't keeping up. Generic clunky
            tools, scattered systems, and one-size-fits-all software can slow
            down your business when it should be scaling up.
          </p>
          <p className="text-2xl font-semibold text-blue-600">
            We're here to fix that.
          </p>
        </div>

        <div className="vector-container">
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
        </div>

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
          <button className="bg-[#00317B] text-white px-[60px] py-3 rounded-full hover:bg-blue-700 text-[20px]">
            Explore
          </button>
        </div>
      </section>
    </>
  );
};

export default Card;
