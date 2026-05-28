"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Plus, ArrowRight } from "lucide-react";
import { FadeInView } from "@/components/motion/FadeInView";

// ─── DATA ────────────────────────────────────────────────────────────────────

type FaqItem = { q: string; a: string };

type Category = {
  id: string;
  label: string;
  num: string;
  title: string;
  items: FaqItem[];
};

const categories: Category[] = [
  {
    id: "coffee",
    label: "The Coffee",
    num: "01",
    title: "The Coffee",
    items: [
      {
        q: "What is Fungy Mushroom Coffee?",
        a: "Fungy is organic Arabica coffee blended with six functional mushrooms — Lion's Mane, Cordyceps, Reishi, Turkey Tail, Shiitake and King Trumpet. Each cup delivers 2000mg of mushroom extract alongside a gentle 48mg of caffeine. Same morning ritual. Completely different experience inside the body.",
      },
      {
        q: "Does it taste like mushrooms?",
        a: "No. Fungy tastes like coffee — rich, smooth, familiar. The mushroom extracts are tasteless at this concentration. Hand a cup to someone without telling them, and they would call it a good coffee. Nothing more, nothing less.",
      },
      {
        q: "How many cups are in a bag?",
        a: "Each bag contains 180g — enough for 30 cups at 6g per serving. One bag. One full month of mornings.",
      },
      {
        q: "How much caffeine is in a cup?",
        a: "48mg per cup — roughly half the caffeine of a standard espresso. Enough to feel the lift. Not enough to trigger the jitters, the anxiety, or the 3pm crash.",
      },
      {
        q: "Are the ingredients organic?",
        a: "Yes. Every ingredient is 100% organic — the Arabica coffee base and all six mushroom extracts.",
      },
    ],
  },
  {
    id: "howto",
    label: "How to Make It",
    num: "02",
    title: "How to Make It",
    items: [
      {
        q: "How do I make Fungy?",
        a: "Add one heaped teaspoon (around 6g) to your cup. Pour over hot water, cold water, or milk — whichever you prefer. Mix with a frother for 20–30 seconds until smooth. Done.",
      },
      {
        q: "Can I make it iced?",
        a: "Yes. Use cold water or cold milk, froth well, and pour over ice. Works just as well cold as it does hot.",
      },
      {
        q: "Can I add milk or sweeteners?",
        a: "Absolutely. Fungy works with any milk — dairy, oat, almond, whatever you use. For sweeteners, a little honey goes especially well. Our founder Tijme has his that way every morning.",
      },
      {
        q: "Do I need any special equipment?",
        a: "A handheld frother is all you need for a smooth, evenly mixed cup. Most people already have one. A small whisk works fine too.",
      },
    ],
  },
  {
    id: "mushrooms",
    label: "The Mushrooms",
    num: "03",
    title: "The Mushrooms",
    items: [
      {
        q: "Which mushrooms are in Fungy, and what do they do?",
        a: "Six mushrooms, each with a specific role. Lion's Mane for calm, clear focus. Cordyceps for natural sustained energy at the cellular level. Reishi for stress relief and deeper sleep. Turkey Tail for gut health and microbiome support. Shiitake for daily immune support. King Trumpet for long-term cellular protection. Each cup delivers 2000mg of combined extract — not a token amount.",
      },
      {
        q: "How much mushroom extract is in each cup?",
        a: "2000mg of functional mushroom extract per serving. Every batch is third-party lab tested to confirm exactly what is in the cup.",
      },
      {
        q: "Is Fungy third-party tested?",
        a: "Yes. Every batch is independently tested before it ships. No proprietary blends, no hidden fillers — exactly what is on the label is what is in the bag.",
      },
      {
        q: "When will I start to notice a difference?",
        a: "Most people notice smoother energy and fewer jitters from the first cup. The deeper benefits — better sleep, a calmer gut, more sustained focus — typically build over two to four weeks of consistent daily use.",
      },
    ],
  },
  {
    id: "safety",
    label: "Safety",
    num: "04",
    title: "Safety",
    items: [
      {
        q: "Is Fungy safe?",
        a: "Fungy is made from natural, organic ingredients and is safe for most healthy adults. As with any supplement, speak to your doctor if you have specific health concerns before starting.",
      },
      {
        q: "Can I take it if I'm pregnant or breastfeeding?",
        a: "We always recommend speaking to your doctor first if you are pregnant, breastfeeding, or managing a health condition — as you would with any supplement or dietary change.",
      },
      {
        q: "I'm sensitive to caffeine. Can I still drink Fungy?",
        a: "At 48mg per cup — roughly half a standard espresso — Fungy is significantly lower in caffeine than regular coffee. Many people who find normal coffee too intense switch to Fungy for exactly this reason. If you have a medical sensitivity to caffeine, check with your doctor first.",
      },
      {
        q: "Can I take it alongside medication?",
        a: "If you are currently taking prescribed medication, speak to your doctor before adding any new supplement to your routine.",
      },
    ],
  },
  {
    id: "shipping",
    label: "Shipping",
    num: "05",
    title: "Shipping & Orders",
    items: [
      {
        q: "Where do you ship?",
        a: "We ship to Australia and across Europe. Free shipping on every order, everywhere.",
      },
      {
        q: "Is shipping really free?",
        a: "Yes. Always. No minimum order, no hidden charges at checkout.",
      },
      {
        q: "How long does delivery take?",
        a: "We pack and dispatch your order the next working day. Delivery typically takes 6–10 days from dispatch, depending on your location.",
      },
      {
        q: "How do I track my order?",
        a: "You will receive a tracking link by email as soon as your order ships. If you have not received it within two working days, email us at info@drinkfungy.com and we will sort it out.",
      },
    ],
  },
  {
    id: "guarantee",
    label: "30-Day Guarantee",
    num: "06",
    title: "30-Day Guarantee",
    items: [
      {
        q: "What is the 30-day money-back guarantee?",
        a: "If you try Fungy and do not experience the benefits, we will refund you in full — no questions asked. The guarantee covers one opened bag per customer, for orders placed on drinkfungy.com, and must be claimed within 30 days of your delivery date. Any additional bags in the same order must be returned unopened and in their original condition to qualify.",
      },
      {
        q: "How do I claim a refund?",
        a: "Email us at info@drinkfungy.com within 30 days of receiving your order. Include your order number and we will take care of the rest.",
      },
      {
        q: "Are there any exceptions to the guarantee?",
        a: "The guarantee applies to one opened bag per customer. It covers orders placed directly on drinkfungy.com only, can only be claimed once per product per person, and does not apply to free gifts included with an order. We reserve the right to refuse claims where misuse is evident.",
      },
    ],
  },
];

// ─── COMPONENT ────────────────────────────────────────────────────────────────

export function FaqSection() {
  const [activeId, setActiveId] = useState("coffee");
  const [openKey, setOpenKey] = useState<string | null>(null);

  const active = categories.find((c) => c.id === activeId)!;

  const toggle = (key: string) =>
    setOpenKey((prev) => (prev === key ? null : key));

  return (
    <>
      {/* ── HERO ── */}
      <section className="bg-espresso py-28 md:py-40 section-padding relative overflow-hidden">
        <FaqBackground />
        <div className="relative z-10 max-w-3xl mx-auto text-center">
          <FadeInView delay={0.1} y={20}>
            <span className="text-[0.65rem] font-medium tracking-[0.2em] uppercase text-sand/60 mb-6 block">
              Help Centre
            </span>
          </FadeInView>
          <FadeInView delay={0.2} y={24}>
            <h1 className="text-display-xl font-light text-canvas leading-[1.07] tracking-[-0.03em] mb-6">
              Everything you{" "}
              <span className="italic text-sand">need to know.</span>
            </h1>
          </FadeInView>
          <FadeInView delay={0.35} y={16}>
            <p className="text-sand/55 text-base leading-relaxed">
              Can&apos;t find what you&apos;re looking for?{" "}
              <a
                href="mailto:info@drinkfungy.com"
                className="text-sand underline underline-offset-2 hover:text-canvas transition-colors"
              >
                info@drinkfungy.com
              </a>
            </p>
          </FadeInView>
        </div>
      </section>

      {/* ── STICKY TAB BAR ── */}
      <div className="bg-surface border-b border-sand-light sticky top-16 z-30">
        <div className="max-w-5xl mx-auto px-6 md:px-12 lg:px-20">
          <div className="flex overflow-x-auto [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
            {categories.map((cat) => {
              const isActive = cat.id === activeId;
              return (
                <button
                  key={cat.id}
                  onClick={() => {
                    setActiveId(cat.id);
                    setOpenKey(null);
                  }}
                  className={[
                    "relative flex-shrink-0 px-5 py-[1.05rem] text-[0.66rem] font-medium tracking-[0.1em] uppercase whitespace-nowrap",
                    "border-b-2 transition-colors duration-200",
                    isActive
                      ? "text-espresso border-amber"
                      : "text-mist border-transparent hover:text-espresso",
                  ].join(" ")}
                >
                  {cat.label}
                </button>
              );
            })}
          </div>
        </div>
      </div>

      {/* ── ACCORDION BODY ── */}
      <section className="bg-canvas py-16 md:py-24 section-padding min-h-[50vh]">
        <div className="max-w-3xl mx-auto">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeId}
              initial={{ opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.22, ease: [0.25, 0.46, 0.45, 0.94] }}
            >
              {/* Category heading */}
              <div className="flex items-baseline gap-4 mb-10 pb-5 border-b border-sand-light">
                <span className="text-[2rem] font-light leading-none tracking-[-0.02em] text-amber/20 select-none">
                  {active.num}
                </span>
                <h2 className="text-display-md font-light text-espresso">
                  {active.title}
                </h2>
              </div>

              {/* FAQ items */}
              {active.items.map((item, idx) => {
                const key = `${activeId}-${idx}`;
                const isOpen = openKey === key;
                return (
                  <div
                    key={key}
                    className="border-b border-sand-light first:border-t first:border-sand-light"
                  >
                    <button
                      onClick={() => toggle(key)}
                      className="w-full flex items-center justify-between gap-4 py-5 text-left group"
                      aria-expanded={isOpen}
                    >
                      <span
                        className={[
                          "text-[0.94rem] font-medium leading-snug transition-colors duration-200",
                          isOpen
                            ? "text-amber"
                            : "text-espresso group-hover:text-amber",
                        ].join(" ")}
                      >
                        {item.q}
                      </span>
                      <span
                        className={[
                          "flex-shrink-0 w-[22px] h-[22px] rounded-full flex items-center justify-center border transition-all duration-200",
                          isOpen
                            ? "bg-amber/10 border-amber/40 text-amber rotate-45"
                            : "border-sand text-mist group-hover:border-amber/40 group-hover:text-amber",
                        ].join(" ")}
                      >
                        <Plus size={11} strokeWidth={2.5} />
                      </span>
                    </button>

                    <AnimatePresence initial={false}>
                      {isOpen && (
                        <motion.div
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: "auto", opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          transition={{
                            duration: 0.28,
                            ease: [0.25, 0.46, 0.45, 0.94],
                          }}
                          className="overflow-hidden"
                        >
                          <p className="pb-6 text-sm text-mist leading-[1.85] max-w-[600px]">
                            {item.a}
                          </p>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                );
              })}
            </motion.div>
          </AnimatePresence>
        </div>
      </section>

      {/* ── BOTTOM CTA ── */}
      <section className="bg-espresso py-20 md:py-28 section-padding relative overflow-hidden">
        <FaqBackground />
        <div className="relative z-10 max-w-xl mx-auto text-center">
          <FadeInView delay={0.1} y={20}>
            <span className="text-[0.65rem] font-medium tracking-[0.2em] uppercase text-sand/60 mb-5 block">
              Ready when you are
            </span>
            <h2 className="text-display-md font-light text-canvas mb-4">
              Still not sure?{" "}
              <span className="italic text-sand">Try it for 30 days.</span>
            </h2>
            <p className="text-sand/55 text-sm leading-relaxed mb-8 max-w-sm mx-auto">
              If Fungy does not change your mornings, we will refund you in
              full. One cup a day is all it takes.
            </p>
            <a
              href="https://drinkfungy.com/products/mushroom-coffee"
              className="inline-flex items-center gap-2 bg-sand text-espresso px-8 py-4 rounded-sm text-[0.7rem] font-medium tracking-[0.14em] uppercase hover:bg-sand-light transition-colors duration-200 active:scale-[0.97]"
            >
              Start your ritual <ArrowRight size={13} />
            </a>
            <p className="text-sand/30 text-[0.6rem] tracking-[0.1em] uppercase mt-5">
              Free shipping · 30-day guarantee · No subscription required
            </p>
          </FadeInView>
        </div>
      </section>
    </>
  );
}

function FaqBackground() {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      <div className="absolute top-0 right-0 w-[400px] h-[400px] rounded-full bg-amber/10 blur-[80px] -translate-y-1/3 translate-x-1/4" />
      <div
        className="absolute inset-0 opacity-[0.04]"
        style={{
          backgroundImage: `radial-gradient(circle at 1px 1px, #C9AA8F 1px, transparent 0)`,
          backgroundSize: "40px 40px",
        }}
      />
    </div>
  );
}
