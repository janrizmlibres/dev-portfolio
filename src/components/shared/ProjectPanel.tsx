import { motion } from "motion/react";

import ProjectDetails from "./ProjectDetails";
import { animateOnScroll, fadeUp } from "../../animation";

const ProjectPanel = () => {
  return (
    <div className="relative grid grid-cols-5 gap-4 lg:grid-cols-6">
      <div className="aspect-square"></div>
      <div className="row-start-2 aspect-square"></div>
      <div className="row-start-3 aspect-square"></div>

      <div className="absolute inset-0 grid grid-cols-5 gap-4 lg:grid-cols-6">
        <motion.div
          {...animateOnScroll(fadeUp)}
          className="relative col-span-3 col-start-3 row-span-2 flex rounded-4xl"
        >
          <div className="absolute inset-0 bg-gray-200 clip-path-top"></div>
          <div className="absolute inset-0 bg-gray-200 clip-path-bottom"></div>
          <div className="absolute inset-0 bg-gray-200 clip-path-center"></div>

          <div className="z-1 mt-auto ml-auto h-[calc(50%+0.5rem)] w-[calc(33.33%+0.33rem)] rounded-tl-[2.5rem] bg-dark-100 pt-4 pl-4">
            <div className="size-full rounded-4xl bg-gray-100"></div>
          </div>
        </motion.div>
        <motion.div
          {...animateOnScroll(fadeUp)}
          className="col-start-6 hidden rounded-4xl bg-gray-100 lg:block"
        ></motion.div>
        <motion.div
          {...animateOnScroll(fadeUp)}
          className="col-start-4 row-start-3 rounded-4xl bg-gray-100"
        ></motion.div>

        <div className="relative col-span-2 row-start-1">
          <div className="absolute top-0 right-0 left-0">
            <ProjectDetails
              title="Gostat"
              tools={["TypeScript", "Nextjs", "MongoDB", "Tailwind"]}
            >
              <em>DevFlow</em> is a project management tool designed to
              streamline the development process, offering features like task
              tracking, collaboration, and real-time updates.
            </ProjectDetails>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectPanel;
