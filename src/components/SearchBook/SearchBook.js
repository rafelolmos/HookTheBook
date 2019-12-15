import React, { useState } from "react";


const SearchBook = ({ bookList, setFilteredBookList }) => {
  
  const [searchInput, setSearchInput] = useState('');

  const handleChange = word => {
      setSearchInput(word);
  }

  const handleClick = () =>{
    setFilteredBookList( bookList, searchInput )
  }

  return (
      <div className="searchBook" >
          <input placeholder="search book" type="text" value={searchInput} onChange={(e) => handleChange(e.target.value)} />
          <button className="search-button" type="submit" onClick={handleClick}>SEARCH</button>
      </div>
    )
}

export default SearchBook;
