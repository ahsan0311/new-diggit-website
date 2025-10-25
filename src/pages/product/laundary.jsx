import React from 'react'
import ProductCard from '../../components/product/ProductCard'
import Hero from '../../components/develpoemnt/Hero';
import Contact from '../../components/Contact';
import Timeline from '../../components/HowWeWork';
import { FaCompass, FaCubes, FaPuzzlePiece, FaRocket } from "react-icons/fa";

  import { Link } from "react-router-dom";

const customSteps = [
  {
    id: "01",
    title: "Discover",
    desc: "We begin by gaining a clear understanding of your business—your goals, challenges, and vision of success. From the start, our team takes a consultative approach to identify opportunities and uncover what truly drives your operations.",
    icon: <FaCompass className="text-blue-400 " />,
  },
  {
    id: "02",
    title: "Build",
    desc: " Our development team transforms ideas into working solutions, customizing every feature and interface to match your business needs. Using agile practices and user-focused design, we deliver powerful software that’s scalable, efficient, and built to perform.",
    icon: <FaCubes className="text-blue-400 " />,
  },
  {
    id: "03",
    title: "Strategize",
    desc: "We craft a clear technology roadmap tailored to your workflows—whether it’s cloud architecture, AI solutions, or smart dashboard integrations. At this stage, business analysis meets digital transformation, ensuring every solution is aligned with your long-term growth.",
    icon: <FaPuzzlePiece className="text-blue-400 " />,
  },
  {
    id: "04",
    title: "Launch",
    desc: "Our partnership doesn’t end at deployment. We stay by your side to optimize, maintain, and enhance your systems as your business evolves. With ongoing support and continuous improvements, we make sure your technology keeps delivering long-term value and lasting results.",
    icon: <FaRocket className="text-blue-400 " />,
  },
];

const Laundary = () => {
 

  return (
    <div >
      <Hero  
      bgImage='https://th.bing.com/th/id/OIP.5Nfjenz-IIfI8hpJ1PBAawHaEo?w=281&h=180&c=7&r=0&o=7&dpr=1.3&pid=1.7&rm=3'
       mainHeading={<>Empower Your Water Delivery Business with Hydrila</>}
       showSmallHeading={false}
       buttonText="Sign Up"
       description={<>Hydrila is a comprehensive software solution designed to streamline your <br /> mineral water delivery operations. Manage finances, sales, workers, and <br /> more with ease.</>}
       />
     <Timeline heading="Custom Heading for This Page"
  description="Custom description text goes here for this page." steps={customSteps}/>

<div className="flex justify-center w-full mb-4">
  <Link
    to="/contact"
    className="w-full max-w-md bg-gradient-to-r from-blue-600 to-sky-500 
    text-white font-bold py-5 rounded-full text-xl 
    transition duration-300 hover:brightness-110 text-center inline-block"
  >
    More Details
  </Link>
</div>

      <Contact/>
    </div>
  );
};



export default Laundary