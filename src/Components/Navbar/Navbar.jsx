import React from 'react'
import logo from '../../assets/logo.png'


function Navbar() {
  return (
    <nav className='px-[10%]'>
        <img src={logo} alt="Edusity Logo" className='w-[180px] '/>
        <ul>
            <li>Home</li>
            <li>Program</li>
            <li>About Us</li> 
            <li>Campus</li>
            <li>Testimonials</li>
            <li><button className='btn'>Contact Us</button></li>
        </ul>
    </nav>
  )
}

export default Navbar
