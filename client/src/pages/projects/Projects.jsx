import React from 'react'
import { Helmet } from 'react-helmet'
import ProjectsList from './ProjectsList'

function Projects() {
  return (
    <>
    <Helmet>
      <title>Katana's Projects</title>
      <link rel="canonical" href={window.location.href} />
      <meta property="og:description" content="Software Developer" />
      <meta property="og:image" content="" />
    </Helmet>
    <div className="projects">
      <div className="container">
        <ProjectsList/>
      </div>
    </div>
    </>
  )
}

export default Projects