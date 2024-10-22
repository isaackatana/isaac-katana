"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.corsMiddleware = exports.corsOptions = void 0;
// src/middleware/cors.ts
const cors_1 = __importDefault(require("cors"));
exports.corsOptions = {
    origin: process.env.CORS_ORIGIN || 'http://localhost:5173', // Adjust based on your front-end URL
    methods: ['GET', 'POST', 'PUT', 'DELETE'],
    credentials: true, // If you want to enable cookies
};
exports.corsMiddleware = (0, cors_1.default)(exports.corsOptions);
