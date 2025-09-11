import React from 'react'
import Hero from "../../components/develpoemnt/Hero";
import WhatWeBuild from "../../components/develpoemnt/WhatWeBuild";
import FoldCards from "../../components/develpoemnt/FoldCards";
import LogoMarquee from "../../components/develpoemnt/Marwuee";
import BuildMy from "../../components/develpoemnt/BuildMy";
import WorkCards from "../../components/develpoemnt/WorkCards";
import AllCards from "../../components/develpoemnt/AllCards";
import FAQSection from "../../components/develpoemnt/Faqs";
import Contact from "../../components/Contact";
import WhyWorkSection from '../../components/develpoemnt/WhyWorkSection';

const cardsForPage2 = [
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

const CustomizeErp = () => {
  return (
    <>
      <Hero
        
        smallHeading="The Website Development"
        mainHeading={
          <>
            Company You Need <br /> for Growth
          </>
        }
        description={
          <>
            We build internal tools, dashboards, portals, and platforms for
            teams that need more than a template. <br /> Our website development Dubai
            services help businesses get their systems online, fast, clean, and
            fully <br /> custom.
          </>
        }
        buttonText="Build My Website"
      />

      <WhatWeBuild />
      <FoldCards cardsData={cardsForPage2} containerHeight="650px" />
      <BuildMy />
      <LogoMarquee />
      <AllCards />
       <WhyWorkSection
        title="Why Work With Diggit"
        description={
          <>
            We don’t just build websites. We build the stuff that makes work
            easier - for your team,
            <br /> your users, and your business.
          </>
        }
        buttonText="Launch Your Site"
        cards={[
          {
            title: "We Build Around You",
            text: "From booking tools to dashboards, we design around how your business actually runs. Every project starts with your goals, not our tech stack.",
          },
          {
            title: "Problem First, Platform Later",
            text: "We write our own code and build our own systems. Whether it’s custom website services or enterprise web development, we skip the shortcuts and deliver sites that last.",
          },
          {
            title: "Direct Access To The Team",
            text: "No layers, no account managers translating requirements. You’ll work directly with the designers and developers building your product — quick calls, fast turnarounds, clear updates.",
          },
        ]}
      />
      <WorkCards />
      <FAQSection />
      <Contact />
    </>
  );
};

export default CustomizeErp;
