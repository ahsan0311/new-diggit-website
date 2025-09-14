// import React from "react";
// import "../../style/WorkCards.css"; // custom shine effect CSS

// const steps = [
//   {
//     id: "1",
//     title: "Understand & Align",
//     image: "https://diggitglobal.com/assets/images/num_1.svg", // Replace with actual icon
//     description:
//       "We start by learning how your business works, what’s slowing you down, and where software can make a real difference. This is also where our software development consulting services help shape the right strategy",
//   },
//   {
//     id: "2",
//     title: "Design What Fits",
//     image: "https://diggitglobal.com/assets/images/num_2.svg",
//     description:
//       "We create clean, user-friendly interfaces and map out features that match your workflow, not just what looks good in a demo.",
//   },
//   {
//     id: "3",
//     title: "Build & Test",
//     image: "https://diggitglobal.com/assets/images/num_3.svg",
//     description:
//       "Using modern tools and proven frameworks, we develop your product with scalability and performance in mind. Whether it’s an MVP, ERP platform, or IoT solution, we keep things stable and flexible.",
//   },
//   {
//     id: "4",
//     title: "Launch & Support",
//     image: "https://diggitglobal.com/assets/images/num_4.svg",
//     description:
//       "Once your custom software goes live, we stick around. We handle updates, fixes, and improvements, so your system keeps running as your business grows.",
//   },
// ];

// export default function HowWeWork() {
//   return (
//    <section className=" home-work-cl bg-[#00317B] text-white rounded-[30px] max-w-7xl mx-auto my-10 flex justify-between items-center py-6 px-2 md:p-10 relative max-[1279px]:w-[96%] ">

//       {/* Left Side Image */}
//       <div className="w-[30%]  max-[1105px]:w-[400px] how_we_work_mob_app_img">
//         <img
//           src="https://diggitglobal.com/assets/images/how_we_work_mob_app_img.png"
//           alt="How We Work"
//           className="rounded-[30px] w-[500px] h-[90%]  absolute top-10 left-[-80px] z-[9999] max-[1441px]:w-[450px] max-[1441px]:left-[-50px]
//     max-[1381px]:w-[400px] max-[1381px]:left-[-20px]
//     max-[1320px]:w-[400px] max-[1320px]:left-[20px]
//     max-[1105px]:w-[400px]
    
//     max-[965px]:h-[600px]
//     max-[866px]:w-[350px]
     

//     "
//         />
//       </div>

//       {/* Right Side Content */}
//       <div className="w-[65%]  px-4 md:px-10 max-[1147px]:w-[600px] max-[996px]:w-[450px]   how-we-work ">
//         <h2 className="text-4xl font-extrabold text-[#00B2FF] mb-4 ">
//           How We Work
//         </h2>
//         <p className="text-sm md:text-base mb-6 text-white">
//           We keep the process simple, clear, and built around your goals.
//           Whether you’re launching something new or improving what’s already
//           there, <br />
//           <strong>here’s how we get it done:</strong>
//         </p>

//         <div className="space-y-4">
//           {steps.map((step) => (
//             <div
//               key={step.id}
//               className="relative group p-4 pl-24 rounded-2xl 
//   transition-all duration-300 shine-effect hover:shadow-2xl 
//   hover:bg-[#0dcaf0] w-[105%] overflow-hidden"
//             >
//               {/* Icon Image */}
//               <div className="absolute left-4 top-1/2 -translate-y-1/2 w-20 h-20 opacity-90 transition-opacity duration-500 ease-in-out z-10">
//                 <img
//                   src={step.image}
//                   alt={step.title}
//                   className="w-full h-full object-contain"
//                 />
//               </div>

//               {/* Content */}
//               <div className="relative z-20 ">
//                 <h3 className="text-xl md:text-2xl font-bold mb-1 text-white group-hover:text-white">
//                   {step.title}
//                 </h3>
//                 <p className="text-sm md:text-base text-white/90 group-hover:text-white/90">
//                   {step.description}
//                 </p>
//               </div>
//             </div>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// }


import React from "react";
import "../../style/WorkCards.css"; // custom shine effect CSS

const HowWeWork = ({
  heading = "How We Work",
  subText = `We keep the process simple, clear, and built around your goals.
  Whether you’re launching something new or improving what’s already
  there, <br /><strong>here’s how we get it done:</strong>`,
  image = "https://diggitglobal.com/assets/images/how_we_work_mob_app_img.png",
  steps = [
    {
      id: "1",
      title: "Understand & Align",
      image: "https://diggitglobal.com/assets/images/num_1.svg",
      description:
        "We start by learning how your business works, what’s slowing you down, and where software can make a real difference. This is also where our software development consulting services help shape the right strategy",
    },
    {
      id: "2",
      title: "Design What Fits",
      image: "https://diggitglobal.com/assets/images/num_2.svg",
      description:
        "We create clean, user-friendly interfaces and map out features that match your workflow, not just what looks good in a demo.",
    },
    {
      id: "3",
      title: "Build & Test",
      image: "https://diggitglobal.com/assets/images/num_3.svg",
      description:
        "Using modern tools and proven frameworks, we develop your product with scalability and performance in mind. Whether it’s an MVP, ERP platform, or IoT solution, we keep things stable and flexible.",
    },
    {
      id: "4",
      title: "Launch & Support",
      image: "https://diggitglobal.com/assets/images/num_4.svg",
      description:
        "Once your custom software goes live, we stick around. We handle updates, fixes, and improvements, so your system keeps running as your business grows.",
    },
  ],
}) => {
  return (
    <section className=" home-work-cl bg-[#00317B] text-white rounded-[30px] max-w-7xl mx-auto my-10 flex justify-between items-center py-6 px-2 md:p-10 relative max-[1279px]:w-[96%] ">

      {/* Left Side Image */}
      <div className="w-[30%] max-[1105px]:w-[400px] how_we_work_mob_app_img">
        <img
          src={image}
          alt="How We Work"
          className="rounded-[30px] w-[500px] h-[90%] absolute top-10 left-[-80px] z-[9999] 
          max-[1441px]:w-[450px] max-[1441px]:left-[-50px]
          max-[1381px]:w-[400px] max-[1381px]:left-[-20px]
          max-[1320px]:w-[400px] max-[1320px]:left-[20px]
          max-[1105px]:w-[400px]
          max-[965px]:h-[600px]
          max-[866px]:w-[350px]"
        />
      </div>

      {/* Right Side Content */}
      <div className="w-[65%] px-4 md:px-10 max-[1147px]:w-[600px] max-[996px]:w-[450px] how-we-work">
        <h2 className="text-4xl font-extrabold text-[#00B2FF] mb-4">
          {heading}
        </h2>
        <p
          className="text-sm md:text-base mb-6 text-white"
          dangerouslySetInnerHTML={{ __html: subText }}
        />

        <div className="space-y-4">
          {steps.map((step) => (
            <div
              key={step.id}
              className="relative group p-4 pl-24 rounded-2xl 
              transition-all duration-300 shine-effect hover:shadow-2xl 
              hover:bg-[#0dcaf0] w-[105%] overflow-hidden"
            >
              {/* Icon Image */}
              <div className="absolute left-4 top-1/2 -translate-y-1/2 w-20 h-20 opacity-90 transition-opacity duration-500 ease-in-out z-10">
                <img
                  src={step.image}
                  alt={step.title}
                  className="w-full h-full object-contain"
                />
              </div>

              {/* Content */}
              <div className="relative z-20">
                <h3 className="text-xl md:text-2xl font-bold mb-1 text-white group-hover:text-white">
                  {step.title}
                </h3>
                <p className="text-sm md:text-base text-white/90 group-hover:text-white/90">
                  {step.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowWeWork;
