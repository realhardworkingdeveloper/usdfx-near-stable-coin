import React, { useEffect } from 'react';

import { Banner, KYC, About, Wallet, FAQ, Report, Contact } from '../../containers';


const Home = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

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
