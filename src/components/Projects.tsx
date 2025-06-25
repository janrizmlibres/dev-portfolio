import { animateOnScroll, fadeRight } from "../animation";
import ProjectPanel from "./shared/ProjectPanel";
import { motion } from "motion/react";

const Projects = () => {
  return (
    <section className="custom-container px-12 mb-48" id="projects">
      <div className="grid grid-cols-6 gap-4">
        <motion.h2
          {...animateOnScroll(fadeRight)}
          className="subheading mb-6 pl-2 col-start-3"
        >
          &hellip; /Projects &hellip;
        </motion.h2>
      </div>

      <ProjectPanel />
    </section>
  );
};

export default Projects;
