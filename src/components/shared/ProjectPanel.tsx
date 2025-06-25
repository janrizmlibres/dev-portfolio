import { animateOnScroll, fadeUp } from "../../animation";
import ProjectDetails from "./ProjectDetails";
import { motion } from "motion/react";

const ProjectPanel = () => {
  return (
    <div className="project-entry relative">
      <div className="aspect-square"></div>
      <div className="aspect-square row-start-2"></div>
      <div className="aspect-square row-start-3"></div>

      <div className="project-entry absolute inset-0">
        <motion.div
          {...animateOnScroll(fadeUp)}
          className="relative rounded-4xl col-start-3 col-span-3 row-span-2 flex"
        >
          <div className="absolute inset-0 bg-gray-200 clip-path-top"></div>
          <div className="absolute inset-0 bg-gray-200 clip-path-bottom"></div>
          <div className="absolute inset-0 bg-gray-200 clip-path-center"></div>

          <div className="ml-auto mt-auto pt-4 pl-4 w-[calc(33.33%+0.33rem)] h-[calc(50%+0.5rem)] rounded-tl-[2.5rem] bg-dark-100 z-1">
            <div className="size-full rounded-4xl bg-gray-100"></div>
          </div>
        </motion.div>
        <motion.div
          {...animateOnScroll(fadeUp)}
          className="rounded-4xl bg-gray-100 col-start-6"
        ></motion.div>
        <motion.div
          {...animateOnScroll(fadeUp)}
          className="rounded-4xl bg-gray-100 col-start-4 row-start-3"
        ></motion.div>

        <div className="col-span-2 row-start-1 row-span-3">
          <ProjectDetails
            title="Gostat"
            tools={["TypeScript", "Nextjs", "MongoDB", "Tailwind"]}
          >
            <em>DevFlow</em> is a project management tool designed to streamline
            the development process, offering features like task tracking,
            collaboration, and real-time updates.
          </ProjectDetails>
        </div>
      </div>
    </div>
  );
};

export default ProjectPanel;
