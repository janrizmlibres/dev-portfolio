import LinksHolder from "./shared/LinksHolder";
import SocialTag from "./shared/SocialTag";
import TechToolsPanel from "./shared/TechToolsPanel";
import { socialsPlusEmail } from "../data";
import { motion } from "motion/react";
import { animateOnScroll, fadeLeft, fadeRight, fadeUp } from "../animation";

const Footer = () => {
  return (
    <section className="custom-container px-12 grid grid-cols-6 items-end gap-x-4 gap-y-12 mb-8">
      <div className="col-span-4">
        <motion.h1
          {...animateOnScroll(fadeRight)}
          className="font-fira-code text-7xl/17 font-semibold lg:large-text mb-12"
        >
          Janriz
        </motion.h1>
        <div className="flex items-center gap-4">
          <motion.p
            {...animateOnScroll(fadeRight)}
            className="medium-text flex-1/4"
          >
            Full-stack
            <br />
            developer
          </motion.p>
          <motion.h1
            {...animateOnScroll(fadeLeft)}
            className="font-fira-code text-7xl/17 font-semibold lg:large-text flex-3/4"
          >
            Libres
          </motion.h1>
        </div>
      </div>

      <div className="col-span-2">
        <motion.h2
          {...animateOnScroll(fadeLeft)}
          className="subheading text-2xl pl-2 mb-6"
        >
          &hellip; /Contacts &hellip;
        </motion.h2>

        <motion.div {...animateOnScroll(fadeUp)}>
          <LinksHolder
            links={[{ name: "Main" }, { name: "About" }, { name: "Projects" }]}
            className="justify-between mb-6"
          />
        </motion.div>

        <TechToolsPanel title="Site">
          Developed by ME /<br />
          Designed by Taisia /<br />
          Powered by React
        </TechToolsPanel>
      </div>

      {socialsPlusEmail.map((social) => (
        <motion.div {...animateOnScroll(fadeUp)}>
          <SocialTag key={social.name} social={social} />
        </motion.div>
      ))}
    </section>
  );
};

export default Footer;
