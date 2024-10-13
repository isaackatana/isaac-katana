// src/pages/PortfolioPage.tsx
import React, { useState } from 'react';
import { portfolioItems } from './PortfolioData';
import PortfolioList from './PortfolioList';
import CategoryFilter from './CategoryFilter';

const Portfolio: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>('All');

  const categories = Array.from(new Set(portfolioItems.map(item => item.category)));

  const filteredItems = selectedCategory === 'All'
    ? portfolioItems
    : portfolioItems.filter(item => item.category === selectedCategory);

  return (
    <div className='portfolio'>
      <h2>Portfolio</h2>
      <CategoryFilter
        categories={categories}
        selectedCategory={selectedCategory}
        onCategoryChange={setSelectedCategory}
      />
      <PortfolioList items={filteredItems} />
    </div>
  );
};

export default Portfolio;
