import React from 'react'
import Header from './header/Header'
import Nav from './nav/Nav'
import About from './about/About'
import Experience from './experience/Experience'
import Portfolio from './portfolio/Portfolio'
import Services from './services/Services'
import Test from './testimonial/test'
import Contact from './contact/Contact'
import Footer from './footer/Footer'


function App ()  {
  return (
    <>
      <Header />
      <Nav />
      <About />
      <Experience />
      <Services />
      <Portfolio />
      <Test/>
      <Contact />
      <Footer/>
    </>
  )
}

export default App