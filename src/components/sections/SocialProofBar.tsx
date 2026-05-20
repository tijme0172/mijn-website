"use client";

import { FadeInView } from "@/components/motion/FadeInView";
import { Star } from "lucide-react";

const pressLogos = [
  "Forbes",
  "Healthline",
  "Well+Good",
  "MindBodyGreen",
  "Vogue",
  "Men's Health",
  "Forbes",
  "Healthline",
  "Well+Good",
  "MindBodyGreen",
  "Vogue",
  "Men's Health",
];

export function SocialProofBar() {
  return (
    <section className="bg-surface-warm border-y border-sand-light py-8 overflow-hidden">
      <FadeInView>
        <div className="flex items-center justify-center gap-1 mb-6">
          {[...Array(5)].map((_, i) => (
            <Star key={i} size={14} className="fill-sand text-sand" />
          ))}
          <span className="ml-2 text-sm text-mist font-medium">
            4.9 · Trusted by 50,000+ high performers
          </span>
        </div>
      </FadeInView>

      <div className="relative">
        <div className="flex animate-marquee gap-16 w-max">
          {pressLogos.map((logo, i) => (
            <span
              key={i}
              className="text-sand font-semibold text-sm tracking-[0.15em] uppercase whitespace-nowrap opacity-60 hover:opacity-100 transition-opacity"
            >
              {logo}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
