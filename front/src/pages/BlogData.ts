import slugify from "slugify";

// src/data/blogData.ts
export interface Blog {
    id: number;
    imageUrl: string,
    title: string;
    content: string;
    author: string;
    date: string;
    slug: string
  }
  
  export const blogPosts: Blog[] = [
    {
      id: 1,
      imageUrl: "https://via.placeholder.com/300",
      title: "Getting Started with React and TypeScript",
      content: "In this post, we will explore the basics of using TypeScript with React...",
      author: "Jane Doe",
      date: "2024-10-01",
      slug: slugify("Getting Started with React and TypeScript", { lower: true })
    },
    {
      id: 2,
      imageUrl: "https://via.placeholder.com/300",
      title: "Building a Blog Page in React",
      content: "Learn how to create a simple blog page using React and TypeScript...",
      author: "John Smith",
      date: "2024-10-05",
      slug: slugify("Building a Blog Page in React", { lower: true })
    }
    // Add more blog posts as needed
  ];
  