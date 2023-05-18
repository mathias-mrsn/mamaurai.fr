import React from 'react';
import s from './Title.module.scss'

interface ITitleProps {
    title: string;
    onMouseEnter: () => void;
    onMouseLeave: () => void;
}

const Title = (props : ITitleProps) => {
    return (
    <>
        <div
            className={s.title_container}
        >
            
            <span
                className=''
                onMouseEnter={() => props.onMouseEnter()}
                onMouseLeave={() => props.onMouseLeave()}
            >
                {props.title}
            </span>
            <span
                className={s.clone}
                onMouseEnter={() => props.onMouseEnter()}
                onMouseLeave={() => props.onMouseLeave()}
            >
                {props.title}
            </span>
        </div>
    </>
    );
};

export default Title;