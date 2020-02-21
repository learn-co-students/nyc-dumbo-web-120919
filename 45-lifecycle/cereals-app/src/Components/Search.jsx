import React from 'react';

const Search = (props) => {
  
  const handleChange = (e) => {
    props.changeSearchTerm(e.target.value);
  }

  return(
    <div className="search-box">
    	<input
        type="text"
        name="search"
        placeholder="Search..."
        value={props.searchTerm}
        onChange={ handleChange }
      />
    </div>
  )

};

export default Search;
