import React from "react";
import { gsap } from "gsap";

const useMousePosition = () => {
    const [mousePosition, setMousePosition] = React.useState<{
        FixedX : number,
        FixedY : number,
        OffsetX: number,
        OffsetY: number,
    }>({
        FixedX: 0,
        FixedY: 0,
        OffsetX: 0,
        OffsetY: 0,
    });

    React.useEffect(() => {
        const updateMousePosition = (ev: MouseEvent) => {
            gsap.to(mousePosition, {
                FixedX: ev.clientX,
                FixedY: ev.clientY,
                onUpdate: () => {
                    setMousePosition({
                        FixedX: mousePosition.FixedX,
                        FixedY: mousePosition.FixedY,
                        OffsetX: window.scrollX,
                        OffsetY: window.scrollY,
                    });
                },
                duration: 0.3,
                ease: "power3.easeOut",
            });
        };

        const updateScrollPosition = () => {
            setMousePosition({...mousePosition, OffsetX: window.scrollX, OffsetY: window.scrollY});
        };

        console.debug("useMousePosition: add event listeners")
        window.addEventListener("mousemove", updateMousePosition);
        window.addEventListener("scroll", updateScrollPosition);
        
        return () => {
            console.debug("useMousePosition: remove event listeners")
            window.removeEventListener("mousemove", updateMousePosition);
            window.removeEventListener("scroll", updateScrollPosition);
        };
    }, []);
    
    return mousePosition;
};
export default useMousePosition;
