import React, { useState } from 'react';

import { Tab, Nav } from 'react-bootstrap';

import styles from './styles.module.scss';

import { StableCoin } from './StableCoin';
import { Team } from './Team';
import { Tokenomics } from './Tokenomics';

import { TabNav } from '../../components';

export const About = () => {
    const [selected, setSelected] = useState('coin');

    const tabs = [
        {
            event: 'coin', text: 'Stable Coin'
        },
        {
            event: 'team', text: 'Team',
        },
        {
            event: 'tokenomics', text: 'Tokenomics',
        },
        {
            event: 'roadmap', text: 'Roadmap',
        }
    ];

    return (
        <section className={styles.about}>
            <div className="section-title">
                <div className="d-flex flex-column flex-sm-row flex-wrap align-items-center justify-content-center justify-content-sm-between">
                    <h2>About USDFX</h2>
                    <div className={styles.buyToken}>
                        <a href="" className="btn-fill-green">Buy Token</a>
                    </div>
                </div>
            </div>
            <Tab.Container
                defaultActiveKey="coin"
            >
                <Nav className={styles.tabs}>
                    {
                        tabs.map((tab, index) => 
                            <TabNav
                                key={index}
                                {...tab}
                                active={selected === tab.event}
                                onClick={() => setSelected(tab.event)}
                            />
                        )
                    }
                </Nav>
                <div className="tab-content">
                    <Tab.Content>
                        <Tab.Pane eventKey="coin">
                            <StableCoin />
                        </Tab.Pane>
                        <Tab.Pane eventKey="team">
                            <Team />
                        </Tab.Pane>
                        <Tab.Pane eventKey="tokenomics">
                            <Tokenomics />
                        </Tab.Pane>
                        <Tab.Pane eventKey="roadmap">
                            <Team />
                        </Tab.Pane>
                    </Tab.Content>
                </div>
            </Tab.Container>
        </section>
    );
};
