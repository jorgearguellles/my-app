import React from 'react'
import logo from "../assets/icons/logoPraxu.png";
import login from "../assets/icons/login.png";
import wallet from "../assets/icons/wallet.png";
import Search from "../components/Search";
import "./styles/Header.css";

const Header = () => {
  return (
    <header className='header-container'>
      <img src={logo} className='header-logo' alt="logo praxu"/>
      <Search 
        placeholder="Search tickets, hosts and people"
      />
      <ul className='header-nav'>
        <li>
          <a href='/'>Attends</a>
        </li>
        <li>
          <a href='/'>Stats</a>
        </li>
        <li>
          <a href='/'>Resources</a>
        </li>
        <li>
          <a href='/'>Create</a>
        </li>
        <li>
          <a href='/'>
            <img src={wallet} alt="wallet icon"/>
          </a>
        </li>
        <li>
          <a href='/'>
            <img src={login} alt="login icon"/>
          </a>
        </li>
      </ul>
    </header>
  )
}

export default Header;
