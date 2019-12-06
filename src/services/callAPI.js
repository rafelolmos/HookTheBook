// import React , { useState, useEffect } from 'react';



// const codeISBN = '9788482649665'
// const BookISBNSearchAxios = axios.get(`https://www.googleapis.com/books/v1/volumes?q=isbn:${codeISBN}`)
//   .then(function (response) {
//     const bookItem = response.data.items[0].volumeInfo.imageLinks.thumbnail;
//     console.log('bookItem: ', bookItem);
//   }
// )
// const codeISBN = '9788482649665'


// const BookISBNSearch = (codeISBN) => {
//     console.log('props: ', codeISBN);
//     debugger
    
//     const [bookItem, setBookItem] = useState({});

    
//     useEffect(()=>{
//         fetch(`https://www.googleapis.com/books/v1/volumes?q=isbn:${codeISBN}`)
//         .then(function(response) {
//             console.log('response: ', response);
//             return response.json();
//         })
//         .then(data => {
//             setBookItem(data.items[0].volumeInfo)            
//             console.log('setBookItem: ', setBookItem);
//         });
//     })
    
//     if (Object.keys(bookItem).length) return ('error')

//     return ( 
//         <div>
//              <h3>{bookItem.title}</h3>   
//              <h4>{bookItem.authors}</h4>
//              <h4>{bookItem.description}</h4>
//              {/* <div>
//                  <img src={bookItem.imageLinks.thumbnail} alt="book"></img>
//              </div> */}
//         </div>
//         );
// }

// export default BookISBNSearch;




// function BookISBNSearch(codeISBN) {
//     const [bookItem, setBookItem] = useState({});
//     console.log('bookItem: ', bookItem);
//     console.log('setBookItem: ', setBookItem);

//     // const BookISBNSearchAxios = axios.get(`https://www.googleapis.com/books/v1/volumes?q=isbn:${codeISBN}`)
// //   .then(function (response) {
// //     const bookItem = response.data.items[0].volumeInfo.imageLinks.thumbnail;
// //     console.log('bookItem: ', bookItem);
// //   }
// // )
    
//     useEffect((codeISBN) => {
//       fetch(`https://www.googleapis.com/books/v1/volumes?q=isbn:9788482649665`)
//         .then(results => results.json())
//         .then(data => {
//           const {bookItem} = data.results[0];
//           console.log('API bookItem: ', bookItem);
//           setBookItem(bookItem);
//         });
//     }, []); // <-- Have to pass in [] here!
  
//     console.log('bookItem: ', bookItem);
//     return (
//       <div>
//         Name: {!bookItem ? 'Loading...' : `${bookItem.title}`}
//       </div>
//     );
//   }

//  export default BookISBNSearch
