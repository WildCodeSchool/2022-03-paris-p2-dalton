import React from 'react';
import './styles/Categories.css';
import filter from '../../assets/images/filter.png';

const Categories = ({setActiveCategory, categories, activeCategory}) => {
  return (
    <div className='whs-categories'>
      <select 
              value={activeCategory}
              onChange={(e) => setActiveCategory(e.target.value)}
              className='whs-categories-select'
      >
        <option value=''>FILTER BY RACE</option>
      {categories.map((cat) => (
        <option key={cat} value={cat} className='whs-categories-option'>
              {cat}
        </option>
      ))}
      </select>
    </div>
  )
}

export default Categories