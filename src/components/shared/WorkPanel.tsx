interface Props {
  years: string;
  duration: string;
  company: string;
  role: string;
  tech: string;
  isLast?: boolean;
}

const WorkPanel = ({
  years,
  duration,
  company,
  role,
  tech,
  isLast = false,
}: Props) => {
  return (
    <div
      className={`cursor-default hover:bg-light-100 transition-all duration-150 group border-gray-200 ${
        isLast ? "border-y" : "border-t"
      }`}
    >
      <div className="custom-container px-12 py-4 flex items-center gap-4">
        <div className="flex-1 text-gray-100 group-hover:text-gray-200">
          <p className="text-2xl">{years}</p>
          <p className="text-sm">{duration}</p>
        </div>
        <p className="flex-2 text-xl group-hover:text-gray-200">{company}</p>
        <div className="font-fira-code text-light-100 text-xl flex-3 group-hover:text-gray-200">
          <span>{role}</span> | <span>{tech}</span>
        </div>
      </div>
    </div>
  );
};

export default WorkPanel;
