import { ArrowRightIcon } from "@phosphor-icons/react";
import { motion } from "motion/react";

import ProjectsPartialBtn from "./ProjectsPartialBtn";
import { animateOnScroll, fadeUp } from "../../animation";
import { cn } from "../../utils";

interface Props {
  className?: string;
  mainBtnClass?: string;
}

const ProjectsButton = ({ className, mainBtnClass }: Props) => {
  return (
    <motion.div
      {...animateOnScroll(fadeUp)}
      className={cn("group hidden items-end gap-4 md:flex", className)}
    >
      <ProjectsPartialBtn
        className={cn(
          "h-12 px-12 font-medium italic lg:h-14 lg:px-22 xl:px-30",
          mainBtnClass
        )}
      >
        Projects
      </ProjectsPartialBtn>

      <ProjectsPartialBtn className="size-12 justify-center lg:size-14" delayed>
        <ArrowRightIcon size={24} />
      </ProjectsPartialBtn>
    </motion.div>
  );
};

export default ProjectsButton;
