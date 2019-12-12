import React from 'react';
import NavBar from './components/NavBar';

const Layout = ({ children }) => {
    return (
        <div className="layout">
            <NavBar />
            {children}
            <h1 className="footer">Footer</h1>
        </div>
    )
}

export default Layout;