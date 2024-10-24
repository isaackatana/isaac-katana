// src/components/BlogPost.tsx
interface Blog {
  id: number;
  imageUrl: string;
  title: string;
  content: string;
  author: string;
  date: string;
  slug: string;
}

interface BlogPostProps {
  post: Blog;
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


