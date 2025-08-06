import type React from "react";

import { cn } from "../../utils";

interface Props {
  href: string;
  reverse?: boolean;
  renderClasses?: string;
  render: (href: string) => React.ReactNode;
  children?: React.ReactNode;
}

const ProjectPanel = ({
  href,
  reverse = false,
  renderClasses = "grid-rows-3",
  render,
  children,
}: Props) => {
  return (
    <div className="grid grid-cols-1 gap-x-4 gap-y-12 md:grid-cols-5 lg:grid-cols-6">
      <div
        className={cn(
          "max-md:row-start-2 md:col-span-2",
          reverse && "md:col-start-4 lg:col-start-5"
        )}
      >
        {children}
      </div>

      <div
        className={cn("md:col-span-3 lg:col-span-4", reverse && "row-start-1")}
      >
        <div
          className={cn(
            "relative grid grid-cols-3 grid-rows-3 gap-4 lg:grid-cols-4",
            renderClasses
          )}
        >
          {render(href)}
        </div>
      </div>
    </div>
  );
};

export default ProjectPanel;
