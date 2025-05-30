import { GithubLogoIcon } from "@phosphor-icons/react";

const About = () => {
  return (
    <section className="custom-container px-12 mt-48">
      <div className="flex items-start mb-24">
        <h2 className="flex-3 font-semibold">&hellip; /About me &hellip;</h2>
        <p className="flex-4 text-gray-100 text-xl">
          Hello! I'm Janriz. I'm a full-stack developer with 2 years of
          experience.
        </p>
      </div>

      <div className="grid grid-cols-4">
        <div>
          <h2>Front-end</h2>
          <p>TypeScript / React / React Router / NextJs / App Router</p>
        </div>
        <div>
          <h2>Styles</h2>
          <p>SCSS / SASS / PostCSS / Tailwind / Shadcn / CSS Modules</p>
        </div>
        <div>
          <a href="#">
            <GithubLogoIcon size={32} weight="fill" />
          </a>
        </div>
        <div>
          <h2>Back-end</h2>
        </div>
        <div>
          <h2>DevOps</h2>
          <p>Docker / Kubernetes / (CI/CD) / Bash</p>
        </div>
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
