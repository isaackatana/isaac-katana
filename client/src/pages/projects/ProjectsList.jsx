import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';

function ProjectsList() {
  const [projects, setProjects] = useState([]);

    useEffect(() => {
        fetch('/api/projects')
        .then((response) => response.json())
        .then((data) => setProjects(data))
        .catch((error) => console.error('Error fetching posts:', error));
    }, []);

    if (!projects) {
      return <div>Loading...</div>;
    }
  return (
    <>
    {projects.map((project, index)=>(
        <Link key={project} to={`/projects/project/${project.slug}`}>
          <div className="project-preview" key={project.id}>
              <img src={project.thumbnail} alt="" />
              <h2>{project.title}</h2>
          </div>
        </Link>
    ))}
    </>
  )
}

export default ProjectsList