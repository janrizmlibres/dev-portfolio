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
      <div className="custom-container grid h-36 grid-cols-3 content-center items-center gap-x-6 gap-y-2 px-4 sm:h-32 sm:px-8 md:flex md:h-[84px] lg:px-12">
        <div className="flex-1 text-gray-100 transition-colors duration-400 ease-out group-hover:text-gray-200 group-active:text-gray-200 max-md:hidden">
          <p className="text-xl lg:text-2xl">{years}</p>
          <p className="text-sm">{duration}</p>
        </div>

        <p className="text-gray-100 transition-colors duration-400 ease-out group-hover:text-gray-200 group-active:text-gray-200 sm:text-xl md:hidden">
          {years}
        </p>
        <p className="row-start-2 self-start text-gray-100 transition-colors duration-400 ease-out group-hover:text-gray-200 group-active:text-gray-200 sm:text-xl md:hidden">
          {duration}
        </p>

        <p className="col-span-2 flex-2 transition-colors duration-400 ease-out group-hover:text-gray-200 group-active:text-gray-200 sm:text-xl">
          {company}
        </p>

        <div className="col-span-2 flex-3 font-fira-code text-light-100 transition-colors duration-400 ease-out group-hover:text-gray-200 group-active:text-gray-200 max-md:self-start sm:text-xl">
          <span>{role}</span> | <span>{tech}</span>
        </div>
      </div>
    </motion.div>
  );
};

export default WorkPanel;
