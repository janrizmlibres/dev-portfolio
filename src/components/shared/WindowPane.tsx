import { motion } from "motion/react";

import ButtonPrompt from "./ButtonPrompt";
import { animateOnScroll, fadeUp } from "../../animation";
import { cn } from "../../utils";

interface Props {
  href: string;
  className?: string;
  backgroundClasses: string;
  segmentClassesArray?: string[];
  concealerClassesArray?: string[];
}

const overlay = (
  <div className="absolute inset-0 bg-black opacity-0 transition-opacity duration-300 group-hover:opacity-30"></div>
);

const WindowPane = ({
  href,
  className,
  backgroundClasses,
  segmentClassesArray,
  concealerClassesArray = [],
}: Props) => {
  return (
    <motion.a
      {...animateOnScroll(fadeUp)}
      className={cn(
        "group relative flex items-center justify-center overflow-hidden rounded-4xl transition-all duration-300",
        segmentClassesArray === undefined && backgroundClasses,
        className
      )}
      href={href}
      target="_blank"
    >
      {segmentClassesArray?.map((segmentClasses, idx) => (
        <div
          key={idx}
          className={cn(
            "absolute inset-0 transition-all duration-300",
            backgroundClasses,
            segmentClasses
          )}
        >
          {overlay}
        </div>
      )) || overlay}

      {concealerClassesArray.map((concealerClasses, idx) => (
        <div
          key={idx}
          className={cn("absolute bg-dark-100", concealerClasses)}
        ></div>
      ))}

      <ButtonPrompt
        iconName="Link"
        weight="regular"
        className="pointer-events-none opacity-0 transition-all duration-300 group-hover:opacity-100 group-active:opacity-100"
      />
    </motion.a>
  );
};

export default WindowPane;
