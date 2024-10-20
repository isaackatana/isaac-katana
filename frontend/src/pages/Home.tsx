import { useEffect, useState } from "react";
import { Helmet } from "react-helmet"

const images: string[] = [
  'image1.jpg', // Replace with your image URLs
  'image2.jpg',
  'image3.jpg',
];

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
        <meta charSet="utf-8" />
        <title>Isaac's Home</title>
        <link rel="canonical" href="http://mysite.com/example" />
    </Helmet>
    <div className="home">
      <div className="hero">
        {images.map((image, index) => (
          <div
            key={index}
            className={`slide ${index === currentIndex ? 'active' : ''}`}
            style={{ backgroundImage: `url(${image})` }}
          />
        ))}
      </div>
    </div>
    </>
  )
}

export default Home