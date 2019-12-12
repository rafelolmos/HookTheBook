import React from 'react';
import { Link } from 'react-router-dom'

import './NavBar.scss'

const NavBar = () => {
    return ( 
        <div className="navBar-container">
            <ul className="linksGroup">
                <li className="link-li"><Link to='/'>Home</Link></li>
                <li className="link-li"><Link to='/about'>About</Link></li>
                <li className="link-li"><Link to='/my-books'>MyBooks</Link></li>
                <li className="link-li"><Link to='/my-alerts'>MyAlerts</Link></li>
                <li className="link-li"><Link to='/my-friends-books'>MyFriendsBooks</Link></li>
            </ul>
        </div>
     );
}
 
export default NavBar;
