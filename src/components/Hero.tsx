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
            className="bg-light-100 text-dark-100 text-xl italic font-medium rounded-full h-14 px-30 flex items-center"
          >
            Projects
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
