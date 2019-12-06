import React from 'react';

const Layout = ({ children }) => {
    return (
        <div className="layout">
            <h1 className="navbar">Navbar</h1>
            {children}
            <h1 className="footer">Footer</h1>
        </div>
    )
}

  export default Layout;