import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';

function CoursesList() {
    const [courses, setCourses] = useState([]);

    useEffect(() => {
        fetch('/api/courses')
        .then((response) => response.json())
        .then((data) => setCourses(data))
        .catch((error) => console.error('Error fetching posts:', error));
    }, []);

    if (!courses) {
      return <div>Loading...</div>;
    }

  return (
    <>
    {courses.map((course, index)=>(
        <Link key={course} to={`/courses/course/${course.slug}`}>
          <div className="course-preview" key={course.id}>
              <img src={course.thumbnail} alt="" />
              <h2>{course.title}</h2>
          </div>
        </Link>
    ))}
    </>
  )
}

export default CoursesList