import { getIcon } from "../../utils";

interface Props {
  platform: string;
}

const SocialTag = ({ platform }: Props) => {
  return (
    <a
      href="#"
      className="flex items-center gap-2 text-sm italic px-7 py-3 border-1 border-gray-200 rounded-full"
    >
      <div className="text-light-100">{getIcon(platform, 24, "fill")}</div>
      <span className="text-gray-100">{platform}</span>
    </a>
  );
};

export default SocialTag;
