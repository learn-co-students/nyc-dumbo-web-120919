import React from 'react'

const Search = props => {


  const helpWithChange = (e) => {
    props.handleSearchTerm(e.target.value);
  }


  return (
    <div className="ui search">
      <div className="ui icon input">
        <input className="prompt" onChange={helpWithChange} value={props.searchTerm} />
        <i className="search icon" />
      </div>
    </div>
  )
}

export default Search
