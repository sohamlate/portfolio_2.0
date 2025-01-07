import Hero from "@/components/Hero";
import Image from "next/image";
import { navItems } from "@/data/index";
import { FloatingNav } from "@/components/ui/floating-navbar";
import About from "@/components/About";

export default function Home() {
  console.log(navItems, "bvfdjsbfsdfkb");
  return (
    <main className="relative bg-black-100 flex justify-center items-center flex-col overflow-hidden mx-auto sm:px-10 px-5">
      <div className="max-w-7xl w-full">
        <FloatingNav navItems={navItems}></FloatingNav>
        <Hero></Hero>
        <About></About>
      </div>
    </main>
  );
}
