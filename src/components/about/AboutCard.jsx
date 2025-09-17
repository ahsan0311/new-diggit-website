import React from "react";

const AboutCard = () => {
  return (
    <section className="py-10 px-4 bg-white ">
      <div className="text-left md:text-center mb-16">
        <h2
          className="text-4xl md:text-5xl font-bold mb-6 leading-tight 
          text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-sky-500"
        >
          Our Core Values
        </h2>
      </div>

      {/* grid fix */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 max-w-[1000px] mx-auto">
        {[
          {
            number: "01",
            title: "One Size Doesn't Fit Anyone",
            desc: "Most platforms try to force your business into a box. We build custom software right from scratch that fits your team, workflow, and long-term goals.",
          },
          {
            number: "02",
            title: "Disconnected Systems Waste Time",
            desc: "We unify your CRM, ERP, dashboards, and back-office tools into one powerful, seamless system.",
          },
          {
            number: "03",
            title: "Generic UX = Lost Customers",
            desc: "We craft intuitive, responsive user experiences that boost engagement and conversions.",
          },
          {
            number: "04",
            title: "Slow Tech Kills Momentum",
            desc: "Whether it’s AI, cloud, or automation — we help you scale with speed and security.",
          },
        ].map((card, i) => (
          <div
            key={i}
            className="relative group w-full sm:max-w-[480px] max-[560px]:max-w-[90%] h-[260px] mx-auto"
            style={{ perspective: "1000px" }}
          >
            <div
              className="relative w-full h-full transition-transform duration-700 group-hover:rotate-y-180"
              style={{ transformStyle: "preserve-3d" }}
            >
              {/* Front */}
              <div
                className="absolute w-full h-full bg-gradient-to-r from-cyan-300 to-blue-300 text-white rounded-2xl p-8 flex flex-col items-center justify-center text-center"
                style={{ backfaceVisibility: "hidden" }}
              >
                <div className="absolute top-4 text-white right-5 text-5xl font-extrabold max-[427px]:text-3xl">
                  {card.number}
                </div>
                <p className="text-4xl font-semibold max-[619px]:text-3xl max-[481px]:text-2xl">
                  {card.title}
                </p>
              </div>

              {/* Back */}
              <div
                className="absolute w-full h-full bg-gradient-to-r from-cyan-300 to-blue-300 text-white rounded-2xl p-6 flex items-center justify-center text-center shadow-lg shadow-blue-400/50 rotate-y-180"
                style={{ backfaceVisibility: "hidden" }}
              >
                <p className="text-base leading-relaxed">{card.desc}</p>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="text-center mt-10 max-[840px]:mb-[100px]">
        <button className="bg-gradient-to-r from-blue-600 to-sky-500 text-white px-[60px] py-3 rounded-full hover:bg-blue-700 text-[20px]">
          Explore
        </button>
      </div>
    </section>
  );
};

export default AboutCard;
