import React from 'react'
import { NavLink } from 'react-router-dom'

function Header() {
  return (
    <>
    <Header>
        <div className="header1"></div>
        <div className="header2">
            <div className="logo"></div>
            <nav>
                <ul>
                    <NavLink to="/">Home</NavLink>
                    <NavLink to="/projects">Projects</NavLink>
                    <NavLink to="/contact">Contact</NavLink>
                    <NavLink to="/about">About</NavLink>
                </ul>
            </nav>
        </div>
    </Header>
    </>
  )
}

export default Header