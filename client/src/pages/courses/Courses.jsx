import CoursesList from './CoursesList';
import { Helmet } from 'react-helmet'

function Courses() {

  return (
    <>
    <Helmet>
      <title>Katana's Courses</title>
      <meta property="og:description" content="Software Developer"/>
    </Helmet>

    <div className="courses">
      <div className="container">
        <CoursesList/>
      </div>
    </div>
    
    </>
  )
}

export default Courses