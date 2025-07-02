import type React from "react";

import { cn } from "../../utils";

interface Props {
  href: string;
  reverse?: boolean;
  render: (href: string) => React.ReactNode;
  children?: React.ReactNode;
}

const ProjectPanel = ({ href, reverse = false, render, children }: Props) => {
  return (
    <div className="grid grid-cols-6 gap-4">
      <div className={cn("col-span-2", reverse && "col-start-5")}>
        {children}
      </div>

      <div className={cn("col-span-4", reverse && "row-start-1")}>
        <div className="relative grid grid-cols-4 grid-rows-3 gap-4">
          {render(href)}
        </div>
      </div>
    </div>
  );
};

export default ProjectPanel;
