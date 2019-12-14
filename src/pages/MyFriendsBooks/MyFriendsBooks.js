import React, { useState, useEffect } from 'react';
import { getAllRealTime } from '../../services/database';
import { useSelector} from 'react-redux';

import './MyBooksFriends.scss'

import Layout from '../../Layout';
import CardBook from '../../components/CardBook/CardBook';
import SearchBook from '../../components/SearchBook/SearchBook';


const MyFriendsBooks = () => {

    const user = useSelector((state)=> state.user);

    const [bookList, setBookList] = useState([])
        
    useEffect(() => {
        if (user === null) return;

        getAllRealTime({collection: 'books', 
        callback: (collectionData) => {
        const results = []

        collectionData.forEach((document) => {
            const data = {id: document.id, ...document.data()};
            const addedBookDate = new Date(data.timestamp);
            data.date = addedBookDate.toLocaleDateString();
            data.time = addedBookDate.toLocaleTimeString();
            results.push(data);
        });
        const list = results.filter(function(elem){
            return elem.user !== user.id;
        })
        setBookList(list);
        }
    });
  }, [user])

    return ( 
        <Layout>
            <SearchBook bookList={bookList}/>
            <div className="cardBook-container">
            {bookList.map((book, i)=>(
                <CardBook key={book.id} book={book} />
            ))}
            </div>
        </Layout>
     );
}
 
export default MyFriendsBooks;