import {CursorContext} from '@/context/cursorState';
import styles from './navBar.module.scss';
import { NavBarItems } from '@/data/navbar';
import Image from 'next/image';
import { useContext } from 'react';

export const NavBar = () => {

    const {Hide, Unhover}: any = useContext(CursorContext);

    return (
    <>
        <div className={styles.container}>
            <div
                className={styles.logo}
                >
                <Image
                    src="main_logo.svg"
                    alt="mamaurai.fr"
                    width={75}
                    height={75}
                />
            </div>
            <div className={styles.navbar}>
                {NavBarItems.map((item, index) => {
                    return (
                        <li
                            key={index}
                            onMouseEnter={Hide}
                            onMouseLeave={Unhover}
                        >
                            <a href={item.link}>
                                {item.name}
                            </a>
                        </li>
                    )
                })}
            </div>
        </div>
    </>
    )
}