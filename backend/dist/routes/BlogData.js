"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.blogPosts = void 0;
const slugify_1 = __importDefault(require("slugify"));
exports.blogPosts = [
    {
        id: 1,
        imageUrl: "https://www.tatvasoft.com/blog/wp-content/uploads/2024/03/How-to-use-Typescript-with-ReactJS_-768x389.jpg",
        title: "Getting Started with React and TypeScript",
        content: "In this post, we will explore the basics of using TypeScript with React...",
        author: "Jane Doe",
        date: "2024-10-01",
        slug: (0, slugify_1.default)("Getting Started with React and TypeScript", { lower: true })
    },
    {
        id: 2,
        imageUrl: "https://www.creative-tim.com/blog/content/images/size/w960/wordpress/2021/01/blog-4-1.jpg",
        title: "Building a Blog Page in React",
        content: "Learn how to create a simple blog page using React and TypeScript...",
        author: "John Smith",
        date: "2024-10-05",
        slug: (0, slugify_1.default)("Building a Blog Page in React", { lower: true })
    }
    // Add more blog posts as needed
];
