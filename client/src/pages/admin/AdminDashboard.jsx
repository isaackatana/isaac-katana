import React from 'react'
import { NavLink } from 'react-router-dom'
import { Helmet } from 'react-helmet'
import BlogList from '../blog /BlogList'

function AdminDashboard() {
  return (
    <>
    <Helmet>
      <title>Hi, Isaac</title>
      <link rel="canonical" href={window.location.href} />
      <meta property="og:description" content="Software Developer" />
      <meta property="og:image" content="" />
    </Helmet>
    <div className="admin-dashboard">
        <div>
          <div className='profile-pic'>
            <img src="../imgs/img1.jpg" alt="" />
          </div>
          <div>
            <h1>Isaac Katana</h1>
            <p>Administrator</p>
          </div>
        </div>
        <div className='container'>
          <div className='wrapper'>
            <div>
              <NavLink to=''>Blogs</NavLink>
              <NavLink to='/blog'>Projects</NavLink>
              <NavLink to=''>Courses</NavLink>
            </div>
            <div className='post-input'>
                <input type="text" placeholder='Title'/>
                <textarea name="" id="" placeholder='Markdown'></textarea>
                <div>
                  <div></div>
                  <button>Save</button>
                </div>
            </div>
          </div>
          <BlogList/>
        </div>
    </div>
    </>
  )
}

export default AdminDashboard