"use client";

import { motion } from "framer-motion";
import { TextReveal } from "@/components/motion/TextReveal";
import { FadeInView } from "@/components/motion/FadeInView";
import { ArrowDown } from "lucide-react";
import Link from "next/link";

export function HeroSection() {
  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden bg-canvas">
      <HeroBackground />

      <div className="relative z-10 max-w-5xl mx-auto px-6 md:px-12 text-center pt-24 pb-16">
        <FadeInView delay={0.1} y={20}>
          <span className="inline-flex items-center gap-2 text-xs font-medium tracking-[0.12em] uppercase text-mist border border-sand-light rounded-full px-4 py-2 mb-10">
            <span className="w-1.5 h-1.5 rounded-full bg-sage inline-block" />
            Premium Mushroom Superfood
          </span>
        </FadeInView>

        <TextReveal
          text="Fuel Your Mind."
          as="h1"
          className="mb-2"
          wordClassName="text-display-2xl font-bold text-ink"
          containerDelay={0.2}
          staggerDelay={0.06}
        />
        <TextReveal
          text="Feed Your Body."
          as="h1"
          className="mb-10"
          wordClassName="text-display-2xl font-bold text-espresso"
          containerDelay={0.5}
          staggerDelay={0.06}
        />

        <FadeInView delay={0.9} y={20}>
          <p className="text-lg md:text-xl text-mist max-w-2xl mx-auto leading-relaxed mb-12">
            The mushroom superfood drink that replaces your morning ritual.
            Clean energy, sharp focus, better gut health — without the crash.
          </p>
        </FadeInView>

        <FadeInView delay={1.1} y={20}>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link href="#products" className="btn-primary text-sm px-10 py-4">
              Shop Now
            </Link>
            <Link
              href="#benefits"
              className="btn-secondary text-sm px-10 py-4"
            >
              Learn More
            </Link>
          </div>
        </FadeInView>

        <FadeInView delay={1.4} y={0}>
          <div className="flex items-center justify-center gap-6 mt-14 text-center">
            <Stat value="50k+" label="High Performers" />
            <div className="w-px h-8 bg-sand-light" />
            <Stat value="5" label="Mushroom Blend" />
            <div className="w-px h-8 bg-sand-light" />
            <Stat value="0g" label="Added Sugar" />
          </div>
        </FadeInView>
      </div>

      <motion.button
        onClick={() =>
          document
            .getElementById("benefits")
            ?.scrollIntoView({ behavior: "smooth" })
        }
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center gap-2 text-mist hover:text-espresso transition-colors"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2, duration: 0.8 }}
        aria-label="Scroll down"
      >
        <span className="text-xs tracking-widest uppercase">Scroll</span>
        <motion.div
          animate={{ y: [0, 6, 0] }}
          transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
        >
          <ArrowDown size={16} />
        </motion.div>
      </motion.button>
    </section>
  );
}

function Stat({ value, label }: { value: string; label: string }) {
  return (
    <div className="flex flex-col items-center gap-1">
      <span className="text-xl font-bold text-espresso tracking-tight">
        {value}
      </span>
      <span className="text-xs text-mist tracking-wide uppercase">{label}</span>
    </div>
  );
}

function HeroBackground() {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      <div className="absolute top-1/4 left-1/4 w-[500px] h-[500px] rounded-full bg-sand/20 blur-[100px] -translate-x-1/2 -translate-y-1/2" />
      <div className="absolute bottom-1/4 right-1/4 w-[400px] h-[400px] rounded-full bg-espresso/8 blur-[120px] translate-x-1/2 translate-y-1/2" />
      <div className="absolute top-1/2 left-1/2 w-[300px] h-[300px] rounded-full bg-sage/10 blur-[80px] -translate-x-1/2 -translate-y-1/2" />

      {[...Array(6)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute w-1.5 h-1.5 rounded-full bg-sand/40"
          style={{
            left: `${15 + i * 15}%`,
            top: `${20 + (i % 3) * 20}%`,
          }}
          animate={{
            y: [0, -20, 0],
            opacity: [0.3, 0.7, 0.3],
          }}
          transition={{
            duration: 3 + i * 0.5,
            repeat: Infinity,
            delay: i * 0.4,
            ease: "easeInOut",
          }}
        />
      ))}
    </div>
  );
}
