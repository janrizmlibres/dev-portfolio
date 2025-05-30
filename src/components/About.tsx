import TechToolsPanel from "./shared/TechToolsPanel";
import ButtonPrompt from "./shared/ButtonPrompt";

const About = () => {
  return (
    <section className="custom-container px-12 mt-48" id="about">
      <div className="flex items-start mb-24">
        <h2 className="flex-3 font-fira-code font-semibold">
          &hellip; /About me &hellip;
        </h2>
        <p className="flex-4 text-gray-100 text-xl">
          Hello! I'm Janriz. I'm a full-stack developer with 2 years of
          experience.
        </p>
      </div>

      <div className="grid grid-cols-4 gap-4">
        <TechToolsPanel
          className="col-span-2"
          title="Front-end"
          body="TypeScript / React / React Native / NextJs (App Router) / Vite / Vue / Vitest / Pinia"
          active
        />

        <TechToolsPanel
          className="row-2"
          title="Styles"
          body="SCSS / SASS / Tailwind / Shadcn / CSS Modules"
        />

        <div className="row-2 flex items-center justify-center">
          <ButtonPrompt iconName="Github" />
        </div>

        <TechToolsPanel
          className="row-3 col-span-2"
          title="Back-end"
          body="PostgreSQL / MySQL / MS SQL Server / Node.js / Express / Prisma / MongoDB / ASP.NET / Entity Framework"
        />

        <div className="row-4 flex items-center text-gray-100">
          <p>
            Some of my favorite technologies, topics, or tools that I worked
            with
          </p>
        </div>

        <TechToolsPanel
          className="row-4 col-2"
          title="DevOps"
          body="Docker / GitHub Actions (CI/CD) / Bash"
        />

        <div className="col-start-3 col-span-2 row-span-3">
          <div className="w-2/3 h-full ml-auto rounded-4xl bg-gray-100"></div>
        </div>
      </div>

      <h1 className="text-right font-fira-code text-9xl font-semibold my-8">
        Work
      </h1>
    </section>
  );
};

export default About;
