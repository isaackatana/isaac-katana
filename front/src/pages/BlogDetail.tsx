// src/pages/BlogDetail.tsx
import React from 'react';
import { useParams } from 'react-router-dom';
import { blogPosts } from './BlogData';
import BlogPost from './BlogPost';

const BlogDetail: React.FC = () => {
  const { slug } = useParams<{ slug: string }>();
  const post = blogPosts.find((post) => post.slug === slug);

  if (!post) {
    return <p>Blog post not found!</p>;
  }

  return (
    <div>
      <BlogPost post={post} />
    </div>
  );
};

export default BlogDetail;
