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

        if (!user) return;

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
      }, [user])

    return (
        <Layout>
            <div className="cardBook-container">
            {bookList.map((book, i)=>(
                <CardBook book={book} />
            ))}
            </div>
        </Layout>
     );
}
 
export default MyBooks;