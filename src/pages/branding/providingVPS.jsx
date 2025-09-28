import React from "react";
import Hero from "../../components/develpoemnt/Hero";
import WhatWeBuild from "../../components/develpoemnt/WhatWeBuild";
import FoldCards from "../../components/develpoemnt/FoldCards";
import LogoMarquee from "../../components/develpoemnt/Marwuee";
import BuildMy from "../../components/develpoemnt/BuildMy";
import FAQSection from "../../components/develpoemnt/Faqs";
import Contact from "../../components/Contact";
import WhyWorkSection from "../../components/develpoemnt/WhyWorkSection";
import SearchSection from "../../components/digitalMarketing/SearchSection";
import NoMoreSilos from "../../components/NoMoreSilos";
import InfoSection from "../../components/develpoemnt/InfoSection";

const VpsServer = () => {
  return (
    <>
      <Hero
        smallHeading="VPS Server Services"
        mainHeading={<>in Dubai that Power Performance</>}
        description={
          <>
            Speed, security, and reliability matter most when it comes to
            hosting. Diggit provides powerful VPS server solutions in Dubai
            designed for businesses that prioritize uptime and performance. From
            startups to enterprises, our VPS hosting services ensure seamless
            scalability, full control, and top-tier security — whether you need
            managed VPS hosting or fully customized server setups.
          </>
        }
        buttonText="Start VPS Hosting"
      />
      {/* <BuildMy heading="We Use the best in tech" showButton={false} />

      <LogoMarquee
        logos={[
          "https://diggitglobal.com/assets/images/logo_19.png",
          "https://diggitglobal.com/assets/images/logo_20.png",
          "https://diggitglobal.com/assets/images/logo_19.png",
          "https://diggitglobal.com/assets/images/logo_20.png",
          "https://diggitglobal.com/assets/images/logo_21.png",
          "https://diggitglobal.com/assets/images/logo_19.png",
          "https://diggitglobal.com/assets/images/logo_20.png",
          "https://diggitglobal.com/assets/images/logo_21.png",
          "https://diggitglobal.com/assets/images/logo_19.png",
          "https://diggitglobal.com/assets/images/logo_20.png",
          "https://diggitglobal.com/assets/images/logo_21.png",
        ]}
        slidesToShow={6}
      /> */}
      <WhyWorkSection
        title="Our VPS Server Services"
        description={
          <>
            We help businesses run faster, safer, and smoother with reliable VPS
            hosting. Our top VPS server services in UAE are built for
            performance — from setup and configuration to full management and
            ongoing support.
          </>
        }
       buttonText="Get Your VPS Server"
cards={[
  {
    title: "VPS Server Strategy & Planning",
    text: "We work with you to design the right VPS hosting plan for your business. From resource allocation to scaling needs, we ensure your server setup matches your goals.",
  },
  {
    title: "VPS Setup & Configuration",
    text: "We handle full VPS setup — OS installation, security hardening, and performance optimization — so your server runs smooth, safe, and fast right from the start.",
  },
  {
    title: "Managed VPS Hosting",
    text: "We manage your VPS servers end-to-end. From monitoring to backups and updates, our managed VPS services let you focus on business while we handle the tech.",
  },
  {
    title: "B2B VPS Solutions",
    text: "We provide VPS solutions for B2B companies that need reliable, scalable infrastructure. From handling client apps to running business-critical systems, our VPS keeps you online and efficient.",
  },
  {
    title: "Personalized VPS Plans",
    text: "We customize VPS plans for your exact requirements — whether you need more CPU power, higher bandwidth, or enterprise-grade storage. Only pay for what you need.",
  },
  {
    title: "VPS for Growth & Scalability",
    text: "Our VPS hosting grows with you. From startups to enterprises, we ensure your server can handle increasing traffic, bigger databases, and evolving workloads.",
  },
  {
    title: "VPS Integration & Automation",
    text: "We integrate your VPS with CRMs, applications, and workflows for seamless operations. From APIs to cloud tools, our automation ensures efficiency and speed.",
  },
]}

      />
     <NoMoreSilos
  heading="It’s Not About More Servers. 
It’s About the Right VPS."
  buttonText="Start with VPS Today"
/>

     <InfoSection
  title="S.C.A.L.E Framework for VPS Hosting"
  paragraphs={[
    `Most businesses struggle with hosting because of slow servers, limited scalability, or poor support. At Diggit, our VPS server services follow a smart, repeatable framework that focuses on what matters: speed, control, and growth.`,
  ]}
/>

<SearchSection
  letters={["S", "C", "A", "L", "E"]}
  heading="Set the Foundation"
  paragraph="First, we identify what your VPS needs to achieve. Do you want better performance, more security, easier scaling, or full control? We build every VPS solution with that goal in mind."
  buttonText="Fix My Hosting"
  buttonLink="#growth"
  showParagraph={true}
/>


      <FAQSection
  faqs={[
    {
      question: "What is a VPS server?",
      answer:
        "A VPS (Virtual Private Server) is a hosting solution that gives you dedicated resources on a shared server. It’s faster, more secure, and more reliable than shared hosting while being more affordable than a dedicated server.",
    },
    {
      question: "Do you manage the VPS for me?",
      answer:
        "Yes. With our managed VPS hosting services, we handle setup, monitoring, security updates, and optimization so you can focus on your business while we take care of the tech.",
    },
    {
      question: "Can VPS hosting work for businesses?",
      answer:
        "Absolutely. VPS hosting is ideal for businesses of all sizes. Whether you run an eCommerce store, SaaS platform, or corporate website, our VPS solutions provide the speed and scalability you need.",
    },
    {
      question: "Will my VPS be secure?",
      answer:
        "Yes, our VPS servers are built with strong firewalls, DDoS protection, and regular security updates. We make sure your data and applications stay safe around the clock.",
    },
    {
      question: "What kind of VPS plans do you offer?",
      answer:
        "We offer flexible VPS hosting plans, including fully managed and self-managed options. Whether you need more storage, bandwidth, or processing power, we customize the plan to fit your needs.",
    },
  ]}
/>

<Contact
  heading="We Can Make Your Hosting Hassle-Free."
  highlightText="We help businesses move to reliable VPS hosting that ensures speed, security, and scalability. If you're ready for stress-free hosting, we’re here to help."
  buttonText="Talk to a VPS Expert"
/>

    </>
  );
};

export default VpsServer;
