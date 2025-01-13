"use client";
import React, { useState, useRef } from "react";
import ProjectCard from "./Projectcard";
import ProjectTag from "./ProjectTag";
import { motion, useInView } from "framer-motion";

const projectsData = [
  {
    id: 1,
    title: "HUEHUB",
    description: "HUEHUB is a secure, user-friendly online artwork marketplace where users can buy and sell art. Built with ReactJS and NodeJS, it incorporates modern tools like Framer Motion and Intersection Observer for smooth animations and efficient loading, respectively.",
    image: "https://res.cloudinary.com/dsy3ebkqc/image/upload/v1732198904/Huehub/r4jf9k5bfkmotixzlr4i.png",
    tag: ["All", "Web"],
    gitUrl: "https://huehub-rho.vercel.app/login", 
    previewUrl: "https://github.com/sohamlate/Huehub/",  
  },
  {
    id: 2,
    title: "Potography Portfolio Website",
    description: "Project 2 description",
    image: "https://res.cloudinary.com/dsy3ebkqc/image/upload/v1736519668/samples/bajky4pazvn4plwo50go.png",
    tag: ["All", "Web"],
    gitUrl: "https://github.com/sohamlate/mindspark",
    previewUrl: "https://github.com/sohamlate/mindspark",
  },
  {
    id: 3,
    title: "E-commerce Application",
    description: "Project 3 description",
    image: "/images/projects/3.png",
    tag: ["All", "Web"],
    gitUrl: "/",
    previewUrl: "/",
  },
  {
    id: 4,
    title: "Food Ordering Application",
    description: "Project 4 description",
    image: "/images/projects/4.png",
    tag: ["All", "Mobile"],
    gitUrl: "/",
    previewUrl: "/",
  },
 
];

const ProjectsSection = () => {
  const [tag, setTag] = useState("All");
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const handleTagChange = (newTag : string) => {
    setTag(newTag);
  };

  const filteredProjects = projectsData.filter((project) =>
    project.tag.includes(tag)
  );

  const cardVariants = {
    initial: { y: 50, opacity: 0 },
    animate: { y: 0, opacity: 1 },
  };

  return (
    <section id="projects">
      <h2 className="text-center text-4xl font-bold text-white mt-4 mb-8 md:mb-12">
        My Projects
      </h2>
      <div className="text-white flex flex-row justify-center items-center gap-2 py-6">
        <ProjectTag
          onClick={handleTagChange}
          name="Web"
          isSelected={tag === "Web"}
        />
      </div>
      <ul ref={ref} className="grid md:grid-cols-3 gap-8 md:gap-12">
        {filteredProjects.map((project, index) => (
          <motion.li
            key={index}
            variants={cardVariants}
            initial="initial"
            animate={isInView ? "animate" : "initial"}
            transition={{ duration: 0.3, delay: index * 0.4 }}
          >
            <ProjectCard
              key={project.id}
              title={project.title}
              description={project.description}
              imgUrl={project.image}
              gitUrl={project.gitUrl}
              previewUrl={project.previewUrl}
            />
          </motion.li>
        ))}
      </ul>
    </section>
  );
};

export default ProjectsSection;