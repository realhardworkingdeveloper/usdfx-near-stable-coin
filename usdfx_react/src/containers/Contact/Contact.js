import React from 'react';

import styles from './styles.module.scss';

import Wave from '../../assets/images/contact/wave.png';
import Main from '../../assets/images/contact/main.png';
import Man from '../../assets/images/contact/man.png';

export const Contact = () => {
    return (
        <section className={styles.contact}>
            <img src={Wave} alt="" />

            <div class="container">
                <div class={styles.main}>
                    <img class="get-bg-img" src={Main} width="100%" alt="" />

                    <div class={styles.wrap}>
                        <div class="row  align-items-center">

                            <div class="col-lg-5 col-sm-6">
                                <div class={styles.text}>
                                    <h2>Get in Touch with us</h2>	
                                    <p>Get in touch with us for personalised proof via Telegram. </p>
                                </div>
                            </div>

                            <div class="col-sm-6 text-center get-in-touch-img">
                                <img src={Man} width="80%" alt="" />
                            </div>

                        </div>
                    </div>
                    
                </div>
            </div>
        </section>
    )
};
