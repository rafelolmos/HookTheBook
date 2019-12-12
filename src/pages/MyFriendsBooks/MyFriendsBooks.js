import React, { useState, useEffect } from 'react';
import { getAllRealTime } from '../../services/database';
import { useSelector} from 'react-redux';

import './MyBooksFriends.scss'

import Layout from '../../Layout';
import CardBook from '../../components/CardBook/CardBook';


const MyFriendsBooks = () => {

    const user = useSelector((state)=> state.user);

    const [bookList, setBookList] = useState([])


    useEffect(() => {
    
        getAllRealTime({
            collection: 'books',
            filters: { field: 'user', condition: '==', value: user.id }, //ha de ser differnt de l'usuari
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
            <div>
                <CardBook list={bookList}/>
            </div>
        </Layout>
     );
}
 
export default MyFriendsBooks;
