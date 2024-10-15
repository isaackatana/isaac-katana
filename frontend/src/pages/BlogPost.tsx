// src/components/BlogPost.tsx
import React from 'react';
import { Blog } from './BlogData';
interface BlogPostProps {
  post: Blog;
}
import { Helmet } from 'react-helmet';


const BlogPost: React.FC<BlogPostProps> = ({ post }) => {
  return (

    <>
    <Helmet>
      <title>{post.title}</title>
      <meta name="description" content="Get in touch with us through our contact page." />
      <meta property="og:title" content={post.title} />
      <meta property="og:description" content={post.content} />
      <meta property="og:image" content={post.imageUrl} />
      <meta property="og:url" content="https://example.com/contact" />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:image" content="https://example.com/your-thumbnail-image.jpg" />
    </Helmet>
    <div>
      <img src={post.imageUrl} style={{ width: '100%', height: '300px' }} alt={post.title} />
      <h2>{post.title}</h2>
      <p>by {post.author} on {post.date}</p>
      <p>{post.content}</p>
    </div>
    </>
  );
};

export default BlogPost;
