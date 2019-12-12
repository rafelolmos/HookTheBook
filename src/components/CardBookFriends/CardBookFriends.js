import React, { useState, useEffect } from 'react';
import { getAllRealTime } from '../../services/database';
import { useSelector} from 'react-redux';

import './CardBookFriends.scss'


const CardBookFriends = ({title = '', authors = '', pages = 0, published = '', description = '', image = ''}) => {

    const user = useSelector((state)=> state.user);

    const [bookList, setBookList] = useState([])
    console.log('bookList: ', bookList);

    useEffect(() => {
    
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
      }, [])



    return ( 

        <div className="card">
            {bookList.map((book, i)=>(
                <div key={book.timestamp}>
                    <div className="mainDiv">
                        <button id="detailBook">
                            DETAIL
                        </button>
                        <div className="imageBook">
                            <img className="image" src={book.image} alt="#"/>                
                        </div>
                        <div className="bookContent">
                            <div className="infBook">
                                <p className="title">Title: {book.title}</p>
                                <p className="author">Author: {book.authors}</p>
                                <p className="published">Year: {book.published}</p>
                                <p className="pages">Pages: {book.pages}</p>
                                <p className="owner">Owner: {user.name}</p>
                                
                            </div>
                            <div className="bookState">Book State: {book.bookState}</div>
                        </div>
                    </div>
                </div>
            ))}
        </div>


    )}

  

       
//                 {/* <div className="trafficLights">
//                     <input type="radio" name="optionLights" value="red" className="input-option" id="red"/>
//                     <label htmlFor="red"></label>
//                     <label>Available</label>
//                     <input type="radio" name="optionLights" value="yellow" className="input-option" id="yellow" />
//                     <label htmlFor="yellow"></label>
//                     <label>Reserved</label>
//                     <input type="radio" name="optionLights" value="green" className="input-option" id="green"/>
//                     <label htmlFor="green"></label>
//                     <label>Borrowed</label>
//                 </div> */}
//             </div>
//         </div>
//      );
// }
 
export default CardBookFriends

