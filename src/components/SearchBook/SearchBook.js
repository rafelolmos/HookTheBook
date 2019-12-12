import React, {useState, useEffect, useSelector } from 'react';

import { getAll } from '../../services/database';
import { stringify } from 'querystring';



const SearchBook = () => {

    const [searchBookItem, setSearchBookiItem]= useState('')

    const [searchResult, setSearchResult] = useState([])

    const [bookListSearch, setBookListSearch] = useState()
    
    
    // const user = useSelector((state)=> state.user);
    const handleSearch = (event) =>{setSearchBookiItem(event.target.value)};
    
    useEffect(() => {

        (async()=>{const result = await getAll('books')

        const aa=JSON.stringify(result)
        const bb=Object.keys(aa)
        console.log('bb: ', bb);

        console.log('aa: ', aa);
       
        
        setBookListSearch(aa)
        console.log('setBookListSearch: ', setBookListSearch);


    })()
    }, [])
    





    // useEffect (() => {
    //     const results = bookListSearch.authors.filter(bookItem => bookItem.includes(searchBookItem));
    //     setSearchResult(results);
    // }, [searchBookItem]);
 

    return (
        <>
        <div>
            <input type="text" placeholder="search a book" value={searchBookItem} onChange={handleSearch}/>
        </div>
        {searchBookItem !== undefined ?  <div></div> :
            <ul>
                {searchResult.map(item => (
                <li>{item}</li>))}
            </ul> 
    }
        </>
    )
}
 
export default SearchBook;
