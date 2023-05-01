const NavBarItems = [
    {
        name: "About",
        link: "#about"
    },
    {
        name: "Projects",
        link: "#projects"
    },
    {
        name: "Contact",
        link: "#contact"
    }
]

export const NavBar = () => {
    return (
    <>
        <div className="absolute m-10 top-0 right-0 z-10">
            <ul className="relative flex flex-col items-end gap-1">
                { NavBarItems.map((item, index) => {
                    return (
                    <>
                        <li className="relative h-6 overflow-hidden">
                            <a className="">
                                <span className="relative grid w-auto hover:bottom-6 ease-in-out duration-100 h-full">
                                    <span className="font-roboto">{item.name}</span>
                                    <span className="font-roboto text-yellow-400">{item.name}</span>
                                </span>
                            </a>
                        </li>
                    </>
                    )
                })}
            </ul>
        </div>
    </>
    )
}