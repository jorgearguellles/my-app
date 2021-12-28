import React from 'react'
import login from "../assets/icons/login.png";
import lupa from "../assets/icons/lupa.png";
import home from "../assets/icons/home.png";
import "./styles/MobileMenu.css";

const MobileMenu = () => {
  return (
    <div className='mobile-menu-container'>
      <ul className='mobile-menu'>
        <li>
          <a href='/'>
            <img src={home} alt="home icon"/>
          </a>
        </li>
        <li>
          <a href='/'>
            <img src={lupa} alt="lupa icon"/>
          </a>
        </li>
        <li>
          <a href='/'>
            <img src={login} alt="login icon"/>
          </a>
        </li>
      </ul>
    </div>
  )
}

export default MobileMenu;
