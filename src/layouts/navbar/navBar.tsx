import {CursorContext} from '@/context/cursorState';
import styles from './navBar.module.scss';
import { NavBarItems } from '@/data/navbar';
import Image from 'next/image';
import { useContext } from 'react';
import useMousePosition from '@/hooks/useMousePosition';
import React from 'react';

export const NavBar = () => {

    const {Hide, Unhover}: any = useContext(CursorContext);
    const position = useMousePosition();
    const LogoRef = React.useRef<HTMLDivElement>(null);
    const [isHover, setIsHover] = React.useState<{
        x: number,
        y: number,
    }>({
        x: 0,
        y: 0,
    });

    const handleHover = () => {
        setIsHover({
            x: position.FixedX - LogoRef?.current?.offsetLeft / 2,
            y: position.FixedY - LogoRef?.current?.offsetTop / 2,
        })
    }

    const handleUnhover = () => {
        setIsHover({
            x: 0,
            y: 0,
        })
    }

    return (
    <>
        <div className={styles.container}>
            <div
                className={styles.logo}
                onMouseEnter={handleHover}
                onMouseLeave={handleUnhover}
            >
                <Image
                    src="main_logo.svg"
                    alt="mamaurai.fr"
                    width={35}
                    height={35}
                    ref={LogoRef}
                    style={{
                        position: 'absolute',
                        top: `${isHover.y}px`,
                        left: `${isHover.x}px`,
                    }}
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