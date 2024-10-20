import { useEffect, useState } from "react";
import { Helmet } from "react-helmet"

const images: string[] = [
  'https://scontent-mba1-1.xx.fbcdn.net/v/t39.30808-6/415033492_3678480379050474_8613237829220930751_n.jpg?_nc_cat=107&ccb=1-7&_nc_sid=6ee11a&_nc_eui2=AeETVBM2ybfwQpIIY1QS1xJhLv7xllGhPQEu_vGWUaE9AZWrCX4snBRv7SBb7DGJEQ0AF9Ah4o0AKSMT-Vw6T_Uc&_nc_ohc=JiQe9iWeAdMQ7kNvgE7TbLV&_nc_zt=23&_nc_ht=scontent-mba1-1.xx&_nc_gid=Ao2PaJ3YeLhdIyxfLepSA2e&oh=00_AYBRilqb3eRvspRX9I9by3jSrhaSQcCd2QySuvV3gmuQfw&oe=671B2449', // Replace with your image URLs
  'https://scontent-mba1-1.xx.fbcdn.net/v/t39.30808-6/415033492_3678480379050474_8613237829220930751_n.jpg?_nc_cat=107&ccb=1-7&_nc_sid=6ee11a&_nc_eui2=AeETVBM2ybfwQpIIY1QS1xJhLv7xllGhPQEu_vGWUaE9AZWrCX4snBRv7SBb7DGJEQ0AF9Ah4o0AKSMT-Vw6T_Uc&_nc_ohc=JiQe9iWeAdMQ7kNvgE7TbLV&_nc_zt=23&_nc_ht=scontent-mba1-1.xx&_nc_gid=Ao2PaJ3YeLhdIyxfLepSA2e&oh=00_AYBRilqb3eRvspRX9I9by3jSrhaSQcCd2QySuvV3gmuQfw&oe=671B2449',
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
        <link rel="canonical" href="http://isaackatana.com/home" />
    </Helmet>
    <div className="home">
      <div className="hero">
        {images.map((image, index) => (
          <div
            key={index}
            className={`wrapper ${index === currentIndex ? 'active' : ''}`}
            style={{ backgroundImage: `url(${image})` }}
          />
        ))}
      </div>
    </div>
    </>
  )
}

export default Home