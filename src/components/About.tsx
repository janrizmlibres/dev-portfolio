import TechToolsPanel from "./shared/TechToolsPanel";
import ButtonPrompt from "./shared/ButtonPrompt";
import WorkPanel from "./shared/WorkPanel";
import { motion } from "motion/react";
import { animateOnScroll, fadeLeft, fadeRight } from "../animation";

const About = () => {
  return (
    <section className="mt-48 mb-32 overflow-x-hidden" id="about">
      <section className="custom-container px-4 sm:px-8 lg:px-12">
        <div className="flex gap-y-8 flex-col md:flex-row items-start mb-24">
          <motion.h2
            {...animateOnScroll(fadeRight)}
            className="flex-3 subheading"
          >
            &hellip; /About me &hellip;
          </motion.h2>
          <motion.p
            {...animateOnScroll(fadeLeft)}
            className="flex-4 text-gray-100 text-xl"
          >
            Hello! I'm Janriz. I'm a <em>full-stack developer</em> with more
            than <em>1 year</em> of experience.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
          <TechToolsPanel
            className="max-md:row-2 md:col-span-2"
            title="Front-end"
            active
          >
            TypeScript / React / React Native / NextJs (App Router) / Vite / Vue
            / Vitest / Mocha / Chai / Pinia
          </TechToolsPanel>
          <TechToolsPanel className="max-md:hidden row-2" title="Styles">
            SCSS / SASS / Tailwind / Shadcn / CSS Modules
          </TechToolsPanel>
          <motion.div
            {...animateOnScroll(fadeLeft)}
            className="row-2 hidden md:flex items-center justify-center"
          >
            <ButtonPrompt iconName="Github" />
          </motion.div>
          <div className="flex row-3 md:hidden">
            <TechToolsPanel className="flex-5" title="Styles">
              SCSS / SASS / Tailwind / Shadcn / CSS Modules
            </TechToolsPanel>

            <motion.div
              {...animateOnScroll(fadeLeft)}
              className="flex flex-4 items-center justify-center"
            >
              <ButtonPrompt iconName="Github" />
            </motion.div>
          </div>
          <TechToolsPanel
            className="row-4 md:row-3 md:col-span-2"
            title="Back-end"
          >
            PostgreSQL / MySQL / MS SQL Server / Node.js / Express / Prisma /
            MongoDB / ASP.NET / Entity Framework
          </TechToolsPanel>
          <motion.div
            {...animateOnScroll(fadeRight)}
            className="row-4 hidden md:flex items-center text-gray-100 w-9/10"
          >
            <p>
              Some of my <em>favorite technologies, topics, or tools</em> that I
              worked with
            </p>
          </motion.div>
          <TechToolsPanel className="max-md:hidden row-4 col-2" title="DevOps">
            Docker / GitHub Actions (CI/CD) / Bash
          </TechToolsPanel>
          <div className="flex row-5 gap-4 md:hidden">
            <motion.div
              {...animateOnScroll(fadeRight)}
              className="flex flex-1 items-center text-gray-100"
            >
              <p className="pl-2">
                Some of my <em>favorite technologies, topics, or tools</em> that
                I worked with
              </p>
            </motion.div>

            <TechToolsPanel className="flex-3" title="DevOps">
              Docker / GitHub Actions (CI/CD) / Bash
            </TechToolsPanel>
          </div>
          <motion.div
            {...animateOnScroll(fadeLeft)}
            className="row-start-1 md:col-start-3 md:col-span-2 md:row-span-3"
          >
            <div className="max-md:w-full max-md:h-64 w-9/10 lg:w-2/3 h-full ml-auto rounded-4xl overflow-hidden bg-profile bg-center bg-size-[auto_120%] grayscale hover:bg-size-[auto_130%] transition-all duration-300"></div>
          </motion.div>
        </div>
      </section>

      <section>
        <motion.h3
          {...animateOnScroll(fadeLeft)}
          className="custom-container font-fira-code text-7xl font-semibold lg:large-text text-right my-8 px-4 sm:px-8 lg:px-12"
        >
          Work
        </motion.h3>

        <WorkPanel
          years="2024"
          duration="3 months"
          company="Elinnov Technologies"
          role="Software Engineer Intern"
          tech="ASP.NET & React"
        />
        <WorkPanel
          years="2023 - 2024"
          duration="10 months"
          company="The Crusader Yearbook"
          role="Web Developer"
          tech="Laravel"
          isLast
        />

        <motion.div
          {...animateOnScroll(fadeLeft)}
          className="custom-container px-4 sm:px-8 lg:px-12 text-right mt-6 text-xl"
        >
          <p className="text-gray-100">Work experience</p>
          <p className="italic">1 year 1 month</p>
        </motion.div>
      </section>
    </section>
  );
};

export default About;
