import express from 'express';
import mongoose from 'mongoose';
import cors from 'cors';
import bodyParser from 'body-parser';
import blogRoutes from './routes/blogRoutes';
import dotenv from 'dotenv';
import { connectToDatabase } from './database';

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(bodyParser.json());
app.use('/api', blogRoutes);

app.use('/api/blogs', blogRoutes);

// Start server and connect to database
(async () => {
    try {
        await connectToDatabase();
        app.listen(PORT, () => {
            console.log(`Server is running on port ${PORT}`);
        });
    } catch (error) {
        console.error("Failed to connect to the database:", error);
    }
})();

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});