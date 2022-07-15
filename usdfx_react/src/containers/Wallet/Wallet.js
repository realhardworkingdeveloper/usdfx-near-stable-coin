import React from 'react';

import styles from './styles.module.scss';

import iPhone from '../../assets/images/wallet/iPhone.png';

export const Wallet = () => {
    return (
        <section className={styles.wallet}>
            <div class="container ">
                <div class={styles.content}>
                    <img class="phoneimg" src={iPhone} alt="" />
                    <div class={styles.text}>
                        <h3>USDFX Multichain Wallet</h3>
                        <p>USDFX will be launching a wallet application that allows you to manage your finance , switch to multiple currency, pay your bills using any crypto or stablecoin and create your own virtual account that allows you to spend virtual currencies.</p>
                        <div class="section-title-btnn">
                            <a href="" class="btn-fill-green">Join Our Wallet</a>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};
