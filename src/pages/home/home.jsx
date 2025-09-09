import React, { useEffect, useRef } from "react";
import { ReactTyped } from "react-typed";
import TextContent from "../../components/TextContent";
import SolutionsTabs from "../../components/SoluitonTab";
import Card from "../../components/Card";
import NoMoreSilos from "../../components/NoMoreSilos";
import WhoWeBuildFor from "../../components/WhoWeBuildFor";
import HowWeWork from "../../components/HowWeWork";
import Contact from "../../components/Contact";
import Footer from "../../components/Footer";

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
            <source src="https://diggitglobal.com/assets/images/vecteezy_sunrise.mp4" type="video/mp4" />
          </video>
        </div>

        <div className="absolute top-0 left-0 w-full h-1/2 bg-gradient-to-b from-black/70 to-transparent z-10"></div>

        <div className="absolute bottom-[-40px] left-0 w-full h-[200px] z-10 pointer-events-none">
          <div className="w-full h-full bg-gradient-to-t from-white via-white/90 to-transparent"></div>
        </div>

        <div className="relative z-10 min-h-screen flex items-start pt-32 px-4 sm:px-6 md:pl-16 lg:pl-24 xl:pl-32 text-white">
          <div className="text-center md:text-left max-w-3xl mt-20 rounded-xl mx-auto md:mx-0">
            <h2 className="text-3xl md:text-4xl font-bold">Tech Built For</h2>
            <div className="mb-5">
              <h1 className="text-5xl md:text-8xl font-extrabold text-[#00B3FF] leading-tight inline-block">
                <ReactTyped
                  strings={["Security", "Scalability"]}
                  typeSpeed={120}
                  backSpeed={60}
                  backDelay={2000}
                  loop
                  showCursor={false}
                />
              </h1>
            </div>
            <p className="text-lg md:text-xl mb-8 max-w-2xl leading-relaxed font-semibold mx-auto md:mx-0">
              Our enterprise software development company builds systems that
              replace cluttered workflows with custom-built software, AI, smart
              dashboards, and UX that actually converts.
            </p>
            <div className="flex justify-center md:justify-start">
              <button className="bg-[#00317B] hover:bg-blue-700 text-white font-bold py-4 px-10 rounded-full text-xl transition duration-300">
                Simplify Your Tech Stack
              </button>
            </div>
          </div>
        </div>
      </div>

      <section>
        <TextContent
          heading="We Build Systems That Simplify,"
          subheading="Connect And Accelerate"
          description="Diggit is an IT solutions company based in the UAE that helps modern businesses overcome operational chaos with focused, scalable, and secure integrated business solutions that support true business analysis and digital transformation."
        />
      </section>

      <section>
        <SolutionsTabs />
      </section>
       <section>
        <Card />
      </section>
      <section>
        <NoMoreSilos/>
      </section>
      <section>
        <WhoWeBuildFor/>
      </section>
       <section>
        <HowWeWork/>
      </section>
           
      <section>
        <Contact/>
      </section>
       <section>
        <Footer/>
      </section>
    </>
  );
};

export default Home;
