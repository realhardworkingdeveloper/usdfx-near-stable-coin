import React from 'react';

import clsx from 'clsx';

import styles from './styles.module.scss';

export const Wallet = ({img, label, signIn}) => {
    return (
        <div className={clsx(styles.wallet, "col-md-4 col-sm-6")} onClick={signIn}>
            <img src={img} alt="" />
            <p>{label}</p>
        </div>
    )
};
