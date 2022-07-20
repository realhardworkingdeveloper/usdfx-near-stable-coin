import React, { useState, useEffect } from 'react';

import {BuyToken, Wallet, Contact, ConnectModal } from '../../containers';

const TokenSale = () => {
    const [connectWallet, setConnetWallet] = useState(false);

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <>
            <BuyToken showModal = {() => setConnetWallet(true)} />
            <Wallet />
            <Contact />
            <ConnectModal show={connectWallet} setShow={() => setConnetWallet(false)} />
        </>
    );
}

export default TokenSale;
