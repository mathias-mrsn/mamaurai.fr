const NavBarItems = [
    {
        name: "About",
        link: "#about_me_section"
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
                        <li className="relative h-20 overflow-hidden">
                            <a href={item.link} className="">
                                <span className="relative grid w-auto hover:bottom-6 bottom-0 transition ease-in h-full">
                                    <span className="font-playfair  font-bold  tracking-wider">{item.name}</span>
                                    <span className="font-playfair text-yellow-400 font-bold tracking-wider">{item.name}</span>
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