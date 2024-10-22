"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteBlogPost = exports.updateBlogPost = exports.getBlogPostById = exports.getAllBlogPosts = exports.createBlogPost = void 0;
const blogPost_1 = __importDefault(require("../models/blogPost"));
// Create a new blog post
const createBlogPost = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { title, content, author } = req.body;
        const newPost = new blogPost_1.default({ title, content, author });
        const savedPost = yield newPost.save();
        res.status(201).json(savedPost);
    }
    catch (error) {
        console.error("Error creating blog post:", error);
        res.status(500).json({ message: error.message });
    }
});
exports.createBlogPost = createBlogPost;
// Get all blog posts
const getAllBlogPosts = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const posts = yield blogPost_1.default.find();
        res.status(200).json(posts);
    }
    catch (error) {
        console.error("Error fetching blog posts:", error);
        res.status(500).json({ message: error.message });
    }
});
exports.getAllBlogPosts = getAllBlogPosts;
// Get a single blog post by ID
const getBlogPostById = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { id } = req.params;
        const post = yield blogPost_1.default.findById(id);
        if (!post) {
            res.status(404).json({ message: "Blog post not found" });
        }
        else {
            res.status(200).json(post);
        }
    }
    catch (error) {
        console.error("Error fetching blog post:", error);
        res.status(500).json({ message: error.message });
    }
});
exports.getBlogPostById = getBlogPostById;
// Update a blog post
const updateBlogPost = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { id } = req.params;
        const updatedPost = yield blogPost_1.default.findByIdAndUpdate(id, req.body, { new: true });
        if (!updatedPost) {
            res.status(404).json({ message: "Blog post not found" });
        }
        else {
            res.status(200).json(updatedPost);
        }
    }
    catch (error) {
        console.error("Error updating blog post:", error);
        res.status(500).json({ message: error.message });
    }
});
exports.updateBlogPost = updateBlogPost;
// Delete a blog post
const deleteBlogPost = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { id } = req.params;
        const deletedPost = yield blogPost_1.default.findByIdAndDelete(id);
        if (!deletedPost) {
            res.status(404).json({ message: "Blog post not found" });
        }
        else {
            res.status(200).json({ message: "Blog post deleted successfully" });
        }
    }
    catch (error) {
        console.error("Error deleting blog post:", error);
        res.status(500).json({ message: error.message });
    }
});
exports.deleteBlogPost = deleteBlogPost;
