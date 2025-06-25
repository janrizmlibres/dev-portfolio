interface Props {
  title: string;
  active?: boolean;
  className?: string;
  children?: React.ReactNode;
}

const TechToolsPanel = ({ title, className, children }: Props) => {
  return (
    <div
      className={[
        "group p-6 rounded-4xl border-1 border-gray-200 overflow-hidden relative text-gray-100 hover:text-gray-200",
        `transition-all duration-200 ease-in-out hover:transition-all hover:duration-500 hover:ease-in-out ${className}`,
      ].join(" ")}
    >
      <h3 className="text-2xl mb-3">{title}</h3>
      <p className="font-fira-code font-medium leading-8">{children}</p>
      <span
        className={[
          "w-3/2 h-0 pt-[150%] object-contain bg-light-100 absolute top-1/2 left-1/2 m-[-75%] opacity-100 rounded-full",
          "scale-0 translate-z-0 transition-all duration-200 ease-in-out -z-1 group-hover:transition-all group-hover:duration-500",
          "group-hover:ease-in-out group-hover:scale-100 group-hover:translate-z-0",
        ].join(" ")}
      ></span>
    </div>
  );
};

export default TechToolsPanel;
