import { motion } from "motion/react";

import { animateOnScroll, fadeUp } from "../animation";
import { socials } from "../data";
import { cn } from "../utils";
import SocialTag from "./shared/SocialTag";

const Socials = () => {
  return (
    <section className="custom-container space-y-4">
      <motion.div
        {...animateOnScroll(fadeUp)}
        className={[
          "relative flex gap-4 overflow-hidden max-sm:flex-wrap sm:mx-auto sm:w-[485.36px] sm:gap-8 lg:w-[851.33px]",
        ].join(" ")}
      >
        {socials.map((social) => (
          <SocialTag key={social.name} social={social} className="sm:hidden" />
        ))}

        {Array.from({ length: 2 }).map(() => (
          <div
            className={cn(
              "flex gap-8 max-sm:hidden",
              "animate-infinite-slide-fast lg:animate-infinite-slide"
            )}
          >
            {socials.map((social) => (
              <SocialTag
                key={social.name}
                social={social}
                className="max-lg:hidden"
              />
            ))}
            {socials.slice(0, 3).map((social) => (
              <SocialTag
                key={social.name}
                social={social}
                className="lg:hidden"
              />
            ))}
          </div>
        ))}
      </motion.div>

      <motion.div
        {...animateOnScroll(fadeUp)}
        className={[
          "relative mx-auto flex w-[333.97px] gap-8 overflow-hidden max-sm:hidden lg:hidden",
        ].join(" ")}
      >
        {Array.from({ length: 2 }).map(() => (
          <div className="flex animate-infinite-slide-reverse gap-8">
            {socials.slice(3, 5).map((social) => (
              <SocialTag key={social.name} social={social} />
            ))}
          </div>
        ))}
      </motion.div>
    </section>
  );
};

export default Socials;
