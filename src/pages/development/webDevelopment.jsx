import React from "react";
import Hero from "../../components/develpoemnt/Hero";
import WhatWeBuild from "../../components/develpoemnt/WhatWeBuild";
import FoldCards from "../../components/develpoemnt/FoldCards";
import LogoMarquee from "../../components/develpoemnt/Marwuee";
import BuildMy from "../../components/develpoemnt/BuildMy";
import WorkCards from "../../components/develpoemnt/WorkCards";
import AllCards from "../../components/develpoemnt/AllCards";
import FAQSection from "../../components/develpoemnt/Faqs";
import Contact from "../../components/Contact";
import WhyWorkSection from "../../components/develpoemnt/WhyWorkSection";
import NoMoreSilos from "../../components/NoMoreSilos";
import InfoSection from "../../components/develpoemnt/InfoSection";

const cardsForPage1 = [
  {
    title: "iOS App Development",
    description:
      "We build iOS apps that are smooth, secure, and ready for the App Store. Our iOS apps use the latest tech to deliver great user experience and performance.",
    image: "https://diggitglobal.com/assets/images/IOS.png",
  },
  {
    title: "Android App Development",
    description:
      "We create Android apps that run well across a wide range of devices, no bugs, no weird crashes. Our team focuses on speed, usability, and consistency.",
    image: "https://diggitglobal.com/assets/images/android.png",
  },
  {
    title: "Cross Platform Native App Development",
    description:
      "If you want native-like performance without managing separate codebases, our cross platform native app development approach is the way to go.",
    image: "https://diggitglobal.com/assets/images/native.png",
  },
  {
    title: "React Native Mobile App Architecture",
    description:
      "A solid app starts with solid structure. We design React Native mobile app architecture that's flexible, easy to maintain, and ready to grow with you.",
    image: "https://diggitglobal.com/assets/images/react_native_arch.png",
  },
  {
    title: "Custom Mobile Solutions",
    description:
      "Tailored mobile solutions designed to perfectly match your unique business needs and deliver excellent user engagement.",
    image: "https://diggitglobal.com/assets/images/native_app_design.png",
  },
];
const WebDevelopment = () => {
  return (
    <>
      <Hero
      bgImage="https://diggitglobal.com/assets/images/custom_web_banner.png"

        mainHeading="Partner You Can Rely On for Growth"
        description={
          "We craft websites, portals, dashboards, and digital platforms tailored for teams that demand more than off-the-shelf templates. Our web development solutions deliver fast, scalable, and fully customized systems—designed to be clean, powerful, and aligned with your business goals."
        }
        buttonText="Build My Website"
      />
      <WhatWeBuild
        para1="We create websites for businesses that value precision, performance, and long-term impact. From clean layouts to seamless functionality, every page is designed to look great and work exactly the way it should. Whether it’s eCommerce, custom portals, or enterprise solutions, we develop platforms that drive growth and deliver results."
        para2="Here’s a look at what we specialize in:"
      />
      <FoldCards cardsData={cardsForPage1} containerHeight="600px" />
      {/* <BuildMy /> */}
      {/* <LogoMarquee /> */}
      <InfoSection
        title="Industries We Work With"
        paragraphs={[
          `We partner with businesses across diverse industries to build custom platforms that match the way modern teams operate—whether it’s scaling up, streamlining workflows, or starting fresh.`,
          `Our approach combines strategy, technology, and clean design to deliver end-to-end software solutions that not only solve today’s challenges but also grow with your business tomorrow.`,
        ]}
      />
      <AllCards />
      <NoMoreSilos
        heading="If managing your website feels like hard work, it’s time for a smarter rebuild."
        paragraph="We create websites that simplify your workflow and give users a seamless, enjoyable experience."
        buttonText="Scope Your App"
      />
      <WhyWorkSection
        title="Why Choose Us"
        description={
          <>
            Because we design more than websites—we build systems that make work
            smarter, <br /> faster, and easier for everyone.
          </>
        }
        buttonText="Launch Your Site"
        cards={[
          {
            title: "We Build Around You",
            text: "From booking platforms to custom dashboards, everything we create is shaped around the way your business truly operates. Every project begins with your goals at the center—not with a one-size-fits-all solution.",
          },
          {
            title: "Problem First, Platform Later",
            text: "We focus on solving real business challenges before deciding on the tech. By writing our own code and developing custom systems, we avoid shortcuts and deliver websites and platforms built to last—whether for startups or enterprise-level solutions.",
          },
          {
            title: "Direct Access To The Team",
            text: "No middlemen, no delays. You connect directly with the designers and developers bringing your project to life—so every conversation is clear, every update is accurate, and every turnaround is faster..",
          },
        ]}
      />

      <WorkCards />
       <FAQSection
              faqs={[
                {
                  question: "What kind of businesses do you work with?",
                  answer:
                  "We partner with startups, growing companies, and established enterprises across industries. Our custom solutions are designed to adapt to your unique workflows, no matter your size or sector."
                },
                {
                  question:
                    "How long does it take to build a website or custom platform?",
                  answer:
                  "Timelines depend on the complexity of your project. A simple website may take a few weeks, while larger platforms or enterprise solutions can take several months. We’ll provide a clear roadmap before we begin."
                },
                {
                  question: " Do you only build websites, or can you develop custom software too?",
                  answer:
                  "We do both. Alongside websites, we build dashboards, portals, booking systems, and fully integrated enterprise platforms tailored to your business needs."
                },
               {
                  question: "Will I be able to update and manage my website after it’s built?",
                  answer:
                  " Yes. We deliver user-friendly, scalable solutions that give you full control. Our team also provides training and ongoing support if you need it. "

                },
              {
                  question: "Do you provide ongoing support and maintenance?",
                  answer:
                  " Absolutely. Our work doesn’t stop at launch—we offer continuous optimization, maintenance, and support to keep your systems running smoothly as your business grows."

                },
              ]}
            />
      <Contact />
    </>
  );
};

export default WebDevelopment;
