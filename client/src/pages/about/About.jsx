import React from 'react'
import { Helmet } from 'react-helmet'

import img1 from '../imgs/img1.jpg'

function About() {
  return (
    <>
    <Helmet>
      <title>Katana's Biography</title>
      <link rel="canonical" href={window.location.href} />
      <meta property="og:description" content="Software Developer" />
      <meta property="og:image" content="" />
    </Helmet>
    <div className="about">
      <img src={img1} alt="" />
      <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Modi repudiandae ullam minima accusantium eveniet nesciunt delectus cupiditate cumque autem quisquam, aspernatur atque debitis ipsam doloremque explicabo fugiat iusto, placeat fuga?</p>
    </div>
    </>
  )
}

export default About