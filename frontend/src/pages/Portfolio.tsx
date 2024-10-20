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
      <title>Isaac's Portfolio</title>
      <meta name="description" content="Get in touch with us through our contact page." />
      <meta property="og:title" content="Blog | Tech news and Weekly Tutorials" />
      <meta property="og:description" content="Tech news and Weekly Tutorials" />
      <meta property="og:image" content="https://example.com/your-thumbnail-image.jpg" />
      <meta property="og:url" content="https://example.com/contact" />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:image" content="https://example.com/your-thumbnail-image.jpg" />
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
