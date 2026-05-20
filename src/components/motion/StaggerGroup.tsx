"use client";

import { motion } from "framer-motion";
import { ReactNode } from "react";
import { useReducedMotion } from "@/hooks/useReducedMotion";

interface StaggerGroupProps {
  children: ReactNode;
  className?: string;
  staggerDelay?: number;
  containerDelay?: number;
  once?: boolean;
}

const containerVariants = (staggerDelay: number, reduced: boolean) => ({
  hidden: {},
  visible: {
    transition: {
      staggerChildren: reduced ? 0 : staggerDelay,
    },
  },
});

export const staggerItemVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.7,
      ease: [0.25, 0.46, 0.45, 0.94] as [number, number, number, number],
    },
  },
};

export function StaggerGroup({
  children,
  className,
  staggerDelay = 0.15,
  containerDelay = 0,
  once = true,
}: StaggerGroupProps) {
  const reduced = useReducedMotion();

  return (
    <motion.div
      className={className}
      variants={containerVariants(staggerDelay, reduced)}
      initial="hidden"
      whileInView="visible"
      viewport={{ once, margin: "-80px" }}
      transition={{ delay: containerDelay }}
    >
      {children}
    </motion.div>
  );
}
