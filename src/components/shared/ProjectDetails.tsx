import ButtonPrompt from "./ButtonPrompt";

interface Props {
  title: string;
  tools: string[];
  children: React.ReactNode;
}

const ProjectDetails = ({ title, tools, children }: Props) => {
  return (
    <div className="w-9/10">
      <h3 className="mb-6 text-2xl">{title}</h3>
      <div className="flex flex-wrap gap-x-4 gap-y-3 mb-12">
        {tools.map((tool, i) => (
          <div key={i} className="tech-item">
            {tool}
          </div>
        ))}
      </div>

      <p className="text-gray-100 mb-12">{children}</p>

      <ButtonPrompt iconName="Github" />
    </div>
  );
};

export default ProjectDetails;
