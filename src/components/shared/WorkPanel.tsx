import { motion } from "motion/react";

import { animateOnScroll, fadeUp } from "../../animation";

interface Props {
  years: string;
  duration: string;
  company: string;
  role: string;
  tech: string;
  isLast?: boolean;
}

const WorkPanel = ({
  years,
  duration,
  company,
  role,
  tech,
  isLast = false,
}: Props) => {
  return (
    <motion.div
      {...animateOnScroll(fadeUp)}
      className={`group relative cursor-default border-gray-200 ${
        isLast ? "border-y" : "border-t"
      }`}
    >
      <span className="absolute inset-0 -z-1 origin-left scale-x-0 bg-light-100 transition-transform duration-400 ease-out group-hover:scale-x-100 group-active:scale-x-100"></span>
      <div className="custom-container flex h-36 items-center gap-4 px-4 sm:h-32 sm:px-8 md:h-[84px] lg:px-12">
        <div className="flex-1 text-gray-100 transition-colors duration-400 ease-out group-hover:text-gray-200 group-active:text-gray-200">
          <p className="text-2xl">{years}</p>
          <p className="text-sm">{duration}</p>
        </div>

        <p className="flex-2 text-lg transition-colors duration-400 ease-out group-hover:text-gray-200 group-active:text-gray-200 max-md:hidden xl:text-xl">
          {company}
        </p>

        <div className="flex-3 font-fira-code text-lg text-light-100 transition-colors duration-400 ease-out group-hover:text-gray-200 group-active:text-gray-200 max-md:hidden xl:text-xl">
          <span>{role}</span> | <span>{tech}</span>
        </div>
      </div>
    </motion.div>
  );
};

export default WorkPanel;
