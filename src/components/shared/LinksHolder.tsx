import { cn } from "../../utils";

interface Link {
  name: string;
  url?: string;
}

interface Props {
  links: Link[];
  className?: string;
}

const LinksHolder = ({ links, className }: Props) => {
  return (
    <ul className={cn("flex gap-x-10 gap-y-8", className)}>
      {links.map((link) => (
        <li key={link.name}>
          <a
            href={`#${
              link.url || link.name.toLowerCase().replace(/\s+/g, "-")
            }`}
            className="text-gray-100 transition-colors duration-300 hover:text-light-100"
          >
            {link.name}
          </a>
        </li>
      ))}
    </ul>
  );
};

export default LinksHolder;
