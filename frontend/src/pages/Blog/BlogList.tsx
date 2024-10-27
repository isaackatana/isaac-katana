
import BlogPost from './BlogPost';
import { blogPost as blogPostType } from './BlogData';


interface BlogListProps {
  posts: blogPostType[];
}

const BlogList: React.FC<BlogListProps> = ({ posts }) => {

  return (
    <div className='container'>
      <h2>My Blog</h2>
      <ul>
        {posts.map((post) => (
          <li key={post.id}>
            <BlogPost post={post} key={post.id} />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default BlogList;