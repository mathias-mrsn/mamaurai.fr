import React from 'react';

import styles from './navBarItem.module.scss';

interface INavBarItemProps {
    key: number,
    title: string,
    link: string
    onHover: () => void,
    onUnhover: () => void
}

const NavBarItem = (props : INavBarItemProps) => {
    
    return (
    <>
        <li
            key={props.key}
            className={styles.navBarItem}
            onMouseEnter={props.onHover}
            onMouseLeave={props.onUnhover}
        >
            <a
                className={styles.navBarItemLink}
            >
                <span
                    className={styles.text}
                    data-title={props.title}
                >{props.title}</span>
            </a>

        </li>
    </>
    );
};

export default NavBarItem;