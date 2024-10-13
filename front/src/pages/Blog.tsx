import { blogPosts } from "./BlogData"
import BlogList from "./BlogList"

function Blog() {
  return (
    <>
    <div className="blog">
      <BlogList posts={blogPosts} />
    </div>
    </>
  )
}

export default Blog