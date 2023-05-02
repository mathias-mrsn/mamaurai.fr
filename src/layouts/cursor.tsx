import { useEffect } from "react";

export const Cursor = () => {
        
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
        };
    });

    return (
    <>
        <div
            id="cursor-id"
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
            pointer-events-none
            "
        />
    </>
    );
}
