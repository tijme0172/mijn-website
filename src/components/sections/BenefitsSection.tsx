"use client";

import { StaggerGroup, staggerItemVariants } from "@/components/motion/StaggerGroup";
import { motion } from "framer-motion";
import { TextReveal } from "@/components/motion/TextReveal";
import { FadeInView } from "@/components/motion/FadeInView";
import { Zap, Brain, Shield, Leaf } from "lucide-react";

const benefits = [
  {
    icon: Zap,
    title: "Clean Energy",
    stat: "All Day",
    description:
      "Cordyceps mushrooms provide sustained energy without the caffeine crash. Feel alert and focused from morning to evening.",
  },
  {
    icon: Brain,
    title: "Sharp Focus",
    stat: "3× Better",
    description:
      "Lion's Mane supports cognitive function and neural growth, helping you think clearer and stay in flow for longer.",
  },
  {
    icon: Shield,
    title: "Immune Support",
    stat: "Daily Defense",
    description:
      "Turkey Tail and Chaga mushrooms are rich in beta-glucans that strengthen your immune system from the inside out.",
  },
  {
    icon: Leaf,
    title: "Gut Health",
    stat: "Better Balance",
    description:
      "Reishi helps regulate inflammation and supports a healthy gut microbiome, improving digestion and overall wellbeing.",
  },
];

export function BenefitsSection() {
  return (
    <section id="benefits" className="bg-surface py-24 md:py-36 section-padding">
      <div className="max-w-7xl mx-auto">
        <FadeInView className="text-center mb-16">
          <span className="text-xs font-medium tracking-[0.12em] uppercase text-sage mb-4 block">
            Why Fungy
          </span>
        </FadeInView>
        <TextReveal
          text="Four reasons to make the switch."
          as="h2"
          className="text-center mb-16"
          wordClassName="text-display-lg font-bold text-ink"
        />

        <StaggerGroup className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {benefits.map((b) => (
            <BenefitCard key={b.title} {...b} />
          ))}
        </StaggerGroup>
      </div>
    </section>
  );
}

function BenefitCard({
  icon: Icon,
  title,
  stat,
  description,
}: (typeof benefits)[0]) {
  return (
    <motion.div
      variants={staggerItemVariants}
      className="bg-canvas border border-sand-light rounded-2xl p-7 flex flex-col gap-4 hover:shadow-lg hover:-translate-y-1 transition-all duration-300"
    >
      <div className="w-11 h-11 rounded-xl bg-espresso/10 flex items-center justify-center">
        <Icon size={20} className="text-espresso" />
      </div>
      <div>
        <p className="text-xs font-semibold tracking-widest uppercase text-sand mb-1">
          {stat}
        </p>
        <h3 className="text-lg font-bold text-ink">{title}</h3>
      </div>
      <p className="text-sm text-mist leading-relaxed">{description}</p>
    </motion.div>
  );
}
