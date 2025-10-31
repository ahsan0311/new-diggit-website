// import React, { useState, useRef, useEffect } from "react";

// const tabsData = [
//   {
//     title: "Cloud Computing",
//     img: "https://diggitglobal.com/assets/images/icon_2.png",
//     content:
//       "We design and deploy scalable cloud systems that grow with your business. From infrastructure setup to seamless application migration, our cloud solutions are secure, flexible, and cost-effective. Built as part of our Agile Software Solutions Stack, these services align closely with our Business Management Consulting goals, ensuring that technology not only supports but also accelerates your business growth.",
//   },
//   {
//     title: "Custom Dashboard",
//     img: "https://diggitglobal.com/assets/images/icon_3.png",
//     content:
//       "We provide visual clarity across every function of your business with real-time performance tracking and interactive BI dashboards. As a core part of dynamic software solutions and custom-integrated business systems, our dashboards transform complex data into simple, actionable insights that empower smarter decision-making.",
//   },
//   {
//     title: "ERP & CRM Integrations",
//     img: "https://diggitglobal.com/assets/images/icon_4.png",
//     content:
//       "We unify your customer, sales, and operations data into one secure system, ensuring a seamless flow of information across departments. By connecting teams through our integrated business solutions, we eliminate data silos, improve collaboration, and help your business operate with clarity and efficiency.",
//   },
//   {
//     title: "UI/UX Design",
//     img: "https://diggitglobal.com/assets/images/icon_5.png",
//     content:
//       "We craft digital platforms that prioritize speed, simplicity, and seamless engagement. By transforming clunky tools into intuitive, user-friendly systems, our UI/UX design gives your business an often-overlooked edge, making every interaction smarter, smoother, and more impactful.",
//   },
//   {
//     title: "Website Development",
//     img: "https://diggitglobal.com/assets/images/icon_6.png",
//     content:
//       "We go beyond standard website development to create responsive, conversion-driven sites that truly represent your brand. Every website we build is designed for seamless performance across all devices and powered by agile software solutions, ensuring your online presence works as hard as your business does.",
//   },
// ];

// const SolutionsTabs = () => {
//   const [activeIndex, setActiveIndex] = useState(0);
//   const tabRefs = useRef([]);
//   const underlineRef = useRef(null);

//   useEffect(() => {
//     const currentTab = tabRefs.current[activeIndex];
//     const underline = underlineRef.current;

//     if (currentTab && underline) {
//       const { offsetLeft, offsetWidth } = currentTab;
//       underline.style.left = `${offsetLeft}px`;
//       underline.style.width = `${offsetWidth}px`;
//     }
//   }, [activeIndex]);

//   return (
//     <div className="bg-gradient-to-r from-cyan-300 to-blue-300 rounded-4xl m-5">

//       <div className="max-w-[1400px] mx-auto text-white p-8 rounded-3xl">

//         <div className="relative overflow-x-auto max-w-7xl mx-auto scrollbar-hide">
//           <div className="inline-flex  min-w-full border-b-2 border-gray-700 relative ">
//             <div className="flex  justify-between w-full ">
//               {tabsData.map((tab, index) => {
//                 const [firstWord, ...restWords] = tab.title.split(" ");
//                 const restTitle = restWords.join(" ");
//                 return (
//                   <div
//                     key={index}
//                     onClick={() => setActiveIndex(index)}
//                     ref={(el) => (tabRefs.current[index] = el)}
//                     className={`flex-shrink-0 flex flex-col items-center justify-center cursor-pointer mb-5 px-2 py-4 transition-all duration-300 ${
//                       activeIndex === index ? "text-white" : "text-white"
//                     }`}
//                     style={{ minWidth: "160px" }}
//                   >
//                     <img
//                       src={tab.img}
//                       alt={tab.title}
//                       className="w-13 h-13 mb-2 object-contain"
//                     />
//                     <div className="text-center text-base md:text-lg font-semibold w-full whitespace-normal">
//                       <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-sky-500">{firstWord}</span>
//                       <br />
//                       <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-sky-500">{restTitle}</span>
//                     </div>
//                   </div>
//                 );
//               })}
//             </div> 

//             {/* Underline animation */}
//             <div
//               ref={underlineRef}
//               className="absolute bottom-0 h-0.5 bg-[#00317B] rounded-full transition-all duration-300"
//               style={{ left: 0, width: 0 }}
//             />
//           </div>
//         </div>

//         {/* Tab content */}
//         <div className="mt-10 grid grid-cols-1 md:grid-cols-[1fr_1.5fr] gap-4 md:gap-10 items-start px-4 sm:px-10">
//           <div className="p-4 md:p-8 rounded-2xl h-full text-left">
//             <h2 className="text-3xl md:text-4xl font-bold leading-tight text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-sky-500">
//               {tabsData[activeIndex].title}
//             </h2>
//           </div>

//           <div className="flex justify-center">
//             <div className="p-4 md:p-8 rounded-2xl flex flex-col justify-between h-full max-w-3xl w-full">
//               <p className="text-white text-base md:text-lg leading-relaxed mb-6 text-left">
//                 {tabsData[activeIndex].content}
//               </p>

//               <div className="text-center md:text-right">
//                 <button className="bg-gradient-to-r from-blue-600 to-sky-500 text-white px-[60px] py-3 rounded-full hover:bg-blue-700 text-[20px]">
//                   Explore
//                 </button>
//               </div>
//             </div>
//           </div>
//         </div>

//       </div>
//     </div>
//   );
// };

// export default SolutionsTabs;



// import React, { useState, useRef, useEffect } from "react";

// const tabsData = [
//   {
//     title: "Cloud Computing",
//     img: "https://diggitglobal.com/assets/images/icon_2.png",
//     content:
//       "We design and deploy scalable cloud systems that grow with your business. From infrastructure setup to seamless application migration, our cloud solutions are secure, flexible, and cost-effective. Built as part of our Agile Software Solutions Stack, these services align closely with our Business Management Consulting goals, ensuring that technology not only supports but also accelerates your business growth.",
//   },
//   {
//     title: "Custom Dashboard",
//     img: "https://diggitglobal.com/assets/images/icon_3.png",
//     content:
//       "We provide visual clarity across every function of your business with real-time performance tracking and interactive BI dashboards. As a core part of dynamic software solutions and custom-integrated business systems, our dashboards transform complex data into simple, actionable insights that empower smarter decision-making.",
//   },
//   {
//     title: "ERP & CRM Integrations",
//     img: "https://diggitglobal.com/assets/images/icon_4.png",
//     content:
//       "We unify your customer, sales, and operations data into one secure system, ensuring a seamless flow of information across departments. By connecting teams through our integrated business solutions, we eliminate data silos, improve collaboration, and help your business operate with clarity and efficiency.",
//   },
//   {
//     title: "UI/UX Design",
//     img: "https://diggitglobal.com/assets/images/icon_5.png",
//     content:
//       "We craft digital platforms that prioritize speed, simplicity, and seamless engagement. By transforming clunky tools into intuitive, user-friendly systems, our UI/UX design gives your business an often-overlooked edge, making every interaction smarter, smoother, and more impactful.",
//   },
//   {
//     title: "Website Development",
//     img: "https://diggitglobal.com/assets/images/icon_6.png",
//     content:
//       "We go beyond standard website development to create responsive, conversion-driven sites that truly represent your brand. Every website we build is designed for seamless performance across all devices and powered by agile software solutions, ensuring your online presence works as hard as your business does.",
//   },
// ]

// const SolutionsTabs = () => {
//   const [activeIndex, setActiveIndex] = useState(0);
//   const tabRefs = useRef([]);
//   const underlineRef = useRef(null);

//   useEffect(() => {
//     const currentTab = tabRefs.current[activeIndex];
//     const underline = underlineRef.current;

//     if (currentTab && underline) {
//       const { offsetLeft, offsetWidth } = currentTab;
//       underline.style.left = `${offsetLeft}px`;
//       underline.style.width = `${offsetWidth}px`;
//     }
//   }, [activeIndex]);

//   return (
//     <div className="w-full flex justify-center px-3 md:px-6">
//   <div className="max-w-7xl w-full bg-gradient-to-r from-cyan-300 to-blue-300 rounded-3xl m-3 md:m-6">
//     <div className="text-white p-4 md:p-6 rounded-2xl">
//       {/* Tabs Header */}
//       <div className="relative overflow-x-auto max-w-full scrollbar-hide">
//         <div className="inline-flex w-full border-b border-gray-700 relative">
//           <div className="flex justify-between w-full">
//             {tabsData.map((tab, index) => {
//               const [firstWord, ...restWords] = tab.title.split(" ");
//               const restTitle = restWords.join(" ");
//               return (
//                 <div
//                   key={index}
//                   onClick={() => setActiveIndex(index)}
//                   ref={(el) => (tabRefs.current[index] = el)}
//                   className={`flex-shrink-0 flex flex-col items-center justify-center cursor-pointer mb-3 px-2 py-2 transition-all duration-300 ${
//                     activeIndex === index ? "text-white" : "text-white"
//                   }`}
//                   style={{ minWidth: "120px" }}
//                 >
//                   <img
//                     src={tab.img}
//                     alt={tab.title}
//                     className="w-10 h-10 mb-1 object-contain"
//                   />
//                   <div className="text-center text-sm md:text-base font-semibold w-full whitespace-normal leading-tight">
//                     <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-sky-500">
//                       {firstWord}
//                     </span>
//                     <br />
//                     <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-sky-500">
//                       {restTitle}
//                     </span>
//                   </div>
//                 </div>
//               );
//             })}
//           </div>

//           {/* Underline */}
//           <div
//             ref={underlineRef}
//             className="absolute bottom-0 h-0.5 bg-[#00317B] rounded-full transition-all duration-300"
//             style={{ left: 0, width: 0 }}
//           />
//         </div>
//       </div>

//       {/* Tab Content */}
//       <div className="mt-6 grid grid-cols-1 md:grid-cols-[1fr_1.5fr] gap-4 md:gap-8 items-start px-2 md:px-6">
//         <div className="p-3 md:p-5 rounded-xl text-left">
//           <h2 className="text-2xl md:text-3xl font-bold leading-tight text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-sky-500">
//             {tabsData[activeIndex].title}
//           </h2>
//         </div>

//         <div className="flex justify-center">
//           <div className="p-3 md:p-5 rounded-xl flex flex-col justify-between h-full max-w-2xl w-full">
//             <p className="text-white text-sm md:text-base leading-relaxed mb-4 text-left">
//               {tabsData[activeIndex].content}
//             </p>
//             <div className="text-center md:text-right">
//               <button className="bg-gradient-to-r from-blue-600 to-sky-500 text-white px-6 py-2 md:px-8 md:py-2.5 rounded-full hover:opacity-90 text-sm md:text-base">
//                 Explore
//               </button>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   </div>
// </div>

//   );
// };

// export default SolutionsTabs;



import React, { useState, useRef, useEffect } from "react";
import { Link } from "react-router-dom"; 

const tabsData = [
  {
    title: "Cloud Computing",
    img: "https://diggitglobal.com/assets/images/icon_2.png",
    content:
      "We design and deploy scalable cloud systems that grow with your business. From infrastructure setup to seamless application migration, our cloud solutions are secure, flexible, and cost-effective. Built as part of our Agile Software Solutions Stack, these services align closely with our Business Management Consulting goals, ensuring that technology not only supports but also accelerates your business growth.",
    path: "/contact", 
  },
  {
    title: "Custom Dashboard",
    img: "https://diggitglobal.com/assets/images/icon_3.png",
    content:
      "We provide visual clarity across every function of your business with real-time performance tracking and interactive BI dashboards. As a core part of dynamic software solutions and custom-integrated business systems, our dashboards transform complex data into simple, actionable insights that empower smarter decision-making.",
    path: "/contact",
  },
  {
    title: "ERP & CRM Integrations",
    img: "https://diggitglobal.com/assets/images/icon_4.png",
    content:
      "We unify your customer, sales, and operations data into one secure system, ensuring a seamless flow of information across departments. By connecting teams through our integrated business solutions, we eliminate data silos, improve collaboration, and help your business operate with clarity and efficiency.",
    path: "/contact",
  },
  {
    title: "UI/UX Design",
    img: "https://diggitglobal.com/assets/images/icon_5.png",
    content:
      "We craft digital platforms that prioritize speed, simplicity, and seamless engagement. By transforming clunky tools into intuitive, user-friendly systems, our UI/UX design gives your business an often-overlooked edge, making every interaction smarter, smoother, and more impactful.",
    path: "/contact",
  },
  {
    title: "Website Development",
    img: "https://diggitglobal.com/assets/images/icon_6.png",
    content:
      "We go beyond standard website development to create responsive, conversion-driven sites that truly represent your brand. Every website we build is designed for seamless performance across all devices and powered by agile software solutions, ensuring your online presence works as hard as your business does.",
    path: "/contact", 
  },
];

const SolutionsTabs = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const tabRefs = useRef([]);
  const underlineRef = useRef(null);

  useEffect(() => {
    const currentTab = tabRefs.current[activeIndex];
    const underline = underlineRef.current;

    if (currentTab && underline) {
      const { offsetLeft, offsetWidth } = currentTab;
      underline.style.left = `${offsetLeft}px`;
      underline.style.width = `${offsetWidth}px`;
    }
  }, [activeIndex]);

  return (
    <div className="w-full flex justify-center px-3 md:px-6">
      <div className="max-w-7xl w-full bg-gradient-to-r from-cyan-300 to-blue-300 rounded-3xl m-3 md:m-6">
        <div className="text-white p-4 md:p-6 rounded-2xl">
          {/* Tabs Header */}
          <div className="relative overflow-x-auto max-w-full scrollbar-hide">
            <div className="inline-flex w-full border-b border-gray-700 relative">
              <div className="flex justify-between w-full">
                {tabsData.map((tab, index) => {
                  const [firstWord, ...restWords] = tab.title.split(" ");
                  const restTitle = restWords.join(" ");
                  return (
                    <div
                      key={index}
                      onClick={() => setActiveIndex(index)}
                      ref={(el) => (tabRefs.current[index] = el)}
                      className={`flex-shrink-0 flex flex-col items-center justify-center cursor-pointer mb-3 px-2 py-2 transition-all duration-300`}
                      style={{ minWidth: "120px" }}
                    >
                      <img
                        src={tab.img}
                        alt={tab.title}
                        className="w-10 h-10 mb-1 object-contain"
                      />
                      <div className="text-center text-sm md:text-base font-semibold w-full whitespace-normal leading-tight">
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-sky-500">
                          {firstWord}
                        </span>
                        <br />
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-sky-500">
                          {restTitle}
                        </span>
                      </div>
                    </div>
                  );
                })}
              </div>

              {/* Underline */}
              <div
                ref={underlineRef}
                className="absolute bottom-0 h-0.5 bg-[#00317B] rounded-full transition-all duration-300"
                style={{ left: 0, width: 0 }}
              />
            </div>
          </div>

          {/* Tab Content */}
          <div className="mt-6 grid grid-cols-1 md:grid-cols-[1fr_1.5fr] gap-4 md:gap-8 items-start px-2 md:px-6">
            <div className="p-3 md:p-5 rounded-xl text-left">
              <h2 className="text-2xl md:text-3xl font-bold leading-tight text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-sky-500">
                {tabsData[activeIndex].title}
              </h2>
            </div>

            <div className="flex justify-center">
              <div className="p-3 md:p-5 rounded-xl flex flex-col justify-between h-full max-w-2xl w-full">
                <p className="text-white text-sm md:text-base leading-relaxed mb-4 text-left">
                  {tabsData[activeIndex].content}
                </p>

                {/* <div className="text-center md:text-right">
                  <Link
                    to={tabsData[activeIndex].path}
                    className="bg-gradient-to-r from-blue-600 to-sky-500 text-white px-6 py-2 md:px-8 md:py-2.5 rounded-full hover:opacity-90 text-sm md:text-base inline-block"
                  >
                    Explore
                  </Link>
                </div> */}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SolutionsTabs;
