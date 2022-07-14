import React from 'react';
import { Link } from "react-router-dom";
import clsx from 'clsx';

import styles from './styles.module.scss';

import Location from '../../assets/images/global/map-marker-alt.png';
import Phone from '../../assets/images/global/phone.png';
import Clock from '../../assets/images/global/clock.png';
import Email from '../../assets/images/global/envelope.png';

export const Footer = () => {
    return (
        <div className={clsx(styles.footer, "container")}>
            <p className="text-center">
                © USDFX Token 2022.
            </p>
            <div className="row">
                <div className="col-lg-3 col-sm-6 my-3">
                    <Link to="/">
                        <img
                            src={Location}
                            alt=""
                        />
                        <span>325 Manchester Road</span>
                    </Link>
                </div>


                <div className="col-lg-3 col-sm-6  my-3">
                    <Link to="/">
                        <img
                            src={Phone}
                            alt=""
                        />
                        <span>+1-202-555-0109</span>
                    </Link>
                </div>

                <div className="col-lg-3 col-sm-6  my-3">
                    <Link to="/">
                        <img
                            src={Clock}
                            alt=""
                        />
                        <span>9 - 12, Mon - Tue</span>
                    </Link>
                </div>

                <div className="col-lg-3 col-sm-6  my-3">
                    <a href="">
                        <img
                            src={Email}
                            alt=""
                        />
                        <span>Hellokraft8@gmail.com</span>
                    </a>
                </div>
            </div>
        </div>
    );
};
