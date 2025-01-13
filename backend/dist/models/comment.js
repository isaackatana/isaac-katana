"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// src/models/comment.ts
const mongoose_1 = require("mongoose");
const commentSchema = new mongoose_1.Schema({
    blogPostId: {
        type: mongoose_1.Schema.Types.ObjectId,
        ref: 'BlogPost',
        required: true,
    },
    author: {
        type: String,
        required: true,
        trim: true,
    },
    content: {
        type: String,
        required: true,
    },
    createdAt: {
        type: Date,
        default: Date.now,
    },
});
exports.default = (0, mongoose_1.model)('Comment', commentSchema);
