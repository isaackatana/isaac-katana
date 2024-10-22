import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.tsx'
import './index.css'

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Home from './pages/Home.tsx';
import About from './pages/About.tsx';
import Portfolio from './pages/Portfolio.tsx';
import Blog from './pages/Blog.tsx';
import Contact from './pages/Contact.tsx';
import BlogDetail from './pages/BlogDetail.tsx';
import PortfolioDetail from './pages/PortfolioDetail.tsx';

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/about",
        element: <About />,
      },
      {
        path: "/portfolio",
        element: <Portfolio />,
      },
      {
        path: "/portfolio/:slug",
        element: <PortfolioDetail />,
      },
      {
        path: "/blog",
        element: <Blog />,
      },
      {
        path: "/blog/:slug",
        element: <BlogDetail/>
      },
      {
        path: "/contact",
        element: <Contact />,
      },
    ],
  },
]);

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
