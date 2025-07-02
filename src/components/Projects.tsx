import { motion } from "motion/react";

import { animateOnScroll, fadeRight } from "../animation";
import ProjectPanel from "./shared/ProjectPanel";

const Projects = () => {
  return (
    <section className="custom-container mb-48 px-12" id="projects">
      <div className="grid grid-cols-5 gap-4 lg:grid-cols-6">
        <motion.h2
          {...animateOnScroll(fadeRight)}
          className="col-span-3 col-start-3 mb-6 pl-2 subheading"
        >
          &hellip; /Projects &hellip;
        </motion.h2>
      </div>

      <ProjectPanel />
    </section>
  );
};

export default Projects;
