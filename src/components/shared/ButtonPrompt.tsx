import { ArrowUpRightIcon } from "@phosphor-icons/react";

import { cn, getIcon } from "../../utils";
interface Props {
  iconName: string;
  href?: string;
  className?: string;
}

const ButtonPrompt = ({ iconName, href = "#", className }: Props) => {
  return (
    <div className={cn("group flex w-fit", className)}>
      <a
        href={href}
        className="flex size-14 items-center justify-center rounded-full border-1 border-gray-100 transition-transform duration-300 group-hover:translate-x-9"
        target="_blank"
      >
        {getIcon(iconName, 24, "fill")}
      </a>
      <a
        href={href}
        className="-ml-5 flex size-14 items-center justify-center rounded-full bg-light-100 text-dark-100 transition-transform duration-300 group-hover:-translate-x-9"
        target="_blank"
      >
        <ArrowUpRightIcon size={24} />
      </a>
    </div>
  );
};

export default ButtonPrompt;
