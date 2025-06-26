import type { Social } from "../../data";
import { getIcon } from "../../utils";

const SocialTag = ({ social: { name, url } }: { social: Social }) => {
  return (
    <a
      href={url}
      className="flex items-center justify-center gap-2 text-sm italic px-7 py-3 border-1 border-gray-200 rounded-full group relative overflow-hidden"
    >
      <span className="absolute -z-1 inset-0 bg-light-100 scale-y-0 origin-bottom transition-transform duration-300 ease-out group-hover:scale-y-100"></span>
      <div className="text-light-100 group-hover:text-dark-100 group-focus:text-dark-100 group-active:text-dark-100 transition-colors duration-300">
        {getIcon(name, 24, "fill")}
      </div>
      <span className="text-gray-100 group-hover:text-gray-200 group-focus:text-gray-200 group-active:text-gray-200 transition-colors duration-300">
        {name}
      </span>
    </a>
  );
};

export default SocialTag;
