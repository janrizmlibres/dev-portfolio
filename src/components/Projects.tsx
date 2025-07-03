import { motion } from "motion/react";

import { animateOnScroll, fadeRight } from "../animation";
import { cn } from "../utils";
import ProjectDetails from "./shared/ProjectDetails";
import ProjectPanel from "./shared/ProjectPanel";
import WindowPane from "./shared/WindowPane";

const Projects = () => {
  return (
    <section className="relative custom-container mb-48 px-4 sm:px-8 lg:px-12">
      <div id="projects" className="absolute -top-28"></div>

      <div className="grid grid-cols-5 gap-4 lg:grid-cols-6">
        <motion.h2
          {...animateOnScroll(fadeRight)}
          className="col-span-3 mb-6 pl-2 subheading md:col-start-3"
        >
          &hellip; /Projects &hellip;
        </motion.h2>
      </div>

      <div className="space-y-24">
        <ProjectPanel
          href="https://devflow-clone-app.vercel.app/"
          render={(href) => (
            <>
              <WindowPane
                href={href}
                className="col-span-3 row-span-2"
                backgroundClasses={cn(
                  "bg-project-one-three bg-size-[auto_100%] bg-left",
                  "group-hover:bg-size-[auto_105%] group-active:bg-size-[auto_105%]"
                )}
                segmentClassesArray={[
                  "clip-path-[inset(0_0_calc(50%+0.5rem)_0_round_2rem_2rem_2rem_0)]",
                  "clip-path-[inset(calc(50%-1.5rem)_calc(33.33%+0.33rem)_0_0_round_0_0_2rem_2rem)]",
                  "clip-path-[inset(calc(50%-0.6rem)_20%_25%_calc(100%-(33.33%+0.33rem)-0.1rem))]",
                ]}
                concealerClassesArray={[
                  "right-0 bottom-0 h-[calc(50%+0.5rem)] w-[calc(33.33%+0.33rem)] rounded-tl-[2.5rem]",
                ]}
              />

              <WindowPane
                href={href}
                className="absolute inset-0 col-span-1 col-start-3 row-span-1 row-start-2"
                backgroundClasses="bg-project-one-two bg-size-[auto_120%] bg-center hover:bg-size-[auto_130%] active:bg-size-[auto_130%]"
              />

              <WindowPane
                href={href}
                className="col-start-4 max-lg:hidden"
                backgroundClasses="bg-project-one-one bg-size-[auto_120%] bg-right hover:bg-size-[auto_130%] active:bg-size-[auto_130%]"
              />

              <WindowPane
                href={href}
                className="col-start-2 row-start-3 aspect-square"
                backgroundClasses="bg-project-one-four bg-size-[auto_120%] bg-left hover:bg-size-[auto_130%] active:bg-size-[auto_130%]"
              />
            </>
          )}
        >
          <ProjectDetails
            title="DevFlow"
            href="https://github.com/janrizmlibres/devflow-clone-app"
            tools={["TypeScript", "Nextjs", "MongoDB", "Tailwind"]}
          >
            <em>DevFlow</em> is a modern StackOverflow clone built with Next.js.
            It offers posting, searching, commenting, and analytics. Powered by
            NextAuth for authentication.
          </ProjectDetails>
        </ProjectPanel>

        <ProjectPanel
          href="https://pulse-vr.vercel.app/"
          reverse
          render={(href) => (
            <>
              <WindowPane
                href={href}
                className="col-start-2 aspect-square"
                backgroundClasses="bg-project-two-two bg-size-[auto_120%] bg-center hover:bg-size-[auto_130%] active:bg-size-[auto_130%]"
              />

              <WindowPane
                href={href}
                className="col-span-3 row-span-2 lg:col-span-4"
                backgroundClasses={cn(
                  "bg-project-two-three lg:bg-size-[100%] bg-size-[auto_100%] bg-left lg:bg-center group-hover:lg:bg-size-[105%] ",
                  "group-active:lg:bg-size-[105%] group-hover:bg-size-[auto_105%] group-active:bg-size-[auto_105%]"
                )}
                segmentClassesArray={[
                  cn(
                    "lg:clip-path-[inset(0_0_calc(50%+0.5rem)_calc(25%+0.33rem)_round_2rem_2rem_2rem_0)]",
                    "clip-path-[inset(0_0_calc(50%-0.6rem)_calc(33.33%+0.33rem)_round_2rem_2rem_0_0)]"
                  ),
                  cn(
                    "lg:clip-path-[inset(calc(50%+0.5rem)_calc(25%+0.33rem)_0_0_round_2rem_0_2rem_2rem)]",
                    "clip-path-[inset(calc(50%+0.5rem)_0_0_0_round_2rem_0_2rem_2rem)]"
                  ),
                  "clip-path-[inset(30%_10%_30%_10%)]",
                ]}
                concealerClassesArray={[
                  "top-0 left-0 h-[calc(50%+0.5rem)] w-[calc(33.33%+0.33rem)] rounded-br-[2.5rem] lg:w-[calc(25%+0.33rem)]",
                  "bottom-0 right-0 h-[calc(50%+0.5rem)] w-[calc(25%+0.33rem)] rounded-tl-[2.5rem] max-lg:hidden",
                ]}
              />

              <WindowPane
                href={href}
                className="absolute inset-0 col-span-1 col-start-1 row-span-1 row-start-2"
                backgroundClasses="bg-project-two-one bg-size-[auto_120%] bg-center hover:bg-size-[auto_130%] active:bg-size-[auto_130%]"
              />
            </>
          )}
        >
          <div className="grid-cols-2 gap-4 md:grid">
            <div className="aspect-square max-md:hidden"></div>

            <ProjectDetails
              title="PulseVR"
              tools={["TypeScript", "React.js", "Tailwind"]}
              href="https://github.com/janrizmlibres/pulse-vr"
              className="col-span-2"
            >
              <em>PulseVR</em> is a responsive landing page for a fictional VR
              startup, built with React.js and Tailwind CSS. It showcases modern
              UI/UX design with a clean and mobile-friendly layout.
            </ProjectDetails>
          </div>
        </ProjectPanel>
      </div>
    </section>
  );
};

export default Projects;
