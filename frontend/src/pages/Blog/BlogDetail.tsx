// src/components/BlogPost.tsx
import React from 'react';
import { Helmet } from 'react-helmet';

interface Blog {
  id: number;
  imageUrl: string;
  title: string;
  content: string;
  author: string;
  date: string;
  slug: string;
}

const post = {
  id: 1,
  imageUrl: 'example.jpg',
  title: 'Example Blog Title',
  content: 'This is an example content',
  author: 'Author Name',
  date: '2023-10-25',
  slug: 'example-blog-title',
};

const BlogPost: React.FC = () => {
  return (
    <>
      <Helmet>
        <title>{post.title}</title>
        <meta name="description" content={post.content.slice(0, 150)} />
        <meta property="og:title" content={post.title} />
        <meta property="og:description" content={post.content.slice(0, 150)} />
        <meta property="og:image" content={post.imageUrl} />
        <meta property="og:url" content={`https://example.com/blog/${post.slug}`} />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:image" content={post.imageUrl} />
      </Helmet>
      <div>
        <img src={post.imageUrl} style={{ width: '100%', height: '300px' }} alt={post.title} />
        <h2>{post.title}</h2>
        <p>by {post.author} on {post.date}</p>
        <div>{post.content}</div>
      </div>
    </>
  );
};

export default BlogPost;
