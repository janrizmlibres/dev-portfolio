import { ArrowUpRightIcon } from "@phosphor-icons/react";

interface Props {
  iconName: string;
}

const ButtonPrompt = ({ iconName }: Props) => {
  return (
    <div>
      <div></div>
      <div className="bg-light-100 size-14 flex items-center justify-center">
        <ArrowUpRightIcon size={24} />
      </div>
    </div>
  );
};

export default ButtonPrompt;
