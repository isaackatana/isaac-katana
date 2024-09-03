import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'

import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Home from './pages/home/Home.jsx'
import About from './pages/about/About.jsx'
import Contact from './pages/contact/Contact.jsx'
import Projects from './pages/projects/Projects.jsx'
import Blog from './pages/blog /Blog.jsx'
import AdminDashboard from './pages/admin/AdminDashboard.jsx'
import PostContainer from './pages/blog /PostContainer.jsx'
import NotFoundPage from './pages/NotFoundPage.jsx'
import App from './App.jsx'
import Courses from './pages/courses/Courses.jsx'
import CourseContainer from './pages/courses/CourseContainer.jsx'
import ProjectContainer from './pages/projects/ProjectContainer.jsx'

const router = createBrowserRouter([
  {
    path: '/',
    element: <App/>,
    errorElement: <NotFoundPage/>,
    children: [
      {
        path: '/',
        element: <Home/>
      },
      {
        path: '/blog',
        element: <Blog/>
      },
      {
        path: '/blog/posts/:slug',
        element: <PostContainer/>
      },
      {
        path: '/projects',
        element: <Projects/>
      },
      {
        path: '/projects/project/:slug',
        element: <ProjectContainer/>
      },
      {
        path: '/courses',
        element: <Courses/>
      },
      {
        path: '/courses/course/:slug',
        element: <CourseContainer/>
      },
      {
        path: '/contact',
        element: <Contact/>
      },
      {
        path: '/about',
        element: <About/>
      },
      {
        path: '/admin',
        element: <AdminDashboard/>
      },
    ]
  },
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>,
)
