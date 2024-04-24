import React, { useState } from 'react'
import { Link } from 'react-router-dom';
import './Navbar.css'
import logo from '../Assets/logo.png'
import cart_icon from '../Assets/cart_icon.png'
import { ShopContext } from '../../context/ShopContext';
import { useContext } from 'react';

const Navbar = () => {

  const [menu, setMenu] = useState("shop");
  const {getTotalCartItems} = useContext(ShopContext);

  return (
    <div className='navbar'>
      <div className='nav-logo'>
        <img src={logo} alt='logo' />
        <p>SHOPPER</p>
      </div>
      <ul className='nav-menu'>
        <li onClick = {() => {setMenu("shop")}}><Link style={{ textDecoration: 'none'}} to = '/'>Shop</Link>{menu==="shop"?<hr/>:<></>}</li>
        <li onClick = {() => {setMenu("clothes")}}><Link style={{ textDecoration: 'none'}} to = '/clothes'>Clothes</Link>{menu==="clothes"?<hr/>:<></>}</li>
        <li onClick = {() => {setMenu("tech")}}><Link style={{ textDecoration: 'none'}} to = '/tech'>Tech</Link>{menu==="tech"?<hr/>:<></>}</li>
      </ul>
      <div className='nav-login-cart'>
        {localStorage.getItem('auth-token')
        ?<button onClick={() => {localStorage.removeItem('auth-token');window.location.replace('/')}}>Logout</button>
      :<Link to = '/login'><button>Login</button></Link>}
        <Link to = '/cart'><img src={cart_icon} alt='cart'/></Link>
        <div className='nav-cart-count'>{getTotalCartItems()}</div>
      </div>
    </div>
  )
}

export default Navbar