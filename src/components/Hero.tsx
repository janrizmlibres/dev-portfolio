import { motion } from "motion/react";

import { animateOnScroll, fadeDown, fadeUp } from "../animation";
import ProjectsButton from "./ProjectsButton";

const Hero = () => {
  return (
    <section className="custom-container my-20">
      <div className="mb-4 flex items-end justify-between gap-8 sm:mb-8 md:mb-12">
        <motion.h1
          {...animateOnScroll(fadeDown)}
          className="large-text text-5xl text-nowrap sm:text-7xl/12 lg:text-8xl/17 xl:text-9xl/23"
        >
          Full-stack
        </motion.h1>

        <ProjectsButton />
      </div>

      <div className="flex flex-col-reverse items-start justify-between gap-8 max-md:mb-12 max-sm:mb-8 sm:max-md:gap-12 md:flex-row lg:items-center">
        <motion.p
          {...animateOnScroll(fadeUp)}
          className="text-xl text-gray-100 sm:pl-4 md:basis-md md:max-lg:text-base"
        >
          My goal is to write maintainable, clean, and understandable code. I
          don't just build applications, I create <em>solutions</em>.
        </motion.p>
        <motion.h1
          {...animateOnScroll(fadeUp)}
          className="w-full text-right large-text text-5xl sm:text-7xl/15 lg:text-8xl xl:text-9xl/23"
        >
          Developer
        </motion.h1>
      </div>

      <ProjectsButton
        className="flex md:hidden"
        mainBtnClass="px-18 sm:flex-1 sm:justify-center"
      />
    </section>
  );
};

export default Hero;
