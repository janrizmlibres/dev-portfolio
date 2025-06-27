import SocialTag from "./shared/SocialTag";
import { socials } from "../data";
import { motion } from "motion/react";
import { animateOnScroll, fadeUp } from "../animation";

const Socials = () => {
  return (
    <section className="custom-container">
      <motion.div
        {...animateOnScroll(fadeUp)}
        className={[
          "mx-auto lg:w-[851.33px] overflow-hidden flex gap-8 relative",
        ].join(" ")}
      >
        {Array.from({ length: 2 }).map(() => (
          <div className="flex gap-8 animate-infinite-slide">
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
