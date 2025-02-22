import express from 'express';
import cors from 'cors';
import bodyParser from 'body-parser';
import contactRoutes from './routes/contactRoutes';
import dotenv from 'dotenv';
import { connectToDatabase } from './database';

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(bodyParser.json());

// Routes
app.use('/api/contact', contactRoutes);

// Start server and connect to database
(async () => {
    try {       
        await connectToDatabase();
        app.listen(PORT, () => {
            console.log(`Server is running on port ${PORT}`);
        });
    } catch (error) {
        console.error('Failed to connect to the database:', error);
    }
})();
