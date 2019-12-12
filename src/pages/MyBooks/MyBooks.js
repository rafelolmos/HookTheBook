import React, { useState, useEffect } from 'react';
import { getAllRealTime } from '../../services/database';
import { useSelector} from 'react-redux';

import './MyBooks.scss'

import CardBook from '../../components/CardBook/CardBook';
import Layout from '../../Layout';

const MyBooks = () => {

    const user = useSelector((state)=> state.user);
    console.log('user: ', user);

    const [bookList, setBookList] = useState([])
    console.log('setBookList: ', setBookList);

    useEffect(() => {

        getAllRealTime({
            collection: 'books',
            filters: { field: 'user', condition: '==', value: user.id },
            order: 'timestamp',
            callback: (collectionData) => {
            const results = [];
            collectionData.forEach((document) => {
                const data = document.data();
                const addedBookDate = new Date(data.timestamp);
                data.date = addedBookDate.toLocaleDateString();
                data.time = addedBookDate.toLocaleTimeString();
                results.push(data);
            });
            setBookList(results);
            }
        });
      }, [])

    return (
        <Layout>
            <div className="cardBook-container">
                {/* <CardBook bookList /> */}
                    <div className="card">
                    {bookList.map((book, i)=>(
                    <div key={book.timestamp}>
                        <div className="mainDiv">
                            <button id="detailBook">
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
                            </div>
                        </div>
                    </div>
                ))}
                </div>
            </div>
        </Layout>
     );
}
 
export default MyBooks;