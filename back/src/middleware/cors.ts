// src/middleware/cors.ts
import cors from 'cors';

export const corsOptions = {
    origin: process.env.CORS_ORIGIN || 'http://localhost:3000', // Adjust based on your front-end URL
    methods: ['GET', 'POST', 'PUT', 'DELETE'],
    credentials: true, // If you want to enable cookies
};

export const corsMiddleware = cors(corsOptions);
