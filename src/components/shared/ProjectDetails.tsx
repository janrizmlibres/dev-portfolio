import { motion } from "motion/react";

import ButtonPrompt from "./ButtonPrompt";
import { animateOnScroll, fadeLeft, fadeRight } from "../../animation";

interface Props {
  title: string;
  tools: string[];
  href?: string;
  enterDirection?: "left" | "right";
  className?: string;
  children: React.ReactNode;
}

const ProjectDetails = ({
  title,
  tools,
  href = "#",
  enterDirection = "right",
  className,
  children,
}: Props) => {
  const animation = animateOnScroll(
    enterDirection === "left" ? fadeLeft : fadeRight
  );

  return (
    <div className={className}>
      <motion.h3 {...animation} className="mb-6 text-2xl">
        {title}
      </motion.h3>
      <div className="mb-8 flex flex-wrap gap-x-4 gap-y-3 lg:mb-12">
        {tools.map((tool, i) => (
          <motion.div
            {...animation}
            key={i}
            className="cursor-default rounded-full border border-gray-200 px-4 py-2 font-fira-code max-lg:text-sm"
          >
            {tool}
          </motion.div>
        ))}
      </div>

      <motion.p
        {...animation}
        className="mb-8 text-gray-100 max-lg:text-sm lg:mb-12"
      >
        {children}
      </motion.p>

      <motion.div {...animation}>
        <ButtonPrompt iconName="Github" href={href} />
      </motion.div>
    </div>
  );
};

export default ProjectDetails;
