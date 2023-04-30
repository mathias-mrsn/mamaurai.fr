import Image from "next/image";
import { Inter } from "next/font/google";
import { Cursor } from "@layouts/cursor";
import { WelcomeAnimation } from "@layouts/welcomeAnimation";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <>
      <WelcomeAnimation />
      <Cursor />
    </>
  );
}
