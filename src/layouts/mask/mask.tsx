import {CursorContext} from '@/context/cursorState';
import React from 'react';
import styles from './mask.module.scss';
import useMousePosition from '@/hooks/useMousePosition';

interface IMaskProps {
    children: React.ReactNode;
}

const Mask = (props : IMaskProps) => {

    const {values}: any = React.useContext(CursorContext);
    const position = useMousePosition();

    return (
    <>
        <div
            className={styles.container}
            style={{
                maskPosition: `${(position.FixedX + position.OffsetX) - (values.size / 2)}px ${(position.FixedY + position.OffsetY) - (values.size / 2)}px`,
                WebkitMaskPosition: `${(position.FixedX  + position.OffsetX) - (values.size / 2)}px ${(position.FixedY + position.OffsetY) - (values.size / 2)}px`,
                maskSize: `${values.size}px`,
                WebkitMaskSize: `${values.size}px`,
                maskImage: `${values.full === false ? 'url(/cercle_hole_mask.svg)' : 'url(/cercle-mask.svg)'}`,
            }}
        >
        {props.children}
        </div>
    </>
    );
};

export default Mask;