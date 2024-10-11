// src/components/BlogPost.tsx
import React from 'react';
import { Blog } from './BlogData';

interface BlogPostProps {
  post: Blog;
}

const BlogPost: React.FC<BlogPostProps> = ({ post }) => {
  return (
    <div>
      <h2>{post.title}</h2>
      <p>by {post.author} on {post.date}</p>
      <p>{post.content}</p>
    </div>
  );
};

export default BlogPost;
