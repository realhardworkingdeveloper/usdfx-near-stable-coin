import React from 'react';

import { Link } from 'react-router-dom';

import clsx from 'clsx';

import styles from './styles.module.scss';

import { Multichain } from '../Multichain/Multichain';

import MetaMask from '../../assets/images/tokensale/metamask.png';
import Card from '../../assets/images/tokensale/card.png';
import USDT from '../../assets/images/tokensale/usdt.png';
import USDFX from '../../assets/images/tokensale/usdfx.png';

export const BuyToken = ({ connect }) => {
    return (
        <section className={styles.buyToken}>
            <div className="container">
                <div className='row'>
                    <div className='col-lg-6'>
                        <div className={styles.text}>
                            <h1 data-aos="fade-up-right">Saving and Start Earning!</h1>
                            <p data-aos="fade-down-right">
                                USDFX is a hybrid Multichain stable coin that lets you generate profit per month from the profit pool shared by the companies.
                            </p>
                            <div className='d-flex align-items-end' data-aos="fade-up-right">
                                <h3>
                                    Participate on this round and Earn up 
                                </h3>
                                <span>
                                    35% APR
                                </span>
                            </div>
                            <div className='d-flex'>
                                <div className={styles.buyButton} data-aos="fade-down-right">
                                    <Link
                                        to="#"
                                        className="btn-fill"
                                        className="btn-fill-green"
                                        onClick={connect}
                                    >
                                        Connect wallet
                                    </Link>
                                </div>
                                <div className={styles.createButton} data-aos="fade-up-left">
                                    <Link
                                        to="/"
                                        className="btn-fill"
                                    >
                                        Create Account
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div data-aos="fade-down-left" className='col-lg-6'>
                        <div className={styles.phone}>
                            <div className='row'>
                                <div className='col-6'>
                                    <div className={styles.title}>
                                        Today’s Exchange Rate: 
                                    </div>
                                    <div className={styles.rate}>
                                        1 USDFX : $ 0.85 USD
                                    </div>
                                </div>
                                <div className='col-6'>
                                    <div className={clsx(styles.connectButton, "btn-fill")} onClick={connect}>
                                        <span>Connect wallet</span>
                                        <img className={styles.wallet} src={MetaMask} alt="" />
                                    </div>
                                    <div className={clsx(styles.connectButton, "btn-fill-green")} onClick={connect}>
                                            <span>Card payment</span>
                                            <img className={styles.card} src={Card} alt="" />
                                    </div>
                                </div>

                                <div className='col-12'>
                                    <div className={styles.title}>
                                        Select Which currency you wish to convert: 
                                    </div>
                                </div>
                                <div className='col-5'>
                                    <p>
                                        Enter the Amount:
                                    </p>
                                </div>
                                <div className='col-7 d-flex justify-content-around'>
                                    <p>
                                        Available Balance:
                                    </p>
                                    <h4>
                                        1000 USDT
                                    </h4>
                                </div>
                                <div className='col-12'>
                                    <div className={styles.inputGroup}>
                                        <div className='row'>
                                            <div className={clsx(styles.left, 'col-7')}>
                                                <p>
                                                    Convert:
                                                </p>
                                                <div className={clsx(styles.input, 'd-flex')}>
                                                    <label for="send">$</label>
                                                    <input id="send" type='number' placeholder='1,000' />
                                                </div>
                                            </div>
                                            <div className={clsx(styles.right, 'col-5 d-flex align-items-center justify-content-around')}>
                                                <img className={styles.coin} src={USDT} alt="" />
                                                <h2>USDT</h2>
                                                <i className="fa fa-thin fa-angle-down"></i>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className='offset-5 col-7 d-flex justify-content-around'>
                                    <p>
                                        Available Balance:
                                    </p>
                                    <h4>
                                        1000 USDT
                                    </h4>
                                </div>
                                <div className='col-12'>
                                    <div className={styles.inputGroup}>
                                        <div className='row'>
                                            <div className={clsx(styles.left, 'col-7')}>
                                                <p>
                                                    Receive:
                                                </p>
                                                <div className={clsx(styles.input, 'd-flex')}>
                                                    <label for="send">$</label>
                                                    <input id="send" type='number' placeholder='1,000' disabled={true} />
                                                </div>
                                            </div>
                                            <div className={clsx(styles.right, 'col-5 d-flex align-items-center justify-content-around')}>
                                                <img className={styles.coin} src={USDFX} alt="" />
                                                <h2>USDFX</h2>
                                                <i className="fa fa-thin fa-angle-down"></i>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className='col-12'>
                                    <p>
                                        Your Account Summary
                                    </p>
                                </div>
                                <div className='col-12'>
                                    <p className={styles.info}>
                                        Total Subscription Term:
                                    </p>
                                </div>
                                <div className='col-12'>
                                    <p className={styles.info}>
                                        Exchange Rate:
                                    </p>
                                </div>
                                <div className='col-12'>
                                    <p className={styles.info}>
                                        Total Locked Amount: 
                                    </p>
                                </div>
                                <div className='col-12'>
                                    <p className={styles.info}>
                                        Token Distribution Date : 
                                    </p>
                                </div>
                                <div className='col-12'>
                                    <p className={styles.info}>
                                        Next Distribution Date :
                                    </p>
                                </div>
                                <div className='col-12'>
                                    <p className={styles.info}>
                                        Total Redeemable Amount :
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <Multichain />
            </div>
        </section>
    )
};
