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
          className="flex gap-4 items-end group"
        >
          <a
            href="#projects"
            className="text-dark-100 text-xl italic font-medium rounded-full h-14 px-30 flex items-center relative overflow-hidden group-hover:text-light-100 group-hover:border border-light-100 transition-all duration-200 delay-200 group-hover:delay-0"
          >
            <span className="absolute inset-0 bg-light-100 rounded-full transition-transform duration-200 delay-200 group-hover:delay-0 ease-[cubic-bezier(0.7,0,0.2,1)] group-hover:transform-[translate3d(100%,0,0)]"></span>
            <span className="block relative overflow-hidden">
              <span className="block relative group-hover:animate-btn-hover">
                Projects
              </span>
            </span>
          </a>
          <a
            href="#projects"
            className="text-2xl text-dark-100 bg-dark-100 rounded-full size-14 flex items-center justify-center relative overflow-hidden group-hover:text-light-100 group-hover:border border-light-100 transition-all duration-200 group-hover:delay-200"
          >
            <span className="absolute inset-0 bg-light-100 rounded-full transition-transform duration-200 group-hover:delay-200 ease-[cubic-bezier(0.7,0,0.2,1)] group-hover:transform-[translate3d(100%,0,0)]"></span>
            <span className="block relative overflow-hidden">
              <span className="block relative delay-200 group-hover:animate-btn-hover-delayed">
                <ArrowRightIcon size={24} />
              </span>
            </span>
          </a>
        </motion.div>
      </div>
      <div className="flex justify-between items-center gap-48">
        <motion.p {...animateOnScroll(fadeRight)} className="medium-text pl-4">
          My goal is to write maintainable, clean, and understandable code. I
          don't just build applications, I create <em>solutions</em>.
        </motion.p>
        <motion.h1 {...animateOnScroll(fadeLeft)} className="large-text">
          Developer
        </motion.h1>
      </div>
    </section>
  );
};

export default Hero;
