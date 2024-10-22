"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.validateBlogPost = void 0;
const express_validator_1 = require("express-validator");
exports.validateBlogPost = [
    (0, express_validator_1.body)('title').notEmpty().withMessage('Title is required'),
    (0, express_validator_1.body)('content').isLength({ min: 5 }).withMessage('Content must be at least 5 characters long'),
    (req, res, next) => {
        const errors = (0, express_validator_1.validationResult)(req);
        if (!errors.isEmpty()) {
            return res.status(400).json({ errors: errors.array() });
        }
        next();
    },
];
