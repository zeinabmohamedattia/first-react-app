import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.bundle.js'
import '@fortawesome/fontawesome-free/css/all.min.css'
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import Home from './Components/Home/Home.jsx';
import Layout from './Components/Layout/Layout.jsx';
import About from './Components/About/About.jsx';
import Portfolio from './Components/Portfolio/Portfolio.jsx';
import Contact from './Components/Contact/Contact.jsx';
import NotFound from './Components/NotFound/NotFound.jsx';
import { useEffect } from 'react';


export default function App() {
  let routers = createBrowserRouter([

    {
      path: '', element: <Layout />, children: [
        { index: true, element: <Home /> },
        { path: 'about', element: <About /> },
        { path: 'portfolio', element: <Portfolio /> },
        { path: 'contact', element: <Contact /> },
        { path: '*', element: <NotFound /> },

      ]
    }
  ])
  useEffect(() => {
    scroll();

  }, []);
  function scroll() {
    let nav = document.querySelector('.navbar')
    window.onscroll = function (e) {
      if (this.oldScroll > this.scrollY) {
        this.oldScroll = this.scrollY;
        nav.classList.replace('scrollOn', 'scrollOff')
      } else {
        this.oldScroll = this.scrollY;
        nav.classList.replace('scrollOff', 'scrollOn')
      }
    }

  }
  return <>

    <RouterProvider router={routers}></RouterProvider>
  </>
}


