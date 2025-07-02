import type { Variants } from "motion";
import type { MotionProps } from "motion/react";

export const fadeUp = {
  hidden: { opacity: 0, transform: "translateY(50px)" },
  visible: { opacity: 1, transform: "translateY(0px)" },
};

export const fadeDown = {
  hidden: { opacity: 0, transform: "translateY(-50px)" },
  visible: { opacity: 1, transform: "translateY(0px)" },
};

export const fadeLeft = {
  hidden: { opacity: 0, transform: "translateX(50px)" },
  visible: { opacity: 1, transform: "translateX(0px)" },
};

export const fadeRight = {
  hidden: { opacity: 0, transform: "translateX(-50px)" },
  visible: { opacity: 1, transform: "translateX(0px)" },
};

export const animateOnScroll = (variant: Variants): MotionProps => ({
  variants: variant,
  initial: "hidden",
  whileInView: "visible",
  viewport: { once: true, amount: 0.5 },
  transition: { duration: 0.4, type: "tween", ease: "easeOut" },
});
