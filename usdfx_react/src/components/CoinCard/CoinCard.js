import React from 'react';
import clsx from 'clsx';

import styles from './styles.module.scss';

export const CoinCard = ({ image, text, url, index }) => {
    const colors = [
        styles.color0,
        styles.color1,
        styles.color2,
        styles.color3,
        styles.color4,
        styles.color5,
    ];

    return (
        <div 
            className="col-md-4 col-sm-6 p-2 my-1 d-flex align-items-stretch"
        >
            <div className={clsx(styles.card, colors[index])}>
                <img
                    src={image}
                    alt=""
                />
                <p>{text}</p>
                <a href={url}>
                    Verify the smartcontract
                </a>
            </div>
        </div>
    );
};
