import React from 'react';

import './PopUp.scss'

const PopUp = ({book, setClose}) => {

    return ( 
        <div className="popup">
            <div className="popup-inner">
                <button onClick={()=>setClose(false)}>CLOSE</button>
                {book.description}
            </div>
        </div>
     );
}
 
export default PopUp;

