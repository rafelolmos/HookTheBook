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
    const [filteredBookList, setFilteredList] = useState([])
    const [isFiltered, setIsFiltered] = useState(false)
        
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

  const setFilteredBookList = (list=[], mySearch='')=>{
      if (!mySearch) {
        setIsFiltered(false);
          return setFilteredList([]);
      }

      const search = mySearch.toLowerCase()

      const filteredList = list.filter(item => {
        const authors = item.authors.toLowerCase();
        const title = item.title.toLowerCase();
        
        if (item) {
              return authors.includes(search) || title.includes(search)
            }
            return false
        })
        setIsFiltered(true)
        setFilteredList(filteredList);
  }

  const myList = isFiltered
  ? filteredBookList 
  : bookList;
  
    return ( 
        <Layout>
            <div className="mainBar">
                <div className="title"><h1>My Friends Books</h1></div>
                <div className="navigation-menu">
                <SearchBook bookList={bookList} setFilteredBookList={setFilteredBookList}/>
            </div>
            </div>
            <div className="cardBook-container">
            {myList.map((book, i)=>(
                <CardBook key={book.id} book={book} />
            ))}
            </div>
        </Layout>
     );
}
 
export default MyFriendsBooks;