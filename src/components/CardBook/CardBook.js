import React from 'react'

import './CardBook.scss'


const CardBook = () => {
    return ( 
        <div className = "mainDiv">
            <button id="detailBook">
                DETAIL
            </button>
            <div className="imageBook">
                <img src="https://picsum.photos/200/300" alt="#"/>                
            </div>
            <div className="bookContent">
                <div className="infBook">
                    <p className="title">Title</p>
                    <p className="author">Author</p>
                    <p className="description">lorem impsum lorem impsum lorem impsum lorem impsum </p>
                </div>

                <div className="trafficLights">
                    <input type="radio" name="optionLights" value="red" className="input-option" id="red"/>
                    <label htmlFor="red"></label>
                    <label>Available</label>
                    <input type="radio" name="optionLights" value="yellow" className="input-option" id="yellow" />
                    <label htmlFor="yellow"></label>
                    <label>Reserved</label>
                    <input type="radio" name="optionLights" value="green" className="input-option" id="green"/>
                    <label htmlFor="green"></label>
                    <label>Borrowed</label>
                </div>
            </div>
        </div>
     );
}
 
export default CardBook;

