import { Helmet } from "react-helmet"
const heroImages = './images/isaac1.jpg'

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
    </>
  )
}

export default Home