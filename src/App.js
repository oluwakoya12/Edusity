import React from 'react'
import Navbar from './Components/Navbar/Navbar'
import Hero from './Components/Hero/Hero'
import Programs from './Components/Programs/Programs'
import Title from './Components/Title/Title'
import About from './Components/About/About'
import Campus from './Components/Campus/Campus'
import Testimonials from './Components/Testimonials/Testimonials'
import Contact from './Components/Contact/Contact'


function App() {
  return (
    <div>
      <Navbar />
      <Hero />
      <div>
        <Title title="Our Program" subtitle="What We Offer"/>
        <Programs />
        <About />
        <Title title="Gallery" subtitle="Campus Photos" />
        <Campus />
        <Title title="Testimonials" subtitle="What Student Says" />
        <Testimonials />
        <Title title="Contact us" subtitle="Get In Touch" />
        <Contact />

      </div>


      
    </div>
  )
}

export default App
