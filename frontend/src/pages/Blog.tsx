import { Helmet } from "react-helmet"
import { blogPosts } from "./BlogData"
import BlogList from "./BlogList"

function Blog() {
  return (
    <>
    <Helmet>
      <title>Isaac's Blog</title>
      <meta name="description" content="Get in touch with us through our contact page." />
      <meta property="og:title" content="Blog | Tech news and Weekly Tutorials" />
      <meta property="og:description" content="Tech news and Weekly Tutorials" />
      <meta property="og:image" content="https://example.com/your-thumbnail-image.jpg" />
      <meta property="og:url" content="https://example.com/contact" />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:image" content="https://example.com/your-thumbnail-image.jpg" />
    </Helmet>
    <div className="blog">
      <BlogList posts={blogPosts} />
    </div>
    </>
  )
}

export default Blog