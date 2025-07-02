import { motion } from "motion/react";

import { animateOnScroll, fadeUp } from "../animation";
import { socials } from "../data";
import SocialTag from "./shared/SocialTag";

const Socials = () => {
  return (
    <section className="custom-container">
      <motion.div
        {...animateOnScroll(fadeUp)}
        className={[
          "relative mx-auto flex gap-8 overflow-hidden lg:w-[851.33px]",
        ].join(" ")}
      >
        {Array.from({ length: 2 }).map(() => (
          <div className="flex animate-infinite-slide gap-8">
            {socials.map((social) => (
              <SocialTag key={social.name} social={social} />
            ))}
          </div>
        ))}
      </motion.div>
    </section>
  );
};

export default Socials;
