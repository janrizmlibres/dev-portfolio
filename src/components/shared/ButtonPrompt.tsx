import { ArrowUpRightIcon } from "@phosphor-icons/react";

import { cn, getIcon } from "../../utils";
interface Props {
  iconName: string;
  weight?: "fill" | "regular";
  href?: string;
  className?: string;
}

const ButtonPrompt = ({
  iconName,
  weight = "fill",
  href = "#",
  className,
}: Props) => {
  return (
    <div className={cn("group flex w-fit", className)}>
      <a
        href={href}
        className="flex size-11 items-center justify-center rounded-full border-1 border-gray-100 transition-transform duration-300 group-hover:translate-x-9 sm:size-14"
        target="_blank"
      >
        {getIcon(iconName, 24, weight, "max-md:text-5xl")}
      </a>
      <a
        href={href}
        className="-ml-3 flex size-11 items-center justify-center rounded-full bg-light-100 text-dark-100 transition-transform duration-300 group-hover:-translate-x-9 sm:-ml-5 sm:size-14"
        target="_blank"
      >
        <ArrowUpRightIcon size={24} />
      </a>
    </div>
  );
};

export default ButtonPrompt;
