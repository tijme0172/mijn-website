"use client";

import { motion } from "framer-motion";
import { useReducedMotion } from "@/hooks/useReducedMotion";

interface TextRevealProps {
  text: string;
  className?: string;
  wordClassName?: string;
  staggerDelay?: number;
  containerDelay?: number;
  once?: boolean;
  as?: "h1" | "h2" | "h3" | "h4" | "p" | "span";
}

export function TextReveal({
  text,
  className,
  wordClassName,
  staggerDelay = 0.05,
  containerDelay = 0,
  once = true,
  as: Tag = "h2",
}: TextRevealProps) {
  const reduced = useReducedMotion();
  const words = text.split(" ");

  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: reduced ? 0 : staggerDelay,
        delayChildren: containerDelay,
      },
    },
  };

  const wordVariants = {
    hidden: {
      clipPath: "inset(110% 0 0 0)",
      y: "100%",
      opacity: 0,
    },
    visible: {
      clipPath: "inset(0% 0 0 0)",
      y: "0%",
      opacity: 1,
      transition: {
        duration: reduced ? 0 : 0.55,
        ease: [0.2, 0.65, 0.3, 0.9] as [number, number, number, number],
      },
    },
  };

  return (
    <motion.div
      className={className}
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once, margin: "-60px" }}
    >
      <Tag className="overflow-hidden leading-none">
        {words.map((word, i) => (
          <span key={i} className="inline-block overflow-hidden mr-[0.25em] last:mr-0">
            <motion.span
              className={`inline-block ${wordClassName ?? ""}`}
              variants={wordVariants}
            >
              {word}
            </motion.span>
          </span>
        ))}
      </Tag>
    </motion.div>
  );
}
