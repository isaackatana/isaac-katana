// src/controllers/blogController.ts
import { Request, Response } from 'express';
import BlogPost from '../models/blogPost';

// Create a new blog post
export const createBlogPost = async (req: Request, res: Response): Promise<void> => {
    try {
        const { title, content, author } = req.body;
        const newPost = new BlogPost({ title, content, author });
        const savedPost = await newPost.save();
        res.status(201).json(savedPost);
    } catch (error) {
        console.error("Error creating blog post:", error);
        res.status(500).json({ message: (error as Error).message });
    }
};

// Get all blog posts
export const getAllBlogPosts = async (req: Request, res: Response): Promise<void> => {
    try {
        const posts = await BlogPost.find();
        res.status(200).json(posts);
    } catch (error) {
        console.error("Error fetching blog posts:", error);
        res.status(500).json({ message: (error as Error).message });
    }
};

// Get a single blog post by ID
export const getBlogPostById = async (req: Request, res: Response): Promise<void> => {
    try {
        const { id } = req.params;
        const post = await BlogPost.findById(id);
        if (!post) {
            res.status(404).json({ message: "Blog post not found" });
        } else {
            res.status(200).json(post);
        }
    } catch (error) {
        console.error("Error fetching blog post:", error);
        res.status(500).json({ message: (error as Error).message });
    }
};

// Update a blog post
export const updateBlogPost = async (req: Request, res: Response): Promise<void> => {
    try {
        const { id } = req.params;
        const updatedPost = await BlogPost.findByIdAndUpdate(id, req.body, { new: true });
        if (!updatedPost) {
            res.status(404).json({ message: "Blog post not found" });
        } else {
            res.status(200).json(updatedPost);
        }
    } catch (error) {
        console.error("Error updating blog post:", error);
        res.status(500).json({ message: (error as Error).message });
    }
};

// Delete a blog post
export const deleteBlogPost = async (req: Request, res: Response): Promise<void> => {
    try {
        const { id } = req.params;
        const deletedPost = await BlogPost.findByIdAndDelete(id);
        if (!deletedPost) {
            res.status(404).json({ message: "Blog post not found" });
        } else {
            res.status(200).json({ message: "Blog post deleted successfully" });
        }
    } catch (error) {
        console.error("Error deleting blog post:", error);
        res.status(500).json({ message: (error as Error).message });
    }
};
