import React from 'react'
import './header.css'
import { FaLinkedin, FaGithub } from 'react-icons/fa'
import About from '../about/About'

const Header = () => {
  return (
    <header>
      <div className="social-links">
        <a href="https://www.linkedin.com/in/navsudheer/" target="_blank" rel="noopener noreferrer">
          <FaLinkedin />
        </a>
        <a href="https://github.com/navsudheer" target="_blank" rel="noopener noreferrer">
          <FaGithub />
        </a>
      </div>
      
      <h1>Navaneeth Sudheer</h1>
      
      <About />

      <div className="scrolling-text">
        Developer • Designer • Creator •&nbsp;
      </div>
    </header>
  )
}

export default Header