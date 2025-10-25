import React from "react";
import { Link } from "react-router-dom";


const AboutCard = () => {
  return (
    <section className="py-6 px-4 bg-white">
      <div className="text-left md:text-center mb-10">
        <h2
          className="text-4xl md:text-4xl font-bold mb-6 leading-tight 
          text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-sky-500"
        >
          Our Core Values
        </h2>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 max-w-[900px] mx-auto">
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
  className="relative group w-full sm:max-w-[480px] max-[560px]:max-w-[90%] h-[260px] mx-auto rounded-2xl overflow-hidden shadow-lg"
>

  <div className="w-full h-full bg-gradient-to-r from-cyan-300 to-blue-300 flex flex-col items-center justify-center text-center p-8">
    <div className="absolute top-4 right-5 text-white text-3xl font-extrabold max-[427px]:text-2xl">
      {card.number}
    </div>
    <p className="text-2xl font-semibold max-[619px]:text-2xl max-[481px]:text-xl text-white">
      {card.title}
    </p>
  </div>

  
<div className="absolute bottom-0 left-0 w-full h-full bg-black/80 flex items-center justify-center p-6 text-center text-white opacity-0 translate-y-full transition-all duration-500 group-hover:opacity-100 group-hover:translate-y-0">
  <div className="flex flex-col justify-center items-center h-full">
    <p className="text-base leading-relaxed">{card.desc}</p>
  </div>
</div>

</div>

        ))}
      </div>

     <div className="text-center mt-10 max-[840px]:mb-[100px]">
  <Link
    to="/web-development"
    className="bg-gradient-to-r from-blue-600 to-sky-500 text-white px-[60px] py-3 rounded-full hover:bg-blue-700 text-[20px] inline-block"
  >
    Explore
  </Link>
</div>
    </section>
  );
};

export default AboutCard;
