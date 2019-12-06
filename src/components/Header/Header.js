import React from 'react';
import { Link, withRouter } from 'react-router-dom';
import { useSelector } from 'react-redux';

import { logout } from '../../services/auth';

const Header = ({ history }) => {
    const user = useSelector(state => state.user);

    const handleLogout = () => {
      logout();
      history.push('/');
    }

    return (
        <div className="header">
            <h2>HookTheBook</h2>
            <div>
                <ul>
                    <li><Link to="/">Home</Link></li>
                    {user 
                    ? <li>{user.name} <button onClick={handleLogout}>Logout</button></li>
                    : (
                        <>
                            <li><Link to="/signup">Signup</Link></li>
                            <li><Link to="/login">Login</Link></li>
                        </>
                        )
                }
                </ul>
            </div>
            <div className="linksGroup">
            <button><Link to='Home'>Home</Link></button>
            <button><Link to='About'>About</Link></button>
            <button><Link to='MyBooks'>MyBooks</Link></button>
            <button><Link to='MyAlerts'>MyAlerts</Link></button>
            <button><Link to='MyFriendsBooks'>MyFriendsBooks</Link></button>
            </div>
        </div>
      );
}
 
export default withRouter(Header);