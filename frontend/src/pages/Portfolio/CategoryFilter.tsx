// src/components/CategoryFilter.tsx
import React from 'react';

interface CategoryFilterProps {
  categories: string[];
  selectedCategory: string;
  onCategoryChange: (category: string) => void;
}

const CategoryFilter: React.FC<CategoryFilterProps> = ({
  categories,
  selectedCategory,
  onCategoryChange
}) => {
  return (
    <div className="category-filter">
      <div className="wrapper">
        <button onClick={() => onCategoryChange('All')} className={selectedCategory === 'All' ? 'active' : ''}>
          All
        </button>
      </div>
      {categories.map((category) => (
        <div className="wrapper">
          <button
            key={category}
            onClick={() => onCategoryChange(category)}
            className={selectedCategory === category ? 'active' : ''}
          >
            {category}
          </button>
        </div>
      ))}
    </div>
  );
};

export default CategoryFilter;
