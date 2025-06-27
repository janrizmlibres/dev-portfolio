import TechToolsPanel from "./shared/TechToolsPanel";
import ButtonPrompt from "./shared/ButtonPrompt";
import WorkPanel from "./shared/WorkPanel";
import { motion } from "motion/react";
import { animateOnScroll, fadeLeft, fadeRight } from "../animation";

const About = () => {
  return (
    <section className="mt-48 mb-32" id="about">
      <section className="custom-container px-12">
        <div className="flex items-start mb-24">
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
            Hello! I'm Janriz. I'm a full-stack developer with more than 1 year
            of experience.
          </motion.p>
        </div>

        <div className="grid grid-cols-4 gap-4">
          <TechToolsPanel className="col-span-2" title="Front-end" active>
            TypeScript / React / React Native / NextJs (App Router) / Vite / Vue
            / Vitest / Mocha / Chai / Pinia
          </TechToolsPanel>

          <TechToolsPanel className="row-2" title="Styles">
            SCSS / SASS / Tailwind / Shadcn / CSS Modules
          </TechToolsPanel>

          <motion.div
            {...animateOnScroll(fadeLeft)}
            className="row-2 flex items-center justify-center"
          >
            <ButtonPrompt iconName="Github" />
          </motion.div>

          <TechToolsPanel className="row-3 col-span-2" title="Back-end">
            PostgreSQL / MySQL / MS SQL Server / Node.js / Express / Prisma /
            MongoDB / ASP.NET / Entity Framework
          </TechToolsPanel>

          <motion.div
            {...animateOnScroll(fadeRight)}
            className="row-4 flex items-center text-gray-100 w-9/10"
          >
            <p>
              Some of my <em>favorite technologies, topics, or tools</em> that I
              worked with
            </p>
          </motion.div>

          <TechToolsPanel className="row-4 col-2" title="DevOps">
            Docker / GitHub Actions (CI/CD) / Bash
          </TechToolsPanel>

          <motion.div
            {...animateOnScroll(fadeLeft)}
            className="col-start-3 col-span-2 row-span-3"
          >
            <div className="w-9/10 lg:w-2/3 h-full ml-auto rounded-4xl overflow-hidden bg-profile bg-center bg-size-[auto_120%] grayscale hover:bg-size-[auto_130%] transition-all duration-300"></div>
          </motion.div>
        </div>
      </section>

      <section>
        <motion.h3
          {...animateOnScroll(fadeLeft)}
          className="custom-container font-fira-code text-7xl font-semibold lg:large-text text-right my-8 px-12"
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
          className="custom-container px-12 text-right mt-6 text-xl"
        >
          <p className="text-gray-100">Work experience</p>
          <p className="italic">1 year 1 month</p>
        </motion.div>
      </section>
    </section>
  );
};

export default About;
