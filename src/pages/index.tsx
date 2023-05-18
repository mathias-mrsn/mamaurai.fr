import Image from "next/image";
import { Inter } from "next/font/google";
import { MainTitle } from "@components/MainTitle";
import { ContactButton } from "@components/ContactButton";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {

    return (
    <>
        {/* <Projects/> */}
        <div
        className="dark:bg-[#0e0e0e] bg-[#fefefe] absolute top-0 left-0 w-full h-full"
        >
            {/* <NavBar/> */}
            <MainTitle/>
            <div
                className="absolute bottom-0 left-0 w-full flex justify-center items-center p-16"
            >
                <ContactButton/>
            </div>
        </div>
      
    </>
  );
}
