"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { ArrowRight, Star, Check } from "lucide-react";

const SHOP_URL = "/products"; // update to your Shopify product URL

const REASONS = [
  {
    number: "01",
    category: "Clean Energy",
    headline: "The crash is stealing hours from your life.",
    subheadline:
      "Every coffee spike is followed by a valley. Fungy gives you the mountain without the drop.",
    body: "Cordyceps mushroom boosts ATP production at the cellular level — that's your body's actual energy currency. Not a stimulant hit. Not borrowed energy. Real, metabolic fuel that sustains for hours. 50,000+ Fungy drinkers report no 2pm slump. No second coffee needed. Just steady, clean output from morning to evening.",
    proof:
      "Cordyceps shown to increase oxygen utilization and aerobic capacity in clinical studies",
    stat: "8hrs",
    statLabel: "Sustained clean energy",
    ingredient: "Cordyceps",
    emoji: "⚡",
    reverse: false,
    bg: "#F2EEE8",
    accentColor: "#5C3D2A",
    highlights: ["No caffeine crash", "Steady energy all day", "Zero jitters"],
  },
  {
    number: "02",
    category: "Mental Performance",
    headline: "Your brain has been running on fumes for years.",
    subheadline:
      "Lion's Mane doesn't mask mental fatigue. It eliminates the reason for it.",
    body: "Lion's Mane is the only natural compound clinically shown to stimulate Nerve Growth Factor (NGF) — the protein your brain needs to build new neural connections, repair damaged ones, and operate at full capacity. Better memory retention. Faster problem-solving. Deep focus that doesn't require willpower to maintain.",
    proof:
      "Lion's Mane shown to significantly increase NGF synthesis in 4-week peer-reviewed studies",
    stat: "4 wks",
    statLabel: "To measurable cognitive lift",
    ingredient: "Lion's Mane",
    emoji: "🧠",
    reverse: true,
    bg: "#EDE9E2",
    accentColor: "#4E7A5C",
    highlights: ["Sharper memory", "Deeper focus", "Faster thinking"],
  },
  {
    number: "03",
    category: "Stress Resilience",
    headline: "Stress is quietly destroying everything you've built.",
    subheadline:
      "Not dramatically. Silently. One elevated cortisol moment at a time.",
    body: "Chronic stress doesn't announce itself with a crisis — it erodes your sleep quality over months, tanks your immune response, and makes you reactive instead of strategic in every room you walk into. Reishi is a certified adaptogen. It doesn't sedate you. It trains your nervous system to respond to pressure with precision instead of panic.",
    proof:
      "Reishi shown to modulate cortisol response and improve heart rate variability in clinical trials",
    stat: "23%",
    statLabel: "Cortisol reduction reported",
    ingredient: "Reishi",
    emoji: "🌿",
    reverse: false,
    bg: "#F2EEE8",
    accentColor: "#8B5E3C",
    highlights: [
      "Lower cortisol levels",
      "Better sleep quality",
      "Calm under pressure",
    ],
  },
  {
    number: "04",
    category: "Gut Health",
    headline: "Most high-performers don't know their gut is broken.",
    subheadline:
      "The bloating, the brain fog, the afternoon slump — it's not your schedule. It's your gut.",
    body: "70% of your immune system lives in your gut. When your microbiome is compromised, every system downstream suffers — cognitive function, energy metabolism, mood regulation. Turkey Tail's prebiotic polysaccharides don't soothe symptoms. They restructure your internal ecosystem at the root, feeding beneficial bacteria and crowding out the rest.",
    proof:
      "Turkey Tail's PSK and PSP compounds shown to support microbiome diversity in clinical research",
    stat: "70%",
    statLabel: "Of immunity lives in your gut",
    ingredient: "Turkey Tail",
    emoji: "🍄",
    reverse: true,
    bg: "#EDE9E2",
    accentColor: "#4E7A5C",
    highlights: [
      "Less bloating & discomfort",
      "Better daily digestion",
      "Stronger immunity",
    ],
  },
  {
    number: "05",
    category: "Immune Defense",
    headline: "Your immune system needs more than hope.",
    subheadline:
      "Chaga doesn't wait for the threat to arrive. It builds your defenses daily.",
    body: "Chaga has the highest ORAC antioxidant score of any natural food on earth — higher than blueberries, green tea, or anything in a supplement store. Its beta-glucans activate your Natural Killer cells proactively. That's the difference between scrambling to recover and never getting knocked down in the first place.",
    proof:
      "Chaga contains the highest antioxidant ORAC value of any measured natural food source",
    stat: "25×",
    statLabel: "More antioxidants than blueberries",
    ingredient: "Chaga",
    emoji: "🛡️",
    reverse: false,
    bg: "#F2EEE8",
    accentColor: "#7A5C3A",
    highlights: [
      "Daily immune activation",
      "Proactive protection",
      "Powerful anti-inflammatory",
    ],
  },
  {
    number: "06",
    category: "Clean Formula",
    headline: "Everything else is full of things you can't pronounce.",
    subheadline:
      "The supplement industry's dirtiest secret: most products are 70% filler.",
    body: "Artificial flavors. Seed oils. Proprietary blends that hide underdosed actives. Mystery sweeteners that spike your insulin and gut bacteria. The wellness industry profits from confusion. Fungy's formula is 8 ingredients: 6 functional mushrooms, organic coffee, organic MCT oil, organic coconut milk. Every ingredient earns its place. Zero compromises.",
    proof:
      "Third-party lab tested. Zero artificial additives. Published certificates of analysis available.",
    stat: "8",
    statLabel: "Ingredients. Nothing hidden.",
    ingredient: "The Full Blend",
    emoji: "✅",
    reverse: true,
    bg: "#EDE9E2",
    accentColor: "#5C3D2A",
    highlights: [
      "Zero artificial flavors",
      "No fillers or seed oils",
      "Lab tested & certified",
    ],
  },
  {
    number: "07",
    category: "Daily Ritual",
    headline: "One cup. The morning ritual that compounds over time.",
    subheadline:
      "High performers don't have willpower. They have systems. This is yours.",
    body: "Every person you admire — the founder running a 9-figure company, the athlete who trains before sunrise, the creative who produces breathtaking work — they all have one thing in common: a non-negotiable morning ritual. Fungy is yours. One cup delivers six functional superfoods to every cell in your body before the world asks anything of you. A habit this simple shouldn't change this much. But it does.",
    proof:
      "Used daily by founders, athletes, and top performers in 40+ countries worldwide",
    stat: "30 days",
    statLabel: "To feel completely transformed",
    ingredient: "The Full Blend",
    emoji: "☀️",
    reverse: false,
    bg: "#F2EEE8",
    accentColor: "#4E7A5C",
    highlights: [
      "Takes 2 minutes",
      "Replaces coffee entirely",
      "Compounds over months",
    ],
  },
  {
    number: "08",
    category: "Proven Results",
    headline: "50,000 people already switched. They all say the same thing.",
    subheadline: '"I wish I started sooner." — Every Fungy customer, ever.',
    body: "When 50,000 people from 40 different countries voluntarily replace their morning coffee with something new, that's not a trend. That's a verdict. Entrepreneurs who needed their edge back. Athletes optimizing every variable. Parents who needed to be present. Creatives who needed their spark. All of them found it in one cup. The only question is how long you wait.",
    proof: "4.9/5 stars from 12,000+ verified reviews across all platforms",
    stat: "4.9★",
    statLabel: "From 12,000+ verified reviews",
    ingredient: "The Community",
    emoji: "🌍",
    reverse: true,
    bg: "#EDE9E2",
    accentColor: "#5C3D2A",
    highlights: [
      "50,000+ active customers",
      "Ships to 40+ countries",
      "4.9/5 average rating",
    ],
  },
];

const TESTIMONIALS = [
  {
    name: "Emma V.",
    role: "Entrepreneur",
    text: "The first week I noticed my 2pm crash was completely gone. By week three I cancelled my afternoon coffee subscription. I haven't looked back once.",
    rating: 5,
    initials: "EV",
  },
  {
    name: "Luca D.",
    role: "Creative Director",
    text: "I was deeply skeptical about 'functional mushrooms'. But when my team started asking why I was suddenly so sharp in morning meetings, I stopped being skeptical.",
    rating: 5,
    initials: "LD",
  },
  {
    name: "James M.",
    role: "Personal Trainer",
    text: "My athletes notice when I give them something that actually works. Cordyceps is real. The performance uplift is measurable. I recommend Fungy to every client I have.",
    rating: 5,
    initials: "JM",
  },
];

export default function WhyFungyPage() {
  return (
    <div className="min-h-screen bg-canvas font-sans">
      {/* Minimal sticky header */}
      <header className="sticky top-0 z-50 glass-warm">
        <div className="max-w-7xl mx-auto px-6 md:px-12 py-4 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <span className="text-lg font-bold text-espresso tracking-tight">
              fungy
            </span>
            <span className="hidden sm:inline text-xs text-mist font-medium">
              · mushroom superfood
            </span>
          </div>
          <a
            href={SHOP_URL}
            className="btn-primary text-xs px-6 py-3 inline-flex items-center gap-2"
          >
            Try Fungy — 15% Off
            <ArrowRight size={13} />
          </a>
        </div>
      </header>

      <FunnelHero shopUrl={SHOP_URL} />

      {REASONS.map((reason, i) => (
        <ReasonSection key={reason.number} reason={reason} index={i} shopUrl={SHOP_URL} />
      ))}

      <TestimonialsStrip />
      <FinalCTA shopUrl={SHOP_URL} />

      <div className="bg-espresso-dark py-6 text-center">
        <p className="text-xs text-sand/60">
          © 2025 Fungy · Free shipping on orders over €35 · 30-day money-back
          guarantee
        </p>
      </div>
    </div>
  );
}

function FunnelHero({ shopUrl }: { shopUrl: string }) {
  return (
    <section className="bg-canvas pt-16 pb-24 section-padding relative overflow-hidden">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-[500px] h-[500px] rounded-full bg-sand/15 blur-[120px] -translate-x-1/2 -translate-y-1/2" />
        <div className="absolute bottom-0 right-0 w-[400px] h-[400px] rounded-full bg-espresso/8 blur-[100px]" />
      </div>

      <div className="relative z-10 max-w-4xl mx-auto text-center">
        <motion.span
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="inline-flex items-center gap-2 text-xs font-medium tracking-[0.12em] uppercase text-mist border border-sand-light rounded-full px-4 py-2 mb-10"
        >
          <span className="w-1.5 h-1.5 rounded-full bg-sage" />
          The Case for Fungy
        </motion.span>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.15 }}
          className="text-display-xl font-bold text-ink mb-6 text-balance"
        >
          8 Reasons You&apos;ll Never Go Back to{" "}
          <span className="text-espresso">Regular Coffee</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="text-lg md:text-xl text-mist max-w-2xl mx-auto leading-relaxed mb-12"
        >
          50,000+ people discovered what happens when six functional superfoods
          replace your morning ritual. This is what they found.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.45 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <a
            href={shopUrl}
            className="btn-primary text-sm px-10 py-4 inline-flex items-center gap-2"
          >
            Start Your Ritual — 15% Off
            <ArrowRight size={15} />
          </a>
          <div className="flex items-center gap-2 text-sm text-mist">
            <div className="flex gap-0.5">
              {[...Array(5)].map((_, i) => (
                <Star key={i} size={13} className="fill-sand text-sand" />
              ))}
            </div>
            <span>4.9 / 5 · 12,000+ reviews</span>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.7 }}
          className="flex flex-wrap items-center justify-center gap-8 mt-16 pt-16 border-t border-sand-light"
        >
          {[
            { value: "50k+", label: "Customers worldwide" },
            { value: "6", label: "Functional mushrooms" },
            { value: "0g", label: "Added sugar" },
            { value: "30-day", label: "Money-back guarantee" },
          ].map((stat) => (
            <div key={stat.label} className="flex flex-col items-center gap-1">
              <span className="text-2xl font-bold text-espresso tracking-tight">
                {stat.value}
              </span>
              <span className="text-xs text-mist tracking-wide uppercase">
                {stat.label}
              </span>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

function ReasonSection({
  reason,
  index,
  shopUrl,
}: {
  reason: (typeof REASONS)[0];
  index: number;
  shopUrl: string;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <>
      <section
        ref={ref}
        className="py-20 md:py-32 section-padding"
        style={{ backgroundColor: reason.bg }}
      >
        <div className="max-w-7xl mx-auto">
          <div
            className={`grid md:grid-cols-2 gap-12 md:gap-20 items-center ${
              reason.reverse ? "md:[&>*:first-child]:order-2" : ""
            }`}
          >
            {/* Text column */}
            <motion.div
              initial={{ opacity: 0, x: reason.reverse ? 40 : -40 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.7, ease: [0.25, 0.46, 0.45, 0.94] }}
            >
              <div className="flex items-center gap-3 mb-6">
                <span
                  className="text-xs font-bold tracking-[0.2em] uppercase"
                  style={{ color: reason.accentColor }}
                >
                  {reason.category}
                </span>
                <span className="text-xs text-sand font-mono">
                  / {reason.number}
                </span>
              </div>

              <h2 className="text-display-md font-bold text-ink mb-4 text-balance">
                {reason.headline}
              </h2>
              <p className="text-base md:text-lg font-medium text-mist mb-6 leading-snug">
                {reason.subheadline}
              </p>
              <p className="text-sm md:text-base text-mist leading-relaxed mb-8">
                {reason.body}
              </p>

              <ul className="flex flex-col gap-2 mb-8">
                {reason.highlights.map((h) => (
                  <li
                    key={h}
                    className="flex items-center gap-2 text-sm text-ink font-medium"
                  >
                    <Check size={14} className="text-sage shrink-0" />
                    {h}
                  </li>
                ))}
              </ul>

              <div className="inline-flex items-start gap-3 bg-surface rounded-xl px-4 py-3 border border-sand-light text-xs text-mist">
                <span className="shrink-0 mt-0.5 text-sage">◆</span>
                <span>{reason.proof}</span>
              </div>
            </motion.div>

            {/* Visual column */}
            <motion.div
              initial={{ opacity: 0, x: reason.reverse ? -40 : 40 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{
                duration: 0.7,
                delay: 0.15,
                ease: [0.25, 0.46, 0.45, 0.94],
              }}
              className="flex flex-col items-center justify-center gap-8"
            >
              <div className="relative flex items-center justify-center">
                <span
                  className="text-[10rem] md:text-[14rem] font-bold leading-none select-none pointer-events-none"
                  style={{ color: `${reason.accentColor}08` }}
                >
                  {reason.number}
                </span>
                <div className="absolute inset-0 flex items-center justify-center">
                  <div
                    className="w-24 h-24 md:w-32 md:h-32 rounded-full flex items-center justify-center text-5xl md:text-6xl shadow-sm"
                    style={{
                      backgroundColor: `${reason.accentColor}10`,
                      border: `2px solid ${reason.accentColor}18`,
                    }}
                  >
                    {reason.emoji}
                  </div>
                </div>
              </div>

              <div className="text-center">
                <p
                  className="text-5xl md:text-6xl font-bold tracking-tight"
                  style={{ color: reason.accentColor }}
                >
                  {reason.stat}
                </p>
                <p className="text-xs text-mist uppercase tracking-widest mt-2">
                  {reason.statLabel}
                </p>
              </div>

              <div
                className="inline-flex items-center gap-2 rounded-full px-5 py-2 text-xs font-semibold tracking-wide"
                style={{
                  backgroundColor: `${reason.accentColor}10`,
                  color: reason.accentColor,
                  border: `1px solid ${reason.accentColor}20`,
                }}
              >
                <span
                  className="w-1.5 h-1.5 rounded-full"
                  style={{ backgroundColor: reason.accentColor }}
                />
                {reason.ingredient}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Mid-funnel CTA after reason 4 */}
      {index === 3 && <MidPageCTA shopUrl={shopUrl} />}
    </>
  );
}

function MidPageCTA({ shopUrl }: { shopUrl: string }) {
  return (
    <section className="bg-espresso py-16 section-padding">
      <div className="max-w-3xl mx-auto text-center">
        <p className="text-xs font-medium tracking-[0.12em] uppercase text-sand mb-4">
          Ready to start?
        </p>
        <h2 className="text-display-md font-bold text-canvas mb-4">
          You&apos;ve seen 4 reasons. There are 4 more.
        </h2>
        <p className="text-sand text-base mb-8 max-w-lg mx-auto leading-relaxed">
          Or you can start now and feel the difference in 7 days. 30-day
          money-back guarantee — no questions asked.
        </p>
        <a
          href={shopUrl}
          className="inline-flex items-center gap-2 bg-sand text-espresso rounded-full px-10 py-4 text-sm font-semibold hover:bg-sand-light transition-colors"
        >
          Try Fungy — 15% Off First Order
          <ArrowRight size={15} />
        </a>
      </div>
    </section>
  );
}

function TestimonialsStrip() {
  return (
    <section className="bg-surface-warm py-20 section-padding">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <span className="text-xs font-medium tracking-[0.12em] uppercase text-sage block mb-3">
            Real Results
          </span>
          <h2 className="text-display-md font-bold text-ink">
            Don&apos;t take our word for it.
          </h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {TESTIMONIALS.map((t) => (
            <div
              key={t.name}
              className="bg-surface rounded-2xl p-7 border border-sand-light/60"
            >
              <div className="flex gap-0.5 mb-4">
                {[...Array(t.rating)].map((_, i) => (
                  <Star key={i} size={12} className="fill-sand text-sand" />
                ))}
              </div>
              <p className="text-sm text-ink leading-relaxed mb-6">
                &ldquo;{t.text}&rdquo;
              </p>
              <div className="flex items-center gap-3">
                <div className="w-9 h-9 rounded-full bg-espresso/10 flex items-center justify-center text-xs font-bold text-espresso">
                  {t.initials}
                </div>
                <div>
                  <p className="text-sm font-semibold text-ink">{t.name}</p>
                  <p className="text-xs text-mist">{t.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function FinalCTA({ shopUrl }: { shopUrl: string }) {
  return (
    <section className="bg-espresso py-24 md:py-36 section-padding relative overflow-hidden">
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-0 left-1/4 w-[600px] h-[600px] rounded-full bg-espresso-dark/60 blur-[100px] -translate-y-1/2" />
        <div className="absolute bottom-0 right-1/4 w-[400px] h-[400px] rounded-full bg-black/20 blur-[80px] translate-y-1/2" />
        <div
          className="absolute inset-0 opacity-[0.025]"
          style={{
            backgroundImage: `radial-gradient(circle at 1px 1px, #C9AA8F 1px, transparent 0)`,
            backgroundSize: "40px 40px",
          }}
        />
      </div>

      <div className="relative z-10 max-w-3xl mx-auto text-center">
        <motion.span
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-xs font-medium tracking-[0.12em] uppercase text-sand block mb-8"
        >
          Your Move
        </motion.span>

        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-display-xl font-bold text-canvas mb-6"
        >
          You&apos;ve read 8 reasons.
          <br />
          <span className="text-sand">Now feel 8 results.</span>
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="text-sand text-lg leading-relaxed mb-10 max-w-xl mx-auto"
        >
          Join 50,000+ high-performers who made the switch. 15% off your first
          order. Free shipping. 30-day guarantee.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.35 }}
        >
          <a
            href={shopUrl}
            className="inline-flex items-center gap-2 bg-sand text-espresso rounded-full px-12 py-5 text-sm font-bold hover:bg-sand-light transition-colors"
          >
            Start Your Ritual Today
            <ArrowRight size={15} />
          </a>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5 }}
          className="flex flex-wrap items-center justify-center gap-6 mt-10 text-xs text-sand/60"
        >
          {[
            "Free shipping over €35",
            "30-day money-back guarantee",
            "No subscription required",
          ].map((item) => (
            <span key={item} className="flex items-center gap-1.5">
              <Check size={11} className="text-sand/50" />
              {item}
            </span>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
