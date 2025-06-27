import { animateOnScroll, fadeRight } from "../../animation";
import ButtonPrompt from "./ButtonPrompt";
import { motion } from "motion/react";

interface Props {
  title: string;
  tools: string[];
  children: React.ReactNode;
}

const ProjectDetails = ({ title, tools, children }: Props) => {
  return (
    <div className="w-9/10">
      <motion.h3 {...animateOnScroll(fadeRight)} className="mb-6 text-2xl">
        {title}
      </motion.h3>
      <div className="flex flex-wrap gap-x-4 gap-y-3 mb-12">
        {tools.map((tool, i) => (
          <motion.div
            {...animateOnScroll(fadeRight)}
            key={i}
            className="tech-item"
          >
            {tool}
          </motion.div>
        ))}
      </div>

      <motion.p {...animateOnScroll(fadeRight)} className="text-gray-100 mb-12">
        {children}
      </motion.p>

      <motion.div {...animateOnScroll(fadeRight)}>
        <ButtonPrompt iconName="Github" />
      </motion.div>
    </div>
  );
};

export default ProjectDetails;
