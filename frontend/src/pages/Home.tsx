import { Helmet } from "react-helmet"
import About from "./About"
import Portfolio from "./Portfolio"
import Contact from "./Contact"

const heroImages= './images/isaac1.jpg'

function Home() {
  return (
    <>
    <Helmet>
        <meta charSet="utf-8" />
        <title>Isaac's Home</title>
        <link rel="canonical" href="http://mysite.com/example" />
    </Helmet>
    <div className="home">
      <div className="hero">
        <img src={heroImages} alt="" />
      </div>
    </div>
    <About/>
    <Portfolio/>s
    <Contact/>
    </>
  )
}

export default Home