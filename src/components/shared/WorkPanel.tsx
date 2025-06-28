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
      className={`cursor-default group border-gray-200 relative ${
        isLast ? "border-y" : "border-t"
      }`}
    >
      <span className="absolute -z-1 inset-0 bg-light-100 scale-x-0 origin-left transition-transform duration-400 ease-out group-hover:scale-x-100"></span>
      <div className="custom-container px-4 sm:px-8 lg:px-12 h-32 md:h-[84px] flex items-center gap-4">
        <div className="flex-1 text-gray-100 group-hover:text-gray-200 transition-colors duration-400 ease-out">
          <p className="md:text-lg lg:text-2xl max-md:mb-2">{years}</p>
          <p className="md:text-sm">{duration}</p>
        </div>
        <p className="max-md:hidden flex-2 text-lg xl:text-xl group-hover:text-gray-200 transition-colors duration-400 ease-out">
          {company}
        </p>
        <div className="max-md:hidden font-fira-code text-light-100 text-lg xl:text-xl flex-3 group-hover:text-gray-200 transition-colors duration-400 ease-out">
          <span>{role}</span> | <span>{tech}</span>
        </div>
        <div className="md:hidden flex-2 flex flex-col gap-2">
          <p className="group-hover:text-gray-200 transition-colors duration-400 ease-out">
            {company}
          </p>
          <div className="font-fira-code text-light-100 group-hover:text-gray-200 transition-colors duration-400 ease-out">
            <span>{role}</span> | <span>{tech}</span>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default WorkPanel;
