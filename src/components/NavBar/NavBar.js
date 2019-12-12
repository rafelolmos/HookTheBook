import React from 'react';
import { Link } from 'react-router-dom'

import './NavBar.scss'

const NavBar = () => {
    return ( 
        <div className="navBar-container">
            <ul className="linksGroup">
                <li className="link-li"><Link to='Home'>Home</Link></li>
                <li className="link-li"><Link to='About'>About</Link></li>
                <li className="link-li"><Link to='MyBooks'>MyBooks</Link></li>
                <li className="link-li"><Link to='MyAlerts'>MyAlerts</Link></li>
                <li className="link-li"><Link to='MyFriendsBooks'>MyFriendsBooks</Link></li>
            </ul>
        </div>
     );
}
 
export default NavBar;
