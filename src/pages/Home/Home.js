import React, {useState} from 'react';
import Layout from '../../Layout';
import SearchISBN from '../../components/SearchISBN';
import BookISBNSearch from '../../components/AddBookButton/AddBookButton';
import NavBar from '../../components/NavBar';
import './Home.scss'

const Home = () => {

    const [valueISBN, setValueISBN]= useState('');
    const handleISBNvalue = (ISBNvalue)=>{
        setValueISBN(ISBNvalue)
      }


    return (
        <Layout>
            <div className="navigation-menu">
                <div>HookTheBook - 9788482649665</div>
                <div>HookTheBook - 0735619670</div>
                <div><SearchISBN onPush={handleISBNvalue}/></div>
                <div><BookISBNSearch valueISBN={valueISBN}/></div>  
            </div>
        </Layout>
    )
}
 
export default Home;

