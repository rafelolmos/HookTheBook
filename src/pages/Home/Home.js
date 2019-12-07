import React, {useState} from 'react';
import Layout from '../../Layout';
import SearchISBN from '../../components/SearchISBN';
import BookISBNSearch from '../../components/AddBookButton/AddBookButton';
import MyBookList from '../../components/MyBookList/MyBookList';

const Home = () => {

    const [valueISBN, setValueISBN]= useState('');
    const handleISBNvalue = (ISBNvalue)=>{
        setValueISBN(ISBNvalue)
      }


    return (
        <Layout>
            <div>Home page</div>
            <div>HookTheBook - 9788482649665</div>
            <div><SearchISBN onPush={handleISBNvalue}/></div>
            <div><BookISBNSearch valueISBN={valueISBN}/></div>
            {/* <div><MyBookList /></div> */}
        </Layout>
    )
}
 
export default Home;