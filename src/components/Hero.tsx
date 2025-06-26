import { ArrowRightIcon } from "@phosphor-icons/react";
import { motion } from "motion/react";
import { animateOnScroll, fadeLeft, fadeRight } from "../animation";

const Hero = () => {
  return (
    <section className="custom-container my-20 px-12">
      <div className="flex justify-between items-end mb-12">
        <motion.h1 {...animateOnScroll(fadeRight)} className="large-text">
          Full-stack
        </motion.h1>
        <motion.div
          {...animateOnScroll(fadeLeft)}
          className="flex gap-4 items-end"
        >
          <a
            href="#projects"
            className="text-dark-100 text-xl italic font-medium rounded-full h-14 px-30 flex items-center relative group"
          >
            <span className="absolute inset-0 bg-light-100 rounded-full group-hover:rounded-3xl transition-transform duration-300 ease-[cubic-bezier(0.2,1,0.7,1)] group-hover:transform-[scale3d(0.93,0.7,1)]"></span>
            <span className="z-1">Projects</span>
            <span className="absolute inset-0 rounded-full border-2 border-light-100 transition-transform duration-300 ease-[cubic-bezier(0.2,1,0.7,1)] transform-[scale3d(0.85,0.65,1)] group-hover:transform-[scale3d(1,1,1)]"></span>
          </a>
          <a
            href="#projects"
            className="text-2xl bg-light-100 text-dark-100 rounded-full size-14 flex items-center justify-center"
          >
            <ArrowRightIcon size={24} />
          </a>
        </motion.div>
      </div>
      <div className="flex justify-between items-center gap-48">
        <motion.p {...animateOnScroll(fadeRight)} className="medium-text pl-4">
          My goal is to write maintainable, clean and understandable code to
          process development was enjoyable.
        </motion.p>
        <motion.h1 {...animateOnScroll(fadeLeft)} className="large-text">
          Developer
        </motion.h1>
      </div>
    </section>
  );
};

export default Hero;
