import React, { useReducer, useRef } from 'react';
import Title from './Title/Title';
import Image from './Image';
import Description from './Description/Description';
import animate from '@/functions/animate';

interface IItemProps {
    projectName: string;
    itemIndex: number;
}

interface IReducerState {
    opacity: number,
    parallaxPos : {
        x: number,
        y: number
    }
    top: number,
}

const defaultState : IReducerState = {
    opacity: 0,
    parallaxPos : {x: 0, y: 0},
    top: 0,
}

function reducer (state: IReducerState, action: any) {
    switch(action.type) {
        case "OPACITY" : {
            return {
                ...state,
                opacity: action.payload
            }
        }
        case "PARALLAX" : {
            return {
                ...state,
                parallaxPos: action.payload
            }
        }
        case "TOP" : {
            return {
                ...state,
                top: action.payload
            }
        }
        default : {
            throw new Error();
        }
    }
}

const Item = (props : IItemProps) => {
    const [state, dispatch] = useReducer(reducer, defaultState);
    const containerRef = useRef<any>(null);

    const parallax = (event: MouseEvent) => {
        const speed = -5;
        const x = (((window.innerWidth * 0.6) - event.pageX) / 10) * -1;
        const y = (((window.innerHeight * 0.5) - event.pageY) / 10) * -1;

        console.log(x, y);

        dispatch({type: 'PARALLAX', payload: {x, y}})
    }

    
    const handleOpacity = (initial: number, final: number, duration: number) => {
        animate({
            fromValue: initial,
            toValue: final,
            onUpdate: (newValue, callback) => {
                dispatch({type: 'OPACITY', payload: newValue});
                callback;
            },
            onComplete: () => {},
            duration: duration,
            easeMethod: 'linear'
        })
    }

    const mouseOnTitle = () => {
        handleOpacity(0, 1, 600)
        dispatch({type: 'PARALLAX', payload: {}})

        if (containerRef.current)
            containerRef.current.addEventListener('mousemove', parallax);
    }

    const mouseOffTitle = () => {
        handleOpacity(1, 0, 600)
        dispatch({type: 'PARALLAX', payload: defaultState.parallaxPos})

        if (containerRef.current)
            containerRef.current.removeEventListener('mousemove', parallax);
    }

    return (
    <>
        <li
            ref={containerRef}
        >
            <Title
                title={props.projectName}
                onMouseEnter={mouseOnTitle}
                onMouseLeave={mouseOffTitle}
            />
            {/* {props.project.pictures.map((image, index) => {
                return (
                <Image
                    url={image}
                    opacity={state.opacity}
                    parallaxPos={state.parallaxPos}
                    
                />
                )
            })} */}
            <Description
                name={props.projectName}
                style={{opacity: state.opacity, top: state.parallaxPos.y}}
                active={!!state.opacity}
            />
        </li>
    </>
    );
};

export default Item;