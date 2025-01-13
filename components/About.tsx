"use client";
import React, { JSX, useTransition, useState } from "react";
import Image from "next/image";
import TabButton from "./TabButton";

interface TabData {
  title: string;
  id: string;
  content: JSX.Element;
}

const TAB_DATA: TabData[] = [
  {
    title: "Skills",
    id: "skills",
    content: (
      <ul className="list-disc pl-2">
        <li>Node.js</li>
        <li>Express</li>
        <li>Mongodb</li>
        <li>Mysql</li>
        <li>JavaScript</li>
        <li>React</li>
      </ul>
    ),
  },
  {
    title: "Education",
    id: "education",
    content: (
      <ul className="list-disc pl-2">
        <li>
          <strong>PICT College</strong>, Pune, India <br />
          <span className="text-sm text-gray-300">B.Tech in Computer Engineering (CGPA: 9.02)</span> <br />
          <span className="text-sm text-gray-300">2022 - Present</span>
        </li>
        <li>
          <strong>Dnyantirth International College</strong>, Pune, India <br />
          <span className="text-sm text-gray-300">Higher Secondary Certificate (HSC)</span> <br />
          <span className="text-sm text-gray-300">2022 | Score: 88.17%</span>
        </li>
        <li>
          <strong>Renavikar High School</strong>, Pune, India <br />
          <span className="text-sm text-gray-300">Secondary School Certificate (SSC)</span> <br />
          <span className="text-sm text-gray-300">2010 | Score: 91.60%</span>
        </li>
      </ul>
    ),    
  },
 
];

const AboutSection = () => {
  const [tab, setTab] = useState<string>("skills");
  const [isPending, startTransition] = useTransition();

  const handleTabChange = (id: string) => {
    startTransition(() => {
      setTab(id);
    });
  };

  return (
    <section className="text-white" id="about">
      <div className="md:grid md:grid-cols-2 gap-8 items-center py-8 px-4 xl:gap-16 sm:py-16 xl:px-16">
        <Image
          src="https://res.cloudinary.com/dsy3ebkqc/image/upload/v1736261769/samples/kxix6bpkuvkdxoyhawt4.jpg"
          alt="ss"
          width={500}
          height={500}
        />
        <div className="mt-4 md:mt-0 text-left flex flex-col h-full">
          <h2 className="text-4xl font-bold text-white mb-4">About Me</h2>
          <p className="text-base lg:text-lg">
            I am a full stack web developer with a passion for creating
            interactive and responsive web applications. I have experience
            working with JavaScript, React, Redux, Node.js, Express, PostgreSQL,
            Sequelize, HTML, CSS, and Git. I am a quick learner and I am always
            looking to expand my knowledge and skill set. I am a team player and
            I am excited to work with others to create amazing applications.
          </p>
          {isPending && <div>Loading...</div>}
          <div className="flex flex-row justify-start mt-8">
            <TabButton
              selectTab={() => handleTabChange("skills")}
              active={tab === "skills"}
            >
              {" "}
              Skills{" "}
            </TabButton>
            <TabButton
              selectTab={() => handleTabChange("education")}
              active={tab === "education"}
            >
              {" "}
              Education{" "}
            </TabButton>
           
          </div>
          <div className="mt-8">
            {TAB_DATA.find((t) => t.id === tab)?.content}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
