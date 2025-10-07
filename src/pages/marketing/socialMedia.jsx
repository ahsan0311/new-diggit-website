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
import SearchSection from "../../components/digitalMarketing/SearchSection";
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
const SocialMedia = () => {
  return (
    <>
      <Hero
      bgImage="https://diggitglobal.com/assets/images/social_media_banner.png"

        smallHeading="Complete Social Media Management
"
        mainHeading={<>Services For SMEs</>}
        description={
          <>
            We help brands grow with professional, strategic social media
            marketing management services. <br /> Whether you're a startup or an
            emerging business, Diggit is Dubai's best social media marketing
            agency <br /> for companies that want real ROI from every platform.
          </>
        }
        buttonText="Manage My Social Media"
      />
      {/* <BuildMy heading="We Use the best in tech" showButton={false} />

      <LogoMarquee 
      logos={[
          "https://diggitglobal.com/assets/images/logo_12.png",
          "https://diggitglobal.com/assets/images/logo_13.png",
          "https://diggitglobal.com/assets/images/logo_14.png",
          "https://diggitglobal.com/assets/images/logo_15.png",
          "https://diggitglobal.com/assets/images/logo_16.png",
          "https://diggitglobal.com/assets/images/logo_12.png",
          "https://diggitglobal.com/assets/images/logo_13.png",
          "https://diggitglobal.com/assets/images/logo_14.png",
          "https://diggitglobal.com/assets/images/logo_15.png",
          "https://diggitglobal.com/assets/images/logo_16.png",

        ]}
        slidesToShow={6}
      /> */}
      <WhyWorkSection
        title="Our Social Media Services"
        description={
          <>
            We provide full-service social media marketing management services
            to help your brand stay consistent, visible, and engaging. <br /> Our
            social media marketing services in Dubai are built to save you time,
            grow your brand, and deliver value for money.
          </>
        }
        buttonText="Fixed My Social Presence"
        cardHeight="h-[280px]"

        cards={[
          {
            title: "Content Planning & Scheduling",
            text: "We plan your content ahead of time with a clear, easy-to-follow calendar. As part of our social media marketing services in Dubai, we make sure your posts go out on time, on the right platforms, and with a strategy behind every update.",
          },
          {
            title: "Content Creation (Copy & Design)",
            text: "We handle all the visuals and captions your brand needs; from images and stories to carousels and reels. Our team creates content that reflects your voice and supports your goals, making us a trusted choice for social media marketing services for businesses.",
          },
          {
            title: "Social Media Marketing Management",
            text: "We manage your social platforms daily; posting, monitoring, and responding to keep your brand active and connected. Our expert social media marketing management services make your business visible, consistent, and on track.",
          },
          {
            title: "PR and Social Media Management",
            text: "We combine PR and social media management to help you communicate clearly, respond to feedback, and protect your brand’s image. Whether it’s a campaign launch or a public update, we help you say the right thing, the right way.",
          },
          {
            title: "Influencer Outreach & Collaboration",
            text: "We help connect your brand with the right influencers to increase reach and build trust. Our team manages the outreach, content alignment, and results tracking, making us a go-to social media marketing agency in Dubai for smart brand partnerships.",
          },
          {
            title: "Paid Social Media Advertising",
            text: "Need to boost reach or drive leads faster? We run targeted ad campaigns across Instagram, Facebook, LinkedIn, and more. Our social media marketing services in Dubai include full ad setup, management, and reporting, focused on clear returns, not just clicks.",
          },
        ]}
      />
     <NoMoreSilos
             heading="Your Customers Are Online.
Are You?"
             buttonText="Get you social back on track"
           />
             <InfoSection
             title="P.O.S.T Framework for Social
Media Marketing Management"
             paragraphs={[
               `Our social media marketing management services follow a clear, effective process that helps brands show up, stand out, and grow with the P.O.S.T framework.`,
             ]}
           />
           <SearchSection 
           letters={["P", "O", "S",, "T",]}
        heading="Plan With Purpose"
        paragraph="We start by learning your business goals and audience, then create a clear content calendar. Everything is mapped out so your posts are consistent, on-brand, and aligned with what matters."
        buttonText="Let's Plan Your Social Calender"
        buttonLink="#growth"
        showParagraph={true}
           />
     
         
     
           <FAQSection
             faqs={[
               {
                 question: "What is social media marketing management?",
                 answer:
                   "It means we handle social media for you — creating content, posting, and managing your pages. Our social media marketing management services keep your brand active and consistent online.",
               },
               {
                 question:
                   "Do I need to be on every platform?",
                 answer:
                 "No. We help you choose the best platforms for your business and focus on what works. Our social media marketing services for business are built around your goals, not trends."
               },
               {
                 question: "Can you help with Instagram, LinkedIn, and Facebook?",
                 answer:
                 "Yes. We manage all major platforms, including Instagram, Facebook, LinkedIn, and more. As a full-service social media marketing agency in Dubai, we tailor your content for each one."

               },
              {
                 question: "How often will you post for my business?",
                 answer:
                 "Yes, we do. We offer SEO services in UAE for small businesses that fit your budget and help you grow. Whether you need local SEO services in Dubai or help with content and links, we’ve got you covered."

               },
             {
                 question: " Do I get reports to see what’s working?",
                 answer:
                 "Yes, we do. We offer SEO services in UAE for small businesses that fit your budget and help you grow. Whether you need local SEO services in Dubai or help with content and links, we’ve got you covered."

               },
             ]}
           />
           <Contact
             heading="You Don’t Need More Time. You Need a Team."
             highlightText="We can manage your platforms, grow your presence, and take social media off your to-do list for good."
             buttonText="Talk to a Social Media Expert"
           />
    </>
  );
};

export default SocialMedia;
