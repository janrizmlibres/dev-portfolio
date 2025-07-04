import { ListIcon } from "@phosphor-icons/react";
import { motion } from "motion/react";

import { animateOnScroll, fadeDown, fadeRight } from "../animation";
import { cn } from "../utils";
import LinksHolder from "./shared/LinksHolder";

interface Props {
  isOpen: boolean;
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

const Header = ({ isOpen, setIsOpen }: Props) => {
  return (
    <header className="fixed top-0 z-2 w-full bg-dark-100 px-12 py-12 md:py-6">
      <motion.a
        {...animateOnScroll(fadeRight)}
        href="#"
        className="absolute top-1/2 left-6 z-1 -translate-y-1/2 text-xl sm:left-10 lg:left-12"
      >
        <h1>
          Janriz
          <br />
          Libres
        </h1>
      </motion.a>

      <motion.nav
        {...animateOnScroll(fadeDown)}
        className={cn(
          "max-md:mobile-nav",
          isOpen ? "max-md:nav-open" : "max-md:nav-close"
        )}
      >
        <LinksHolder
          links={[
            { name: "About" },
            { name: "Work" },
            { name: "Projects" },
            { name: "Contacts" },
          ]}
          setIsOpen={setIsOpen}
          className="mx-auto my-4 w-fit items-center justify-center max-md:flex-col max-md:text-lg"
        />
      </motion.nav>

      <motion.button
        {...animateOnScroll(fadeRight)}
        className={cn(
          "absolute top-1/2 right-4 z-2 -translate-y-1/2 sm:right-8 md:hidden",
          isOpen && "hidden"
        )}
        onClick={() => setIsOpen((prev) => !prev)}
      >
        <ListIcon size={32} />
      </motion.button>
    </header>
  );
};

export default Header;
