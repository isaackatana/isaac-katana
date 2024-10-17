// src/pages/PortfolioPage.tsx
import React, { useState } from 'react';
import { portfolioItems } from './PortfolioData';
import PortfolioList from './PortfolioList';
import CategoryFilter from './CategoryFilter';
import { Helmet } from 'react-helmet';

const Portfolio: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>('All');

  const categories = Array.from(new Set(portfolioItems.map(item => item.category)));

  const filteredItems = selectedCategory === 'All'
    ? portfolioItems
    : portfolioItems.filter(item => item.category === selectedCategory);

  return (
    <>
    <Helmet>
        <meta charSet="utf-8" />
        <title>Isaac's Portfolio</title>
        <link rel="canonical" href="http://mysite.com/example" />
    </Helmet>
    <div className='portfolio'>
      <div className="container">
        <h2>Portfolio</h2>
        <CategoryFilter
          categories={categories}
          selectedCategory={selectedCategory}
          onCategoryChange={setSelectedCategory}
        />
        <PortfolioList items={filteredItems} />
      </div>
    </div>
    </>
  );
};

export default Portfolio;
