import React from 'react';
import { Header, Footer } from '../index';

export const Layout = ({ children }) => {
    return (
        <div>
            <Header />
            { children }
            <Footer />
        </div>
    )
};
