import React from 'react';

import clsx from 'clsx';

import styles from './styles.module.scss';

export const Wallet = ({img, label, type}) => {
    return (
        <div className={clsx(styles.wallet, "col-md-4 col-sm-6")}>
            <img src={img} alt="" />
            <p>{label}</p>
        </div>
    )
};
