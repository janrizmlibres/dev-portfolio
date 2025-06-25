import { animateOnScroll, fadeRight } from "../animation";
import LinksHolder from "./shared/LinksHolder";
import { motion } from "motion/react";

const Header = () => {
  return (
    <header>
      <nav className="py-6 px-12 relative">
        <motion.a
          {...animateOnScroll(fadeRight)}
          href="#"
          className="absolute top-1/2 -translate-y-1/2 text-xl"
        >
          <h1>
            Janriz
            <br />
            Libres
          </h1>
        </motion.a>
        <LinksHolder
          links={[
            { name: "About" },
            { name: "Projects" },
            { name: "Contacts" },
          ]}
          className="w-fit mx-auto my-4"
        />
      </nav>
    </header>
  );
};

export default Header;
