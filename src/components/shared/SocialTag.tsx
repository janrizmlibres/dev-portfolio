import type { Social } from "../../data";
import { getIcon } from "../../utils";

interface Props {
  social: Social;
  className?: string;
}

const SocialTag = ({ social: { name, url }, className }: Props) => {
  return (
    <a
      href={url}
      className={`group relative flex items-center justify-center gap-2 overflow-hidden rounded-full border-1 border-gray-200 px-5 py-3 text-sm italic sm:px-7 ${className}`}
      target="_blank"
      rel="noopener noreferrer"
    >
      <span className="absolute inset-0 -z-1 origin-bottom scale-y-0 bg-light-100 transition-transform duration-300 ease-out group-hover:scale-y-100 group-active:scale-y-100"></span>
      <div className="text-light-100 transition-colors duration-300 group-hover:text-dark-100 group-focus:text-dark-100 group-active:text-dark-100">
        {getIcon(name, 24, "fill")}
      </div>
      <span className="text-gray-100 transition-colors duration-300 group-hover:text-gray-200 group-focus:text-gray-200 group-active:text-gray-200">
        {name}
      </span>
    </a>
  );
};

export default SocialTag;
