// src/components/PortfolioList.tsx
import React from 'react';
import { PortfolioItem as PortfolioItemType } from './PortfolioData';
import PortfolioItem from './PortfolioItem';

interface PortfolioListProps {
  items: PortfolioItemType[];
}

const PortfolioList: React.FC<PortfolioListProps> = ({ items }) => {
  return (
    <div className="portfolio-list">
      {items.map((item) => (
        <PortfolioItem key={item.id} item={item} />
      ))}
    </div>
  );
};

export default PortfolioList;
