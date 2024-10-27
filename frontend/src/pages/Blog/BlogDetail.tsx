// src/components/blogPost.tsx
import React from 'react';
import { Helmet } from 'react-helmet';
import { useParams } from 'react-router-dom';
import {  blogPosts } from './BlogData';
import { blogPost as blogPostType } from './BlogData';

const BlogPost: React.FC = () => {
  const { slug } = useParams<{ slug: string }>();

  const blogPost: blogPostType | undefined = blogPosts.find(
    (post) => post.slug === slug
  );

  if (!blogPost) {
    return <p>Portfolio post not found!</p>;
  }

  return (
    <>
      <Helmet>
        <title>{blogPost.title}</title>
        <meta name="description" content={blogPost.content.slice(0, 150)} />
        <meta property="og:title" content={blogPost.title} />
        <meta property="og:description" content={blogPost.content.slice(0, 150)} />
        <meta property="og:image" content={blogPost.imageUrl} />
        <meta property="og:url" content={`https://example.com/blog/${blogPost.slug}`} />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:image" content={blogPost.imageUrl} />
      </Helmet>
      <div>
        <img src={blogPost.imageUrl} style={{ width: '100%', height: '300px' }} alt={blogPost.title} />
        <h2>{blogPost.title}</h2>
        <p>by {blogPost.author} on {blogPost.date}</p>
        <div>{blogPost.content}</div>
      </div>
    </>
  );
};

export default BlogPost;
