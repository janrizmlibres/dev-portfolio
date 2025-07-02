const ProjectPanel = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="relative project-grid">
      <div className="aspect-square"></div>

      <div className="absolute inset-0 project-grid">{children}</div>
    </div>
  );
};

export default ProjectPanel;
