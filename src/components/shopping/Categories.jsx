import React from 'react'; 
import './Categories.css';

const Categories = ({setActiveCategory, categories, activeCategory}) => {
  return (
    <div className='whs-categories'>
      <select 
              value={activeCategory}
              onChange={(e) => setActiveCategory(e.target.value)}
              className='whs-categories-select'
      >
        <option value=''>Filter by race</option>
      {categories.map((cat) => (
        <option key={cat} value={cat}>
              {cat}
        </option>
      ))}
      </select>
      {/* <button onClick={() => setActiveCategory('')}>Reset</button> */}
    </div>
  )
}

export default Categories