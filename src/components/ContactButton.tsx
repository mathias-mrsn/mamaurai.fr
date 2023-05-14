import { CursorContext } from "@/context";
import { useContext } from "react";
import { BsArrowRight } from "react-icons/bs";

export const ContactButton = () => {

    const {HoverButton, Unhover} : any = useContext(CursorContext);

    return (
    <>
        <a
            href="mailto:mathias.mauraisin.pro@gmail.com?Subject=Contact"
            className="w-auto h-auto bg-gray-900 dark:bg-gray-50 relative text-center px-8 py-6 rounded-full flex justify-center items-center cursor-pointer gap-2 hover:bg-yellow-400 hover:text-black"
            onMouseEnter={HoverButton}
            onMouseLeave={Unhover}
            target="_blank"
        >
            <h1
                className="text-white dark:text-black font-neue font-semibold tracking-[.1em] text-sm"
            >CONTACT ME
            </h1>
            <BsArrowRight
                className="text-white dark:text-black text-xl w-5"
            />
        </a>
    </>
    )
}