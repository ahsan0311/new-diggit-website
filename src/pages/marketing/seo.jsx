import React from "react";
import Hero from "../../components/develpoemnt/Hero";
import WhatWeBuild from "../../components/develpoemnt/WhatWeBuild";
import LogoMarquee from "../../components/develpoemnt/Marwuee";
import BuildMy from "../../components/develpoemnt/BuildMy";
import AllCards from "../../components/develpoemnt/AllCards";
import FAQSection from "../../components/develpoemnt/Faqs";
import Contact from "../../components/Contact";
import WhyWorkSection from "../../components/develpoemnt/WhyWorkSection";
import NoMoreSilos from "../../components/NoMoreSilos";
import InfoSection from "../../components/develpoemnt/InfoSection";
import HowWeWork from "../../components/develpoemnt/WorkCards";
import SearchSection from "../../components/digitalMarketing/SearchSection";

const SeoMarketing = () => {
  return (
    <>
      <Hero
      bgImage="https://diggitglobal.com/assets/images/seo_banner.png"
        smallHeading="Everyone Promises SEO."
        mainHeading={<>We Actually Deliver It.</>}
        description={
          <>
            Work with an SEO consultant who knows how to get your business seen
            and clicked. Get access to <br /> tailored strategies that cover
            everything from local SEO services to scalable private label SEO,
            driving <br />
            results across the UAE and beyond. Our SEO agency in Dubai helps you
            grow where it matters most: <br /> search.
          </>
        }
        buttonText="Boost My SEO"
      />

      <WhatWeBuild
        heading="What We Offer"
        para1="At Diggit, we build integrated digital marketing solutions that connect your brand with the right audience, on the right channel, with the right message. As a digital marketing expert in Dubai, we combine creativity, data, and technology to deliver real business growth, not just clicks and impressions."
        para2="Here’s what our digital marketing services in the UAE include:"
        buttonText="Start your project"
        buttonLink="/contact"
      />

      {/* <BuildMy heading="We Use the best in tech" showButton={false} /> */}
      {/* <LogoMarquee
        logos={[
          "https://diggitglobal.com/assets/images/logo_8.png",
          "https://diggitglobal.com/assets/images/logo_9.png",
          "https://diggitglobal.com/assets/images/logo_10.png",
          "https://diggitglobal.com/assets/images/logo_11.png",
          "https://diggitglobal.com/assets/images/logo_12.png",
          "https://diggitglobal.com/assets/images/logo_13.png",
          "https://diggitglobal.com/assets/images/logo_14.png",
          "https://diggitglobal.com/assets/images/logo_15.png",
        ]}
        slidesToShow={6}
      /> */}
     

      <WhyWorkSection
        title="Our SEO Services"
        description={
          <>
            Diggit offers a full suite of SEO services in UAE designed to
            attract organic traffic and put you on the 1st page of the search <br />
            engine. Our SEO agency in Dubai offers packages that are accessible
            to all, whether you’re a local business, an eCommerce <br /> brand, or a
            growing agency.
          </>
        }
        buttonText="Rank Higher Now"
        cards={[
          {
            title: "Keyword Research & Strategy",
            text: "We build a custom keyword strategy based on your business goals and audience. This includes targeting high-impact keywords that improve visibility and attract the right traffic. Our SEO services start here: with a clear plan for ranking and growth.",
          },
          {
            title: "Link Building",
            text: "Our affordable link building services focus on earning high-quality links that build trust and improve your search engine rankings. We use safe, white-hat strategies to help you grow authority and outperform the competition.",
          },
           {
            title: "Technical SEO",
            text: "We fix the hidden problems that stop your website from ranking, like slow load times, poor mobile performance, or broken links. With our expert technical SEO services, your site will be easier for search engines to crawl and users to navigate.",
          },
          {
            title: "Local SEO",
            text: "Want to rank higher in Google Maps or local searches? Our local SEO services in Dubai help you reach nearby customers, improve your business listings, and increase traffic from people searching in your area.",
          },
          {
            title: "On-Page SEO",
            text: "Our on-page SEO services make sure every part of your website is optimized, from titles and meta tags to internal links and structured data. We help search engines understand your site, so you can rank higher and faster.",
          },
          {
            title: "Off-Page SEO",
            text: "Off-page SEO is all about building your reputation online. We improve your authority with backlinks, brand mentions, and content that gets attention; helping you rank better across all search engines.",
          },
          {
            title: "Franchise SEO",
            text: "If you run a business with multiple locations, our Franchise SEO services can help you rank each outlet locally. We create custom strategies for every branch, so you can grow across regions without losing focus.",
          },
          {
            title: "Shopify SEO",
            text: "Our Shopify SEO services are built to improve rankings, drive traffic, and increase sales for your online store. We optimize product pages, speed up load times, and make your site easier to find and shop.",
          },
          {
            title: "Amazon SEO",
            text: "We help you get more visibility and sales on Amazon by optimizing your product listings. Our Amazon SEO services include keyword research, product descriptions, and competitor analysis to improve your ranking and conversions.",
          },
          {
            title: "e-Commerce SEO",
            text: "Selling online? Our eCommerce SEO services help your store rank for the right keywords and get more qualified traffic. We improve your product pages, category structure, and overall site performance to grow your sales.",
          },
          {
            title: "Content Writing",
            text: "We create clear, helpful, and optimized content that supports your SEO strategy. Whether it’s blogs, product pages, or landing pages, our content helps your site rank better and connect with your audience.",
          },
          {
            title: "PR SEO Services",
            text: "We combine public relations and SEO to boost your brand’s online authority. Our PR SEO services get you featured on relevant websites, helping you earn high-value backlinks and grow your visibility.",
          },
          {
            title: "Guest Post Outreach Service",
            text: "Need better backlinks? Our guest post outreach service finds trusted websites in your niche and gets your content published, building your authority and improving rankings over time.",
          },
          {
            title: "SEO Consultant",
            text: "Work with an experienced SEO consultant in Dubai to build a smart, custom SEO strategy for your business. We provide audits, competitor research, and ongoing advice to help you grow online.",
          },
          {
            title: "Conversion Rate Optimization",
            text: "It’s not just about traffic anymore, it’s about what visitors do when they land. Our CRO services help you turn more visitors into leads and customers by improving your site layout, messaging, and calls to action.",
          },
           {
            title: "White Label SEO Services",
            text: "Our white label SEO services help agencies grow without adding overhead. We handle everything behind the scenes - from audits to content to reporting - so you can deliver top-tier SEO under your own brand.",
          },
           {
            title: "Private Label SEO Services",
            text: "Need a fully managed SEO solution you can resell? Our private label SEO services include complete strategies, deliverables, and results; done for you, delivered as your own.",
          },
        ]}
      />
     
      {/* <AllCards /> */}
      <NoMoreSilos
        heading="Your Customers Are Searching. Are You Even Showing Up?"
        buttonText="Get you free SEO audit"
      />
        <InfoSection
        title="S.E.A.R.C.H Framework
for Real SEO Results"
        paragraphs={[
          `We build systems that earn you rankings. At Diggit, our S.E.A.R.C.H. process powers every SEO project we run, be it local SEO services in Dubai to affordable link building and beyond. Here's how it works:`,
        ]}
      />
      <SearchSection/>

    

      <FAQSection
        faqs={[
          {
            question: "  What is SEO and why do I need it?",
            answer:
              "SEO (Search Engine Optimization) helps your website show up on Google when people search for what you offer. Without a good SEO agency in Dubai, your customers may never find you, even if your business is great.",
          },
          {
            question:
              " How long does SEO take to work?",
            answer:
              "SEO is not instant. It usually takes 3–6 months to see real results, depending on your website, your competition, and your goals. But the good news? Once it starts working, the results last longer than paid ads.",
          },
          {
            question: "Do you offer SEO services for small businesses?",
            answer:
              "Yes, we do. We offer SEO services in UAE for small businesses that fit your budget and help you grow. Whether you need local SEO services in Dubai or help with content and links, we’ve got you covered.",
          },
         {
            question: "Do you offer SEO services for small businesses?",
            answer:
              "Yes, we do. We offer SEO services in UAE for small businesses that fit your budget and help you grow. Whether you need local SEO services in Dubai or help with content and links, we’ve got you covered.",
          },
        {
            question: "Do you offer SEO services for small businesses?",
            answer:
              "Yes, we do. We offer SEO services in UAE for small businesses that fit your budget and help you grow. Whether you need local SEO services in Dubai or help with content and links, we’ve got you covered.",
          },
        ]}
      />
      <Contact
        heading="It’s time to stop guessing and start growing."
        highlightText="If you’re tired of fake reports, missed deadlines, or SEO that sounds like it’s magic, let’s talk. Our SEO services in the UAE deliver honest results and realistic wins."
        buttonText="Get A Free SEO Audit"
      />
    </>
  );
};

export default SeoMarketing;
