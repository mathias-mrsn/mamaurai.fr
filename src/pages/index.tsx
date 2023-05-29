import { Inter } from "next/font/google";
import Main from "@/components/main/Main";
import { NavBar } from "@/layouts/navbar/navBar";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {

    return (
    <>
        <div>
            <NavBar/>
            <Main/>
        </div>
      
    </>
  );
}
