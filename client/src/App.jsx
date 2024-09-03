import './App.css'
import Header from './components/Header'
import Footer from './components/Footer'
import Newsletter from './components/Newsletter'
import { Outlet } from 'react-router-dom'

function App() {
  return (
    <>
      <Header/>
      <main>
        <Outlet/>
      </main>
      <Newsletter/>
      <Footer/>
    </>
  )
}

export default App
