import TechToolsPanel from "./shared/TechToolsPanel";
import ButtonPrompt from "./shared/ButtonPrompt";
import WorkPanel from "./shared/WorkPanel";

const About = () => {
  return (
    <section className="mt-48 mb-32" id="about">
      <section className="custom-container px-12">
        <div className="flex items-start mb-24">
          <h2 className="flex-3 subheading">&hellip; /About me &hellip;</h2>
          <p className="flex-4 text-gray-100 text-xl">
            Hello! I'm Janriz. I'm a full-stack developer with 2 years of
            experience.
          </p>
        </div>

        <div className="grid grid-cols-4 gap-4">
          <TechToolsPanel className="col-span-2" title="Front-end" active>
            TypeScript / React / React Native / NextJs (App Router) / Vite / Vue
            / Vitest / Mocha / Chai / Pinia
          </TechToolsPanel>

          <TechToolsPanel className="row-2" title="Styles">
            SCSS / SASS / Tailwind / Shadcn / CSS Modules
          </TechToolsPanel>

          <div className="row-2 flex items-center justify-center">
            <ButtonPrompt iconName="Github" />
          </div>

          <TechToolsPanel className="row-3 col-span-2" title="Back-end">
            PostgreSQL / MySQL / MS SQL Server / Node.js / Express / Prisma /
            MongoDB / ASP.NET / Entity Framework
          </TechToolsPanel>

          <div className="row-4 flex items-center text-gray-100 w-9/10">
            <p>
              Some of my <em>favorite technologies, topics, or tools</em> that I
              worked with
            </p>
          </div>

          <TechToolsPanel className="row-4 col-2" title="DevOps">
            Docker / GitHub Actions (CI/CD) / Bash
          </TechToolsPanel>

          <div className="col-start-3 col-span-2 row-span-3">
            <div className="w-2/3 h-full ml-auto rounded-4xl bg-gray-100"></div>
          </div>
        </div>
      </section>

      <section>
        <h3 className="custom-container large-text text-right my-8 px-12">
          Work
        </h3>

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

        <div className="custom-container px-12 text-right mt-6 text-xl">
          <p className="text-gray-100">Work experience</p>
          <p className="italic">1 year 1 month</p>
        </div>
      </section>
    </section>
  );
};

export default About;
