import { Link } from 'react-router-dom'

function Header() {
  return (
    <>
    <header className="header">
      <div className="logo">
        <h1>IK</h1>
      </div>
      <nav>
        <ul className="nav-links">
          <li><Link to="/">Home</Link></li>
          <li><Link to="/about">About</Link></li>
          <li><Link to="/portfolio">Portfolio</Link></li>
          <li><Link to="/blog">Blog</Link></li>
          <li><Link to="/contact">Contact</Link></li>
        </ul>
      </nav>
    </header>
    </>
  )
}

export default Header