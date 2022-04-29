import React from 'react';
import './Categories.css';
import filter from './filter.png';

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
        <option key={cat} value={cat}>
              {cat}
        </option>
      ))}
      </select>
      <button className='whs-categories-reset' onClick={() => setActiveCategory('')}><img src={filter} alt='filter' height='20' width='20' /></button>
    </div>
  )
}

export default Categories