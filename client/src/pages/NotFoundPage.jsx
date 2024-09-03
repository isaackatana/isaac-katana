import React from 'react'
import { Helmet } from 'react-helmet'
import { Link } from 'react-router-dom'

function NotFoundPage() {
  return (
    <>
    <Helmet>
        <title>Page Not Found</title>
    </Helmet>
    <div className="not-found-page">
        <div>
            <h1>404</h1>
            <p>Page Not Found</p>
            <p>Back to <Link to='/'>Home</Link></p>
        </div>
    </div>
    </>
  )
}

export default NotFoundPage