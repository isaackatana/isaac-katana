import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import { Link } from 'react-router-dom'
import { faFacebook, faGithub, faInstagram, faXTwitter } from '@fortawesome/free-brands-svg-icons'

function Footer() {
  return (
    <footer>
    <div>
        <p>©2024 Isaac Katana | All rights reserved.</p>
    </div>
    <div className='social-media'>
        <a href='facebook.com/1isaackatana' target='blank'><FontAwesomeIcon icon={faFacebook}/></a>
        <Link to='instagram.com/1isaackatana' target='blank'><FontAwesomeIcon icon={faInstagram}/></Link>
        <Link to='instagram.com/1isaackatana' target='blank'><FontAwesomeIcon icon={faXTwitter}/></Link>
    </div>
    </footer>
  )
}

export default Footer