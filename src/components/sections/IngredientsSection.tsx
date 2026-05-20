"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { FadeInView } from "@/components/motion/FadeInView";
import { useReducedMotion } from "@/hooks/useReducedMotion";

const ingredients = [
  {
    name: "Lion's Mane",
    benefit: "Mental Clarity & Focus",
    description:
      "The ultimate nootropic mushroom. Lion's Mane stimulates nerve growth factor (NGF), supporting memory, focus, and long-term brain health.",
    color: "#F2EEE8",
    accent: "#5C3D2A",
    emoji: "🦁",
  },
  {
    name: "Reishi",
    benefit: "Calm & Stress Relief",
    description:
      "The 'mushroom of immortality'. Reishi is an adaptogen that helps your body manage stress and promotes deep, restorative calm.",
    color: "#EDE9E2",
    accent: "#8B5E3C",
    emoji: "🌿",
  },
  {
    name: "Cordyceps",
    benefit: "Energy & Performance",
    description:
      "Used by elite athletes for centuries. Cordyceps boosts ATP production, giving you clean, sustained energy without stimulants.",
    color: "#E8E3DA",
    accent: "#6B7C59",
    emoji: "⚡",
  },
  {
    name: "Chaga",
    benefit: "Immune Defense",
    description:
      "Nature's most potent antioxidant. Chaga is packed with beta-glucans and polysaccharides that fortify your immune system daily.",
    color: "#F0EBE3",
    accent: "#7A5C3A",
    emoji: "🛡️",
  },
  {
    name: "Turkey Tail",
    benefit: "Gut Health",
    description:
      "The gut-microbiome guardian. Turkey Tail contains prebiotic fiber that feeds beneficial bacteria, supporting digestion and immunity.",
    color: "#E5E0D8",
    accent: "#4E7A5C",
    emoji: "🌿",
  },
];

export function IngredientsSection() {
  const containerRef = useRef<HTMLDivElement>(null);
  const reduced = useReducedMotion();

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  return (
    <section id="ingredients" className="relative">
      <div className="text-center py-20 section-padding bg-canvas border-b border-sand-light">
        <FadeInView>
          <span className="text-xs font-medium tracking-[0.12em] uppercase text-sage mb-4 block">
            The Blend
          </span>
          <h2 className="text-display-lg font-bold text-ink text-balance">
            Five mushrooms. Infinite potential.
          </h2>
          <p className="text-mist text-lg mt-4 max-w-xl mx-auto">
            Each ingredient is selected for its proven adaptogenic properties
            and synergistic effect on your body and mind.
          </p>
        </FadeInView>
      </div>

      {reduced ? (
        <SimpleIngredients />
      ) : (
        <div ref={containerRef} className="relative" style={{ height: `${ingredients.length * 100}vh` }}>
          <div className="sticky top-0 h-screen overflow-hidden">
            {ingredients.map((ing, i) => (
              <IngredientSlide
                key={ing.name}
                ingredient={ing}
                index={i}
                total={ingredients.length}
                scrollYProgress={scrollYProgress}
              />
            ))}
          </div>
        </div>
      )}
    </section>
  );
}

function IngredientSlide({
  ingredient,
  index,
  total,
  scrollYProgress,
}: {
  ingredient: (typeof ingredients)[0];
  index: number;
  total: number;
  scrollYProgress: ReturnType<typeof useScroll>["scrollYProgress"];
}) {
  const segStart = index / total;
  const segEnd = (index + 1) / total;
  const midpoint = (segStart + segEnd) / 2;

  const opacity = useTransform(
    scrollYProgress,
    [
      segStart,
      segStart + 0.05,
      midpoint,
      segEnd - 0.05,
      segEnd,
    ],
    [0, 1, 1, 1, 0]
  );

  const x = useTransform(scrollYProgress, [segStart, segStart + 0.1], [80, 0]);

  const bgOpacity = useTransform(
    scrollYProgress,
    [segStart, segStart + 0.05, segEnd - 0.05, segEnd],
    [0, 1, 1, 0]
  );

  return (
    <motion.div
      className="absolute inset-0 flex items-center section-padding"
      style={{ opacity, backgroundColor: ingredient.color }}
    >
      <motion.div style={{ opacity: bgOpacity }} className="absolute inset-0" />
      <div className="relative z-10 max-w-7xl mx-auto w-full grid md:grid-cols-2 gap-16 items-center">
        <div>
          <span
            className="text-xs font-semibold tracking-[0.15em] uppercase mb-4 block"
            style={{ color: ingredient.accent }}
          >
            {ingredient.benefit}
          </span>
          <h3 className="text-display-xl font-bold text-ink mb-6">
            {ingredient.name}
          </h3>
          <p className="text-mist text-xl leading-relaxed max-w-md">
            {ingredient.description}
          </p>
          <div className="flex items-center gap-3 mt-8">
            <div
              className="w-2 h-2 rounded-full"
              style={{ backgroundColor: ingredient.accent }}
            />
            <span className="text-xs text-mist tracking-widest uppercase">
              Ingredient {index + 1} of {total}
            </span>
          </div>
        </div>

        <motion.div
          className="hidden md:flex justify-center items-center"
          style={{ x }}
        >
          <div
            className="w-72 h-72 rounded-full flex items-center justify-center text-9xl"
            style={{ backgroundColor: `${ingredient.accent}15` }}
          >
            {ingredient.emoji}
          </div>
        </motion.div>
      </div>

      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex gap-2">
        {Array.from({ length: total }).map((_, i) => (
          <div
            key={i}
            className="w-1.5 h-1.5 rounded-full transition-all duration-300"
            style={{
              backgroundColor: i === index ? ingredient.accent : `${ingredient.accent}30`,
            }}
          />
        ))}
      </div>
    </motion.div>
  );
}

function SimpleIngredients() {
  return (
    <div className="section-padding py-16 bg-canvas">
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {ingredients.map((ing) => (
          <div
            key={ing.name}
            className="rounded-2xl p-8 border border-sand-light"
            style={{ backgroundColor: ing.color }}
          >
            <div className="text-5xl mb-4">{ing.emoji}</div>
            <p className="text-xs font-semibold tracking-widest uppercase mb-2"
               style={{ color: ing.accent }}>
              {ing.benefit}
            </p>
            <h3 className="text-xl font-bold text-ink mb-3">{ing.name}</h3>
            <p className="text-sm text-mist leading-relaxed">{ing.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
