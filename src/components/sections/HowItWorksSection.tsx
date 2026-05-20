"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { StaggerGroup, staggerItemVariants } from "@/components/motion/StaggerGroup";
import { FadeInView } from "@/components/motion/FadeInView";
import { TextReveal } from "@/components/motion/TextReveal";

const steps = [
  {
    number: "01",
    title: "Scoop",
    description:
      "Add one heaped teaspoon of Fungy to your favourite hot or cold beverage. It blends instantly — no clumping, no fuss.",
    emoji: "🥄",
  },
  {
    number: "02",
    title: "Dissolve",
    description:
      "Stir or froth for 30 seconds. The earthy, smooth flavour pairs perfectly with oat milk, almond milk, or just hot water.",
    emoji: "☁️",
  },
  {
    number: "03",
    title: "Perform",
    description:
      "Feel the difference within 20 minutes. Clean energy, quiet focus, and a calm clarity that carries you through the day.",
    emoji: "✨",
  },
];

export function HowItWorksSection() {
  const svgRef = useRef<SVGSVGElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start 0.8", "end 0.4"],
  });

  const pathLength = useTransform(scrollYProgress, [0, 1], [0, 1]);

  return (
    <section className="bg-surface py-24 md:py-36 section-padding overflow-hidden">
      <div className="max-w-7xl mx-auto" ref={containerRef}>
        <FadeInView className="text-center mb-6">
          <span className="text-xs font-medium tracking-[0.12em] uppercase text-sage">
            How It Works
          </span>
        </FadeInView>
        <TextReveal
          text="Three steps to a better morning."
          as="h2"
          className="text-center mb-20"
          wordClassName="text-display-lg font-bold text-ink"
        />

        <div className="relative">
          <svg
            ref={svgRef}
            className="absolute top-12 left-0 right-0 w-full h-8 hidden md:block"
            viewBox="0 0 1000 40"
            fill="none"
            preserveAspectRatio="none"
          >
            <motion.path
              d="M 165 20 C 330 0, 420 40, 500 20 C 580 0, 670 40, 835 20"
              stroke="#E0CDB8"
              strokeWidth="1.5"
              strokeDasharray="6 6"
              fill="none"
              style={{ pathLength }}
            />
          </svg>

          <StaggerGroup className="grid grid-cols-1 md:grid-cols-3 gap-10 relative z-10">
            {steps.map((step) => (
              <motion.div
                key={step.number}
                variants={staggerItemVariants}
                className="flex flex-col items-center text-center"
              >
                <div className="w-16 h-16 rounded-full bg-canvas border-2 border-sand-light flex items-center justify-center text-2xl mb-6 relative z-10">
                  {step.emoji}
                </div>
                <span className="text-xs font-semibold tracking-widest text-sand mb-2 uppercase">
                  {step.number}
                </span>
                <h3 className="text-xl font-bold text-ink mb-3">{step.title}</h3>
                <p className="text-sm text-mist leading-relaxed max-w-xs">
                  {step.description}
                </p>
              </motion.div>
            ))}
          </StaggerGroup>
        </div>
      </div>
    </section>
  );
}
