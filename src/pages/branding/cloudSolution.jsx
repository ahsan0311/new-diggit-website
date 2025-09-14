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
        smallHeading="Email Marketing Services"
        mainHeading={<>in Dubai that Reach Inboxes</>}
        description={
          <>
            Email still drives more ROI than most channels, when it’s done
            right. Diggit offers comprehensive email <br /> campaign management
            services for brands that prioritize results over reach. We help B2B
            teams, <br /> brands, and sales-led businesses get more out of every
            send, from Zoho CRM email marketing to <br /> complete campaign
            strategy.
          </>
        }
        buttonText="Start Email Marketing"
      />
      <BuildMy heading="We Use the best in tech" showButton={false} />

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
        speed={3000}
       />
      <WhyWorkSection
        title="Our Email Marketing Services"
        description={
          <>
            We help businesses send better emails; the kind people actually
            open, read, and click. Our top email marketing services in UAE{" "}
            <br /> are built for results, right from strategy and copy to tech
            setup and tracking.
          </>
        }
        buttonText="Launch an Email Compaign"
        cards={[
          {
            title: "Email Strategy & Planning",
            text: "We work with you to build a clear plan for what to send, when to send it, and who it’s for. Whether you're doing B2B email marketing campaigns or promoting a launch, we make sure your emails have a purpose.",
          },
          {
            title: "Email Copywriting & Design",
            text: "We write clean, human emails that sound like you, not a robot. From subject line to CTA, we handle all the content, formatting, and visuals to make every send feel personal and professional.",
          },
          {
            title: "Email Campaign Management",
            text: "We manage your email campaigns from start to finish. With our email campaign management services, you don’t have to worry about scheduling, segmenting, or tracking; we handle it all and keep it running smoothly.",
          },
          {
            title: "B2B Email Marketing Services",
            text: "We help B2B companies reach leads, clients, and partners with clear, helpful emails. From cold outreach to nurture flows, we make sure your B2B email marketing strategy builds trust.",
          },
          {
            title: "Personalized Email Marketing",
            text: "We use smart segmentation and dynamic content to make sure your emails feel personal, even when they’re automated. That means more opens, better clicks, and fewer deletes.",
          },
          {
            title: "Lead Generation Through Email Marketing",
            text: "We build email flows that turn interest into action. Whether you’re capturing leads through forms or CRMs, we help you stay in touch with the right people at the right time.",
          },
          {
            title: "CRM Integration & Automation",
            text: "We connect your email platform to your CRM, so everything works together. From Zoho CRM email marketing to advanced setups in HubSpot or Adobe email marketing, we make automation feel natural.",
          },
        ]}
      />
      <NoMoreSilos
        heading="More Emails Won’t Help.
Better Ones Will."
        buttonText="Start a better email strategy"
      />
      <InfoSection
        title="S.E.N.D Framework for
Email Marketing"
        paragraphs={[
          `Most email campaigns fall flat because they’re rushed, irrelevant, or forgotten. At Diggit, our email marketing services in UAE follow a smart, repeatable process that focuses on what matters: clarity, connection, and conversion.`,
        ]}
      />
      <SearchSection
        letters={["S", "E", "N", , "D"]}
        heading="Set the Strategy"
        paragraph="First, we figure out what the email is for. Do you want people to buy, sign up, learn something, or come back? We write every email with that goal in mind."
        buttonText="Fixed My Email Funnel"
        buttonLink="#growth"
        showParagraph={true}
      />

      <FAQSection
        faqs={[
          {
            question: "What is Email marketing?",
            answer:
              "Email marketing means sending useful messages to your contacts, like updates, offers, or follow-ups. It’s a way to stay in touch and bring people back to your business.",
          },
          {
            question: "Do you write and manage the emails?",
            answer:
              "Yes. With our complete email campaign management services, we write, design, schedule, and send everything for you, so you don’t have to worry about a thing.",
          },
          {
            question: "Can you help with B2B email campaigns?",
            answer:
              "Definitely. We run smart, clear B2B email marketing campaigns that build trust, warm up leads, and help close deals, without sounding like spam.",
          },
          {
            question: "Will the emails match my brand voice?",
            answer:
              "Yes, we do. We offer SEO services in UAE for small businesses that fit your budget and help you grow. Whether you need local SEO services in Dubai or help with content and links, we’ve got you covered.",
          },
          {
            question: "What tools do you work with?",
            answer:
              "Yes, we do. We offer SEO services in UAE for small businesses that fit your budget and help you grow. Whether you need local SEO services in Dubai or help with content and links, we’ve got you covered.",
          },
        ]}
      />
      <Contact
        heading="We Can Make Your Emails Worth Opening Again."
        highlightText="We help businesses turn email into a channel that supports leads, sales, and long-term trust. If you're ready to use it the right way, we’re here to help."
        buttonText="Talk to an email marketing Expert"
      />
    </>
  );
};

export default CloudSolution;
