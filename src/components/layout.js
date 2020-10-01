import React from 'react';
import Header from '../components/Header';
import Footer from '../components/footer';

const Layout = (props) => {
    return (
        <React.Fragment>
            <Header />

            {props.children}

            <Footer />
        </React.Fragment>
    )
}

export default Layout;