import React, { useState } from 'react';
import { useSelector } from 'react-redux'

import { addItem } from '../../services/database';

import './Preview.scss';


const Preview = ({title = '', authors = '', pages = 0, published = '', description = '', image = '', bookState = 'available' }) => {
    const user = useSelector((state)=> state.user)

    const [book, setBook] = useState([]);
    
    const handleAddBook = async () => {
        if (!book) return;
        
        const data = {   
            user: user.id,
            owner: user.name,
            title,
            authors,
            pages,
            published,
            description,
            image,
            bookState: 'AVAILABLE',
            timestamp: +(new Date())
        };
        
        const result = await addItem('books', data);
        if (result) {
            setBook('');
        }
    };

    return ( 
        <div className="form-content">
            <div className="preview">
                <img src={image} alt="" width="60px" />
                <div className="book-information">
                    <p className="title">Title: <span>{title}</span></p>
                    <p className="author">Author: <span>{authors}</span></p>
                    <p className="author">Pages: <span>{pages}</span></p>
                    <p className="author">Year: <span>{published}</span></p>
                </div>
                <button className="addBook" onClick={handleAddBook}>HOOK IT!</button>
            </div>
        </div>

     );
}
 
export default Preview;