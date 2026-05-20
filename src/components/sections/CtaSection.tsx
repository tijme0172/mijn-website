"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { TextReveal } from "@/components/motion/TextReveal";
import { FadeInView } from "@/components/motion/FadeInView";
import { ArrowRight } from "lucide-react";

export function CtaSection() {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      setSubmitted(true);
      setEmail("");
    }
  };

  return (
    <section className="bg-espresso py-24 md:py-36 section-padding relative overflow-hidden">
      <CtaBackground />

      <div className="relative z-10 max-w-3xl mx-auto text-center">
        <FadeInView delay={0.1}>
          <span className="text-xs font-medium tracking-[0.12em] uppercase text-sand mb-8 block">
            Start Your Ritual
          </span>
        </FadeInView>

        <TextReveal
          text="Your best mornings start here."
          as="h2"
          className="mb-6"
          wordClassName="text-display-xl font-bold text-canvas"
        />

        <FadeInView delay={0.4}>
          <p className="text-sand text-lg leading-relaxed mb-12 max-w-xl mx-auto">
            Join 50,000+ people who swapped their daily coffee for something
            better. Get 15% off your first order when you sign up.
          </p>
        </FadeInView>

        <FadeInView delay={0.6}>
          {submitted ? (
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              className="bg-canvas/10 border border-sand/30 rounded-2xl px-8 py-6"
            >
              <p className="text-canvas font-medium text-lg">
                ✓ You&apos;re on the list. Check your inbox for your 15% discount.
              </p>
            </motion.div>
          ) : (
            <form
              onSubmit={handleSubmit}
              className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto"
            >
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Your email address"
                required
                className="flex-1 bg-canvas/10 border border-sand/30 text-canvas placeholder:text-sand/60 rounded-full px-6 py-4 text-sm outline-none focus:border-sand/60 transition-colors"
              />
              <button
                type="submit"
                className="bg-sand text-espresso rounded-full px-7 py-4 text-sm font-semibold hover:bg-sand-light transition-colors flex items-center justify-center gap-2 whitespace-nowrap"
              >
                Get 15% Off
                <ArrowRight size={15} />
              </button>
            </form>
          )}

          <p className="text-sand/50 text-xs mt-4">
            No spam. Unsubscribe anytime.
          </p>
        </FadeInView>
      </div>
    </section>
  );
}

function CtaBackground() {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      <div className="absolute top-0 left-1/4 w-[600px] h-[600px] rounded-full bg-espresso-dark/60 blur-[100px] -translate-y-1/2" />
      <div className="absolute bottom-0 right-1/4 w-[400px] h-[400px] rounded-full bg-black/20 blur-[80px] translate-y-1/2" />
      <div className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage: `radial-gradient(circle at 1px 1px, #C9AA8F 1px, transparent 0)`,
          backgroundSize: "40px 40px",
        }}
      />
    </div>
  );
}
