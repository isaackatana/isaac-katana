// src/components/BlogList.tsx
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

interface Blog {
  id: number;
  imageUrl: string;
  title: string;
  content: string;
  author: string;
  date: string;
  slug: string;
}
const BlogList: React.FC = () => {
  const [blogs, setBlogs] = useState<Blog[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchBlogs = async () => {
      try {
        const response = await axios.get<Blog[]>('http://localhost:5000/api/blogs');
        setBlogs(response.data);
      } catch (error: unknown) {
        setError('Error fetching blog posts');
      } finally {
        setLoading(false);
      }
    };

    fetchBlogs();
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>{error}</div>;
  }

  return (
    <div className='container'>
      <h2>Blog</h2>
      <ul>
        {blogs.map((post) => (
          <li key={post.id}>
            <img src={post.imageUrl} alt={post.title} />
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
