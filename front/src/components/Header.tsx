import { FaBars, FaGithub, FaLinkedinIn } from 'react-icons/fa'
import { FaXTwitter } from 'react-icons/fa6'
import { Link, NavLink } from 'react-router-dom'

function Header() {
  return (
    <>
    <header className="header">
      <div className="logo">
        <Link to='/'>Logo</Link>
      </div>
      <nav>
        <ul className="nav-links">
          <li><NavLink to="/">Home</NavLink></li>
          <li><NavLink to="/about">About</NavLink></li>
          <li><NavLink to="/portfolio">Portfolio</NavLink></li>
          <li><NavLink to="/blog">Blog</NavLink></li>
          <li><NavLink to="/contact">Contact</NavLink></li>
        </ul>
      </nav>
      
      <div className="nav2">
        <div className="social-links">
          <FaGithub/>
          <FaLinkedinIn/>
          <FaXTwitter/>
        </div>

        <div className="burger">
          <FaBars/>
        </div>
      </div>
    </header>
    </>
  )
}

export default Header