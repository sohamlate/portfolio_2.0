import React from 'react'
import { Spotlight } from './ui/Spotlight'
import { TextGenerateEffect } from "./ui/TextGenerateEffect";
import MagicButton from "./MagicButton";
import Image from "next/image";
import { FaLocationArrow } from "react-icons/fa6";

const Hero = () => {
  return (
    <section id ="home" className='pb-20 pt-35 flex items-center justify-between'>
      <div>
        <Spotlight
          className="-top-40 -left-10 md:-left-32 md:-top-20 h-screen"
          fill="white"
        />
        <Spotlight
          className="h-[80vh] w-[50vw] top-10 left-full"
          fill="purple"
        />
        <Spotlight className="left-80 top-28 h-[80vh] w-[50vw]" fill="blue" />
      </div>

      <div
        className="h-screen w-full dark:bg-black-100 dark:bg-grid-white/[0.03] bg-grid-black-100/[0.2]
        absolute top-0 left-0 flex items-center justify-center"
      >
        <div
          className="absolute pointer-events-none inset-0 flex items-center justify-center dark:bg-black-100
          [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]"
        />
      </div>

      <div className="flex flex-wrap-reverse pt-3 text-white justify-center relative my-20 z-10 w-full">
        <div className="max-w-[89vw]  md:max-w-2xl lg:max-w-[50vw] flex flex-col items-center justify-center">
          <p className="uppercase tracking-widest text-xs text-center text-blue-100 max-w-90">
            Building the Web of Tomorrow with Next.js
          </p>

          <TextGenerateEffect
            words="Turning Ideas into Intuitive User Interfaces"
            className="text-center text-white text-[40px] md:text-5xl lg:text-6xl"
          />

          <p className="text-center mt-4 md:tracking-wider mb-4 text-sm md:text-lg lg:text-2xl">
            Hi! I&apos;m Soham, a Full Stack Developer based in India.
          </p>

          <div className="flex space-x-4">
            <a href="#projects">
              <MagicButton
                title="Show my work"
                icon={<FaLocationArrow />}
                position="right"
              />
            </a>

            <a target="_blank" href="https://drive.google.com/file/d/1PrjKfTSjer9ZrjnfMZUUHMo9_REVriyF/view?usp=sharing" download>
              <MagicButton
                title="Download CV"
                icon={<FaLocationArrow />}
                position="right"
              />
            </a>
          </div>
        </div>

        
        <div className="hidden md:block w-[30vw]">
          <Image
            src="https://res.cloudinary.com/dsy3ebkqc/image/upload/v1736176443/samples/cpz3eq8vspfyop8knerz.webp"  
            alt="Coding Hero"
            className="w-full h-auto object-cover"
          />
        </div>
      </div>
    </section>
  );
}

export default Hero
