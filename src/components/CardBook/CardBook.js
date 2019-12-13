import React, { useState, useEffect } from 'react';

import { deleteItem } from '../../services/database';
import './CardBook.scss'
import PopUp from '../PopUp';


// const user = useSelector((state)=> state.user);
// console.log('user: ', user);


// getDbInstance().collection("books").doc("book.id").update({
//     "bookState": "Reserved"
// })
// .then(function() {
//     console.log("Document successfully updated!");
// });



const CardBook = ({ book }) => {
        
    // const handleBookState = (()=>{
    //     book.update({bookState:'Reserved'})

    //     console.log('book.bookState: ', book.bookState);
    // })

    const handleDeleteBook = async () => {
        await deleteItem('books', book.id);
    }
//    const showPopUp = false

//    const handlePopUp = (()=>{
//     !showPopUp ? <PopUp /> : null
//    })

    return (
        <div className="card">
            {/* {book.user !== user ? "my list" : "no list"} */}
                <div key={book.timestamp}>
                    <div className="mainDiv">
                        <button id="detailBook" /*onClick={handlePopUp}*/>
                            DETAIL
                        </button>
                        <div className="imageBook">
                            <img className="image" src={book.image} alt="#"/>                
                        </div>
                        <div className="bookContent">
                            <div className="infBook">
                                <p className="title">Title: {book.title}</p>
                                <p className="author">Author: {book.authors}</p>
                                <p className="published">Year: {book.published}</p>
                                <p className="pages">Pages: {book.pages}</p>
                            </div>
                            <div className="bookState">Book State: {book.bookState}</div>
                            <button className="changeBookState" /*onClick={handleBookState}*/>RESERVE IT</button>
                            <button className="deleteBook" onClick={handleDeleteBook}>DELETE IT</button>
                        </div>
                    </div>
                </div>
        </div>
    )}
 
export default CardBook

