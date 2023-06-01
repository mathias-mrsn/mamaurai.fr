import {CursorContext} from '@/context/cursorState';
import styles from './navBar.module.scss';
import { NavBarItems } from '@/data/navbar';
import Image from 'next/image';
import { useContext } from 'react';
import useMousePosition from '@/hooks/useMousePosition';
import React from 'react';

export const NavBar = () => {

    const {Hide, Unhover}: any = useContext(CursorContext);
    const LogoRef = React.useRef<HTMLDivElement>(null);
    const position = useMousePosition();
    const [isHover, setIsHover] = React.useState<{
        x: number,
        y: number,
    }>({
        x: 0,
        y: 0,
    });

    const handleMouve = (e: React.MouseEvent<HTMLDivElement>) => {
        if (!LogoRef.current) return;
        setIsHover({
            x: e.clientX - LogoRef.current?.offsetLeft,
            y: e.clientY - LogoRef.current?.offsetTop,
        });

        console.log(LogoRef.current?.offsetLeft, "  ", LogoRef.current?.offsetTop);
    }

    const handleMouseLeave = () => {
        setIsHover({
            x: 0,
            y: 0,
        });
    }

    return (
    <>
        <div className={styles.container}>
            <div
                className={styles.logo}
                onMouseMove={handleMouve}
                onMouseLeave={handleMouseLeave}
                ref={LogoRef}
            >
                <Image
                    src="main_logo.svg"
                    alt="mamaurai.fr"
                    width={35}
                    height={35}
                    style={{
                        transform: `translate(${isHover.x }px, ${isHover.y}px)`,
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