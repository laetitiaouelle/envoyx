import React from 'react'
import Hero from '../../src/landing/Hero'
import About from '../../src/landing/About'
import Contact from '../../src/landing/Contact'
import Footer from '../../src/landing/Footer'

function Landing() {
  return (
    <div className='bg-[#fff] overflow-hidden' >
        <Hero/>
        <About/>
        <Contact/>
        <Footer/>
    </div>
  )
}

export default Landing