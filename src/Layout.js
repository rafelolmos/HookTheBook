import React from 'react';
import NavBar from './components/NavBar';
import Header from './components/Header';

import './Layout.scss'


const Layout = ({ children }) => {
    return (
        <>
            <header>
                <Header />
                <NavBar />
            </header>
            <main>
                {children}
            </main>
            <footer>
            </footer>
        </>
    )
}

export default Layout;