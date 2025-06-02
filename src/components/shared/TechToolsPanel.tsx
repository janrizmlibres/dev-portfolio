interface Props {
  title: string;
  active?: boolean;
  className?: string;
  children?: React.ReactNode;
}

const TechToolsPanel = ({
  title,
  active = false,
  className,
  children,
}: Props) => {
  return (
    <div
      className={`p-6 rounded-4xl border-1 border-gray-200 ${
        active ? "bg-light-100 text-gray-200" : "text-gray-100"
      } ${className}`}
    >
      <h3 className="text-2xl mb-3">{title}</h3>
      <p className="font-fira-code font-medium leading-8">{children}</p>
    </div>
  );
};

export default TechToolsPanel;
