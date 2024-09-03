import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';

function ProjectContainer() {
  const { slug} = useParams();
  const [project, setProject] = useState(null);

  useEffect(() => {
    fetch(`/api/projects/${slug}`)
    .then((response) => {
        if (response.ok) {
        return response.json();
        } else {
        throw new Error('Project not found');
        }
    })
    .then((data) => {
        setProject(data);
        document.title = data.title; // Update the document title to the post title
    })
    .catch((error) => console.error('Error fetching post:', error));
  }, [slug]);

  if (!project) {
    return <div>Loading...</div>;
  }
  return (
    <>
    <div className="project-container">
      <h2>{project.title}</h2>
    </div>
    </>
  )
}

export default ProjectContainer