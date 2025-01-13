import { Helmet } from "react-helmet"
import About from "./About"
import Portfolio from "./Portfolio"
import Blog from "./Blog"
import Contact from "./Contact"

const heroImages= './images/isaac1.jpg'

function Home() {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) =>
        prevIndex === images.length - 1 ? 0 : prevIndex + 1
      );
    }, 3000); // Change image every 3 seconds

    return () => clearInterval(interval);
  }, []);

  return (
    <>
      <Helmet>
        <title>Isaac's Home</title>
        <meta name="description" content="Get in touch with us through our contact page." />
        <meta property="og:title" content="Blog | Tech news and Weekly Tutorials" />
        <meta property="og:description" content="Tech news and Weekly Tutorials" />
        <meta property="og:image" content="https://example.com/your-thumbnail-image.jpg" />
        <meta property="og:url" content="https://example.com/contact" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:image" content="https://example.com/your-thumbnail-image.jpg" />
      </Helmet>
      <div className="home">
        <div className="hero">
          {images.map((image, index) => (
            <div
              key={index}
              className={`wrapper ${index === currentIndex ? 'active' : ''}`}
              style={{ backgroundImage: `url(${image})` }}
              aria-hidden={index !== currentIndex} // For accessibility
            >
              <img src={image} alt={`Slide ${index + 1}`} style={{ display: 'none' }} /> {/* Hidden for SEO */}
            </div>
          ))}
        </div>
      </div>
    </div>
    <About/>
    <Portfolio/>
    <Blog/>
    <Contact/>
    </>
  );
}

export default Home;
