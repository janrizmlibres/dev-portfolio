import type { Social } from "../../data";
import { getIcon } from "../../utils";

const SocialTag = ({ social: { name, url } }: { social: Social }) => {
  return (
    <a
      href={url}
      className="flex items-center justify-center gap-2 text-sm italic px-7 py-3 border-1 border-gray-200 rounded-full"
    >
      <div className="text-light-100">{getIcon(name, 24, "fill")}</div>
      <span className="text-gray-100">{name}</span>
    </a>
  );
};

export default SocialTag;
