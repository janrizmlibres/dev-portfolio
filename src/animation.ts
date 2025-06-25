import type { Variants } from "motion";
import type { MotionProps } from "motion/react";

export const fadeUp = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0 },
};

export const fadeDown = {
  hidden: { opacity: 0, y: -50 },
  visible: { opacity: 1, y: 0 },
};

export const fadeLeft = {
  hidden: { opacity: 0, x: 50 },
  visible: { opacity: 1, x: 0 },
};

export const fadeRight = {
  hidden: { opacity: 0, x: -50 },
  visible: { opacity: 1, x: 0 },
};

export const animateOnScroll = (variant: Variants): MotionProps => ({
  variants: variant,
  initial: "hidden",
  whileInView: "visible",
  viewport: { once: true },
  transition: { duration: 0.5, type: "tween" },
});
