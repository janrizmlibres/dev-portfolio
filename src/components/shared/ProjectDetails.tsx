import { motion } from "motion/react";

import ButtonPrompt from "./ButtonPrompt";
import { animateOnScroll, fadeUp } from "../../animation";

interface Props {
  title: string;
  tools: string[];
  href?: string;
  className?: string;
  children: React.ReactNode;
}

const ProjectDetails = ({
  title,
  tools,
  href = "#",
  className,
  children,
}: Props) => {
  return (
    <div className={className}>
      <motion.h3 {...animateOnScroll(fadeUp)} className="mb-6 text-2xl">
        {title}
      </motion.h3>
      <div className="mb-8 flex flex-wrap gap-x-4 gap-y-3 lg:mb-12">
        {tools.map((tool, i) => (
          <motion.div
            {...animateOnScroll(fadeUp)}
            key={i}
            className="cursor-default rounded-full border border-gray-200 px-4 py-2 font-fira-code"
          >
            {tool}
          </motion.div>
        ))}
      </div>

      <motion.p
        {...animateOnScroll(fadeUp)}
        className="mb-8 text-gray-100 lg:mb-12"
      >
        {children}
      </motion.p>

      <motion.div {...animateOnScroll(fadeUp)}>
        <ButtonPrompt iconName="Github" href={href} />
      </motion.div>
    </div>
  );
};

export default ProjectDetails;
