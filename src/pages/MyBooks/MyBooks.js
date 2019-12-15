import React, { useState, useEffect } from 'react';
import { getAllRealTime } from '../../services/database';
import { useSelector} from 'react-redux';
import SearchISBN from '../../components/SearchISBN';
import BookISBNSearch from '../../components/AddBookButton/AddBookButton';

import './MyBooks.scss'

import CardBook from '../../components/CardBook/CardBook';
import Layout from '../../Layout';

const MyBooks = () => {

    const user = useSelector((state)=> state.user);

    const [bookList, setBookList] = useState([])

    const [valueISBN, setValueISBN]= useState('');
    const handleISBNvalue = (ISBNvalue)=>{
        setValueISBN(ISBNvalue)
      }

    useEffect(() => {

        if (!user) return;

        getAllRealTime({
            collection: 'books',
            filters: { field: 'user', condition: '==', value: user.id },
            order: 'timestamp',
            callback: (collectionData) => {
            const results = [];
            collectionData.forEach((document) => {
                const data = {id: document.id, ...document.data()};
                const addedBookDate = new Date(data.timestamp);
                data.date = addedBookDate.toLocaleDateString();
                data.time = addedBookDate.toLocaleTimeString();
                results.push(data);
            });
            setBookList(results);
            }
        });
      }, [user])

    return (
        <Layout>
            <div className="mainBar">
                <div className="title"><h1>My Books</h1></div>
                <div className="navigation-menu">
                    <div><SearchISBN onPush={handleISBNvalue}/></div>
                    <div><BookISBNSearch valueISBN={valueISBN}/></div>  
                </div>
            </div>
            <div className="cardBook-container">
                <div className="window">
                {bookList.map((book, i)=>(
                    <CardBook key={book.id} book={book} />   
                ))}
                </div>
            </div>
        </Layout>
     );
}
 
export default MyBooks;