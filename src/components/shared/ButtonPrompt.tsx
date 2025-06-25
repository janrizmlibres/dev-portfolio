import { ArrowUpRightIcon } from "@phosphor-icons/react";
import { getIcon } from "../../utils";
interface Props {
  iconName: string;
}

const ButtonPrompt = ({ iconName }: Props) => {
  return (
    <div className="group flex w-fit">
      <a
        href="#"
        className="group-hover:translate-x-9 transition-transform duration-300 size-14 border-1 border-gray-100 rounded-full flex items-center justify-center"
      >
        {getIcon(iconName, 24, "fill")}
      </a>
      <a
        href="#"
        className="group-hover:-translate-x-9 transition-transform duration-300 bg-light-100 text-dark-100 rounded-full size-14 -ml-5 flex items-center justify-center"
      >
        <ArrowUpRightIcon size={24} />
      </a>
    </div>
  );
};

export default ButtonPrompt;
