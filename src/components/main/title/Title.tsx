import React from 'react';
import styles from './Title.module.scss';

interface ITitleProps {

}

const Title = (props : ITitleProps) => {
    const title: string[][] = [
        ['H', 'I', '.'],
        ['R','E','A','D','Y'],
        ['T','O'],
        ['W','O', 'R', 'K', "."],
    ];

    return (
    <>
        <div className={styles.container}>
            {title.map((row, i) => {
                return (
                <div key={i} className={styles.row}>
                    {row.map((letter, j) => {
                        return (
                            <span key={j} className={styles.letter}>
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