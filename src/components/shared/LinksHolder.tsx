import { motion } from "motion/react";
import { animateOnScroll, fadeDown } from "../../animation";

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
    <motion.ul
      {...animateOnScroll(fadeDown)}
      className={`flex gap-10 ${className}`}
    >
      {links.map((link) => (
        <li key={link.name}>
          <a
            href={`#${
              link.url || link.name.toLowerCase().replace(/\s+/g, "-")
            }`}
            className="text-gray-100 hover:text-light-100 transition-colors duration-300"
          >
            {link.name}
          </a>
        </li>
      ))}
    </motion.ul>
  );
};

export default LinksHolder;
