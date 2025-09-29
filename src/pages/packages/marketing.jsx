import React from 'react'
import Hero from '../../components/develpoemnt/Hero'
import Contact from '../../components/Contact'

const Marketing = () => {
  return (
    <>
    <Hero 
       mainHeading={<>Empower Your Water Delivery Business with Hydrila</>}
       showSmallHeading={false}
       buttonText="Sign Up"
       description={<>Hydrila is a comprehensive software solution designed to streamline your <br /> mineral water delivery operations. Manage finances, sales, workers, and <br /> more with ease.</>}
       />
       <Contact/>
    </>
  )
}

export default Marketing