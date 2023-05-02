import { useEffect } from "react"

export const Description = () => {


    return (
    <>
        <div id="about_me_section" className="flex flex-col w-4/6 my-24 h-auto">
            <div className="w-full">
                <h3
                    className="text-black dark:text-white font-inter font-thin tracking-[.25em] text-xs mb-7"
                >ABOUT ME</h3>
                <h2
                    className="text-black dark:text-white font-inter font-bold tracking-[.2em] text-3xl"
                >
                   "I'm a french developper with many skills in web developpement. I am strong focus of high quality code and communication with my clients."
                </h2>
            </div>
            
        </div>
    </>
    )
}