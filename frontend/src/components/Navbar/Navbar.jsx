import React, { useState } from 'react'
import { Link } from 'react-router-dom';
import './Navbar.css'
import logo from '../Assets/logo.png'
import cart_icon from '../Assets/cart_icon.png'

const Navbar = () => {

  const [menu, setMenu] = useState("shop");
  return (
    <div className='navbar'>
      <div className='nav-logo'>
        <img src={logo} alt='logo' />
        <p>SHOPPER</p>
      </div>
      <ul className='nav-menu'>
        <li onClick = {() => {setMenu("shop")}}><Link style={{ textDecoration: 'none'}} to = '/'>Shop</Link>{menu==="shop"?<hr/>:<></>}</li>
        <li onClick = {() => {setMenu("clothes")}}><Link style={{ textDecoration: 'none'}} to = '/mens'>Clothes</Link>{menu==="clothes"?<hr/>:<></>}</li>
        <li onClick = {() => {setMenu("tech")}}><Link style={{ textDecoration: 'none'}} to = '/kids'>Tech</Link>{menu==="tech"?<hr/>:<></>}</li>
      </ul>
      <div className='nav-login-cart'>
        <Link to = '/login'><button>Login</button></Link>
        <Link to = '/cart'><img src={cart_icon} alt='cart'/></Link>
        <div className='nav-cart-count'>0</div>
      </div>
    </div>
  )
}

export default Navbar