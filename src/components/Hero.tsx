import { ArrowRightIcon } from "@phosphor-icons/react";
import { motion } from "motion/react";

import { animateOnScroll, fadeLeft, fadeRight } from "../animation";

const Hero = () => {
  return (
    <section className="custom-container my-20 px-4 sm:px-8 lg:px-12">
      <div className="mb-4 flex items-end justify-between gap-8 sm:mb-8 md:mb-12">
        <motion.h1
          {...animateOnScroll(fadeRight)}
          className="large-text text-5xl text-nowrap sm:text-7xl/12 lg:text-8xl/17 xl:text-9xl/23"
        >
          Full-stack
        </motion.h1>
        <motion.div
          {...animateOnScroll(fadeLeft)}
          className="group hidden items-end gap-4 md:flex"
        >
          <a
            href="#projects"
            className="relative flex h-12 items-center overflow-hidden rounded-full border-light-100 px-12 text-xl font-medium text-dark-100 italic transition-all delay-200 duration-200 group-hover:border group-hover:text-light-100 group-hover:delay-0 lg:h-14 lg:px-22 xl:px-30"
          >
            <span className="absolute inset-0 rounded-full bg-light-100 transition-transform delay-200 duration-200 ease-[cubic-bezier(0.7,0,0.2,1)] group-hover:transform-[translate3d(100%,0,0)] group-hover:delay-0"></span>
            <span className="relative block overflow-hidden">
              <span className="relative block group-hover:animate-btn-hover">
                Projects
              </span>
            </span>
          </a>
          <a
            href="#projects"
            className="relative flex size-12 items-center justify-center overflow-hidden rounded-full border-light-100 bg-dark-100 text-2xl text-dark-100 transition-all duration-200 group-hover:border group-hover:text-light-100 group-hover:delay-200 lg:size-14"
          >
            <span className="absolute inset-0 rounded-full bg-light-100 transition-transform duration-200 ease-[cubic-bezier(0.7,0,0.2,1)] group-hover:transform-[translate3d(100%,0,0)] group-hover:delay-200"></span>
            <span className="relative block overflow-hidden">
              <span className="relative block delay-200 group-hover:animate-btn-hover-delayed">
                <ArrowRightIcon size={24} />
              </span>
            </span>
          </a>
        </motion.div>
      </div>
      <div className="flex flex-col-reverse items-start justify-between gap-8 max-md:mb-12 max-sm:mb-8 sm:max-md:gap-12 md:flex-row lg:items-center">
        <motion.p
          {...animateOnScroll(fadeRight)}
          className="text-xl text-gray-100 sm:pl-4 md:basis-md md:max-lg:text-base"
        >
          My goal is to write maintainable, clean, and understandable code. I
          don't just build applications, I create <em>solutions</em>.
        </motion.p>
        <motion.h1
          {...animateOnScroll(fadeLeft)}
          className="w-full text-right large-text text-5xl sm:text-7xl/15 lg:text-8xl xl:text-9xl/23"
        >
          Developer
        </motion.h1>
      </div>
      <motion.div
        {...animateOnScroll(fadeLeft)}
        className="group flex items-end gap-4 md:hidden"
      >
        <a
          href="#projects"
          className="relative flex h-12 items-center overflow-hidden rounded-full border-light-100 px-18 text-xl font-medium text-dark-100 italic transition-all delay-200 duration-200 group-hover:border group-hover:text-light-100 group-hover:delay-0 group-active:border group-active:text-light-100 group-active:delay-0 sm:flex-1 sm:justify-center lg:h-14"
        >
          <span className="absolute inset-0 rounded-full bg-light-100 transition-transform delay-200 duration-200 ease-[cubic-bezier(0.7,0,0.2,1)] group-hover:transform-[translate3d(100%,0,0)] group-hover:delay-0 group-active:transform-[translate3d(100%,0,0)] group-active:delay-0"></span>
          <span className="relative block overflow-hidden">
            <span className="relative block group-hover:animate-btn-hover group-active:animate-btn-hover">
              Projects
            </span>
          </span>
        </a>
        <a
          href="#projects"
          className="relative flex size-12 items-center justify-center overflow-hidden rounded-full border-light-100 bg-dark-100 text-2xl text-dark-100 transition-all duration-200 group-hover:border group-hover:text-light-100 group-hover:delay-200 group-active:border group-active:text-light-100 group-active:delay-200 lg:size-14"
        >
          <span className="absolute inset-0 rounded-full bg-light-100 transition-transform duration-200 ease-[cubic-bezier(0.7,0,0.2,1)] group-hover:transform-[translate3d(100%,0,0)] group-hover:delay-200 group-active:transform-[translate3d(100%,0,0)] group-active:delay-200"></span>
          <span className="relative block overflow-hidden">
            <span className="relative block delay-200 group-hover:animate-btn-hover-delayed group-active:animate-btn-hover-delayed">
              <ArrowRightIcon size={24} />
            </span>
          </span>
        </a>
      </motion.div>
    </section>
  );
};

export default Hero;
