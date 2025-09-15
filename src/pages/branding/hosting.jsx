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

const Hosting = () => {
  return (
    <>
      <Hero
        smallHeading="Cloud & VPS Hosting Services"
        mainHeading={<>Reliable Hosting Plans for Every Business</>}
        description={
          <>
            Fast, secure, and scalable hosting solutions tailored to your needs. 
            Diggit provides high-performance VPS and Cloud Hosting with 99.9% uptime, 
            24/7 expert support, and flexible plans. Whether you’re a startup or an enterprise, 
            we’ve got the right hosting solution for you.
          </>
        }
        buttonText="View Hosting Plans"
      />
      <BuildMy heading="We Use the Best in Hosting Tech" showButton={false} />

      <LogoMarquee
        logos={[
          "https://diggitglobal.com/assets/images/logo_19.png",
          "https://diggitglobal.com/assets/images/logo_20.png",
          "https://diggitglobal.com/assets/images/logo_21.png",
          "https://diggitglobal.com/assets/images/logo_22.png",
          "https://diggitglobal.com/assets/images/logo_23.png",
        ]}
        slidesToShow={6}
        speed={3000}
      />

      <WhyWorkSection
        title="Our Hosting Services"
        description={
          <>
            Choose from our flexible VPS and Cloud Hosting plans designed to keep your 
            business online and running smoothly. From small businesses to enterprise-grade 
            setups, we deliver performance, security, and scalability.
          </>
        }
        buttonText="Explore Hosting Plans"
        cards={[
          {
            title: "VPS Hosting",
            text: "Dedicated resources, full control, and unmatched performance for growing businesses that need more than shared hosting.",
          },
          {
            title: "Cloud Hosting",
            text: "Scalable, reliable, and built to handle traffic spikes. Pay only for what you use and grow without limits.",
          },
          {
            title: "Managed Hosting",
            text: "Let our experts handle updates, backups, and server monitoring so you can focus on your business.",
          },
          {
            title: "Business Hosting",
            text: "Perfect for eCommerce stores, SaaS, and SMEs who need faster speeds and guaranteed uptime.",
          },
          {
            title: "Enterprise Hosting",
            text: "Custom hosting solutions with advanced security, high availability, and dedicated support teams.",
          },
          {
            title: "Reseller Hosting",
            text: "Launch your own hosting business with our reseller plans, complete with white-label branding.",
          },
        ]}
      />

      <NoMoreSilos
        heading="Stop Worrying About Downtime.
Start Scaling with Confidence."
        buttonText="Get a Hosting Plan"
      />

      <InfoSection
        title="Why Choose Diggit Hosting?"
        paragraphs={[
          `Our hosting infrastructure is built to deliver unmatched speed, uptime, and security. 
           With data centers worldwide and 24/7 monitoring, we ensure your business stays online, 
           no matter what.`,
        ]}
      />

      <SearchSection
        letters={["S", "A", "F", "E"]}
        heading="Secure. Affordable. Fast. Easy."
        paragraph="From startups to enterprises, we make hosting simple, scalable, and worry-free. Pick a plan that grows with your business."
        buttonText="See Hosting Plans"
        buttonLink="#plans"
        showParagraph={true}
      />

      <FAQSection
        faqs={[
          {
            question: "What type of hosting do you offer?",
            answer:
              "We offer VPS Hosting, Cloud Hosting, Managed Hosting, Reseller Hosting, and Enterprise-grade custom hosting solutions.",
          },
          {
            question: "Do you provide 24/7 support?",
            answer:
              "Yes, our hosting support team is available 24/7 to resolve technical issues and ensure smooth operations.",
          },
          {
            question: "Can I upgrade my hosting plan later?",
            answer:
              "Absolutely. Our hosting plans are fully scalable, so you can upgrade or downgrade based on your needs without downtime.",
          },
          {
            question: "Do you provide free SSL and backups?",
            answer:
              "Yes, all our hosting plans come with free SSL certificates and automated daily backups for added security.",
          },
          {
            question: "Where are your servers located?",
            answer:
              "We have multiple data centers worldwide, including UAE, Europe, and the US, to ensure fast and reliable performance globally.",
          },
        ]}
      />

      <Contact
        heading="Power Your Business with Reliable Hosting."
        highlightText="Our VPS and Cloud Hosting plans are built for speed, security, and scalability. Start today and experience the difference."
        buttonText="Talk to a Hosting Expert"
      />
    </>
  );
};


export default Hosting;
