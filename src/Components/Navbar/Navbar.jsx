import React, { useEffect, useState } from 'react'
import logo from '../../assets/logo.png'
import { Link } from 'react-scroll'

function Navbar() {

  const[sticky, setSticky] = useState(false)

  useEffect(() => {
    window.addEventListener('scroll', () => {
      window.scrollY > 700 ? setSticky(true) : setSticky(false)
    })

  }, [])

  return (
    <nav className={`container2 ${sticky ? 'dark-nav' : ''}`}>
        <img src={logo} alt="Edusity Logo" className='w-[180px] '/>
        <ul>
            <li><Link to='hero' smooth={true} duration={500} offset={0}>Home</Link></li>
            <li><Link to='program' smooth={true} duration={500} offset={-260}>Program</Link></li>
            <li><Link to='about' smooth={true} duration={500} offset={-150}>About Us</Link></li> 
            <li><Link to='campus' smooth={true} duration={500} offset={-260}>Campus</Link></li>
            <li><Link to='testimonials' smooth={true} duration={500} offset={-260}>Testimonials</Link></li>
            <li><button className='btn'><Link to='contact' smooth={true} duration={500} offset={-260}>Contact us</Link></button></li>
        </ul>
    </nav>
  )
}

export default Navbar
