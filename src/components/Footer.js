import React from 'react'
import "./styles/Footer.css";
import instagramIMG from '../assets/icons/instagram.png';
import githubIMG from '../assets/icons/github.png';
import whatsappIMG from '../assets/icons/whatsapp.png';
import discordIMG from '../assets/icons/discord.png';
import redditIMG from '../assets/icons/reddit.png';

const Footer = () => {
  return (
    <footer className='footer-container'>
      <div className='footer-pink'></div>
      <div className='footer-container_data'>
        <div className='footer-data_left'>
          <h3>Praxu</h3>
          <p>Praxu is a marketplace for event tickets that is giving creators the power to control their own tickets</p>
          <p>©Praxu 2021. All rights reserved</p>
        </div>
        <div className='footer-data_right'>
          <label form='email'>Join email list</label>
          <input type="text" id="email" name="email" placeholder='Your email'></input>
          <p>Connect with the community</p>
          <ul>
            <li>
              <a href='/'>
                <img src={instagramIMG} alt='instagram logo'/>
              </a>
            </li>
            <li>
              <a href='/'>
                <img src={githubIMG} alt='github logo'/>
              </a>
            </li>
            <li>
              <a href='/'>
                <img src={whatsappIMG} alt='whatsapp logo'/>
              </a>
            </li>
            <li>
              <a href='/'>
                <img src={discordIMG} alt='discord logo'/>
              </a>
            </li>
            <li>
              <a href='/'>
                <img src={redditIMG} alt='reddit logo'/>
              </a>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  )
}

export default Footer
