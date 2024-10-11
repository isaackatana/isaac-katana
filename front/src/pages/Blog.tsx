import { blogPosts } from "./BlogData"
import BlogList from "./BlogList"

function Blog() {
  return (
    <>
    <div className="container">
      <BlogList posts={blogPosts} />
    </div>
    </>
  )
}

export default Blog