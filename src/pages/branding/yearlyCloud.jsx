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

const YearlyCloud = () => {
  return (
    <>
      <Hero
        smallHeading="Yearly Cloud Plans"
        mainHeading={<>Secure, Scalable & Affordable</>}
        description={
          <>
            Get enterprise-grade cloud hosting without the enterprise cost. 
            Diggit’s yearly cloud plans give you <br /> high performance, 
            99.9% uptime, and seamless scalability — all at a predictable yearly price. <br />
            Perfect for startups, SMBs, and enterprises that need reliable cloud infrastructure <br />
            without hidden costs.
          </>
        }
        buttonText="Start Your Yearly Cloud Plan"
      />
      <BuildMy heading="We Use the Best in Cloud Tech" showButton={false} />

      <LogoMarquee
        logos={[
          "https://diggitglobal.com/assets/images/logo_19.png",
          "https://diggitglobal.com/assets/images/logo_20.png",
          "https://diggitglobal.com/assets/images/logo_21.png",
          "https://diggitglobal.com/assets/images/logo_20.png",
          "https://diggitglobal.com/assets/images/logo_21.png",
          "https://diggitglobal.com/assets/images/logo_19.png",
        ]}
        slidesToShow={6}
      />

      <WhyWorkSection
        title="Our Yearly Cloud Hosting Services"
        description={
          <>
            We help businesses move to the cloud with ease. Our yearly plans 
            give you <br /> reliable performance, security, and 24/7 support — 
            all at a fixed cost so you can scale with confidence.
          </>
        }
        buttonText="Choose a Cloud Plan"
        cards={[
          {
            title: "Cloud Strategy & Planning",
            text: "We design a clear cloud strategy that aligns with your business goals, ensuring cost-efficiency and smooth migration.",
          },
          {
            title: "High-Performance Hosting",
            text: "Our servers are optimized for speed, uptime, and reliability, ensuring your apps and websites always perform at their best.",
          },
          {
            title: "Full Management & Monitoring",
            text: "We manage your cloud infrastructure from deployment to monitoring, so you never worry about downtime or security issues.",
          },
          {
            title: "Scalable Cloud Solutions",
            text: "Scale your resources up or down based on your needs. Our yearly cloud plans grow with your business.",
          },
          {
            title: "Secure Cloud Environment",
            text: "We implement top-tier security with firewalls, DDoS protection, and regular backups for complete peace of mind.",
          },
          {
            title: "Cost-Effective Subscriptions",
            text: "Save more with predictable yearly billing and avoid surprise expenses while enjoying enterprise-grade infrastructure.",
          },
          {
            title: "Cloud Integration & Automation",
            text: "We integrate your apps, databases, and services into the cloud with smart automation for better efficiency.",
          },
        ]}
      />

      <NoMoreSilos
        heading="Stop Overpaying for Cloud. 
Switch to a Smarter Yearly Plan."
        buttonText="Get My Cloud Plan"
      />

      <InfoSection
        title="S.E.C.U.R.E Framework for Cloud Hosting"
        paragraphs={[
          `Most businesses overpay for the cloud or face downtime with unreliable providers. 
          At Diggit, our yearly cloud solutions follow the S.E.C.U.R.E framework — Security, Efficiency, Cost Control, Uptime, Reliability, and Expansion.`
        ]}
      />

      <SearchSection
        letters={["S", "E", "C", "U", "R", "E"]}
        heading="Security First"
        paragraph="Your data and apps are protected with enterprise-level encryption, firewalls, and compliance standards."
        buttonText="Protect My Cloud"
        buttonLink="#plans"
        showParagraph={true}
      />

      <FAQSection
        faqs={[
          {
            question: "What are Yearly Cloud Plans?",
            answer:
              "Yearly cloud plans give you secure hosting, storage, and computing power with predictable yearly billing and no hidden costs.",
          },
          {
            question: "Do you provide full management?",
            answer:
              "Yes. We fully manage your cloud setup — from migration and deployment to security, monitoring, and scaling.",
          },
          {
            question: "Can I scale my resources anytime?",
            answer:
              "Absolutely. Even with yearly billing, you can scale up or down as needed. We make the cloud flexible for your business.",
          },
          {
            question: "Will my cloud setup be secure?",
            answer:
              "Yes. We provide enterprise-grade firewalls, DDoS protection, SSL, and daily backups for maximum security.",
          },
          {
            question: "Which cloud platforms do you support?",
            answer:
              "We work with AWS, Google Cloud, Microsoft Azure, and private cloud setups — giving you freedom of choice.",
          },
        ]}
      />

      <Contact
        heading="Switch to a Smarter Yearly Cloud Plan."
        highlightText="We help businesses cut costs and scale smarter with reliable yearly cloud hosting. Get performance, security, and predictability — all in one plan."
        buttonText="Talk to a Cloud Expert"
      />
    </>
  );
};


export default YearlyCloud;
