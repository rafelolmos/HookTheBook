import React, { useState, useEffect } from 'react';
import { getAllRealTime } from '../../services/database';
import { useSelector} from 'react-redux';

import '../MyBooks/MyBooks.scss'

import CardBook from '../../components/CardBook/CardBook';
import Layout from '../../Layout';

const MyAlerts = () => {

    const user = useSelector((state)=> state.user);
    console.log('user: ', user);

    const [bookList, setBookList] = useState([])
    console.log('setBookList: ', setBookList);

    useEffect(() => {
        if (user === null) return;

        getAllRealTime({collection: 'books', 
        callback: (collectionData) => {
        const results = []
        
        // const list = results.filter(function(elem){
        //     return elem.user !== user.id;
        // })
        collectionData.forEach((document) => {
            console.log('document.user: ', document.user);
            const data = {id: document.id, ...document.data()};
            const addedBookDate = new Date(data.timestamp);
            data.date = addedBookDate.toLocaleDateString();
            data.time = addedBookDate.toLocaleTimeString();
            results.push(data);
        });
        const list = results.filter(function(elem){
            return elem.bookState !== 'available';
        })
        setBookList(list);
        }
    });
  }, [user])

    return (
        <Layout>
            <div className="cardBook-container">
                <div className="window">
                {bookList.map((book, i)=>(
                    <CardBook book={book} />   
                ))}
                </div>
            </div>
        </Layout>
     );
}
 
export default MyAlerts;