interface Props {
  title: string;
  body: string;
  className?: string;
}

const TechToolsPanel = ({ title, body, className }: Props) => {
  return (
    <div className={`p-6 rounded-4xl border-1 border-gray-200 ${className}`}>
      <h2>{title}</h2>
      <p>{body}</p>
    </div>
  );
};

export default TechToolsPanel;
