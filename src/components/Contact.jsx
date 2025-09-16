// import React from "react";

// export default function Contact({
//   heading = (
//     <>
//       Not sure what you need yet? <br /> That’s okay.
//     </>
//   ),
//   subText = "Tell us where you’re stuck, and",
//   highlightText = "we’ll help you figure it out.",
//   buttonText = "Get Started",
// }) {
//   return (
//     <section className="
//     relative 
//     bg-gradient-to-b from-white to-[#0a0a0a]
//     max-[770px]:bg-[linear-gradient(to_bottom,_white_50%,_#0a0a0a_40%)]
//   ">
//      <div className="max-w-[1800px] mx-auto">
//          <div className="relative  flex flex-col  mx-auto lg:flex-row  max-[1000px]:mt-[50px] max-[840px]:mt-[-100px]">
//         <div className="flex-1 ">
//           <div className="bg-black  text-white border-none rounded-[60px] p-20 py-14 w-[96%] mx-auto max-[770px]:text-center">
//         <h2 className="text-4xl max-w-3xl max-[1200px]:text-4xl max-[980px]:text-2xl font-bold leading-snug max-[770px]:text-4xl">
//         {heading}
//       </h2>
//       <p className="mt-4 text-gray-300 max-w-2xl text-lg max-[1035px]:text-[13px] max-[980px]:text-[10px] max-[770px]:text-2xl">
//         {subText} <span className="font-semibold">{highlightText}</span>
//       </p>
//       <button className="mt-6 px-6 py-3 bg-blue-800 text-white font-semibold rounded-4xl shadow-md hover:bg-blue-800 transition">
//         {buttonText}
//       </button>
//     </div>

//           {/* Bottom Black Box */}
//           <div className=" relative z-0 max-[770px]:bg-black  text-white max-[960px]:px-[8px] max-[1200px]:px-[30px] px-29 py-12 w-full 
//           max-[770px]:flex max-[770px]:flex-col max-[770px]:items-center max-[770px]:justify-center 
//           max-[770px]:mt-[300px]
         
//           ">
//             <h2 className="text-6xl max-[1200px]:text-4xl font-bold text-blue-600 ">
//               Get In Touch <br /> With Us Today!
//             </h2>
//             <p className="mt-4 text-lg font-bold text-gray-300 w-[40%] max-[770px]:w-full max-[770px]:text-center leading-relaxed">
//               We’d love to hear from you and discuss how we can help your
//               business grow. Feel free to reach out for any inquiries, ideas, or
//               collaborations. We are here to support you in your brand journey!
//             </p>
//             <div className="mt-6">
//               <img
//                 src="https://diggitglobal.com/assets/images/vector_5.png"
//                 alt="circuit design"
//                 className="w-[450px] max-[1200px]:w-[370px] max-[1033px]:w-[350px] max-[982px]:w-[310px]"
//               />
//             </div>
//           </div>
//         </div>

//         <div
//           className="absolute right-4 top-1/2 -translate-y-1/2 -translate-x-[100px] 
//   max-[1300px]:right-0 max-[1300px]:-translate-x-[10px] 
//   flex justify-center items-center z-30 
//   max-[770px]:static max-[770px]:flex-col max-[770px]:translate-x-0 max-[770px]:translate-y-0 max-[770px]:mt-[-831px] max-[770px]:z-50
//  max-[770px]:right-auto  max-[572px]:mt-[-861px] max-[433px]:mt-[-890px] max-[425px]:mt-[-820px]"
//         >
//           {/* Robot */}
//           <img
//             src="https://diggitglobal.com/assets/images/vector_4.png"
//             alt="Robot"
//             className="absolute -top-32 right-1/2 translate-x-1/2 z-40 w-[450px] 
//     max-[770px]:static max-[770px]:translate-x-0 max-[770px]:top-auto max-[770px]:w-[420px] max-[770px]:mb-6 max-[425px]:w-[320px]"
//           />

//           {/* Form */}
//           <div
//             className="bg-white rounded-4xl shadow-2xl w-[650px] 
//     max-[1133px]:w-[550px] max-[938px]:w-[450px] 
//     max-[770px]:w-[97%] max-[770px]:px-4 
//     p-10 pt-14 relative z-30 mt-[183px] max-[770px]:mt-0 max-[770px]:mt-[160px] max-[572px]:mt-[180px] max-[432px]:mt-[200px] max-[425px]:mt-[230px]"
//           >
//             <h3 className="text-2xl font-bold text-center mb-8 max-[1000px]:text-xl">
//               Contact Us
//             </h3>

//             <form className="space-y-6">
//               <input
//                 type="text"
//                 placeholder="Name"
//                 className="w-full rounded-full bg-gray-100 px-6 py-4 focus:outline-none focus:ring-2 focus:ring-blue-500 
//         max-[1000px]:px-4 max-[1000px]:py-3 max-[1000px]:text-sm"
//               />
//               <input
//                 type="email"
//                 placeholder="Email"
//                 className="w-full rounded-full bg-gray-100 px-6 py-4 focus:outline-none focus:ring-2 focus:ring-blue-500 
//         max-[1000px]:px-4 max-[1000px]:py-3 max-[1000px]:text-sm"
//               />
//               <input
//                 type="text"
//                 placeholder="Phone"
//                 className="w-full rounded-full bg-gray-100 px-6 py-4 focus:outline-none focus:ring-2 focus:ring-blue-500 
//         max-[1000px]:px-4 max-[1000px]:py-3 max-[1000px]:text-sm"
//               />
//               <input
//                 type="text"
//                 placeholder="Organization"
//                 className="w-full rounded-full bg-gray-100 px-6 py-4 focus:outline-none focus:ring-2 focus:ring-blue-500 
//         max-[1000px]:px-4 max-[1000px]:py-3 max-[1000px]:text-sm"
//               />
//               <textarea
//                 placeholder="Message"
//                 rows={5}
//                 className="w-full rounded-2xl bg-gray-100 px-6 py-4 resize-none focus:outline-none focus:ring-2 focus:ring-blue-500 
//         max-[1000px]:px-4 max-[1000px]:py-3 max-[1000px]:text-sm"
//               ></textarea>

//               <button
//                 className="w-full bg-blue-800 text-white py-4 rounded-full font-semibold hover:bg-blue-800 transition 
//         max-[1000px]:py-3 max-[1000px]:text-sm"
//               >
//                 Get free consultation
//               </button>
//             </form>
//           </div>
//         </div>
//       </div>
//      </div>
//     </section>
//   );
// }



import React, { useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function Contact({
  heading = (
    <>
      Not sure what you need yet? <br /> That’s okay.
    </>
  ),
  subText = "Tell us where you’re stuck, and",
  highlightText = "we’ll help you figure it out.",
  buttonText = "Get Started",
}) {
  const sectionRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Animate heading
      gsap.from(".contact-heading", {
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 80%",
        },
        opacity: 0,
        y: 40,
        duration: 1,
        ease: "power3.out",
      });

      // Animate subText
      gsap.from(".contact-subtext", {
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 78%",
        },
        opacity: 0,
        y: 30,
        duration: 1,
        delay: 0.2,
        ease: "power3.out",
      });

      // Animate button
      gsap.from(".contact-button", {
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 75%",
        },
        opacity: 0,
        y: 20,
        duration: 1,
        delay: 0.4,
        ease: "power3.out",
      });

      // Animate text ABOVE vector_5 (heading and paragraph)
      gsap.from(".vector-heading", {
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 85%",
        },
        opacity: 0,
        y: 40,
        duration: 1,
        delay: 0.3,
        ease: "power3.out",
      });

      gsap.from(".vector-paragraph", {
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 85%",
        },
        opacity: 0,
        y: 30,
        duration: 1,
        delay: 0.5,
        ease: "power3.out",
      });

      // Animate vector_5 image
      gsap.from(".contact-vector5", {
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 85%",
        },
        scale: 0.85,
        opacity: 0,
        duration: 1,
        delay: 0.7,
        ease: "power3.out",
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative bg-gradient-to-b from-white to-[#101B30]
        max-[770px]:bg-[linear-gradient(to_bottom,_white_50%,_#0a0a0a_40%)]"
    >
      <div className="max-w-[1800px] mx-auto">
        <div className="relative flex flex-col mx-auto lg:flex-row max-[1000px]:mt-[50px] ">
          <div className="flex-1">
            <div className="bg-gradient-to-r from-cyan-300 to-blue-300
 text-white border-none rounded-[60px] p-20 py-14 w-[96%] mx-auto max-[770px]:text-center">
              <h2 className="contact-heading text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-sky-500  max-[1260px]:w-[600px] text-4xl max-[1190px]:w-[450px] max-[1050px]:w-[350px] max-w-3xl max-[1200px]:text-4xl max-[980px]:text-2xl max-[770px]:w-[100%] font-bold leading-snug max-[770px]:text-4xl">
                {heading}
              </h2>
              <p className=" max-[770px]:w-[100%] contact-subtext mt-4 text-white max-[1260px]:w-[600px] max-[1050px]:w-[350px] max-[1190px]:w-[450px] max-w-2xl text-lg  max-[980px]:text-[10px] max-[770px]:text-2xl">
                {subText} <span className="font-semibold">{highlightText}</span>
              </p>
              <button className="contact-button mt-6 px-6 py-3 bg-gradient-to-r from-blue-600 to-sky-500 text-white font-semibold rounded-4xl shadow-md hover:bg-blue-800 transition">
                {buttonText}
              </button>
            </div>

            {/* 👇 Bottom Black Box */}
            <div
              className="relative z-0 max-[770px]:bg-black text-white max-[960px]:px-[8px] max-[1200px]:px-[30px] px-29 py-12 w-full 
                max-[770px]:flex max-[770px]:flex-col max-[770px]:items-center max-[770px]:justify-center 
                max-[770px]:mt-[300px]"
            >
              <h2 className="vector-heading text-6xl max-[1200px]:text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-sky-500">
                Get In Touch <br /> With Us Today!
              </h2>
              <p className="vector-paragraph mt-4 text-lg font-bold text-gray-300 w-[40%] max-[770px]:w-full max-[770px]:text-center leading-relaxed">
                We’d love to hear from you and discuss how we can help your
                business grow. Feel free to reach out for any inquiries, ideas,
                or collaborations. We are here to support you in your brand
                journey!
              </p>

              {/* 👇 Animated Image */}
              <div className="mt-6">
                <img
                  src="https://diggitglobal.com/assets/images/vector_5.png"
                  alt="circuit design"
                  className="contact-vector5 w-[450px] max-[1200px]:w-[370px] max-[1033px]:w-[350px] max-[982px]:w-[310px]"
                />
              </div>
            </div>
          </div>

          {/* 👇 Robot + Form (unchanged) */}
          <div
            className="absolute right-4 top-1/2 -translate-y-1/2 -translate-x-[100px] 
              max-[1300px]:right-0 max-[1300px]:-translate-x-[10px] 
              flex justify-center items-center z-30 
              max-[770px]:static max-[770px]:flex-col max-[770px]:translate-x-0 max-[770px]:translate-y-0 max-[770px]:mt-[-831px] max-[770px]:z-50
              max-[770px]:right-auto  max-[572px]:mt-[-861px] max-[433px]:mt-[-890px] max-[425px]:mt-[-820px]"
          >
            <img
              src="https://diggitglobal.com/assets/images/vector_4.png"
              alt="Robot"
              className="absolute -top-32 right-1/2 translate-x-1/2 z-40 w-[450px] 
                max-[770px]:static max-[770px]:translate-x-0 max-[770px]:top-auto max-[770px]:w-[420px] max-[770px]:mb-6 max-[425px]:w-[320px]"
            />

            {/* Form */}
            <div
            className="bg-white rounded-4xl shadow-2xl w-[650px] max-[1190px]:w-[550px] max-[1050px]:w-[450px]
    max-[1133px]:w-[550px] max-[938px]:w-[450px] 
    max-[770px]:w-[97%] max-[770px]:px-4 
    p-10 pt-14 relative z-30 mt-[183px] max-[770px]:mt-0 max-[770px]:mt-[160px] max-[572px]:mt-[180px] max-[432px]:mt-[200px] max-[425px]:mt-[230px]"
          >
            <h3 className="text-2xl text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-sky-500 font-bold text-center mb-8 max-[1000px]:text-xl">
              Contact Us
            </h3>

            <form className="space-y-6">
              <input
                type="text"
                placeholder="Name"
                className="w-full rounded-full bg-gray-100 px-6 py-4 focus:outline-none focus:ring-2 focus:ring-blue-500 
        max-[1000px]:px-4 max-[1000px]:py-3 max-[1000px]:text-sm"
              />
              <input
                type="email"
                placeholder="Email"
                className="w-full rounded-full bg-gray-100 px-6 py-4 focus:outline-none focus:ring-2 focus:ring-blue-500 
        max-[1000px]:px-4 max-[1000px]:py-3 max-[1000px]:text-sm"
              />
              <input
                type="text"
                placeholder="Phone"
                className="w-full rounded-full bg-gray-100 px-6 py-4 focus:outline-none focus:ring-2 focus:ring-blue-500 
        max-[1000px]:px-4 max-[1000px]:py-3 max-[1000px]:text-sm"
              />
              <input
                type="text"
                placeholder="Organization"
                className="w-full rounded-full bg-gray-100 px-6 py-4 focus:outline-none focus:ring-2 focus:ring-blue-500 
        max-[1000px]:px-4 max-[1000px]:py-3 max-[1000px]:text-sm"
              />
              <textarea
                placeholder="Message"
                rows={5}
                className="w-full rounded-2xl bg-gray-100 px-6 py-4 resize-none focus:outline-none focus:ring-2 focus:ring-blue-500 
        max-[1000px]:px-4 max-[1000px]:py-3 max-[1000px]:text-sm"
              ></textarea>

              <button
                className="w-full bg-gradient-to-r from-blue-600 to-sky-500 text-white py-4 rounded-full font-semibold hover:bg-blue-800 transition 
        max-[1000px]:py-3 max-[1000px]:text-sm"
              >
                Get free consultation
              </button>
            </form>
          </div>
          </div>
        </div>
      </div>
    </section>
  );
}
