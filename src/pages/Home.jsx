import React from 'react'
import Nav from '../components/Nav'
import About from '../components/About'
import Contact from '../components/Contact'
import Hero from '../components/Hero'
import Project from '../components/Project'
import Skills from '../components/Skills'
import Footer from '../components/Footer'

const Home = () => {
  return (
    <div className='bg-black text-white'>
        <Hero/>
        <About/>
        <Project/>
        <Skills/>
        <Contact/>
        <Footer/>
    </div>
  )
}

export default Home;