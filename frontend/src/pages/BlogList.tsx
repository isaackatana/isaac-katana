import React, { useEffect, useState } from 'react';
import axios from 'axios';
import BlogPost from './BlogPost';

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
        const response = await axios.get<{ message: string, data: Blog[] }>('http://localhost:5000/api/blogs');
        setBlogs(response.data.data); // Access the 'data' field
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
      <h2>My Blog</h2>
      <ul>
        {blogs.map((post) => (
          <li key={post.id}>
            <BlogPost post={post} />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default BlogList;