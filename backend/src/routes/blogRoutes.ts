import { Router, Request, Response } from 'express';
import { blogPosts } from './BlogData';

const blogRoutes = Router();

blogRoutes.get('/', async (req: Request, res: Response) => {
  try {
    res.status(200).json(blogPosts);
  } catch (error: unknown) {
    if (error instanceof Error) {
      res.status(500).json({ message: error.message });
    } else {
      res.status(500).json({ message: 'An unknown error occurred.' });
    }
  }
});

export default blogRoutes; 
