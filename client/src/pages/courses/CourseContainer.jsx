import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';

function CourseContainer() {
  const { slug} = useParams();
  const [course, setCourse] = useState(null);

  useEffect(() => {
    fetch(`/api/courses/${slug}`)
    .then((response) => {
        if (response.ok) {
        return response.json();
        } else {
        throw new Error('Course not found');
        }
    })
    .then((data) => {
        setCourse(data);
        document.title = data.title; // Update the document title to the post title
    })
    .catch((error) => console.error('Error fetching post:', error));
  }, [slug]);

  if (!course) {
    return <div>Loading...</div>;
  }
  return (
    <>
    <h2>{course.title}</h2>
    </>
  )
}

export default CourseContainer