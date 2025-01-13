// src/pages/PortfolioDetail.tsx
import React from 'react';
import { useParams } from 'react-router-dom';
import { portfolioItems } from './PortfolioData';
import { PortfolioItem as PortfolioItemType } from './PortfolioData';

const PortfolioDetail: React.FC = () => {
  const { slug } = useParams<{ slug: string }>();

  const portfolioItem: PortfolioItemType | undefined = portfolioItems.find(
    (item) => item.slug === slug
  );

  if (!portfolioItem) {
    return <p>Portfolio item not found!</p>;
  }

  return (
    <div className="portfolio-detail">
      <div className="container">
        <img src={portfolioItem.imageUrl} alt={portfolioItem.title} style={{ width: '100%', height: '60vh' }} />
        <div className="item-detail">
          <h2>{portfolioItem.title}</h2>
          <p><strong>Category:</strong> {portfolioItem.category}</p>
          <p>{portfolioItem.description}</p>
        </div>
      </div>
    </div>
  );
};

export default PortfolioDetail;
