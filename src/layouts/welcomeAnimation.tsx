const jobsArray: string[] = [
    "Full-Stack Developper",
    "Front-End Developper",
    "Back-End Developper",
];

/**
 * TODO: The right side isn't perfectly centered find a way to fix it !
 */

export const WelcomeAnimation = () => {
    return (
    <>
        <div className="absolute top-0 left-0 w-full h-full flex flex-row z-30 animate-[hide\_at\_end_5.5s_linear_forwards]">
            <div className="w-1/2 h-full flex">
                <div className="relative h-full lg:w-1/2 w-0 bg-white dark:bg-black border-r border-gray-500 animate-[moving\_up_5.7s_ease-in-out_forwards] max-lg:hidden"/>
                <div className="relative h-full lg:w-1/2 w-full bg-white dark:bg-black flex justify-end items-center text-right animate-[moving\_up_5.4s_ease-in-out_forwards] border-r border-gray-500">
                    <div className="h-12 relative overflow-hidden flex justify-center items-center pr-4">
                        <h1 className="relative h-auto font-inter text-black text-xl max-sm:text-base animate-welcome_left_side_rotation_text" >Mathias Mauraisin</h1>
                    </div>
                </div>
                </div>
            <div className="w-1/2 h-full flex">
                <div className="relative lg:w-1/2 w-full h-full bg-white dark:bg-black flex justify-start items-center text-left lg:border-r  border-gray-500 animate-[moving\_down_5.5s_ease-in-out_forwards]">
                    <div className="h-12 relative overflow-hidden flex justify-center items-center pl-4">
                        <div className="h-auto relative flex flex-col gap-4 animate-welcome_right_side_rotation_text justify-center py-2">
                            {jobsArray.map((job, index) => {
                                return (
                                    <h1 className="font-inter text-gray-400 text-xl max-sm:text-base relative" key={index}>
                                        {job}
                                    </h1>
                                );
                            })}
                        </div>
                    </div>
                </div>
                <div className="relative w-0 lg:w-1/2 bg-white dark:bg-black animate-[moving\_down_5.6s_ease-in-out_forwards] max-lg:hidden"/>
            </div>
        </div>
    </>
    );
};