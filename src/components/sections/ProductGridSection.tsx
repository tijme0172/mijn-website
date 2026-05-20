"use client";

import { motion } from "framer-motion";
import { StaggerGroup, staggerItemVariants } from "@/components/motion/StaggerGroup";
import { FadeInView } from "@/components/motion/FadeInView";
import { TextReveal } from "@/components/motion/TextReveal";
import { ShoppingBag } from "lucide-react";

const placeholderProducts = [
  {
    id: "1",
    handle: "fungy-original",
    title: "Fungy Original",
    description: "Our signature blend — Lion's Mane, Reishi, Cordyceps, Chaga & Turkey Tail.",
    badge: "Bestseller",
    price: "€34.95",
    servings: "30 servings",
    emoji: "🍄",
    bg: "#F2EEE8",
  },
  {
    id: "2",
    handle: "fungy-matcha",
    title: "Fungy Matcha",
    description: "Ceremonial-grade matcha with our full mushroom blend. Smooth, earthy perfection.",
    badge: "New",
    price: "€36.95",
    servings: "30 servings",
    emoji: "🍵",
    bg: "#EBF0E8",
  },
  {
    id: "3",
    handle: "fungy-cacao",
    title: "Fungy Cacao",
    description: "Rich dark cacao meets adaptogenic mushrooms. Your evening ritual, reimagined.",
    badge: "Fan Favourite",
    price: "€34.95",
    servings: "30 servings",
    emoji: "🍫",
    bg: "#F0EAE2",
  },
];

export function ProductGridSection() {
  return (
    <section id="products" className="bg-canvas py-24 md:py-36 section-padding">
      <div className="max-w-7xl mx-auto">
        <FadeInView className="text-center mb-6">
          <span className="text-xs font-medium tracking-[0.12em] uppercase text-sage">
            Shop Fungy
          </span>
        </FadeInView>
        <TextReveal
          text="Choose your ritual."
          as="h2"
          className="text-center mb-4"
          wordClassName="text-display-lg font-bold text-ink"
        />
        <FadeInView className="text-center mb-16">
          <p className="text-mist text-lg max-w-md mx-auto">
            Each blend is crafted to support a specific part of your day.
          </p>
        </FadeInView>

        <StaggerGroup className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {placeholderProducts.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </StaggerGroup>

        <FadeInView className="text-center mt-14">
          <a href="#" className="btn-secondary inline-block text-sm">
            View All Products
          </a>
        </FadeInView>
      </div>
    </section>
  );
}

function ProductCard({ product }: { product: (typeof placeholderProducts)[0] }) {
  return (
    <motion.div
      variants={staggerItemVariants}
      whileHover={{ y: -8, scale: 1.02 }}
      transition={{ type: "spring", stiffness: 400, damping: 25 }}
      className="bg-surface rounded-3xl overflow-hidden border border-sand-light/70 cursor-pointer group shadow-sm hover:shadow-xl transition-shadow duration-300"
    >
      <div
        className="h-56 flex items-center justify-center text-7xl relative"
        style={{ backgroundColor: product.bg }}
      >
        <span className="group-hover:scale-110 transition-transform duration-500 block">
          {product.emoji}
        </span>
        <span className="absolute top-4 left-4 text-xs font-semibold tracking-wide bg-espresso text-canvas px-3 py-1.5 rounded-full">
          {product.badge}
        </span>
      </div>

      <div className="p-6">
        <div className="flex items-start justify-between mb-2">
          <h3 className="text-lg font-bold text-ink">{product.title}</h3>
          <span className="text-lg font-bold text-espresso">{product.price}</span>
        </div>
        <p className="text-sm text-mist mb-1">{product.servings}</p>
        <p className="text-sm text-mist leading-relaxed mb-6">{product.description}</p>
        <button className="btn-primary w-full text-sm flex items-center justify-center gap-2">
          <ShoppingBag size={15} />
          Add to Cart
        </button>
      </div>
    </motion.div>
  );
}
