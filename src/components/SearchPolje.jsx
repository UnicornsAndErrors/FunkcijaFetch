import React from 'react'

const SearchPolje = ({onFilterChange}) => {
  
    return (
    <input 
    type="search" 
    placeholder="pretraži" 
    className="search-box" 
    onChange={onFilterChange}          /* this props kada zovemo nesto iz app.jsx */
    /> 
    );
  }

  export default SearchPolje;;
