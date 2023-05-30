import animate from '@/functions/animate';
import React from 'react';
import { createContext } from "react";

export const CursorContext = createContext({});

export const CursorStateContext = (props : any) => {

    const [values, setValues] = React.useState({
        size: 400,
        fill: true,
    });

    const HoverText = () => {
        animate({
            fromValue: values.size,
            toValue: 400,
            onUpdate: (newValue, callback) => {
                setValues({size: newValue, fill: true});
                callback;
            },
            onComplete: () => {},
            duration: 200,
            easeMethod: 'linear'
        })
    }
    
    const Unhover = () => {
        animate({
            fromValue: values.size,
            toValue: 40,
            onUpdate: (newValue, callback) => {
                setValues({size: newValue, fill: true});
                callback;
            },
            onComplete: () => {},
            duration: 200,
            easeMethod: 'linear'
        })
    };
    const Hide = () => {animate({
        fromValue: values.size,
        toValue: 0,
        onUpdate: (newValue, callback) => {
            setValues({size: newValue, fill: true});
            callback;
        },
        onComplete: () => {},
        duration: 800,
        easeMethod: 'linear'
    })};

    const HoverButton = () => {animate({
            fromValue: values.size,
            toValue: 100,
            onUpdate: (newValue, callback) => {
                setValues({size: newValue, fill: true});
                callback;
            },
            onComplete: () => {},
            duration: 200,
            easeMethod: 'linear'
        })};

    return (
    <>
        <CursorContext.Provider value={{values, HoverText, Unhover, Hide, HoverButton}}>
            {props.children}
        </CursorContext.Provider>
    </>
    );
};