import { motion } from "motion/react";

import { animateOnScroll, fadeLeft, fadeRight, fadeUp } from "../animation";
import { socialsPlusEmail } from "../data";
import LinksHolder from "./shared/LinksHolder";
import SocialTag from "./shared/SocialTag";
import TechToolsPanel from "./shared/TechToolsPanel";

const Footer = () => {
  return (
    <section className="mb-8">
      <div className="custom-container grid grid-cols-2 items-end gap-x-4 gap-y-8 md:gap-y-12 lg:grid-cols-6">
        <div className="col-span-6 max-md:row-start-2 md:col-span-4">
          <motion.h1
            {...animateOnScroll(fadeRight)}
            className="mb-4 large-text text-5xl md:mb-12 md:text-8xl/17 lg:text-9xl/23"
          >
            Janriz
          </motion.h1>
          <div className="flex items-center gap-4">
            <motion.p
              {...animateOnScroll(fadeRight)}
              className="flex-1/4 text-xs text-gray-100 md:text-xl"
            >
              Full-stack
              <br />
              developer
            </motion.p>
            <motion.h1
              {...animateOnScroll(fadeLeft)}
              className="flex-1/1 large-text text-5xl md:flex-3/4 md:text-8xl/17 lg:text-9xl/23"
            >
              Libres
            </motion.h1>
          </div>
        </div>

        <div id="contacts" className="col-span-6 md:col-span-2">
          <motion.h2
            {...animateOnScroll(fadeUp)}
            className="mb-6 pl-2 subheading text-2xl"
          >
            &hellip; /Contacts &hellip;
          </motion.h2>

          <motion.div {...animateOnScroll(fadeUp)} className="max-w-3/4 px-2">
            <LinksHolder
              links={[
                { name: "Main" },
                { name: "About" },
                { name: "Work" },
                { name: "Projects" },
              ]}
              className="mb-6 justify-between"
            />
          </motion.div>

          <TechToolsPanel title="Site" className="min-w-3/4 max-md:max-w-fit">
            Handcrafted by ME /<br />
            Powered by React
          </TechToolsPanel>
        </div>

        {socialsPlusEmail.map((social) => (
          <motion.div {...animateOnScroll(fadeRight)} className="max-lg:hidden">
            <SocialTag key={social.name} social={social} />
          </motion.div>
        ))}

        <motion.div
          {...animateOnScroll(fadeRight)}
          className="col-span-6 grid grid-cols-2 gap-4 md:grid-cols-4 lg:hidden"
        >
          {socialsPlusEmail.map((social) => (
            <SocialTag key={social.name} social={social} />
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Footer;
