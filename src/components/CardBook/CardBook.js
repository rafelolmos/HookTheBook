import React from 'react';

import './CardBook.scss'

const CardBook = ({ book }) => {

    return ( 
        <div className="card">
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
                            </div>
                            <div className="bookState">Book State: {book.bookState}</div>
                        </div>
                    </div>
                </div>
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
 
export default CardBook

