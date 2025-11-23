import { motion } from "motion/react";

import { animateOnScroll, fadeRight } from "../animation";
import { projects } from "../data";
import FeaturedProject from "./shared/FeaturedProject";

const Projects = () => {
  return (
    <section className="relative custom-container mb-48 px-4 sm:px-8 lg:px-12">
      <div id="projects" className="absolute -top-28"></div>

      <div className="grid grid-cols-5 gap-4 lg:grid-cols-6">
        <motion.h2
          {...animateOnScroll(fadeRight)}
          className="col-span-3 mb-6 pl-6 subheading md:col-start-4"
        >
          &hellip; /Projects &hellip;
        </motion.h2>
      </div>

      <div className="space-y-24">
        {projects.map((project, index) => (
          <FeaturedProject
            key={project.title}
            project={project}
            index={index}
          />
        ))}
      </div>
    </section>
  );
};

export default Projects;
