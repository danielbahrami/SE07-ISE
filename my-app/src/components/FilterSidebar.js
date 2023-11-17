// FilterSidebar.js
import React from 'react';
import '../styles/FilterSidebar.css'; // Adjust the path if necessary

const FilterSidebar = ({ onFilterChange }) => {
  return (
    <aside className="filter-sidebar">
      <h2>Filters</h2>
      <div className="filter-group">
        <label htmlFor="age">Age</label>
        <input type="number" id="age" name="age" onChange={onFilterChange} />
      </div>
      <div className="filter-group">
        <label htmlFor="gender">Gender</label>
        <select id="gender" name="gender" className="custom-select" onChange={onFilterChange}>
          <option value="">Any</option>
          <option value="male">Male</option>
          <option value="female">Female</option>
          {/* Add more gender options as needed */}
        </select>
      </div>
      <div className="filter-group">
        <label htmlFor="occupation">Occupation</label>
        <input type="text" id="occupation" name="occupation" onChange={onFilterChange} />
      </div>
      <div className="filter-group">
        <label htmlFor="tidiness">Tidiness</label>
        <input type="text" id="tidiness" name="tidiness" onChange={onFilterChange} />
      </div>
      <div className="filter-group">
        <label htmlFor="hobbies">Hobbies</label>
        <input type="text" id="hobbies" name="hobbies" onChange={onFilterChange} />
      </div>
      {/* Add more filters as needed */}
    </aside>
  );
};

export default FilterSidebar;
