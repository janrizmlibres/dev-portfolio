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
      <div className="custom-container px-12 py-4 flex items-center gap-4">
        <div className="flex-2 xl:flex-1 text-gray-100 group-hover:text-gray-200 transition-colors duration-400 ease-out">
          <p className="text-xl lg:text-2xl">{years}</p>
          <p className="text-sm">{duration}</p>
        </div>
        <p className="flex-3 xl:flex-2 text-lg xl:text-xl group-hover:text-gray-200 transition-colors duration-400 ease-out">
          {company}
        </p>
        <div className="font-fira-code text-light-100 text-lg flex-6 xl:text-xl xl:flex-3 group-hover:text-gray-200 transition-colors duration-400 ease-out">
          <span>{role}</span> | <span>{tech}</span>
        </div>
      </div>
    </motion.div>
  );
};

export default WorkPanel;
