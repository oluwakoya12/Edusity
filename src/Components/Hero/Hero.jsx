import React from 'react'
import dark_arrow from '../../assets/dark-arrow.png'
 

function Hero() {
  return (
    <div className="bg-hero-pattern w-full min-h-screen bg-cover bg-center text-white container2 flex items-center justify-center" id='hero'>
      <div className="text-center max-w-[800px] " >
        <h1 className="text-[60px] font-semibold">We ensure better education for a free world</h1>
        <p className="max-w-[700px] my-[10px] mx-auto leading-snug">Our cutting edge curriculum is designed to empower students with the knowledge, skills and experiences needed to excel in the dynamic field of education</p>
        <button className="btn text-center" >Explore More <img src={dark_arrow} alt="" /></button>
      </div>
    </div>
  )
}

export default Hero
