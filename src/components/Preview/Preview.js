import React, { useState, useEffect } from 'react';
import { useSelector } from 'react-redux'

// import uploadFile from '../../services/storage';
import { addItem } from '../../services/database';



// getAllRealTime({
//     collection: 'books',
//     filters: { field: 'user', condition: '==', value: user },
//     order: 'timestamp',
//     callback: (collectionData) => {
//       const results = [];
//       collectionData.forEach((document) => {
//         const data = document.data();
//         const addedBookDate = new Date(data.timestamp);
//         data.date = addedBookDate.toLocaleDateString();
//         data.time = addedBookDate.toLocaleTimeString();
//         results.push(data);
//       });
//       setBookList(results);
//     }
//   });

const Preview = ({title = '', authors = '', pages = 0, published = '', description = '', image = '' }) => {
    const user = useSelector((state)=> state.user)
    const [book, setBook] = useState([]);

    const handleAddBook = async () => {
        if (!book) return;

        const data = {   
            user: user.id, 
            title,
            authors,
            pages,
            published,
            description,
            image,
            timestamp: +(new Date()) 
        };

        const result = await addItem('books', data);
        console.log('data: ', data);
        console.log('result: ', result);
        if (result) {
        setBook('')
        }
    };

    console.log('user: ', user);

    return ( 
        <div className='preview'>
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcRXJsjaC65LLa3LRcK2t2Z08keV4viwBS1Jff3Ryo98Y9ywwAku" alt="" width="80px" />
            <p className="title">Title: {title}</p>
            <p className="author">Author: {authors}</p>
            <button className="addBook" onClick={handleAddBook}>AddBook</button>
        </div>

     );
}
 
export default Preview;