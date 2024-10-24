import { Router, Request, Response } from 'express';
import { blogPosts } from '../data/BlogData'; // Import the blog data

const blogRoutes = Router();

blogRoutes.get('/blogs', async (req: Request, res: Response) => {
  try {
    // Return the blogs data fetched from the data file
    res.json({ message: 'Blogs fetched successfully', data: blogPosts });
  } catch (error: unknown) {
    if (error instanceof Error) {
      res.status(500).json({ message: 'Error fetching blogs', error: error.message });
    } else {
      res.status(500).json({ message: 'Unknown error occurred' });
    }
  }
});

export default blogRoutes;
