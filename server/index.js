const express = require('express');
const app = express();
const PORT = 5000;
const slugify = require('slugify');

const cors = require('cors');

// Middleware

app.use(cors());

app.use(cors({
  origin: 'https://isaac-katana-client-y4jb.onrender.com/',
  methods: ['GET', 'POST', 'PUT', 'DELETE'],
  allowedHeaders: ['Content-Type', 'Authorization'],
}));

app.use(express.json());
app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, '../client/index.html'));
});

// Blog Posts

const blogPosts = [
    {
        id: 1,
        thumbnail: 'https://lh7-us.googleusercontent.com/Qw3ulz0_8T3l3cb17ixfW9bC8I6tvFTS_-JmPdehBK0ZJQ6QWd07Iv1IISx0tS_P8G5nq-VwXyOjDVw7M59KnjY5MWVBKJ3Q_GMfq5hPYZwEnZWzUa0pn1NuL1vYdbAcKz1S-yt2k2_Y6GLe7X3Nbwg',
        title: "The Benefits of Building an Application: Why It’s Worth the Investment",
        content: "In today's digital world, building an application can be a game-changer for businesses, individuals, and organizations alike. Whether you're a startup founder, a seasoned entrepreneur, or simply passionate about technology, creating an app offers numerous advantages. Here’s a look at some of the key benefits:",
        video: 'https://www.youtube.com/embed/LxcmF_Kk0Ho?si=smJIKxfwdkTYNwLN',
        dateCreated: new Date(),
        slug: slugify('The Benefits of Building an Application: Why It’s Worth the Investment', {lower:true})
    },
    {
        id: 2,
        thumbnail: 'https://macksennettstudios.net/wp-content/uploads/2022/02/How-to-find-a-recording-studio.jpg',
        title: "Engaging on Social Media is A Must for Musicians",
        content: "In the digital age, social media isn't just a tool for communication—it's a powerful platform for building your brand as a musician. Whether you're an emerging artist or an established name, how you engage with your audience online can make or break your career. Here’s why social media engagement is essential and how you can use it to your advantage.",
        video: 'https://www.youtube.com/embed/LxcmF_Kk0Ho?si=smJIKxfwdkTYNwLN',
        dateCreated: new Date(),
        slug: slugify('Engaging on Social Media: A Must for Musicians', {lower:true})
    },
];

app.get('/api/posts', (req, res) => {
    const previews = blogPosts.map(post => (
        { 
            id: post.id, 
            thumbnail: post.thumbnail, 
            title: post.title, 
            content: post.content,  
            video: post.video, 
            dateCreated: post.dateCreated, 
            slug: post.slug,
        }
    )
    );
    res.json(previews);
});

app.get('/api/posts/:slug', (req, res) => {
    const postSlug = req.params.slug;
    const post = blogPosts.find(p => p.slug === postSlug);
    if (post) {
        res.json(post);
    } else {
        res.status(404).json({ message: 'Post not found' });
    }
});

// Projects

const projects = [
    {
        thumbnail: '',
        id: 1,
        title: 'Music Production',
        slug: slugify('Music Video', {lower:true})
    },
    {
        thumbnail: '',
        id: 2,
        title: 'Graphics Design',
        slug: slugify('Graphics Design', {lower:true})
    },
    {
        thumbnail: '',
        id: 3,
        title: 'Website Design',
        slug: slugify('Website Design', {lower:true})
    },
    {
        thumbnail: '',
        id: 4,
        title: 'Video Editing',
        slug: slugify('Video Editing', {lower:true})
    },
]

app.get('/api/projects', (req, res) => {
    const previews = projects.map(project => (
        { 
            id: project.id, 
            thumbnail: project.thumbnail, 
            title: project.title, 
            slug: project.slug,
        }
    )
    );
    res.json(previews);
});

app.get('/api/projects/:slug', (req, res) => {
    const projectSlug = req.params.slug;
    const project = projects.find(p => p.slug === projectSlug);
    if (project) {
        res.json(project);
    } else {
        res.status(404).json({ message: 'Courses not found' });
    }
});

// Courses

const courses = [
    {
        thumbnail: 'https://www.wavschools.org/wp-content/uploads/2022/08/Blog-Featured-image-sizing-1024x576.png',
        id: 1,
        title: 'Music Production',
        slug: slugify('Music Production', {lower:true})
    },
    {
        thumbnail: 'https://assets.bitdegree.org/online-learning-platforms/storage/media/online-graphic-design-courses.o.jpg',
        id: 2,
        title: 'Graphics Design',
        slug: slugify('Graphics Design', {lower:true})
    },
    {
        thumbnail: 'https://global.ariseplay.com/amg/www.thisdaylive.com/uploads/ccb429b9-kids-that-code.jpg',
        id: 3,
        title: 'Website Design',
        slug: slugify('Web Design', {lower:true})
    },
]

app.get('/api/courses', (req, res) => {
    const previews = courses.map(course => (
        { 
            id: course.id, 
            thumbnail: course.thumbnail, 
            title: course.title, 
            slug: course.slug,
        }
    )
    );
    res.json(previews);
});

app.get('/api/courses/:slug', (req, res) => {
    const courseSlug = req.params.slug;
    const course = courses.find(p => p.slug === courseSlug);
    if (course) {
        res.json(course);
    } else {
        res.status(404).json({ message: 'Courses not found' });
    }
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
