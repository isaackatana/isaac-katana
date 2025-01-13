"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// src/models/blogPost.ts
const mongoose_1 = require("mongoose");
const blogPostSchema = new mongoose_1.Schema({
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
exports.default = (0, mongoose_1.model)('BlogPost', blogPostSchema);
