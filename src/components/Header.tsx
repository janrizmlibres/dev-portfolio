import { motion } from "motion/react";

import { animateOnScroll, fadeDown, fadeRight } from "../animation";
import LinksHolder from "./shared/LinksHolder";

const Header = () => {
  return (
    <header>
      <nav className="relative px-12 py-6">
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
        <motion.div {...animateOnScroll(fadeDown)}>
          <LinksHolder
            links={[
              { name: "About" },
              { name: "Work" },
              { name: "Projects" },
              { name: "Contacts" },
            ]}
            className="mx-auto my-4 w-fit"
          />
        </motion.div>
      </nav>
    </header>
  );
};

export default Header;
