import React from 'react'
import { Link } from 'react-router-dom'

function NotFoundPage() {
  return (
    <>
    <div>
        <h1>404</h1>
        <div>Page Not Found</div>
    </div>
    <p>Return to <Link to='/'>Home</Link></p>
    </>
  )
}

export default NotFoundPage