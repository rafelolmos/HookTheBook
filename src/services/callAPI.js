import React , { useState, useEffect } from 'react';
import axios from 'axios';

// const codeISBN = '9788482649665'
// const BookISBNSearchAxios = axios.get(`https://www.googleapis.com/books/v1/volumes?q=isbn:${codeISBN}`)
//   .then(function (response) {
//     const beerInitial = response.data.items[0].volumeInfo.imageLinks.thumbnail;
//     console.log('beerInitial: ', beerInitial);
//   }
// )

const BookISBNSearch = () => {
    const [bookItem, setBookItem] = useState({});
    const codeISBN = '9788482649665'
        
    useEffect(()=>{
        fetch(`https://www.googleapis.com/books/v1/volumes?q=isbn:${codeISBN}`)
        .then(function(response) {
            console.log('response: ', response);
            return response.json();
        })
        .then(data => {
            setBookItem(data.items[0].volumeInfo)            
        });
    }, [])
    
    if (!bookItem) return ("error")
    

    return ( 
        <div>
             <h3>{bookItem.title}</h3>   
             <h4>{bookItem.authors}</h4>
             <h4>{bookItem.description}</h4>
             {/* <div>
                 <img src={bookItem.imageLinks.thumbnail} alt="book"></img>
             </div> */}
        </div>
        );
}

export default BookISBNSearch;