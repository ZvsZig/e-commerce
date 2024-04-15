import React from 'react'
import './Navbar.css' 
import logo from '../Assets/logo.png'


const Navbar = () => {
  return (
    <div className='navbar'>
        <div className = 'nav-logo'>
            <img src = {logo} alt = 'logo' />
        </div>
        <p>UMET</p>
    </div>
  )
}

export default Navbar