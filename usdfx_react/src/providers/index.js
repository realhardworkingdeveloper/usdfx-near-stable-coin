import React, { useState, useEffect } from 'react';

import { signInNear, signOutNear, isSignedInNear, swapInNear } from './nearProvider'

export const WalletContext = React.createContext({
    usdtBalance: 0,
    usdfxBalance: 0,
    lockedAmount: 0,
    availableAmount: 0,
    distributionAmount: 0,
    distributionTimestamp: 0,
    connected: false,
    signIn: () => {},
    signOut: () => {},
    swap: () => {}
})

export const WalletProvider = ({ children }) => {
    const [connected, setConnected] = useState(false);
    const [usdtBalance, setUsdtBalance] = useState(0);
    const [usdfxBalance, setUsdfxBalance] = useState(0);
    const [lockedAmount, setLockedAmount] = useState(0);
    const [availableAmount, setAvailableAmount] = useState(0);
    const [distributionAmount, setDistributionAmount] = useState(0);
    const [distributionTimestamp, setDistributionTimestamp] = useState(0);

    console.log(usdtBalance);

    useEffect(() => {
        const type = +localStorage.getItem('usdfx_wallet');

        (async () => {
            switch(type) {
                case 4:
                    const { isSignedIn, usdfx, usdt, locked, available, distribution, timestamp } = await isSignedInNear();
                    
                    if(!isSignedIn) {
                        setConnected(false);
                    } else {
                        setConnected(true);
                        setUsdtBalance(+usdt);
                        setUsdfxBalance(+usdfx);
                        setLockedAmount(+locked);
                        setAvailableAmount(+available);
                        setDistributionAmount(+distribution);
                        setDistributionTimestamp(timestamp);
                    }

                    break;
                default:
                    setConnected(false);
            }
        })();
    }, [connected]);

    const signIn = (type) => {
        if(connected) return;

        (async () => {
            switch(type) {
                case 4:
                    await signInNear();
                    localStorage.setItem('usdfx_wallet', type);
                    setConnected(true);
                    break;
                default:
                    console.log("not implemented yet");
            }
        })();
    };

    const signOut = () => {
        if(!connected) return;

        const type = +localStorage.getItem('usdfx_wallet');

        (async () => {
            switch(type) {
                case 4:
                    await signOutNear();
                    localStorage.removeItem('usdfx_wallet');
                    setConnected(false);
                    break;
                default:
                    console.log("not implemented yet");
            }
        })();
    };

    const swap = (swapAmount) => {
        if(!connected) return;

        const type = +localStorage.getItem('usdfx_wallet');

        (async () => {
            switch(type) {
                case 4:
                    await swapInNear(swapAmount);
                    break;
                default:
                    console.log("not implemented yet");
            }
        })();
    }

    return (
        <WalletContext.Provider
          value={{ connected, signIn, signOut, swap, usdtBalance, usdfxBalance, lockedAmount, availableAmount, distributionAmount, distributionTimestamp }}
        >
          {children}
        </WalletContext.Provider>
    );
};
