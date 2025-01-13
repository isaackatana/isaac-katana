import './App.css'
import Header from './components/Header'
import Footer from './components/Footer'
import About from './pages/About'
import Portfolio from './pages/Portfolio'
import Contact from './pages/Contact'
import Home from './pages/Home'

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
