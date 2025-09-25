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

const CloudSolution = () => {
  return (
  <>
    <Hero
      smallHeading="Cloud Solutions"
      mainHeading={<>in Dubai that Power Growth</>}
      description={
        <>
          The cloud is the backbone of modern business when it’s done right. 
          Diggit offers comprehensive cloud solutions <br /> designed for brands 
          that prioritize scalability, speed, and security. We help startups, 
          enterprises, and <br /> growing businesses get more out of their 
          infrastructure — from cloud migration to <br /> complete managed services.
        </>
      }
      buttonText="Start Cloud Solutions"
    />
    <BuildMy heading="We Use the Best in Cloud Tech" showButton={false} />

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
    />

    <WhyWorkSection
      title="Our Cloud Solutions"
      description={
        <>
          We help businesses build smarter systems that actually work — fast, secure, 
          and scalable. Our top cloud services in UAE <br /> are designed to deliver 
          results, from migration and deployment to full management and support.
        </>
      }
      buttonText="Launch Cloud Services"
      cards={[
        {
          title: "Cloud Strategy & Planning",
          text: "We work with you to design a clear roadmap for your cloud adoption. Whether it's migration, scaling, or hybrid solutions, we ensure your cloud strategy supports your goals.",
        },
        {
          title: "Cloud Infrastructure Setup",
          text: "We set up fast, secure, and reliable cloud environments tailored to your needs. From servers to storage, we configure everything for peak performance.",
        },
        {
          title: "Cloud Management Services",
          text: "We manage your cloud environment end-to-end. With our managed services, you don’t have to worry about monitoring, scaling, or updates — we handle it all.",
        },
        {
          title: "B2B Cloud Solutions",
          text: "We help B2B companies streamline operations with custom cloud tools. From SaaS platforms to collaboration systems, our solutions are built for trust and reliability.",
        },
        {
          title: "Personalized Cloud Deployment",
          text: "We tailor cloud setups to match your exact workflow. That means cost efficiency, better performance, and systems that feel built for your business.",
        },
        {
          title: "Cloud-Powered Growth",
          text: "We design cloud solutions that help businesses expand smoothly. Whether scaling globally or improving efficiency, we keep your systems future-ready.",
        },
        {
          title: "Cloud Integration & Automation",
          text: "We connect your apps, data, and processes into one seamless system. From CRM to ERP integrations, we make automation effortless with cloud technology.",
        },
      ]}
    />

    <NoMoreSilos
      heading="More Servers Won’t Help. 
Better Cloud Will."
      buttonText="Start a Smarter Cloud Strategy"
    />

    <InfoSection
      title="S.C.A.L.E Framework for Cloud Solutions"
      paragraphs={[
        `Most businesses struggle with the cloud because of poor planning, 
        high costs, or lack of support. At Diggit, our cloud services follow 
        a proven framework that focuses on what matters: scalability, control, 
        and efficiency.`,
      ]}
    />

    <SearchSection
      letters={["S", "C", "A", "L", "E"]}
      heading="Set the Foundation"
      paragraph="First, we define what your cloud solution needs to achieve. Whether it's security, scalability, or speed, we build every setup with your goals in mind."
      buttonText="Fix My Cloud Infrastructure"
      buttonLink="#growth"
      showParagraph={true}
    />

    <FAQSection
      faqs={[
        {
          question: "What are cloud solutions?",
          answer:
            "Cloud solutions allow businesses to host applications, store data, and run operations on virtual infrastructure. They’re more scalable, secure, and cost-effective than traditional servers.",
        },
        {
          question: "Do you manage the cloud for me?",
          answer:
            "Yes. With our managed cloud services, we take care of everything — setup, monitoring, security, and scaling — so you can focus on growth.",
        },
        {
          question: "Can cloud solutions work for B2B companies?",
          answer:
            "Absolutely. We design B2B-ready cloud systems that support collaboration, data sharing, and secure workflows, helping companies stay agile and efficient.",
        },
        {
          question: "Will my cloud system be secure?",
          answer:
            "Yes, security is a priority. We implement firewalls, encryption, and compliance-ready solutions to make sure your cloud is safe and reliable.",
        },
        {
          question: "What cloud platforms do you work with?",
          answer:
            "We work with AWS, Google Cloud, Azure, and hybrid setups. Depending on your needs, we recommend the right platform for cost and performance balance.",
        },
      ]}
    />

    <Contact
      heading="We Can Make Your Cloud Work Smarter."
      highlightText="We help businesses adopt cloud solutions that deliver speed, scalability, and security. If you're ready to move to the cloud the right way, we’re here to help."
      buttonText="Talk to a Cloud Expert"
    />
  </>
);

};

export default CloudSolution;
