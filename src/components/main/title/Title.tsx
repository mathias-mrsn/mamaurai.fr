import React, { useContext, useEffect } from 'react';
import styles from './Title.module.scss';
import { CursorContext } from '@/context/cursorState';

interface ITitleProps {
    color: string;
    title: string;
}

const Title = (props : ITitleProps) => {
    const title: string[] = props.title.split(" ");
    const {values, HoverText, Unhover}: any = useContext(CursorContext);

    return (
    <>
        <div
            className={styles.container}
            onMouseEnter={HoverText}
            onMouseLeave={Unhover}
        >
            {title.map((row, i) => {
                return (
                <div
                    key={i}
                    className={styles.row}
                    >
                    {row.split("").map((letter, j) => {
                        return (
                            <span
                            key={j}
                            className={styles.letter}
                            style={{
                                color: props.color,
                            }}
                            >
                                {letter}
                            </span>
                    )})}
                </div>
            )})}
        </div>
    </>
    );
};

export default Title;