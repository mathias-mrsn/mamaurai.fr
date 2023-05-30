import React from 'react';

import styles from './ScrollIcon.module.scss';

interface IScrollIconProps {

}

const ScrollIcon = (props : IScrollIconProps) => {
    return (
    <>
        <div className={styles.container}>
            <span
                className={styles.scroll_text}
                style={{
                    
                }}
            >SCROLL DOWN</span>
        </div>
    </>
    );
};

export default ScrollIcon;