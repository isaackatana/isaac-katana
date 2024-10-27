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
      imageUrl: "https://media.licdn.com/dms/image/v2/D4D12AQE16uLyk_WtAQ/article-cover_image-shrink_720_1280/article-cover_image-shrink_720_1280/0/1685123791793?e=1734566400&v=beta&t=3amM49yoxUfC5_NRUcV-e-_OCBv9IAA-CMb0UZrmZsg",
      slug: slugify("Responsive Website", { lower: true })
    },
    {
      id: 2,
      title: "Mobile App Design",
      description: "A mobile app design prototype created using Figma.",
      category: "UI/UX Design",
      imageUrl: "https://cdn.dribbble.com/userupload/12017863/file/original-81427c44c3bb53199e8c3db7196ffd9a.png?resize=752x",
      slug: slugify("Mobile App Design", { lower: true })
    },
    {
      id: 3,
      title: "E-commerce Platform",
      description: "An e-commerce platform built with Next.js and TypeScript.",
      category: "Web Development",
      imageUrl: "https://286140144.e.cdneverest.net/wp-content/uploads/2022/04/usecase_ecommerce-01-1024x738.png",
      slug: slugify("E-commerce Platform", { lower: true })
    },
    {
      id: 4,
      title: "Logo Design",
      description: "A set of logos designed for a startup company.",
      category: "Graphic Design",
      imageUrl: "https://www.inexpanse.com/wp-content/uploads/2018/01/collage-of-logos-1024x640.jpg",
      slug: slugify("Logo Design", { lower: true })
    },
    {
      id: 5,
      title: "Video Editing",
      description: "A set of logos designed for a startup company.",
      category: "Video Editing",
      imageUrl: "https://www.inexpanse.com/wp-content/uploads/2018/01/collage-of-logos-1024x640.jpg",
      slug: slugify("Logo Design", { lower: true })
    }
    // Add more portfolio items as needed
  ];
  