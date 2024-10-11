import slugify from "slugify";

// src/data/portfolioData.ts
export interface PortfolioItem {
    id: number;
    title: string;
    description: string;
    category: string;
    imageUrl: string; 
    slug: string;// Placeholder for image URLs or paths
  }
  
  export const portfolioItems: PortfolioItem[] = [
    {
      id: 1,
      title: "Responsive Website",
      description: "A responsive website built using React and TypeScript.",
      category: "Web Development",
      imageUrl: "https://via.placeholder.com/300",
      slug: slugify("Responsive Website", { lower: true })
    },
    {
      id: 2,
      title: "Mobile App Design",
      description: "A mobile app design prototype created using Figma.",
      category: "UI/UX Design",
      imageUrl: "https://via.placeholder.com/300",
      slug: slugify("Mobile App Design", { lower: true })
    },
    {
      id: 3,
      title: "E-commerce Platform",
      description: "An e-commerce platform built with Next.js and TypeScript.",
      category: "Web Development",
      imageUrl: "https://via.placeholder.com/300",
      slug: slugify("E-commerce Platform", { lower: true })
    },
    {
      id: 4,
      title: "Logo Design",
      description: "A set of logos designed for a startup company.",
      category: "Graphic Design",
      imageUrl: "https://via.placeholder.com/300",
      slug: slugify("Logo Design", { lower: true })
    }
    // Add more portfolio items as needed
  ];
  