import { useEffect, useState } from "react";

const titlesClassName =
  "dark:text-white text-black text-9xl max-sm:text-7xl font-playfair tracking-title";

const titlesArray: string[] = [
    "reality",
    "code",
    "design",
    "project",
];

export const MainTitle = () => {

    useEffect(() => {
        const text = document.getElementById('last-word-main-title') as HTMLHeadElement;
        let index : number = 0;
        let way : boolean = true
        let string : string = "reality"
        let lock: number = 0;
        
        const interval = setInterval(() => {
            if (lock !== 0) {
                lock--;
                return;
            }
            if (way && index !== string.length) {
                text.textContent = string.slice(0, index++);
            } else if (way && index === string.length) {
                way = false;
                text.textContent = string;
                lock = 10;       
            } else if (!way && index !== 0) {
                text.textContent = string.slice(0, index--);
            } else if (!way && index === 0) {
                way = true;
                string = titlesArray[Math.floor(Math.random() * titlesArray.length)];
            }
            
        }, 200);
        return () => clearInterval(interval);
    }, []);

    return (
        <>
        <div className="absolute top-0 left-0 w-full h-full flex justify-center items-center">
            <div className="w-5/6 flex flex-col items-center cursor-default">
            <h3 className="text-white font-inter font-thin tracking-[.25em] text-xs mb-7 ">
                MATHIAS MAURAISIN DEVELOPPER
            </h3>
            <h1 className={titlesClassName}>Turn</h1>
            <div className="flex flex-row">
                <h1 className={titlesClassName}>your&nbsp;</h1>
                <h1 className={titlesClassName + " text-yellow-400 dark:text-yellow-400"}>idea</h1>
            </div>
            <h1 className={titlesClassName}>into</h1>
            <div className="relative flex justify-start w-auto h-auto overflow-hidden">
                <h1
                    className="relative text-yellow-400 text-9xl max-sm:text-7xl font-roboto font-bold tracking-title animate-type"
                    id={"last-word-main-title"}
                    >
                </h1>
                <div className="relative w-3 h-32 max-sm:text-7xl bg-white animate-cursor"/>
            </div>
            </div>
        </div>
        </>
    );
};