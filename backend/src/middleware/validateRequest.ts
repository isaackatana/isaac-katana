// src/middleware/validateRequest.ts
import { Request, Response, NextFunction } from 'express';
import { body, validationResult } from 'express-validator';

export const validateBlogPost = [
    body('title').notEmpty().withMessage('Title is required'),
    body('content').isLength({ min: 5 }).withMessage('Content must be at least 5 characters long'),
    (req: Request, res: Response, next: NextFunction) => {
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            return res.status(400).json({ errors: errors.array() });
        }
        next();
    },
];
