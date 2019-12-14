import React, { useState, useEffect } from "react";


const SearchBook = (props) => {
    console.log('props: ', props);
  
  const [searchInput, setSearchInput] = useState('');

  

  const handleChange = word => {
      setSearchInput(word);
  }

//   useEffect (()=>{

//     var filteredArray = props.filter((str)=>{
//         return str.toLowerCase().indexOf(searchInput).toLowerCase() >= 0; 
//     });
//     console.log('filteredArray: ', filteredArray);


//   },[searchInput]);

  return (
      <div>
          <input type="text" value={searchInput} onChange={(e) => handleChange(e.target.value)} />
      </div>
  )
}

export default SearchBook;
