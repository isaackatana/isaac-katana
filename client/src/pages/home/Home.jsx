
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'
import { Link } from 'react-router-dom'
import { Helmet } from 'react-helmet'
import { faArrowRight } from '@fortawesome/free-solid-svg-icons'
import BlogList from '../blog /BlogList'

function Home() {
  
  return (
    <>
    <Helmet>
      <title>Isaac Katana</title>
      <link rel="canonical" href={window.location.href} />
      <meta property="og:url" content={window.location.href} />
      <meta property="og:type" content="website" />
      <meta property="og:description" content="Audio Engineer, Web Developer" />
    </Helmet>
    <div className='home'>
      <div className="overlay"></div>

      <div className='wrapper'>
        <div>
          <h1>Hello I'm Isaac</h1>
          <p>Film Editor, Audio Engineer, Web Developer</p>
        </div>
        <Link to="/about">Read more <FontAwesomeIcon icon={faArrowRight}/></Link>
      </div>

    </div>
    <BlogList/>
    </>
  )
}

export default Home