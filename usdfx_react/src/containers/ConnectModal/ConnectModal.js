import React, { useState, useEffect } from 'react';
import Modal from 'react-bootstrap/Modal';

import { Wallet } from '../../components';

import './styles.scss';

import Near from '../../assets/images/connect/near.png';
import MetaMask from '../../assets/images/connect/metamask.png';
import Walletconnect from '../../assets/images/connect/walletconnect.png';
import TrustWallet from '../../assets/images/connect/trustwallet.png';
import Tronlink from '../../assets/images/connect/tron.png';
import Senders from '../../assets/images/connect/senders.png';
import Paypal from '../../assets/images/connect/paypal.png';
import Others from '../../assets/images/connect/others.png';

const wallets = [
    {
        img: MetaMask, label: "Metamask", type: 0
    },
    {
        img: Walletconnect, label: "Walletconnect", type: 1
    },
    {
        img: TrustWallet, label: "Trust Wallet", type: 2
    },
    {
        img: Tronlink, label: "Tron link", type: 3
    },
    {
        img: Near, label: "Near wallet", type: 4
    },
    {
        img: Senders, label: "Senders wallet", type: 5
    }
];

const cards = [
    {
        img: Paypal, label: "Credit Card", type: 6
    },
    {
        img: Others, label: "Add Bank", type: 7
    }
];

export const ConnectModal = ({ show, setShow }) => {

    return (
        <Modal
            show={show}
            onHide={setShow}
            size="lg"
            centered
            className="wallet-connect-modal"
        >
            <div className="wallet-connect-wrapper">
                <h1>Select your Wallet</h1>
                <div className="row">
                    {
                        wallets.map((wallet, index) => 
                            <Wallet {...wallet} key={index} />
                        )
                    }
                </div>
                <h1 className="card-payment">Other Payment Options</h1>
                <div className="row justify-content-center">
                    {
                        cards.map((card, index) => 
                            <Wallet {...card} key={index} />
                        )
                    }
                </div>
            </div>
        </Modal>
    );
};
