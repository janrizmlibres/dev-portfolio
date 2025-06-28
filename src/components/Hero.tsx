import { ArrowRightIcon } from "@phosphor-icons/react";
import { motion } from "motion/react";
import { animateOnScroll, fadeLeft, fadeRight } from "../animation";

const Hero = () => {
  return (
    <section className="custom-container my-20 px-4 sm:px-8 lg:px-12">
      <div className="flex justify-between items-end mb-4 sm:mb-8 md:mb-12 gap-8">
        <motion.h1
          {...animateOnScroll(fadeRight)}
          className="text-nowrap font-fira-code text-5xl sm:text-7xl/12 lg:text-8xl/17 font-semibold xl:large-text"
        >
          Full-stack
        </motion.h1>
        <motion.div
          {...animateOnScroll(fadeLeft)}
          className="hidden md:flex gap-4 items-end group"
        >
          <a
            href="#projects"
            className="text-dark-100 text-xl italic font-medium rounded-full h-12 lg:h-14 px-12 lg:px-22 xl:px-30 flex items-center relative overflow-hidden group-hover:text-light-100 group-hover:border border-light-100 transition-all duration-200 delay-200 group-hover:delay-0"
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
            className="text-2xl text-dark-100 bg-dark-100 rounded-full size-12 lg:size-14 flex items-center justify-center relative overflow-hidden group-hover:text-light-100 group-hover:border border-light-100 transition-all duration-200 group-hover:delay-200"
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
      <div className="flex flex-col-reverse md:flex-row justify-between items-start lg:items-center sm:max-md:gap-12 gap-8 max-md:mb-12 max-sm:mb-8">
        <motion.p
          {...animateOnScroll(fadeRight)}
          className="text-gray-100 md:max-lg:text-base medium-text sm:pl-4 md:basis-md"
        >
          My goal is to write maintainable, clean, and understandable code. I
          don't just build applications, I create <em>solutions</em>.
        </motion.p>
        <motion.h1
          {...animateOnScroll(fadeLeft)}
          className="font-fira-code text-5xl sm:text-7xl/15 lg:text-8xl font-semibold w-full text-right xl:large-text"
        >
          Developer
        </motion.h1>
      </div>
      <motion.div
        {...animateOnScroll(fadeLeft)}
        className="flex md:hidden gap-4 items-end group"
      >
        <a
          href="#projects"
          className="text-dark-100 text-xl italic font-medium rounded-full h-12 lg:h-14 px-18 sm:flex-1 sm:justify-center flex items-center relative overflow-hidden group-hover:text-light-100 group-active:text-light-100 group-hover:border group-active:border border-light-100 transition-all duration-200 delay-200 group-hover:delay-0 group-active:delay-0"
        >
          <span className="absolute inset-0 bg-light-100 rounded-full transition-transform duration-200 delay-200 ease-[cubic-bezier(0.7,0,0.2,1)] group-hover:delay-0 group-hover:transform-[translate3d(100%,0,0)] group-active:delay-0 group-active:transform-[translate3d(100%,0,0)]"></span>
          <span className="block relative overflow-hidden">
            <span className="block relative group-hover:animate-btn-hover group-active:animate-btn-hover">
              Projects
            </span>
          </span>
        </a>
        <a
          href="#projects"
          className="text-2xl text-dark-100 bg-dark-100 rounded-full size-12 lg:size-14 flex items-center justify-center relative overflow-hidden group-hover:text-light-100 group-hover:border group-active:text-light-100 group-active:border border-light-100 transition-all duration-200 group-hover:delay-200 group-active:delay-200"
        >
          <span className="absolute inset-0 bg-light-100 rounded-full transition-transform duration-200 ease-[cubic-bezier(0.7,0,0.2,1)] group-hover:delay-200 group-active:delay-200 group-hover:transform-[translate3d(100%,0,0)] group-active:transform-[translate3d(100%,0,0)]"></span>
          <span className="block relative overflow-hidden">
            <span className="block relative delay-200 group-hover:animate-btn-hover-delayed group-active:animate-btn-hover-delayed">
              <ArrowRightIcon size={24} />
            </span>
          </span>
        </a>
      </motion.div>
    </section>
  );
};

export default Hero;
