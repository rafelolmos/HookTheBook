import React, { useState } from 'react';

import './SearchISBN.scss'


const SearchISBN = ({onPush}) => {

    const [searchedISBN, setSearchedISBN] = useState()
    
    
    const showBook = (event)=>{
        event.preventDefault();
        //BookISBNSearch(searchedISBN);
        console.log('searchISBN2: ', searchedISBN);
        onPush(searchedISBN);
    }

    return ( 
        <form className="searchBook" onSubmit={showBook}>
            <input placeholder="type ISBN number" value={searchedISBN} onChange={(event)=>setSearchedISBN(event.target.value)} />
            <button className="search-button" type="submit">SEARCH</button>
        </form>
     );
}
 
export default SearchISBN;