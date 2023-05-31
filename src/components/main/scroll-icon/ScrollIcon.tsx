import React, { useEffect } from 'react';
import { gsap } from 'gsap';

import styles from './ScrollIcon.module.scss';

interface IScrollIconProps {

}

const ScrollIcon = (props : IScrollIconProps) => {

    const containerRef = React.useRef<HTMLDivElement>(null);

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 0) {
                console.log('scroll')
                gsap.to(containerRef.current, {
                    top: '-100%',
                    duration: 0.4,
                    ease: 'linear'
                })
            } else {
                gsap.to(containerRef.current, {
                    top: '0%',
                    duration: 0.4,
                    ease: 'linear'
                })
        }};

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        }

    }, [])

    return (
    <>
        <div ref={containerRef} className={styles.container}>
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