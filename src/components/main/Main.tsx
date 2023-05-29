import React from 'react';
import Title from './title/Title';

import styles from './Main.module.scss';

interface IMainProps {

}

const Main = (props : IMainProps) => {
    return (
    <>
        <div className={styles.container}>
            <div className={styles.title}>
                <Title/>
            </div>
        </div>
    </>
    );
};

export default Main;