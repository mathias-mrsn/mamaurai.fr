import {CursorContext} from '@/context/cursorState';
import React from 'react';
import styles from './mask.module.scss';
import useMousePosition from '@/hooks/useMousePosition';

interface IMaskProps {
    children: React.ReactNode;
}

const Mask = (props : IMaskProps) => {

    const {values, setValues}: any = React.useContext(CursorContext);
    const position = useMousePosition();

    return (
    <>
        <div
            className={styles.container}
            style={{
                maskPosition: `${position.x - (values.size / 2)}px ${position.y - (values.size / 2)}px`,
                WebkitMaskPosition: `${position.x - (values.size / 2)}px ${position.y - (values.size / 2)}px`,
                maskSize: `${values.size}px`,
                WebkitMaskSize: `${values.size}px`,
            }}
        >
        {props.children}
        </div>
    </>
    );
};

export default Mask;