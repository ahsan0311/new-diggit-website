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
const CustomizeErp = () => {
  return (
    <>
      <Hero
      bgImage="https://diggitglobal.com/assets/images/erp_banner.png"
        smallHeading="Custom ERP Development Services That"
        mainHeading="Keep Everything in Sync"
        description={
          "Our custom ERP solutions are designed around your business, not the other way around. We help you organize data, automate repetitive tasks, and enable smooth team collaboration—all within a system tailored to your unique workflows. From finance and sales to operations and beyond, we build unified ERP platforms that grow with your business and eliminate chaos."
        }
        buttonText="Start Custom ERP"
      />
      {/* <BuildMy showButton={false} /> */}
      {/* <LogoMarquee /> */}

      <WhyWorkSection
        title="Our Customized ERP Development Services"
        description={
          <>
            We design and develop ERP solutions tailored to fit your team
            perfectly—from planning to deployment. As a trusted custom ERP
            development partner, we focus on clean architecture, seamless
            scalability, and long-term business growth.
          </>
        }
        buttonText="Build a Smarter"
        cards={[
          {
            title: "Custom ERP Development",
            text: "We build customized ERP systems from the ground up, designed to match your business’s unique workflows. Our tailored ERP solutions streamline key areas like sales, finance, HR, and reporting—delivering only the features you need, without the clutter.",
          },
          {
            title: "Customized ERP Cloud Services Version",
            text: "We help migrate your customized ERP to the cloud, giving you easier access, faster scalability, and simpler management. Our cloud-based ERP solutions are secure, flexible, and tailored for teams that want efficiency without the hassle of traditional setups.",
          },
          {
            title: "Customized ERP for Professional Services",
            text: "Whether you run a law firm, consultancy, or agency, we design ERP solutions tailored to your workflows. Our customized ERP systems bring everything together—from time tracking and client billing to resource and team planning—so you can focus on delivering value instead of managing chaos.",
          },
          {
            title : "Customized ERP for IT Services",
            text: "For IT and technology companies, we design ERP solutions that simplify project management, support ticketing, payments, and more. Our customized ERP systems keep everything organized, easy to track, and aligned with your business processes."
          },
          {
            title : "Customized ERP for Distribution",
            text: "We create tailored ERP solutions to manage inventory, orders, and shipping with precision. Our customized ERP systems keep your distribution process efficient, reduce errors, and ensure smooth, on-time deliveries."
          },
          {
            title : "Customized ERP Advisory Services",
            text: "Not sure what kind of ERP fits your business? We provide expert advisory services to help you choose and design the right customized ERP solution—so you get the tools you actually need without wasting time or resources."
          },
           
        ]}
      />

       <NoMoreSilos
              heading="Outgrowing Spreadsheets?"
              paragraph="It’s Time for Customized ERP."
              buttonText="SGet Custom ERP Support"
            />

      <FAQSection
        faqs={[
          {
            question: "How much does a Customized ERP system cost?",
            answer:
              "The cost of a customized ERP system depends on your business needs, team size, and the features you require. A simple setup may start from a few thousand dollars, while a fully tailored solution with complete implementation and integrations will cost more. Our goal is to design a system that fits your workflow and your budget."
          },
          {
            question:
              "How much does it cost to implement a Customized ERP system?",
            answer:
            "The cost of implementing a customized ERP system depends on factors like business complexity, number of users, and the level of custom features required. We provide transparent pricing with no hidden charges, ensuring you get a solution that fits both your needs and your budget."
          },
          {
            question:
              "How do I choose the right ERP system?",
            answer:
            "Start by identifying your business’s real needs instead of chasing generic features. A customized ERP is built around your goals, size, and workflow—so it grows with you instead of holding you back. Our team evaluates your processes and recommends the right setup tailored to your business."
          },
          {
            question:
              "How does an ERP system improve customer service?",
            answer:
            "A customized ERP system improves customer service by giving your team instant access to accurate data—like order status, inventory availability, or client history. This means faster response times, fewer mistakes, and a smoother customer experience overall. With everything connected in one system, your team can focus on solving customer needs instead of searching for information."
          },
          {
            question: "Why do ERP implementations fail sometimes?",
            answer:
            "ERP implementations usually fail when businesses rush the process, skip proper planning, or choose a system that doesn’t match their real needs. Another common reason is lack of user training—if your team doesn’t understand the system, adoption becomes difficult. At Diggit, we focus on careful planning, customization, and hands-on support so your ERP implementation succeeds the first time."
          },
        ]}
      />
      <Contact 
       heading="If You Wait Until It Breaks, It’ll Cost You More"
  highlightText="Your ERP system is the backbone of your business. Waiting until things fall apart only adds cost, delays, and frustration. At Diggit, we make ERP implementation smooth from day one—replacing scattered tools and messy workflows with a single, reliable platform built to last."
  buttonText="Book A free ERP Review"
      />
    </>
  );
};

export default CustomizeErp;
