import React, { useState, useEffect } from 'react'

import _get from 'lodash.get';
import Preview from '../Preview';


const BookISBNSearch = ({ valueISBN = ''}) => {
    const [bookItem, setBookItem] = useState({})
    
    useEffect(()=>{
        if(valueISBN){
            fetch(`https://www.googleapis.com/books/v1/volumes?q=isbn:${valueISBN}`)
            .then(function(response) {
                return response.json();
            })
            .then(data => {
                const volumeInfo = _get(data, 'items[0].volumeInfo', '')
                if(volumeInfo) setBookItem(volumeInfo)
            })
        }
    },[valueISBN])
    
    if (!Object.keys(bookItem).length) return ''
        
    return (
        <>
            {valueISBN=''}
            <Preview
                title={bookItem.title} 
                authors={bookItem.authors[0]}
                pages={bookItem.pageCount}
                published={bookItem.publishedDate}
                description={bookItem.description} 
                image={bookItem.imageLinks.thumbnail}
                setBookItem={setBookItem}
            />
        </>
        );
}
     
export default BookISBNSearch;

