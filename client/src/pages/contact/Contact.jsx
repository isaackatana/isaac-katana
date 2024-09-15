import { faEnvelope, faLocation, faPhone } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'
import { Helmet } from 'react-helmet'

function Contact() {
  return (
    <>
    <Helmet>
      <title>Katana's Contact </title>
      <link rel="canonical" href={window.location.href} />
      <meta property="og:description" content="Software Developer" />
      <meta property="og:image" content="" />
    </Helmet>
    <div className="contact">
      <div>
        <ul>
          <li><FontAwesomeIcon icon={faPhone}/>+254743195701</li>
          <li><FontAwesomeIcon icon={faEnvelope}/>admin@isaackatana.com</li>
          <li><FontAwesomeIcon icon={faLocation}/>Diani | Tukutane, Opp. Rayan Hospital</li>
        </ul>
        <h4>Talk to me</h4>
        <form action="">
          <input type="text" placeholder='Name'/>
          <input type="tel" placeholder='Phone'/>
          <textarea name="" id="" placeholder='Message...'></textarea>
          <div>
            <div></div>
            <button>Send</button>
          </div>
        </form>
      </div>
      <div>
      <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d2040427.7577031169!2d38.2043982!3d-2.7539264!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xac7668ea4c58a20f%3A0x619dc62bf34a4709!2sIsaac%20katana!5e0!3m2!1sen!2ske!4v1726241047510!5m2!1sen!2ske" width="600" height="450" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
      </div>
    </div>
    </>
  )
}

export default Contact