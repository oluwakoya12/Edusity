import React from 'react'
import about_img from '../../assets/about.png'
import play_icon from '../../assets/play-icon.png'

function About() {
  return (
    <div className='my-[100px] mx-auto flex items-center justify-between w-[90%]' id='about'>
      <div className='basis-[40%] relative'> 
        <img src={about_img} alt="About" className='w-full rounded-[10px]'/>
        <img src={play_icon} alt="" className='w-[60px] rounded-[10px] absolute top-[50%] left-[50%] transform -translate-x-1/2 -translate-y-1/2'/>
      </div>
      <div className='basis-[56%]'>
        <h3 className='font-semibold text-[#212ea0]'>ABOUT UNIVERSITY</h3>
        <h2 className='text-[35px] my-10px mx-0 text-[#000f38] max-w-[400px]'>Nurturing Tomorrow's Leaders Today</h2>
        <p className='text-[#676767] mb-[15px]'>Embark on a transformative educational journey with our unversity's comprehensive education programs. OUr cutting edge curriculum is designed to empower students with the knowledge, skilss and experiences need ed to excel in the dynamice field of education</p>
        <p className='text-[#676767] mb-[15px]'>With a focus on innovation, hands-on learning and personalize mentorship, our prograems prpepare aspiring educators to make a meaningful impact in classrooms, schools and communities</p>
        <p className='text-[#676767] mb-[15px]'>Whether you aspire to become a teacher, administrator, counselor, or educational leader, our diverse range of programs offers the perfect pathway to achieve your goals and unlock your full potential in shaping the future of education</p>
        
      </div>
    </div>
  )
}

export default About
