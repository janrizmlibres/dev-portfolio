import { motion } from "motion/react";

import { animateOnScroll, fadeLeft, fadeRight, fadeUp } from "../animation";
import ButtonPrompt from "./shared/ButtonPrompt";
import TechToolsPanel from "./shared/TechToolsPanel";
import WorkPanel from "./shared/WorkPanel";
import profile from "../assets/profile.jpg";

const About = () => {
  return (
    <section className="ovderflow-x-hidden relative mt-48 mb-32">
      <div id="about" className="absolute -top-32"></div>

      <section className="custom-container px-4 sm:px-8 lg:px-12">
        <div className="mb-8 flex flex-col items-start gap-y-8 md:mb-24 md:flex-row">
          <motion.h2
            {...animateOnScroll(fadeRight)}
            className="flex-3 subheading"
          >
            &hellip; /About me &hellip;
          </motion.h2>
          <motion.p
            {...animateOnScroll(fadeUp)}
            className="flex-4 text-gray-100 sm:text-lg md:text-xl"
          >
            Hello! I'm Janriz. I'm a <em>full-stack developer</em> with more
            than <em>1 year</em> of experience.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 gap-4 max-md:justify-items-center md:grid-cols-4">
          <TechToolsPanel
            className="max-md:row-2 md:col-span-2"
            title="Front-end"
            active
          >
            TypeScript / React / React Native / NextJs (App Router) / Vite / Vue
            / Vitest / Mocha / Chai / Pinia
          </TechToolsPanel>

          <TechToolsPanel className="row-2 max-md:hidden" title="Styles">
            SCSS / SASS / Tailwind / Shadcn / CSS Modules
          </TechToolsPanel>

          <motion.div
            {...animateOnScroll(fadeLeft)}
            className="row-2 hidden items-center justify-center md:flex"
          >
            <ButtonPrompt
              iconName="Github"
              href="https://github.com/janrizmlibres"
            />
          </motion.div>

          <div className="row-3 flex w-full md:hidden">
            <TechToolsPanel className="flex-3" title="Styles">
              SCSS / SASS / Tailwind / Shadcn / CSS Modules
            </TechToolsPanel>

            <motion.div
              {...animateOnScroll(fadeLeft)}
              className="flex flex-2 items-center justify-center"
            >
              <ButtonPrompt
                iconName="Github"
                href="https://github.com/janrizmlibres"
              />
            </motion.div>
          </div>

          <TechToolsPanel
            className="row-4 md:col-span-2 md:row-3"
            title="Back-end"
          >
            PostgreSQL / MySQL / MS SQL Server / Node.js / Express / MongoDB /
            ASP.NET / Entity Framework
          </TechToolsPanel>

          <motion.div
            {...animateOnScroll(fadeRight)}
            className="row-4 hidden w-9/10 items-center text-gray-100 md:flex"
          >
            <p>
              Some of my <em>favorite technologies, topics, or tools</em> that I
              worked with
            </p>
          </motion.div>

          <TechToolsPanel className="col-2 row-4 max-md:hidden" title="DevOps">
            Docker / GitHub Actions (CI/CD) / Bash
          </TechToolsPanel>

          <div className="row-5 flex gap-4 md:hidden">
            <motion.div
              {...animateOnScroll(fadeRight)}
              className="flex flex-1 items-center text-gray-100"
            >
              <p className="pl-2">
                Some of my <em>favorite technologies, topics, or tools</em> that
                I worked with
              </p>
            </motion.div>

            <TechToolsPanel className="flex-2" title="DevOps">
              Docker / GitHub Actions (CI/CD) / Bash
            </TechToolsPanel>
          </div>

          <motion.div
            {...animateOnScroll(fadeUp)}
            className="row-start-1 max-md:hidden md:col-span-2 md:col-start-3 md:row-span-3"
          >
            <div className="ml-auto h-full w-9/10 overflow-hidden rounded-4xl bg-profile bg-size-[auto_120%] bg-center transition-all duration-300 hover:bg-size-[auto_130%] active:bg-size-[auto_130%] max-md:h-64 max-md:w-full lg:w-2/3"></div>
          </motion.div>

          <motion.div className="mb-20 max-w-sm overflow-hidden rounded-4xl md:hidden">
            <img
              src={profile}
              alt="Profile Image"
              className="object-cover transition-transform duration-300 hover:scale-110 active:scale-110"
            />
          </motion.div>
        </div>
      </section>

      <section className="relative">
        <div id="work" className="absolute -top-32"></div>

        <motion.h3
          {...animateOnScroll(fadeUp)}
          className="custom-container mt-8 mb-4 px-4 text-right large-text text-5xl sm:my-8 sm:px-8 sm:text-7xl/12 sm:max-md:mt-12 lg:px-12 lg:text-9xl/23"
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
          {...animateOnScroll(fadeUp)}
          className="custom-container mt-6 px-4 text-right text-xl sm:px-8 lg:px-12"
        >
          <p className="text-gray-100">Work experience</p>
          <p className="italic">1 year 1 month</p>
        </motion.div>
      </section>
    </section>
  );
};

export default About;
