import React from 'react';

import './PopUp.scss'

const PopUp = ({book}) => {

    return ( 
        <div className="popup">
            <div className="popup-inner">
                
                {book.description}
            </div>
        </div>
     );
}
 
export default PopUp;

