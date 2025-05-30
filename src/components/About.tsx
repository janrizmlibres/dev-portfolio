import { GithubLogoIcon } from "@phosphor-icons/react";
import TechToolsPanel from "./shared/TechToolsPanel";

const About = () => {
  return (
    <section className="custom-container px-12 mt-48">
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
          body="TypeScript / React / React Router / NextJs / App Router"
        />
        <TechToolsPanel
          className="row-2"
          title="Styles"
          body="SCSS / SASS / PostCSS / Tailwind / Shadcn / CSS Modules"
        />
        <div className="row-2">
          <a href="#">
            <GithubLogoIcon size={32} weight="fill" />
          </a>
        </div>
        <TechToolsPanel
          className="row-3 col-span-2"
          title="Back-end"
          body="PostgreSQL / Node.js / Express / Prisma / MongoDB / ORM"
        />
        <TechToolsPanel
          className="row-4 col-2"
          title="DevOps"
          body="Docker / Kubernetes / (CI/CD) / Bash"
        />
        <div>
          <p>
            Some of my favorite technologies, topics, or tools that I worked
            with
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;
