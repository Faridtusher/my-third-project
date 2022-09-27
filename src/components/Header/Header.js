import React from 'react';
import './Header.css'
import logo from '../../images/Logo.svg'

const Header = () => {
   return (
      <nav className='header-container'>
         <img src={logo} alt="" />

         <div className='nav-link'>
            <a href="/order">Order</a>
            <a href="/Review">Order Review</a>
            <a href="/Inventory">Manage Inventory</a>
            <a href="/Log in">Log in</a>
         </div>  
      </nav>
   );
};

export default Header;