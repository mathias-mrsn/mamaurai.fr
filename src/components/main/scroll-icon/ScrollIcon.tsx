import React, { useEffect } from 'react';
import { gsap } from 'gsap';

import styles from './ScrollIcon.module.scss';

interface IScrollIconProps {

}

const ScrollIcon = (props : IScrollIconProps) => {

    const textRef = React.useRef<HTMLDivElement>(null);

    useEffect(() => {
        const handleScroll = () => {
            console.log(window.scrollY)
            if (window.scrollY > 400) {
                console.log('scroll')
                gsap.to(textRef.current, {
                    top: '-100%',
                    duration: 0.4,
                    ease: 'linear'
                })
            } else {
                gsap.to(textRef.current, {
                    top: '0%',
                    duration: 0.4,
                    ease: 'linear'
                })
        }};

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        }
    }, []);

    return (
    <>
        <div
            className={styles.container}
            >
            <span
                className={styles.scroll_text}
                ref={textRef}
                style={{
                    
                }}
            >SCROLL DOWN</span>
        </div>
    </>
    );
};

export default ScrollIcon;