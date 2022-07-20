import React, { useState } from 'react';

import {BuyToken, Wallet, Contact, ConnectModal } from '../../containers';


const TokenSale = () => {
    const [connectWallet, setConnetWallet] = useState(false);

    console.log(connectWallet);

    return (
        <>
            <BuyToken connect = {() => setConnetWallet(true)} />
            <Wallet />
            <Contact />
            <ConnectModal show={connectWallet} setShow={() => setConnetWallet(false)} />
        </>
    );
}

export default TokenSale;
