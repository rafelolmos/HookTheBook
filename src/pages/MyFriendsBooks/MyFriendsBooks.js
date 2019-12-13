import React, { useState, useEffect } from 'react';
import { getAll } from '../../services/database';
import { useSelector} from 'react-redux';

import './MyBooksFriends.scss'

import Layout from '../../Layout';
import CardBook from '../../components/CardBook/CardBook';


const MyFriendsBooks = () => {

    const user = useSelector((state)=> state.user);
    console.log('user: ', user);

    const [bookList, setBookList] = useState([])
    console.log('bookList: ', bookList);
        
    useEffect(() => {
        
        getAll('books').then(result=>{
            const list = result.filter(function(elem){
                console.log('elem: ', elem);
                return elem.user !== user.id;
            })
            setBookList(list)
        })

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
 
export default MyFriendsBooks;
