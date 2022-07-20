import React from 'react';

import { Banner, KYC, About, Wallet, FAQ, Report, Contact } from '../../containers';


const Home = () => {
    return (
        <>
            <Banner />
            {/* <KYC /> */}
            <About />
            <Wallet />
            {/* <FAQ /> */}
            {/* <Report /> */}
            <Contact />
        </>
    );
}

export default Home;
