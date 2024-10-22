import { Router, Request, Response } from 'express';

const blogRoutes = Router();

blogRoutes.get('/blogs', async (req: Request, res: Response) => {
  try {
    // Fetch your blogs here and return them in the response
    res.json({ message: 'Blogs fetched successfully' });
  } catch (error) {
    res.status(500).json({ message: 'Error fetching blogs' });
  }
});

export default blogRoutes;
