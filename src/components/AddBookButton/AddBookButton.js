import React, { useState, useEffect } from 'react'

import _get from 'lodash.get';


const BookISBNSearch = ({ valueISBN = '' }) => {
    const [bookItem, setBookItem] = useState({})

    useEffect(()=>{
        if(valueISBN){
            console.log('${valueISBN}: ', valueISBN);

            fetch(`https://www.googleapis.com/books/v1/volumes?q=isbn:${valueISBN}`)
            .then(function(response) {
                return response.json();
            })
            .then(data => {
                const volumeInfo = _get(data, 'items[0].volumeInfo', '')
                if(volumeInfo) setBookItem(volumeInfo)
            });
        }
    },[])
    
    if (!Object.keys(bookItem).length) return '';
        
    return ( 
        <div>Entra{valueISBN}</div>
        );
}
     
export default BookISBNSearch;

