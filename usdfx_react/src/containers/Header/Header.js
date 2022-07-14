import React from 'react';
import { Link } from "react-router-dom";

import { NavDropdown  } from 'react-bootstrap';
import Select from 'react-select';
import clsx from 'clsx';

import styles from './styles.module.scss';
import Logo from '../../assets/images/global/logo.png';

export const Header = () => {
    const options = [
        { value: 'usd', label: 'USD' },
        { value: 'euro', label: 'EUR' },
        { value: 'gbp', label: 'GBP' },
        { value: 'jpy', label: 'JPY' },
    ];

    return (
        <div className={styles.header}>
            <div className='container'>
                <nav className="navbar navbar-expand-lg">
                    <Link
                        to='/'
                        className="navbar-brand d-flex align-items-center"
                    >
                        <img
                            src={Logo}
                            width={120}
                            alt=""
                        />
                    </Link>

                    <div className={clsx(styles.nav, 'd-none  w-100 d-lg-flex justify-content-between align-items-center')}>
                        <ul className="navbar-nav">
						 	<li>
                                <Link to='/'>Home</Link>
                            </li>
                            <NavDropdown
                                className={styles.dropdown}
                                title={
                                    <span>
                                        Partnership <i className='fa fa-angle-down' />
                                    </span>
                                }
                            >
                                <NavDropdown.Item>
                                    <Link to='/'>CoinMarketCap</Link>
                                </NavDropdown.Item>
                                <NavDropdown.Item>
                                    <Link to='/'>Coinbase</Link>
                                </NavDropdown.Item>
                                <NavDropdown.Item>
                                    <Link to='/'>CoinGecko</Link>
                                </NavDropdown.Item>
                            </NavDropdown>
						 	<li>
                                <Link to='/'>Audited Reports</Link>
                            </li>
						 	<li>
                                <Link to='/'>Discover</Link>
                            </li>
						 </ul>

                         <div className={styles.rightNav}>

                            <Select
                                className={styles.select}
                                options={options} 
                                defaultValue={{ value: 'usd', label: 'USD' }}
                            />

                            <Link
                                to='/'
                                className="btn-fill"
                            >
                                Sign Up
                            </Link>

                            <Link
                                to='/'
                                className="btn-unfill"
                            >
                                Sign in
                            </Link>
						 </div>
                    </div>
                </nav>
            </div>
        </div>
    );
};
