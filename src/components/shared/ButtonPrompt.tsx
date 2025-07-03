import { ArrowUpRightIcon } from "@phosphor-icons/react";

import useBreakpoint from "../../hooks/useBreakpoint";
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
  const breakpoints = useBreakpoint();

  return (
    <div className={cn("group flex w-fit", className)}>
      <a
        href={href}
        className="flex size-10 items-center justify-center rounded-full border-1 border-gray-100 transition-transform duration-300 group-hover:translate-x-7 group-active:translate-x-7 sm:size-14 sm:group-hover:translate-x-9 sm:group-active:translate-x-9"
        target="_blank"
      >
        {getIcon(iconName, breakpoints.sm ? 24 : 20, weight)}
      </a>
      <a
        href={href}
        className="-ml-3 flex size-10 items-center justify-center rounded-full bg-light-100 text-dark-100 transition-transform duration-300 group-hover:-translate-x-7 group-active:-translate-x-7 sm:-ml-5 sm:size-14 sm:group-hover:-translate-x-9 sm:group-active:-translate-x-9"
        target="_blank"
      >
        <ArrowUpRightIcon size={breakpoints.sm ? 24 : 20} />
      </a>
    </div>
  );
};

export default ButtonPrompt;
