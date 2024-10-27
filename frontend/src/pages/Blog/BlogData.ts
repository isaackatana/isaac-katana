import slugify from "slugify";

// src/data/blogData.ts
export interface blogPost {
    id: number;
    imageUrl: string,
    title: string;
    content: string;
    author: string;
    date: string;
    slug: string
  }
  
  export const blogPosts: blogPost[] = [
    {
      id: 1,
      imageUrl: "https://www.tatvasoft.com/blog/wp-content/uploads/2024/03/How-to-use-Typescript-with-ReactJS_-768x389.jpg",
      title: "Getting Started with React and TypeScript",
      content: "In this post, we will explore the basics of using TypeScript with React...",
      author: "Jane Doe",
      date: "2024-10-01",
      slug: slugify("Getting Started with React and TypeScript", { lower: true })
    },
    {
      id: 2,
      imageUrl: "https://www.creative-tim.com/blog/content/images/size/w960/wordpress/2021/01/blog-4-1.jpg",
      title: "Building a Blog Page in React",
      content: "Learn how to create a simple blog page using React and TypeScript...",
      author: "John Smith",
      date: "2024-10-05",
      slug: slugify("Building a Blog Page in React", { lower: true })
    }
    // Add more blog posts as needed
  ];
  

  