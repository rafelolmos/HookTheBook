import React from 'react';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';

import { logout } from '../../services/auth';

import './Header.scss'

const Header = ({ history }) => {
    const user = useSelector(state => state.user);
    console.log('user: ', user);

    const handleLogout = () => {
      logout();
      history.push('/');
    }

    return (
        <div className="header">
            <div className="header-basic">
                <h2 className="title-name">Hook The Book</h2>
                <ul>
                    {user 
                    ? <li>{user.name} <button className="logout-button" onClick={handleLogout}>Logout</button></li>
                    : (
                        <>
                            <li><Link to="/signup">Signup</Link></li>
                            <li><Link to="/login">Login</Link></li>
                        </>
                        )
                    }
                </ul>
            </div>
        </div>
      );
}
 
export default Header;