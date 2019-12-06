import React, { useState } from 'react';


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
            <button type="submit">SEARCH</button>
            <button>ADD BOOK</button>
        </form>
     );
}
 
export default SearchISBN;