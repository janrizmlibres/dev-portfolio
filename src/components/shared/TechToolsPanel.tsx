import { motion } from "motion/react";

import { animateOnScroll, fadeUp } from "../../animation";
import { cn } from "../../utils";

interface Props {
  title: string;
  active?: boolean;
  className?: string;
  children?: React.ReactNode;
}

const TechToolsPanel = ({ title, className, children }: Props) => {
  return (
    <motion.div
      {...animateOnScroll(fadeUp)}
      className={cn(
        "group relative cursor-default overflow-hidden rounded-4xl border-1 border-gray-200 p-6 text-gray-100",
        "transition-colors duration-400 ease-in-out hover:text-gray-200 hover:duration-600",
        `active:text-gray-200 active:duration-600 ${className}`
      )}
    >
      <h3 className="mb-3 text-xl lg:text-2xl">{title}</h3>
      <p className="font-fira-code leading-8 font-medium max-lg:text-sm">
        {children}
      </p>
      <span
        className={cn(
          "absolute top-1/2 left-1/2 -z-1 m-[-75%] h-0 w-3/2 translate-z-0 scale-0 rounded-full",
          "bg-light-100 object-contain pt-[150%] opacity-100",
          "transition-all duration-400 ease-in-out group-hover:scale-100 group-hover:duration-600",
          "group-active:scale-100 group-active:duration-600"
        )}
      ></span>
    </motion.div>
  );
};

export default TechToolsPanel;
