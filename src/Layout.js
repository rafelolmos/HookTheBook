import React from 'react';
import NavBar from './components/NavBar';
import Header from './components/Header';

import './Layout.scss'


const Layout = ({ children }) => {
    return (
        <>
            <header>
                Header
                <Header />
                {/* <NavBar /> */}
            </header>
            <main>
                {children}
            </main>
            <footer>
                <h1 className="footer">Footer</h1>
            </footer>
        </>
    )
}

export default Layout;