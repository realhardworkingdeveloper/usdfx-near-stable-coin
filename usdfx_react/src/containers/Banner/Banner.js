import React from 'react';
import { Link } from "react-router-dom";
import clsx from 'clsx';

import { CoinCard } from '../../components';

import styles from './styles.module.scss';

import Swap from '../../assets/images/banner/omara.png';
import Near from '../../assets/images/banner/near.png';
import Polygon from '../../assets/images/banner/polygon.png';
import Ethereum from '../../assets/images/banner/eth.png';
import BSC from '../../assets/images/banner/bsc.png';
import Tron from '../../assets/images/banner/tron.png';
import Stellar from '../../assets/images/banner/stellar.png';
import Coins from '../../assets/images/banner/coins.png';

export const Banner = () => {
    const coins = [
        {
            image: Near,
            text: 'Near Protocol',
            url: "/",
        },
        {
            image: Polygon,
            text: 'Polygon',
            url: "/",
        },
        {
            image: Ethereum,
            text: 'Ethereum',
            url: "/",
        },
        {
            image: BSC,
            text: 'Binance Smartchain',
            url: "/",
        },
        {
            image: Tron,
            text: 'Tron',
            url: "/",
        },
        {
            image: Stellar,
            text: 'Stellar',
            url: "/",
        }
    ];

    return (
        <header className={styles.banner}>
            <div className="row align-items-center">
                <div className="col-lg-4 ">
                    <div className={styles.bannerContent}>
                        <h1>
                            <span>USDFX</span> Token
                        </h1>
                        <p>
                            Revolutionizing Fintech & Web3 To Facilitate B2B Payments
                        </p>
                        <div className={styles.button}>
                            <Link
                                to="/"
                                className="btn-fill"
                            >
                                Get Started Now
                            </Link>
                        </div>
                        <Link
                            to="#Down"
                            className={styles.down}
                        >
                            <i className="fa fa-long-arrow-down" />
                        </Link>
                    </div>
                </div>
                <div className={clsx(styles.bannerImg, "col-lg-8")}>
					<img
                        src={Swap}
                        width="100%"
                        alt=""
                    />
				</div>
            </div>

            <section className={styles.multichain}>
                <div className="section-title">
					<h2>USDFX in Multi Chain</h2>
				</div>

                <div className="row align-items-center">
					<div className="col-lg-7">
                        <div className="row">
                            {
                                coins.map((coin, index) => 
                                    <CoinCard
                                        {...coin}
                                        index={index}
                                    />
                                )
                            }
                        </div>
                    </div>
                    <div className="col-lg-5">
						<img
                            src={Coins}
                            width="100%"
                            alt=""
                        />
					</div>
				</div>
            </section>
        </header>
    );
};
