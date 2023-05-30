import React from 'react';
import Title from './title/Title';

import styles from './Main.module.scss';
import ScrollIcon from './scroll-icon/ScrollIcon';
import Mask from '@/layouts/mask/mask';

interface IMainProps {

}

const Main = (props : IMainProps) => {
    return (
    <>
        <div className={styles.container}>
            <div
                className={styles.title}
                style={{
                    pointerEvents: 'none',
                }}
            >
                <Title
                    color={'#ffffff'}
                    title="hi. ready to work."
                />
            </div>
            <div className={styles.scroll}>
                <ScrollIcon/>
            </div>
            <Mask>
                <div className={styles.on_hover}>
                    <div className={styles.title_on_hover}>
                        <Title
                            color={'#000000'}
                            title="hi. ready to work."
                        />
                    </div>
                </div>
            </Mask>
        </div>
    </>
    );
};

export default Main;