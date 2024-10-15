// src/models/comment.ts
import { Schema, model, Document, Types } from 'mongoose';

export interface IComment extends Document {
    blogPostId: Types.ObjectId;
    author: string;
    content: string;
    createdAt: Date;
}

const commentSchema = new Schema<IComment>({
    blogPostId: {
        type: Schema.Types.ObjectId,
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

export default model<IComment>('Comment', commentSchema);
