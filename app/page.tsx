import Hero from "@/components/Hero";
import { navItems } from "@/data/index";
import { FloatingNav } from "@/components/ui/floating-navbar";
import About from "@/components/About";
import Project from "@/components/ProjectsSection"
import Contact from "@/components/Contact"

export default function Home() {
  // console.log(navItems, "bvfdjsbfsdfkb");
  return (
    <main className="relative bg-black-100 flex justify-center items-center flex-col overflow-hidden mx-auto sm:px-10 px-5">
      <div className="max-w-7xl w-full">
        <FloatingNav navItems={navItems}></FloatingNav>
        <Hero></Hero>
        <About></About>
        <Project></Project>
         <Contact></Contact>
      </div>
    </main>
  );
}
