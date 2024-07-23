import React, { useEffect, useState } from 'react'
import logo from '../../assets/logo.png'


function Navbar() {

  const[sticky, setSticky] = useState(false)

  useEffect(() => {
    window.addEventListener('scroll', () => {
      window.scrollY > 500 ? setSticky(true) : setSticky(false)
    })

  }, [])

  return (
    <nav className={`container2 ${sticky ? 'dark-nav' : ''}`}>
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
