import React, { useState } from 'react';

import { deleteItem, updateItem } from '../../services/database';
import { useSelector } from 'react-redux'

import './CardBook.scss'
import PopUp from '../PopUp';


const CardBook = ({ book }) => {
    
    const [showPopUp, setShowPopUp] = useState(false)
    const userLend = useSelector((state)=> state.user.name);
    const currentUser = useSelector((state)=> state.user.id);
    console.log('currentUser: ', currentUser);
        
    const handleBookState = async () => {

        book.bookState = 'Reserved';
        book.userRequest = userLend;
        await updateItem('books', book,book.id)
        console.log('book: ', book);
    }

    const handleLendBook = async () => {

        book.bookState = 'Lended';
        await updateItem('books', book,book.id)
        console.log('book: ', book);
    }

    const handleDeleteBook = async () => {
        await deleteItem('books', book.id);
    }
    
    const setPopup = () => {
        setShowPopUp(true)
    }
    console.log('currentUser.id: ', currentUser.id);
    console.log('book.user: ', book.user);
    console.log('book: ', book);

    return (
        <div className="card">
                <div key={book.timestamp}>
                    <div className="mainDiv">
                        <div className="imageBook">
                            <img className="image" src={book.image} alt="#"/>                
                        </div>
                        <div className="bookContent">
                            <div className="infBook">
                                <p className="owner"><span>{book.owner}</span>'s book</p>
                                <p className="title">Title: <span>{book.title}</span></p>
                                <p className="author">Author: <span>{book.authors}</span></p>
                                <p className="published">Year: <span>{book.published}</span></p>
                                <p className="pages">Pages: <span>{book.pages}</span></p>


                            </div>
                            <div className="bookState">Book State: {book.bookState}</div>
                            {!!book.userRequest && <div className="userRequest">Who Borrowed?: <span>{book.userRequest}</span></div>}
                            {currentUser === book.user && book.bookState === 'Reserved' && <button className="notAvailableBook" onClick={handleLendBook}>LEND IT</button>}
                            {currentUser !== book.user && <button className="changeBookState" onClick={handleBookState}>RESERVE IT</button>}
                            {currentUser === book.user && <button className="deleteBook" onClick={handleDeleteBook}>DELETE IT</button>}
                        </div>
                        <button className="detailBook" onClick={()=>setPopup()}>
                            DETAIL
                        </button>
                    </div>
                </div>
                {showPopUp && <PopUp book={book} setClose={setShowPopUp} />}
        </div>
    )}
 
export default CardBook

