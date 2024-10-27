import { blogPost as blogPostType } from './BlogData';

// src/components/BlogPost.tsx
interface BlogPostProps {
  post: blogPostType;
}

const BlogPost: React.FC<BlogPostProps> = ({ post }) => {
  return (
    <div>
      <h2>{post.title}</h2>
      <img src={post.imageUrl} alt={post.title} />
      <p>{post.content}</p>
      <p>By {post.author} on {post.date}</p>
    </div>
  );
};

export default BlogPost;


