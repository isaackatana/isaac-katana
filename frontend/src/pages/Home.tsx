import { useEffect, useState } from "react";
import { Helmet } from "react-helmet";

// Import images directly to ensure paths are correct
import image1 from '../assets/hero/isaac1.jpg';
import image2 from '../assets/hero/isaac1.jpg';

const images: string[] = [image1, image2];

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
    </>
  );
}

export default Home;
