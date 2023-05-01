import Image from "next/image";
import { Inter } from "next/font/google";
import { Cursor } from "@layouts/cursor";
import { WelcomeAnimation } from "@layouts/welcomeAnimation";
import { MainTitle } from "@components/MainTitle";
import { NavBar } from "@layouts/navBar";
import { Description } from "@components/Description";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <>
        <WelcomeAnimation />
        <Cursor />
        <div className="dark:bg-[#0e0e0e] bg-[#fefefe] absolute top-0 left-0 w-full h-full">
            <NavBar/>
            <MainTitle/>
            <div className="relative w-full dark:bg-[#1e1e1e] bg-[#eeeeee] top-[100%] flex justify-center">
                <Description/>
            </div>


        </div>

      
    </>
  );
}
