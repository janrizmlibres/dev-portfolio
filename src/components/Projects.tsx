import { motion } from "motion/react";

import { animateOnScroll, fadeRight, fadeUp } from "../animation";
import { cn } from "../utils";
import ButtonPrompt from "./shared/ButtonPrompt";
import ProjectDetails from "./shared/ProjectDetails";
import ProjectPanel from "./shared/ProjectPanel";

const Projects = () => {
  return (
    <section
      className="custom-container mb-48 px-4 sm:px-8 lg:px-12"
      id="projects"
    >
      <div className="grid grid-cols-5 gap-4 lg:grid-cols-6">
        <motion.h2
          {...animateOnScroll(fadeRight)}
          className="col-span-3 col-start-3 mb-6 pl-2 subheading"
        >
          &hellip; /Projects &hellip;
        </motion.h2>
      </div>

      <div className="space-y-24">
        <ProjectPanel>
          <motion.div
            {...animateOnScroll(fadeUp)}
            className="group relative col-span-3 row-span-2 flex rounded-4xl md:col-start-3"
          >
            <div className="absolute inset-0 bg-project-one-three bg-size-[auto_100%] bg-left transition-all duration-300 clip-path-[inset(0_0_calc(50%+0.5rem)_0_round_2rem_2rem_2rem_0)] group-hover:bg-size-[auto_105%] group-active:bg-size-[auto_105%]"></div>
            <div className="absolute inset-0 bg-project-one-three bg-size-[auto_100%] bg-left transition-all duration-300 clip-path-[inset(calc(50%-1.5rem)_calc(33.33%+0.33rem)_0_0_round_0_0_2rem_2rem)] group-hover:bg-size-[auto_105%] group-active:bg-size-[auto_105%]"></div>
            <div className="absolute inset-0 bg-project-one-three bg-size-[auto_100%] bg-left transition-all duration-300 clip-path-[inset(calc(50%-0.6rem)_20%_25%_calc(100%-(33.33%+0.33rem)-0.1rem))] group-hover:bg-size-[auto_105%] group-active:bg-size-[auto_105%]"></div>

            <div className="z-1 mt-auto ml-auto h-[calc(50%+0.5rem)] w-[calc(33.33%+0.33rem)] rounded-tl-[2.5rem] bg-dark-100 pt-4 pl-4"></div>
          </motion.div>

          <motion.a
            {...animateOnScroll(fadeUp)}
            className="group absolute inset-0 z-1 col-span-1 col-start-3 row-span-1 row-start-2 flex items-center justify-center overflow-hidden rounded-4xl bg-project-one-two bg-size-[auto_120%] bg-center transition-all duration-300 hover:bg-size-[auto_130%] active:bg-size-[auto_130%] md:col-start-5"
            href="https://devflow-clone-app.vercel.app/"
            target="_blank"
          >
            <div className="absolute inset-0 bg-black opacity-0 transition-opacity duration-300 group-hover:opacity-30"></div>

            <ButtonPrompt
              iconName="Github"
              className="pointer-events-none opacity-0 transition-all duration-300 group-hover:opacity-100 group-active:opacity-100"
            />
          </motion.a>

          <motion.div
            {...animateOnScroll(fadeUp)}
            className="col-start-6 rounded-4xl bg-project-one-one bg-size-[auto_120%] bg-right transition-all duration-300 hover:bg-size-[auto_130%] active:bg-size-[auto_130%] max-lg:hidden"
          ></motion.div>

          <motion.div
            {...animateOnScroll(fadeUp)}
            className="col-start-2 row-start-3 rounded-4xl bg-project-one-four bg-size-[auto_120%] bg-left transition-all duration-300 hover:bg-size-[auto_130%] active:bg-size-[auto_130%] md:col-start-4"
          ></motion.div>

          <div className="col-span-3 row-start-4 md:col-span-2 md:row-span-3 md:row-start-1">
            <ProjectDetails
              title="DevFlow"
              href="https://github.com/janrizmlibres/devflow-clone-app"
              tools={["TypeScript", "Nextjs", "MongoDB", "Tailwind"]}
            >
              <em>DevFlow</em> is a modern StackOverflow clone built with
              Next.js. It offers posting, searching, commenting, and analytics.
              Powered by NextAuth for authentication.
            </ProjectDetails>
          </div>
        </ProjectPanel>

        <ProjectPanel>
          <motion.a
            {...animateOnScroll(fadeUp)}
            className="group relative col-start-2 flex items-center justify-center overflow-hidden rounded-4xl bg-project-two-two bg-size-[auto_120%] bg-center transition-all duration-300 hover:bg-size-[auto_130%] active:bg-size-[auto_130%]"
            href="https://pulse-vr.vercel.app/"
            target="_blank"
          >
            <div className="absolute inset-0 bg-black opacity-0 transition-opacity duration-300 group-hover:opacity-30"></div>

            <ButtonPrompt
              iconName="Github"
              className="pointer-events-none opacity-0 transition-all duration-300 group-hover:opacity-100 group-active:opacity-100"
            />
          </motion.a>

          <motion.div
            {...animateOnScroll(fadeUp)}
            className="group relative col-span-3 row-span-2 row-start-2 flex rounded-4xl lg:col-span-4"
          >
            <div
              className={cn(
                "absolute inset-0 bg-project-two-three bg-size-[auto_100%] bg-center",
                "lg:clip-path-[inset(0_0_calc(50%+0.5rem)_calc(25%+0.33rem)_round_2rem_2rem_2rem_0)]",
                "clip-path-[inset(0_0_calc(50%-0.6rem)_calc(33.33%+0.33rem)_round_2rem_2rem_0_0)]",
                "transition-all duration-300 group-hover:lg:bg-size-[105%] group-active:lg:bg-size-[105%]",
                "group-hover:bg-size-[auto_105%] group-active:bg-size-[auto_105%]",
                "lg:bg-size-[100%]"
              )}
            ></div>
            <div
              className={cn(
                "absolute inset-0 bg-project-two-three bg-size-[auto_100%] bg-center",
                "lg:clip-path-[inset(calc(50%+0.5rem)_calc(25%+0.33rem)_0_0_round_2rem_0_2rem_2rem)]",
                "clip-path-[inset(calc(50%+0.5rem)_0_0_0_round_2rem_0_2rem_2rem)]",
                "transition-all duration-300 group-hover:lg:bg-size-[105%] group-active:lg:bg-size-[105%]",
                "group-hover:bg-size-[auto_105%] group-active:bg-size-[auto_105%]",
                "lg:bg-size-[100%]"
              )}
            ></div>
            <div
              className={cn(
                "absolute inset-0 bg-project-two-three bg-size-[auto_100%] bg-center",
                "clip-path-[inset(30%_10%_30%_10%)] lg:bg-size-[100%]",
                "transition-all duration-300 group-hover:lg:bg-size-[105%] group-active:lg:bg-size-[105%]",
                "group-hover:bg-size-[auto_105%] group-active:bg-size-[auto_105%]"
              )}
            ></div>

            <div className="z-1 h-[calc(50%+0.5rem)] w-[calc(33.33%+0.33rem)] rounded-br-[2.5rem] bg-dark-100 lg:w-[calc(25%+0.33rem)]"></div>
            <div className="z-1 mt-auto ml-auto h-[calc(50%+0.5rem)] w-[calc(25%+0.33rem)] rounded-tl-[2.5rem] bg-dark-100 max-lg:hidden"></div>
          </motion.div>

          <motion.div
            {...animateOnScroll(fadeUp)}
            className="absolute inset-0 z-1 col-span-1 col-start-1 row-span-1 row-start-2 rounded-4xl bg-project-two-one bg-size-[auto_120%] bg-center transition-all duration-300 hover:bg-size-[auto_130%] active:bg-size-[auto_130%]"
          ></motion.div>

          <div className="col-span-3 row-start-4 md:col-span-2 md:col-start-4 md:row-span-2 md:row-start-2 lg:col-start-5">
            <ProjectDetails
              title="PulseVR"
              href="https://github.com/janrizmlibres/pulse-vr"
              tools={["TypeScript", "React.js", "Tailwind"]}
            >
              <em>PulseVR</em> is a landing page website for a fictional startup
              that offers virtual reality experiences. It features a modern
              design and a responsive layout. Built with React.js and Tailwind,
              showcasing my skills in <em>UI/UX</em> design.
            </ProjectDetails>
          </div>
        </ProjectPanel>
      </div>
    </section>
  );
};

export default Projects;
