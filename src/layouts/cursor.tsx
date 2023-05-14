import { ReactChildren, useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Variants } from "framer-motion";
import { CursorContext } from "@/context";

export const Cursor = ({children} : any) => {
        
    const [mousePosition, setMousePosition] = useState<{x: number, y: number}>({
        x: 0,
        y: 0
    });
    const [cursorVariant, setCursorVariant] = useState<string>("default");
    
    
    useEffect(() => {
        const cursor = document.getElementById('cursor-id') as HTMLDivElement;
        const handleMouseMove = (event: MouseEvent) => {
            const { clientX, clientY } = event;
            cursor.style.left = `${clientX}px`;
            cursor.style.top = `${clientY}px`;
        };

        window.addEventListener("mousemove", handleMouseMove);

        return () => {
            window.removeEventListener("mousemove", handleMouseMove);
        }
    }, []);

    const variants : Variants = {
    default: {},
    button: {
        height: 50,
        width: 50,
        backgroundColor: "#FACC15",
        mixBlendMode: "difference",

    },
    text: {
        height: 150,
        width: 150,
        // backgroundColor: "#FACC15",        
        // mixBlendMode: "difference",
    }
    }

    const HoverText = () => {
        setCursorVariant("text")
    };

    const HoverButton = () => {
        setCursorVariant("button")
    }

    const Unhover = () => setCursorVariant("default");

    return (
    <>
        <CursorContext.Provider value={{HoverText, HoverButton, Unhover}}>
                <motion.div
                    className="
                    fixed
                    w-12
                    h-12
                    rounded-full
                    border-2
                    border-yellow-400
                    transform
                    -translate-x-1/2
                    -translate-y-1/2
                    ease-out
                    duration-300
                    z-20
                    max-md:hidden
                    pointer-events-none"
                    variants={variants}
                    animate={cursorVariant}
                    id="cursor-id"
                />
            {children}
        </CursorContext.Provider>
    </>
    );
}
