import React from 'react'
import Navbar from './Components/Navbar/Navbar'
import Hero from './Components/Hero/Hero'
import Programs from './Components/Programs/Programs'
import Title from './Components/Title/Title'
import About from './Components/About/About'


function App() {
  return (
    <div>
      <Navbar />
      <Hero />
      <div>
        <Title title="Our Program" subtitle="What We Offer"/>
        <Programs />
        <About />
      </div>


      
    </div>
  )
}

export default App
