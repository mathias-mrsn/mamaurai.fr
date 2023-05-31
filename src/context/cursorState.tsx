import animate from '@/functions/animate';
import { gsap } from 'gsap';
import React from 'react';
import { createContext } from "react";

export const CursorContext = createContext({});

export const CursorStateContext = (props : any) => {

    const [values, setValues] = React.useState({
        size: 40,
        full: false,
    });

    const HoverText = () => {
        gsap.to(values, {
            size: 400,
            onUpdate: () => {
                setValues({size: values.size, full: true});
            },
            duration: 0.2,
            ease: 'linear'
        }
        )
    }
    
    const Unhover = () => {
        gsap.to(values, {
            size: 40,
            onUpdate: () => {
                setValues({size: values.size, full: false});
            },
            duration: 0.2,
            ease: 'linear'
        }
        )
    };

    const Hide = () => {
        gsap.to(values, {
        size: 0,
        onUpdate: () => {
            setValues({size: values.size, full: false});
        },
        duration: 0.2,
        ease: 'linear'
        })
    };

    const HoverButton = () => {
        gsap.to(values, {
            size: 100,
            onUpdate: () => {
                setValues({size: values.size, full: false});
            },
            duration: 0.2,
            ease: 'linear'
        }
        )
    };

    return (
    <>
        <CursorContext.Provider value={{values, HoverText, Unhover, Hide, HoverButton}}>
            {props.children}
        </CursorContext.Provider>
    </>
    );
};