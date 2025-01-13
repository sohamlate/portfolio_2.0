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
    title: "PRESCRIPTPRO",
    description: "Developed a prescription analysis platform that leverages GenAI for intelligent data extraction and AWS Textract for OCR to digitize medical records. Implemented secure APIs for integrating with Google Calendar and smart home devices like Google Home and Alexa to provide medication reminders. Designed a robust authentication system using bcrypt.js and JWT for secure user sessions. Utilized ReactJS for a user-friendly interface and NodeJS with ExpressJS and MongoDB for backend development, ensuring scalability and efficiency.",
    image: "https://res.cloudinary.com/dsy3ebkqc/image/upload/v1736519668/samples/bajky4pazvn4plwo50go.png",
    tag: ["All", "Web"],
    gitUrl: "https://github.com/sohamlate/mindspark",
    previewUrl: "https://github.com/sohamlate/mindspark",
  },
  {
    id: 3,
    title: "Portfolio Website",
    description: "Built a responsive and dynamic portfolio website using Next.js and TypeScript, featuring interactive elements and animations to effectively showcase projects. Integrated Nodemailer for secure and reliable email communication via the contact form. Ensured optimal performance and seamless navigation through server-side rendering (SSR) and static site generation (SSG). Leveraged modern design principles to create a visually appealing and user-friendly interface.",
    image: "https://res.cloudinary.com/dsy3ebkqc/image/upload/v1736772800/uenz0outhlzbtxfqyyzf.png",
    tag: ["All", "Web"],
    gitUrl: "https://github.com/sohamlate/portfolio_2.0",
    previewUrl: "https://yourportfolio.com"
  },
  {
    id: 4,
    title: "UrbanFusion - Government Project Management Platform",
    description: "Developed a comprehensive government project and resource management platform to streamline inter-departmental coordination. Built with ReactJS for a dynamic user interface and NodeJS with ExpressJS for backend operations. Implemented secure authentication using bcrypt.js and JWT, enabling role-based access control and secure data sharing. Designed an MVC architecture with normalized MongoDB schemas to ensure data integrity and scalability. Integrated Leaflet for geospatial mapping to visualize project locations and manage resources effectively. Utilized OAuth for seamless access control, ensuring secure integration with third-party services.",
    image: "https://res.cloudinary.com/dsy3ebkqc/image/upload/v1736773208/ukjqcnqe1tsf3nlxblha.png",
    tag: ["All", "Web"],
    gitUrl: "https://github.com/sohamlate/UrbanFusion",
    previewUrl: "https://urban-fusion.vercel.app/"
}


 
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