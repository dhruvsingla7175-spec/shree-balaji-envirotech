import { motion, useInView } from "framer-motion";
import { useRef, ReactNode } from "react";

interface ScrollAnimationWrapperProps {
  children: ReactNode;
  className?: string;
  delay?: number;
  direction?: "up" | "down" | "left" | "right" | "scale";
  duration?: number;
}

const ScrollAnimationWrapper = ({
  children,
  className = "",
  delay = 0,
  direction = "up",
  duration = 0.6,
}: ScrollAnimationWrapperProps) => {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const getInitialState = () => {
    switch (direction) {
      case "up":
        return { opacity: 0, y: 60 };
      case "down":
        return { opacity: 0, y: -60 };
      case "left":
        return { opacity: 0, x: 60 };
      case "right":
        return { opacity: 0, x: -60 };
      case "scale":
        return { opacity: 0, scale: 0.8 };
      default:
        return { opacity: 0, y: 60 };
    }
  };

  const getFinalState = () => {
    switch (direction) {
      case "up":
      case "down":
        return { opacity: 1, y: 0 };
      case "left":
      case "right":
        return { opacity: 1, x: 0 };
      case "scale":
        return { opacity: 1, scale: 1 };
      default:
        return { opacity: 1, y: 0 };
    }
  };

  return (
    <motion.div
      ref={ref}
      initial={getInitialState()}
      animate={isInView ? getFinalState() : getInitialState()}
      transition={{ duration, delay, ease: [0.0, 0.0, 0.2, 1] }}
      className={className}
    >
      {children}
    </motion.div>
  );
};

export default ScrollAnimationWrapper;
