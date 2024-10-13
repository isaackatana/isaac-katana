// src/components/PortfolioItem.tsx
import React from 'react';
import { PortfolioItem as PortfolioItemType } from './PortfolioData';

import { Link } from 'react-router-dom';

interface PortfolioItemProps {
  item: PortfolioItemType;
}

const PortfolioItem: React.FC<PortfolioItemProps> = ({ item }) => {
  return (
    <>
    <Link to={`/portfolio/${item.slug}`}>
        <div className="portfolio-item">
          <img src={item.imageUrl} alt={item.title} style={{ width: '100%', height: '200px' }} />
          <h3>{item.title}</h3>
          <p>{item.description}</p>
          <p><strong>Category:</strong> {item.category}</p>
        </div>
    </Link>
    </>
  );
};

export default PortfolioItem;
