// src/models/blogPost.ts
import { Schema, model, Document } from 'mongoose';

export interface IBlogPost extends Document {
    title: string;
    content: string;
    author: string;
    createdAt: Date;
    updatedAt: Date;
}

const blogPostSchema = new Schema<IBlogPost>({
    title: {
        type: String,
        required: true,
        trim: true,
    },
    content: {
        type: String,
        required: true,
    },
    author: {
        type: String,
        required: true,
    },
    createdAt: {
        type: Date,
        default: Date.now,
    },
    updatedAt: {
        type: Date,
        default: Date.now,
    },
});

// Automatically update `updatedAt` field on save
blogPostSchema.pre('save', function (next) {
    this.updatedAt = new Date();
    next();
});

export default model<IBlogPost>('BlogPost', blogPostSchema);
