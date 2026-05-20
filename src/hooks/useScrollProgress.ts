"use client";

import { useRef } from "react";
import { useScroll, MotionValue } from "framer-motion";

type ScrollOffset = ["start end" | "end start" | "start start" | "end end", "start end" | "end start" | "start start" | "end end"];

export function useScrollProgress(
  offset: ScrollOffset = ["start end", "end start"]
): { ref: React.RefObject<HTMLDivElement | null>; scrollYProgress: MotionValue<number> } {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset });
  return { ref, scrollYProgress };
}
