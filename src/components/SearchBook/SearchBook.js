import React, {useState, useEffect} from 'react';

const bookListName = [
    "Hola",
    "hola HOLA",
    "adeu",
    "asdfsdf",
    "ASDadasdf"
];

const SearchBook = () => {

    const [searchBookItem, setSearchBookiItem]= useState('')
    const [searchResult, setSearchResult] = useState([])

    
    const handleSearch = (event) =>{setSearchBookiItem(event.target.value)};
    

    useEffect (() => {
        const results = bookListName.filter(bookItem => bookItem.toLowerCase().includes(searchBookItem));
        setSearchResult(results);
    }, [searchBookItem]);
 

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
