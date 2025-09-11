import React from 'react'
import Hero from '../../components/about/Hero'
import MissionVision from '../../components/about/MissionVision'
import OriginStory from '../../components/about/OriginStory'
import AboutCard from '../../components/about/AboutCard'
import Contact from '../../components/Contact'


const About = () => {
  return (
    <>
    <section>
      <Hero/>
      <MissionVision/>
      <OriginStory/>
      <AboutCard/>
      <Contact/>
    </section>
    </>
  )
}

export default About