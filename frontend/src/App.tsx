import './App.css'
import Header from './components/Header'
import Footer from './components/Footer'
import Contact from './pages/Contact'
import Home from './pages/Home'
import About from './pages/About/About'
import Portfolio from './pages/Portfolio/Portfolio'

function App() {

  return (
    <>
    <div>
      <Header/>
      <Home/>
      <About/>
      <Portfolio/>
      <Contact/>
      <Footer/>
    </div>
    </>
  )
}

export default App
