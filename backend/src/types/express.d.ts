// src/types/express.d.ts
import { Request } from 'express';

declare global {
    namespace Express {
        interface Request {
            user?: any; // Replace 'any' with your specific user type
        }
    }
}
