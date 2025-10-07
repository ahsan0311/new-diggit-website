// import React, { useEffect, useRef } from "react";
// import gsap from "gsap";
// import { ScrollTrigger } from "gsap/ScrollTrigger";

// gsap.registerPlugin(ScrollTrigger);

// const WhyWorkSection = ({ title, description, cards, buttonText }) => {
//   const sectionRef = useRef(null);

//   useEffect(() => {
//     const ctx = gsap.context(() => {
//       // Animate title
//       gsap.from(".whywork-title", {
//         scrollTrigger: {
//           trigger: sectionRef.current,
//           start: "top 80%",
//           toggleActions: "play none none none",
//         },
//         opacity: 0,
//         y: 40,
//         duration: 1,
//         ease: "power3.out",
//       });

//       // Animate description with slight delay
//       gsap.from(".whywork-desc", {
//         scrollTrigger: {
//           trigger: sectionRef.current,
//           start: "top 78%",
//           toggleActions: "play none none none",
//         },
//         opacity: 0,
//         y: 30,
//         duration: 1,
//         delay: 0.2,
//         ease: "power3.out",
//       });
//     }, sectionRef);

//     return () => ctx.revert();
//   }, []);

//   return (
//     <div
//       ref={sectionRef}
//       className="font-sans text-center p-6 md:p-10 mt-10"
//     >
//       {/* Heading */}
//       <h1 className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-sky-500 max-w-full mx-auto text-3xl md:text-4xl lg:text-[50px] font-bold leading-tight mb-0">
//   {title}
// </h1>

// <p className="max-w-3xl mx-auto text-sm md:text-lg mt-2 font-medium text-gray-500">
//   {description}
// </p>


//       {/* Cards */}
//      <div className="flex justify-center items-start gap-6 p-6 md:p-10 flex-wrap">
//   {cards.map((card, index) => (
//     <div
//       key={index}
//       className="bg-gradient-to-r from-cyan-300 to-blue-300 rounded-3xl h-[360px] p-6 md:p-8 max-[640px]:h-auto
//                  w-full sm:w-[calc(50%-0.75rem)] lg:w-[22rem] 
//                  shadow-md text-center transition-all duration-300 
//                  hover:-translate-y-2 hover:shadow-xl"
//     >
//       <h2 className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-sky-500 text-xl md:text-2xl lg:text-3xl font-[500] font-sans mb-3">
//         {card.title}
//       </h2>
//       <p className="text-white text-sm md:text-base leading-relaxed font-semibold">
//         {card.text}
//       </p>
//     </div>
//   ))}

//   {/* Button */}
//   {buttonText && (
//     <div className="w-full flex justify-center mt-8">
//       <button className="bg-gradient-to-r from-blue-600 to-sky-500 text-white rounded-full py-3 md:py-4 font-sans w-[12rem] md:w-[15rem] text-base md:text-xl font-medium hover:bg-blue-700 transition">
//         {buttonText}
//       </button>
//     </div>
//   )}
// </div>

//     </div>
//   );
// };

// export default WhyWorkSection;




import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";

gsap.registerPlugin(ScrollTrigger);

const WhyWorkSection = ({ title, description, cards, buttonText,cardHeight = "h-auto", }) => {
  const sectionRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(".whywork-title", {
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 80%",
          toggleActions: "play none none none",
        },
        opacity: 0,
        y: 40,
        duration: 1,
        ease: "power3.out",
      });

      gsap.from(".whywork-desc", {
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 78%",
          toggleActions: "play none none none",
        },
        opacity: 0,
        y: 30,
        duration: 1,
        delay: 0.2,
        ease: "power3.out",
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <div ref={sectionRef} className="font-sans text-center p-6 md:p-10 mt-10">
      {/* Heading */}
      <h1 className="whywork-title text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-sky-500 max-w-full mx-auto text-3xl md:text-4xl lg:text-[50px] font-bold leading-tight mb-0">
        {title}
      </h1>

      <p className="whywork-desc max-w-2xl mx-auto text-sm md:text-lg mt-2 font-medium ">
        {description}
      </p>

      {/* Cards */}
      <div className="mt-10 max-w-7xl mx-auto overflow-hidden">
        {cards.length > 3 ? (
          <Swiper
            spaceBetween={20}
            slidesPerView={1.1}
            breakpoints={{
              640: { slidesPerView: 2 },
              1024: { slidesPerView: 3 },
            }}
            autoplay={{
              delay: 2000,
              disableOnInteraction: false,
            }}
            loop
            modules={[Autoplay]}
          >
            {cards.map((card, index) => (
              <SwiperSlide key={index}>
                <div className={`bg-gradient-to-r from-cyan-300 to-blue-300 rounded-3xl ${cardHeight} p-6 md:p-8 text-center transition-all duration-300 hover:-translate-y-2`}>
                  <h2 className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-sky-500 text-xl md:text-xl lg:text-2xl font-[500] mb-3">
                    {card.title}
                  </h2>
                  <p className="text-white text-sm md:text-base leading-relaxed font-semibold">
                    {card.text}
                  </p>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        ) : (
          <div className="flex justify-center items-start gap-6 flex-wrap">
            {cards.map((card, index) => (
              <div
                key={index}
                className="bg-gradient-to-r from-cyan-300 to-blue-300 rounded-3xl h-[360px] p-6 md:p-8 w-full sm:w-[calc(50%-0.75rem)] lg:w-[22rem] shadow-md text-center transition-all duration-300 hover:-translate-y-2 hover:shadow-xl"
              >
                <h2 className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-sky-500 text-xl md:text-2xl lg:text-3xl font-[500] mb-3">
                  {card.title}
                </h2>
                <p className="text-white text-sm md:text-base leading-relaxed font-semibold">
                  {card.text}
                </p>
              </div>
            ))}
          </div>
        )}
      </div>

      {/* Button */}
      {buttonText && (
        <div className="w-full flex justify-center mt-8">
          <button className="bg-gradient-to-r from-blue-600 to-sky-500 text-white rounded-full py-3 md:py-4 font-sans w-[12rem] md:w-[15rem] text-base md:text-base font-medium hover:bg-blue-700 transition">
            {buttonText}
          </button>
        </div>
      )}
    </div>
  );
};

export default WhyWorkSection;
