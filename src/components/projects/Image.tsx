import React from 'react';

interface IImageProps {
    url: string;
    opacity: number;
    parallaxPos: {x: number, y: number}
}

const Image = (props : IImageProps) => {
    return (
    <>
        <img
            className='
            fixed
            left-[55%]
            top-[40%]
            object-fill
            pointer-events-none

            h-[20vw]
            w-[15vw]            
            '
            src={props.url}
            style={{
                opacity: props.opacity,
                transform: `translate3d(${props.parallaxPos.x}px, ${props.parallaxPos.y}px, 0px)`,
                transition: `transform 0.5s cubic-bezier(0.165, 0.165, 0.165, 1)`
            }}
        />
    </>
    );
}

export default Image;