import React from 'react'
import './CardBook.scss'


const CardBook = ({title = '', authors = '', pages = 0, published = '', description = '', image = ''}) => {

    return ( 

        <div className = "mainDiv">
            <button id="detailBook">
                DETAIL
            </button>
            <div className="imageBook">
                <img src={image} alt="#"/>                
            </div>
            <div className="bookContent">
                <div className="infBook">
                    <p className="title">Title: {title}</p>
                    <p className="author">Author: {authors}</p>
                    <p className="published">Year: {published}</p>
                    <p className="pages">Pages: {pages}</p>
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
 
export default CardBook

