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
    
        <div className="portfolio-item">
          <img src={item.imageUrl} alt={item.title} />
          <div className='item-info'>
            <Link to={`/portfolio/${item.slug}`}>
                <h3>{item.title}</h3>
            </Link>
            <p>{item.description}</p>
            <p><strong>Category:</strong> {item.category}</p>
          </div>
        </div>
    </>
  );
};

export default PortfolioItem;
