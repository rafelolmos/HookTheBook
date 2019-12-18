import React, { useState } from 'react';

import { deleteItem, updateItem } from '../../services/database';
import { useSelector } from 'react-redux'

import './CardBook.scss'
import PopUp from '../PopUp';


const CardBook = ({ book }) => {
    
    const [showPopUp, setShowPopUp] = useState(false)
    const currentUser = useSelector((state)=> state.user.id);
    const userLend = useSelector((state)=> state.user.name);
    
    const handleBookState = async () => { 
        book.bookState = 'RESERVED';
        book.userRequest = userLend;
        await updateItem('books', book,book.id)
    }

    const handleLendBook = async () => {
        book.bookState = 'LENT';
        await updateItem('books', book,book.id)
    }
    const handleRefuseBook = async () => {
        book.bookState = 'AVAILABLE';
        await updateItem('books', book,book.id)
    }

    const handleDeleteBook = async () => {
        await deleteItem('books', book.id);
    }
    
    const setPopup = () => {
        setShowPopUp(true)
    }
    
    return (
        <div className="card">
                <div key={book.timestamp}>
                    {showPopUp && <PopUp book={book} setClose={setShowPopUp} />}
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
                                <div className="bookState">Book State: <span>{book.bookState}</span></div>
                                {!!book.userRequest && <div className="userRequest">Borrowed by?: <span>{book.userRequest}</span></div>}
                                {currentUser === book.user && book.bookState === 'RESERVED' && <button className="notAvailableBook" onClick={handleLendBook}>LEND IT</button>}
                                {currentUser === book.user && book.bookState === 'RESERVED' && <button className="refuseLendBook" onClick={handleRefuseBook}>LEND REFUSED</button>}
                                {currentUser !== book.user && book.bookState === 'AVAILABLE' && <button className="changeBookState" onClick={handleBookState}>RESERVE IT</button>}
                                {currentUser === book.user && <button className="deleteBook" onClick={handleDeleteBook}>DELETE IT</button>}
                            </div>
                        </div>
                        <button className="detailBook" onClick={()=>setPopup()}>
                            DETAIL
                        </button>
                    </div>
                </div>
        </div>
    )}
 
export default CardBook

