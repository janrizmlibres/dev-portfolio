import { motion } from "motion/react";
import { animateOnScroll, fadeUp } from "../../animation";

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
      className={[
        "group p-6 rounded-4xl border-1 border-gray-200 overflow-hidden relative text-gray-100 hover:text-gray-200 active:text-gray-200",
        `transition-colors duration-500 ease-in-out hover:transition-colors hover:duration-800 active:transition-colors active:duration-800 ${className}`,
      ].join(" ")}
    >
      <h3 className="text-xl lg:text-2xl mb-3">{title}</h3>
      <p className="font-fira-code max-lg:text-sm font-medium leading-8">
        {children}
      </p>
      <span
        className={[
          "w-3/2 h-0 pt-[150%] object-contain bg-light-100 absolute top-1/2 left-1/2 m-[-75%] opacity-100 rounded-full",
          "scale-0 translate-z-0 transition-all duration-500 ease-in-out -z-1 group-hover:transition-all group-hover:duration-800",
          "group-hover:scale-100 group-hover:translate-z-0 group-active:transition-all group-active:duration-800 group-active:scale-100 group-active:translate-z-0",
        ].join(" ")}
      ></span>
    </motion.div>
  );
};

export default TechToolsPanel;
