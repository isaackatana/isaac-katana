import { useState } from 'react';
import { FaBars, FaGithub, FaLinkedinIn } from 'react-icons/fa'
import { FaXmark, FaXTwitter } from 'react-icons/fa6'
import { Link, NavLink } from 'react-router-dom'

import Logo from '../assets/logo.png'

function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <>
    <header className="header">
      <div className="logo">
        <Link to='/'><img src={Logo} alt="" /></Link>
      </div>
      
      <nav>
          <ul className={`nav-links ${isMenuOpen ? 'active' : 'inactive'}`}>
            <li><NavLink to="/">Home</NavLink></li>
            <li><NavLink to="/about">About</NavLink></li>
            <li><NavLink to="/portfolio">Portfolio</NavLink></li>
            <li><NavLink to="/blog">Blog</NavLink></li>
            <li><NavLink to="/contact">Contact</NavLink></li>
          </ul>
      </nav>
      
      <div className="nav2">
      <div className="social-links">
        <a href="https://github.com/isaackatana" target="_blank" rel="noopener noreferrer"><FaGithub/></a>
        <a href="https://linkedin.com/in/isaackatana" target="_blank" rel="noopener noreferrer"><FaLinkedinIn/></a>
        <a href="https://twitter.com/1isaackatana" target="_blank" rel="noopener noreferrer"><FaXTwitter/></a>
      </div>

        <div className="burger">
          
          
          {isMenuOpen ? <FaXmark onClick={toggleMenu}/> : <FaBars onClick={toggleMenu}/>}
        </div>
      </div>
    </header>
    </>
  )
}

export default Header