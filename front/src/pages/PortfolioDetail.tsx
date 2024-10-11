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
      <h1>{portfolioItem.title}</h1>
      <img src={portfolioItem.imageUrl} alt={portfolioItem.title} style={{ width: '100%', height: 'auto' }} />
      <p><strong>Category:</strong> {portfolioItem.category}</p>
      <p>{portfolioItem.description}</p>
    </div>
  );
};

export default PortfolioDetail;
