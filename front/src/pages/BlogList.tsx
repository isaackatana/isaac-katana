// src/components/BlogList.tsx
import React from 'react';
import { Blog } from './BlogData';
import { Link } from 'react-router-dom';

interface BlogListProps {
  posts: Blog[];
}

const BlogList: React.FC<BlogListProps> = ({ posts }) => {
  return (
    <div>
      <h2>Blog Posts</h2>
      <ul>
        {posts.map((post) => (
          <li key={post.id}>
            <Link to={`/blog/${post.slug}`}>
              <h3>{post.title}</h3>
            </Link>
            <p>by {post.author} on {post.date}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default BlogList;
