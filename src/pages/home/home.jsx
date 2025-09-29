import React, { useEffect, useRef } from "react";
import { ReactTyped } from "react-typed";
import TextContent from "../../components/TextContent";
import SolutionsTabs from "../../components/SoluitonTab";
import Card from "../../components/Card";
import NoMoreSilos from "../../components/NoMoreSilos";
import WhoWeBuildFor from "../../components/WhoWeBuildFor";
import HowWeWork from "../../components/HowWeWork";
import Contact from "../../components/Contact";

const Home = () => {
  const videoRef = useRef(null);

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.play().catch(() => {
        videoRef.current.muted = true;
        videoRef.current.play().catch(() => {});
      });
    }
  }, []);

  return (
    <>
      <div className="relative min-h-screen overflow-hidden">
        <div className="absolute inset-0 w-full h-full z-0 overflow-hidden">
          <video
  ref={videoRef}
  autoPlay
  muted
  loop
  playsInline
  className="w-full h-full object-cover rounded-b-[4rem] md:rounded-none"
  poster="data:image/gif,AAAA"
>
  <source
    src="https://res.cloudinary.com/dqngkcjxg/video/upload/3148317-hd_1920_1080_30fps_liexvp.mp4"
    type="video/mp4"
  />
  Your browser does not support the video tag.
</video>

        </div>

       <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-black to-transparent z-10"></div>



        <div className="absolute bottom-[-40px] left-0 w-full h-[200px] z-10 pointer-events-none">
          <div className="w-full h-full bg-gradient-to-t from-white via-white/60 to-transparent"></div>
        </div>

        <div className="relative z-10 min-h-screen flex items-start pt-32 px-4 sm:px-6 md:pl-16 lg:pl-24 xl:pl-32 text-white">
  <div className="text-center md:text-left max-w-3xl mt-20 rounded-xl mx-auto md:mx-0 ">
    <h2 className="text-xl md:text-2xl font-bold mb-0 ml-2">
      Smart Tech, Built for Growth & Security
    </h2>

    <h1 className="text-9xl md:text-9xl max-[594px]:text-7xl font-extrabold leading-tight inline-block mt-0 ml-0 
  text-transparent bg-clip-text bg-gradient-to-r from-cyan-300 to-blue-300">
  <ReactTyped
    strings={["Simplify", "Secure", "Scale"]}
    typeSpeed={120}
    backSpeed={60}
    backDelay={2000}
    loop
    showCursor={false}
  />
</h1>


    <p className="text-lg md:text-xl mb-8 max-w-2xl leading-relaxed font-semibold mx-auto md:mx-0">
      We craft enterprise-grade software solutions that streamline your
      operations, integrate AI, deliver real-time dashboards, and create
      user experiences that truly engage and convert.
    </p>

    <div className="flex justify-center md:justify-start">
     <button
  className="group inline-flex items-center justify-center px-10 py-4 
             bg-gradient-to-r from-blue-600 to-sky-500 
             text-white font-bold text-xl rounded-full 
             shadow-lg hover:shadow-xl transform hover:-translate-y-1 
             transition-all duration-300">
  Simplify Your Tech Stack
</button>

    </div>
  </div>
</div>

      </div>

      <section>
        <TextContent
          heading="We Build Digital Systems That Simplify,"
          subheading="Connect And Accelerate"
          description="We design and deliver innovative IT solutions that eliminate operational clutter and transform the way businesses work. With a focus on scalability, security, and efficiency, our custom-built software, AI-driven tools, and smart dashboards help companies unlock real insights, streamline workflows, and achieve sustainable growth through digital transformation."
        />
      </section>

      <section>
        <SolutionsTabs />
      </section>
      <section>
        <Card />
      </section>
      <section>
        <NoMoreSilos paragraph="Join dozens of businesses working with our software development company to build smarter systems, faster workflows, and cleaner user experiences." />
      </section>
      <section>
        <WhoWeBuildFor />
      </section>
      <section>
        <HowWeWork  />
      </section>

      <section>
        <Contact />
      </section>
      
    </>
  );
};

export default Home;
