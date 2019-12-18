import React, {useState} from 'react';
import { useSelector } from 'react-redux'
import Layout from '../../Layout';
import SearchISBN from '../../components/SearchISBN';
import BookISBNSearch from '../../components/AddBookButton/AddBookButton';

const Home = () => {

    const user = useSelector((state)=> state.user);

    // const [valueISBN, setValueISBN]= useState('');
    // const handleISBNvalue = (ISBNvalue)=>{
    //     setValueISBN(ISBNvalue)
    //   }

    return (
        <Layout>
            <div className="Welcome">Welcome</div>
            {/* <div className="navigation-menu">
                <div><SearchISBN onPush={handleISBNvalue}/></div>
                <div><BookISBNSearch valueISBN={valueISBN}/></div>  
            </div> */}
        </Layout>
    )
}
 
export default Home;

