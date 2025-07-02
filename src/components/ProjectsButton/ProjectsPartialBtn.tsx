import { cn } from "../../utils";

interface Props {
  className?: string;
  delayed?: boolean;
  children: React.ReactNode;
}

const ProjectsPartialBtn = ({
  className,
  delayed = false,
  children,
}: Props) => {
  const delayClasses = delayed
    ? "group-hover:delay-200 group-active:delay-200"
    : "delay-200 group-hover:delay-0 group-active:delay-0";

  return (
    <a
      href="#projects"
      className={cn(
        "relative flex items-center overflow-hidden rounded-full border-light-100 text-xl",
        "text-dark-100 transition-all duration-200 group-hover:border group-hover:text-light-100",
        `group-active:border group-active:text-light-100 ${delayClasses} ${className}`
      )}
    >
      <span
        className={cn(
          "absolute inset-0 rounded-full bg-light-100 transition-transform duration-200",
          "ease-[cubic-bezier(0.7,0,0.2,1)] group-hover:translate-x-full",
          `group-active:translate-x-full ${delayClasses}`
        )}
      ></span>
      <span className="relative block overflow-hidden">
        <span
          className={cn(
            "relative block",
            delayed
              ? "group-hover:animate-btn-hover-delayed group-active:animate-btn-hover-delayed"
              : "group-hover:animate-btn-hover group-active:animate-btn-hover"
          )}
        >
          {children}
        </span>
      </span>
    </a>
  );
};

export default ProjectsPartialBtn;
