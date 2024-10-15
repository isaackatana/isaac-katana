import { Router, Request, Response } from 'express';

const blogRoutes = Router();

blogRoutes.get('/', async (req: Request, res: Response) => {
  try {
    // Your logic here
  } catch (error: unknown) {
    if (error instanceof Error) {
      res.status(500).json({ message: error.message });
    } else {
      res.status(500).json({ message: 'An unknown error occurred.' });
    }
  }
});

export default blogRoutes; 
