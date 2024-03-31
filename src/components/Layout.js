import React from 'react';
import Menu from '../layout/Menu';
import Footer from '../layout/Footer';

const Layout = ({children}) => {
    return (
        <div>
            <Menu />
                {children}
            <Footer/>
        </div>

    )
}
export default Layout;