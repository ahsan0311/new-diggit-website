import React from "react";
import Hero from "../../components/develpoemnt/Hero";
import WhatWeBuild from "../../components/develpoemnt/WhatWeBuild";
import FoldCards from "../../components/develpoemnt/FoldCards";
import AllCards from "../../components/develpoemnt/AllCards";
import FAQSection from "../../components/develpoemnt/Faqs";
import Contact from "../../components/Contact";
import WhyWorkSection from "../../components/develpoemnt/WhyWorkSection";
import NoMoreSilos from "../../components/NoMoreSilos";
import InfoSection from "../../components/develpoemnt/InfoSection";
import HowWeWork from "../../components/develpoemnt/WorkCards";

const cardsForPage2 = [
  {
    title: "Web and App Development",
    description:
      "We build responsive digital platforms that bring your web and mobile experiences together. Whether it's a customer-facing site or an admin dashboard, we ensure everything works as one system.",
    image: "https://diggitglobal.com/assets/images/web-app.png",
  },
  {
    title: "Shopify Web Development Services",
    description:
      "We create custom Shopify stores with streamlined product management, checkout flows, and backend logic that actually works. From niche product shops to large inventories, we build with performance and usability in mind.",
    image: "https://diggitglobal.com/assets/images/shopify.png",
  },
  {
    title: "Enterprise Web Development",
    description:
      "We build internal platforms, knowledge hubs, and tools that serve multi-team environments. These solutions are built to handle complexity without slowing your operations down.",
    image: "https://diggitglobal.com/assets/images/enterprise-web.png",
  },
  {
    title: "React Native Mobile App Architecture",
    description:
      "A solid app starts with solid structure. We design React Native mobile app architecture that’s flexible, easy to maintain, and ready to grow with you. No messy workarounds, just smart decisions from the start.",
    image: "https://diggitglobal.com/assets/images/react_native_arch.png",
  },
  {
    title: "React Native Mobile App Design",
    description:
      "Design is more than just how it looks; it’s how well it works. Our React Native mobile app design process focuses on intuitive navigation, clean interfaces, and making sure every screen feels familiar.",
    image: "https://diggitglobal.com/assets/images/native_app_design.png",
  },
  {
    title: "Node.js Web Development Services",
    description:
      "A solid app starts with solid structure. We design React Native mobile app architecture that’s flexible, easy to maintain, and ready to grow with you. No messy workarounds, just smart decisions from the start.",
    image: "https://diggitglobal.com/assets/images/nodejs.png",
  },
  {
    title: "Mobile Web Application Development",
    description:
      "We develop web apps that feel like mobile apps; smooth, responsive, and built to work across screen sizes. Whether it's a booking tool, form, or dashboard, we make sure it runs right.",
    image: "https://diggitglobal.com/assets/images/mobile-web-app.png",
  },
  {
    title: "Web CMS Development",
    description:
      "We build content systems that let your team publish and manage updates without dev support. We focus on flexibility, speed, and ease of use.",
    image: "https://diggitglobal.com/assets/images/cms.png",
  },
  {
    title: "Front-End Web Development",
    description:
      "We build clean, component-driven interfaces that load fast and work across browsers. Whether you're scaling an app or revamping a static site, our front-end code is built to last.",
    image: "https://diggitglobal.com/assets/images/frontend-web.png",
  },
  {
    title: "Business Web Development Services",
    description:
      "We create tools like customer portals, service request forms, and internal quote systems, all practical builds that save time and reduce back-and-forth.",
    image: "https://diggitglobal.com/assets/images/business-web.png",
  },
];

const WebApp = () => {
  return (
    <>
      <Hero
      bgImage="https://diggitglobal.com/assets/images/web_dev_banner.png"
        smallHeading="The Website Development"
        mainHeading={
          <>
            Company You Need <br /> for Growth
          </>
        }
        description={
          <>
            We build internal tools, dashboards, portals, and platforms for
            teams that need more than a template. <br /> Our website development
            Dubai services help businesses get their systems online, fast,
            clean, and fully <br /> custom.
          </>
        }
        buttonText="Build My Website"
      />

      <WhatWeBuild
        heading="What We Build"
        para1="We design and develop websites for businesses that want things done right the first time. That means clean layouts, working logic, and pages that load when they’re supposed to. Our website development Dubai team handles everything from Shopify web development services to enterprise web development and everything in between."
        para2="Here’s a look at what we work on:"
        buttonText="Start your project"
        buttonLink="/contact"
      />

      <FoldCards cardsData={cardsForPage2} containerHeight="650px" />
   
      <InfoSection
        title="Industries We Work With"
        paragraphs={[
          `As a leading software development agency in Dubai, we build custom
         platforms that support how modern businesses operate; whether
         you're scaling up, simplifying systems, or starting from scratch.`,
          `Our team delivers end-to-end custom software development services
         across industries, using the right mix of strategy, tech, and 
         clean design to build systems that work and grow with you.`,
        ]}
      />
      <AllCards />
      <NoMoreSilos
        heading="If your website feels like a chore, it’s time to rebuild it"
        paragraph="We’ll help you build something that makes life easier for you and your users."
        buttonText="Help me fix it"
      />
      <WhyWorkSection
        title="Why Work With ATS"
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
      <HowWeWork 
  heading="How we work"
  subText="We don’t believe in overcomplicated processes. Here’s how we approach every website development Dubai project; with structure, speed, and the right questions."
  image="https://diggitglobal.com/assets/images/how_we_work_web_img.png"
  steps={[
    { id: "1", title: "Discovery", image: "https://diggitglobal.com/assets/images/num_1.svg", description: "What does your site actually need to do? Who’s using it, who’s updating it, and what should it connect to? Whether it’s custom website services, a Shopify storefront, or full web and app development, we start by understanding how your business runs. Then we build around that." },
    { id: "2", title: "Planning", image: "https://diggitglobal.com/assets/images/num_2.svg", description: "No guesswork, no vague wireframes. We plan site structure, logic, and user flows before we get into visuals. This applies whether we’re working on enterprise web development or lightweight landing pages." },
    { id: "3", title: "Development", image: "https://diggitglobal.com/assets/images/num_3.svg", description: "Front-end, back-end, and everything in between. We use modern stacks, including Node.js web development services and CMS integrations, to keep your site fast, flexible, and easy to manage." },
    { id: "4", title: "Launch & Support", image: "https://diggitglobal.com/assets/images/num_4.svg", description: "When we go live, we’re not disappearing. As a trusted web development company UAE teams rely on, we stay involved for updates, fixes, and support, so your site keeps working the way it should." },
  ]}
/>

      <FAQSection 
       faqs={[
    { question: "What’s included in your web development services?", answer: "Our web development services cover everything from designing your website to coding, testing, and launching it. We build fast, mobile-friendly, and easy-to-manage sites that match your brand and goals." },
    { question: "How is custom website development different from using a template?", answer: "Custom website development means we build your site from scratch to fit your exact needs. Unlike templates, custom sites load faster, are easier to scale, and give you full control over design and features." },
    { question: "How long does it take to develop a website?", answer: "It depends on the size and complexity of your project. A simple business website can take 2–4 weeks, while larger custom builds may take longer. As a reliable web development company in Dubai, we’ll always give you a clear timeline before we begin." },
    { question: "Will my website work on mobile phones too?", answer: "Yes, we do. We offer SEO services in UAE for small businesses that fit your budget and help you grow. Whether you need local SEO services in Dubai or help with content and links, we’ve got you covered." },
    { question: " Can you help update or fix my current website?", answer: "Yes, we do. We offer SEO services in UAE for small businesses that fit your budget and help you grow. Whether you need local SEO services in Dubai or help with content and links, we’ve got you covered." },

  ]}
       />
      <Contact 
       heading="Looking For A Website You Won’t Need To Rebuild in Six Months?"
  highlightText="Trust us to create sites that are clean, fast, and easy to manage long term. No bloat, no overengineering. Just something your team and users can rely on."
  buttonText="Book A free consult"
      />
    </>
  );
};

export default WebApp;
