interface Props {
  title: string;
  body: string;
  active?: boolean;
  className?: string;
}

const TechToolsPanel = ({ title, body, active = false, className }: Props) => {
  return (
    <div
      className={`p-6 rounded-4xl border-1 border-gray-200 ${
        active ? "bg-light-100 text-gray-200" : "text-gray-100"
      } ${className}`}
    >
      <h2 className="text-2xl mb-3">{title}</h2>
      <p className="font-fira-code font-semibold leading-8">{body}</p>
    </div>
  );
};

export default TechToolsPanel;
