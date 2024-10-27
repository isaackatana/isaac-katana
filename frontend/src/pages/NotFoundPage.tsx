import React from 'react';
import { Link } from 'react-router-dom'; // Import Link for navigation

const NotFoundPage: React.FC = () => {
  return (
    <div className="not-found-page">
      <h1>404 - Page Not Found</h1>
      <p>Sorry, the page you are looking for does not exist.</p>
      <Link to="/" className="back-home">
        Go Back Home
      </Link>
    </div>
  );
};

export default NotFoundPage;
