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
      <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d294.64939118376657!2d39.566658406036744!3d-4.2710513802970755!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1840458fdfb2cba1%3A0x35b38c3318671f94!2sRayaan%20Hospital%20Diani!5e1!3m2!1sen!2ske!4v1722945229712!5m2!1sen!2ske" width="600" height="450" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
      </div>
    </div>
    </>
  )
}

export default Contact