import {CursorContext} from '@/context/cursorState';
import styles from './navBar.module.scss';
import { NavBarItems } from '@/data/navbar';
import Image from 'next/image';
import { useContext } from 'react';
import useMousePosition from '@/hooks/useMousePosition';
import React from 'react';
import gsap from 'gsap';
import NavBarItem from './navBarItem/navBarItem';

export const NavBar = () => {

    const {HoverButton, Hide, Unhover}: any = useContext(CursorContext);
    const LogoRef = React.useRef<HTMLDivElement>(null);
    const [isHover, setIsHover] = React.useState<{
        x: number,
        y: number,
        hover: boolean
    }>({
        x: 0,
        y: 0,
        hover: false
    });

    const handleMouve = (e: React.MouseEvent<HTMLDivElement>) => {
        if (!LogoRef.current) return;
        HoverButton();
        gsap.to(isHover, {
            x: e.clientX - (LogoRef.current?.offsetLeft + LogoRef.current?.offsetWidth / 2),
            y: e.clientY - (LogoRef.current?.offsetTop + LogoRef.current?.offsetHeight),
            onUpdate: () => {
                setIsHover({x: isHover.x, y: isHover.y, hover: true});
            },
            duration: 0.4,
            ease: 'easeIn'
        })


    }

    const handleMouseLeave = () => {
        Unhover();
        gsap.to(isHover, {
            x: 0,
            y: 0,
            onUpdate: () => {
                setIsHover({x: isHover.x, y: isHover.y, hover: false});
            },
            duration: 0.4,
            ease: 'easeIn'
        })
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
                <img
                    src={isHover.hover ? '/logo-hover.svg' : '/logo.svg'}
                    alt="mamaurai.fr"
                    width={35}
                    height={35}
                    style={{
                        transform: `translate(${isHover.x }px, ${isHover.y}px)`,
                        pointerEvents: 'none',
                        fill: '#f8908f',
                    }}
                />
            </div>
            <div className={styles.navbar}>
                {NavBarItems.map((item, index) => {
                    return (
                        <NavBarItem
                            key={index}
                            title={item.name}
                            link={item.link}
                            onHover={Hide}
                            onUnhover={Unhover}
                        />
                    )
                })}
            </div>
        </div>
    </>
    )
}