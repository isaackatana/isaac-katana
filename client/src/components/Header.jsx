import React from 'react'
import Logo from '../assets/logo.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFacebook, faInstagram, faXTwitter } from '@fortawesome/free-brands-svg-icons'


import { Link, NavLink } from 'react-router-dom'
import { useState } from 'react'
import { faUser, faSignIn, faSignOut } from '@fortawesome/free-solid-svg-icons'

function Header() {

    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

  return (
    <header>
        <div className='logo'>
            <Link to="/"><img src={Logo} alt="Logo" /></Link>
        </div>

        <ul className={`menu ${isOpen ? 'active' : ''}`}>
            <NavLink to="/">Home</NavLink>
            <NavLink to="/blog">Blog</NavLink>
            <NavLink to="/projects">Projects</NavLink>
            <NavLink to="/courses">Courses</NavLink>
            <NavLink to="/contact">Contact</NavLink>
            <NavLink to="/about">About</NavLink>
        </ul>

        <div className={`overlay ${isOpen ? 'active' : ''}`} onClick={toggleMenu}></div>

        <div className='nav'>

            <nav>
                <div className='social-media'>
                    <Link to='facebook.com/1isaackatana' target='blank'><FontAwesomeIcon icon={faFacebook}/></Link>
                    <Link to='instagram.com/1isaackatana' target='blank'><FontAwesomeIcon icon={faInstagram}/></Link>
                    <Link to='instagram.com/1isaackatana' target='blank'><FontAwesomeIcon icon={faXTwitter}/></Link>
                </div>
            </nav>
                <div className="user">
                    <Link to='/login'>
                        <div className="user-login">
                            {/* <FontAwesomeIcon icon={faSignIn}/> */}
                            <FontAwesomeIcon icon={faSignOut}/>
                        </div>
                    </Link>
                    <Link to='/admin'>
                        <div className="admin-profile">
                            <FontAwesomeIcon icon={faUser}/>
                        </div>
                    </Link>
                </div>

            <div className='burger' onClick={toggleMenu} >
                <div className={`line1 ${isOpen ? 'active' : ''}`}></div>
                <div className={`line2 ${isOpen ? 'active' : ''}`}></div>
                <div className={`line3 ${isOpen ? 'active' : ''}`}></div>
            </div>
            
        </div>
    </header>
  )
}

export default Header