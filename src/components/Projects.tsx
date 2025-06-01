import ProjectPanel from "./shared/ProjectPanel";

const Projects = () => {
  return (
    <section className="custom-container px-12 mb-48" id="projects">
      <div className="grid grid-cols-6 gap-4">
        <h2 className="subheading mb-6 pl-2 col-start-3">
          &hellip; /Projects &hellip;
        </h2>
      </div>

      <ProjectPanel />
    </section>
  );
};

export default Projects;
