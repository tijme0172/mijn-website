"use client";

import { useRef, useState } from "react";
import { motion } from "framer-motion";
import { StaggerGroup, staggerItemVariants } from "@/components/motion/StaggerGroup";
import { FadeInView } from "@/components/motion/FadeInView";
import { TextReveal } from "@/components/motion/TextReveal";
import { Star, ChevronLeft, ChevronRight } from "lucide-react";

const testimonials = [
  {
    name: "Emma V.",
    role: "Entrepreneur",
    text: "I replaced my morning espresso with Fungy three months ago. I never thought I'd say this, but I don't miss coffee at all. My focus is sharper and I don't crash at 3pm.",
    rating: 5,
    initials: "EV",
  },
  {
    name: "Luca D.",
    role: "Creative Director",
    text: "The taste is genuinely good — earthy, smooth, not bitter at all. But what got me was the mental clarity. I get more done in the morning now than I used to in an entire day.",
    rating: 5,
    initials: "LD",
  },
  {
    name: "Sofia K.",
    role: "Product Manager",
    text: "My gut issues were brutal. Within two weeks of taking Fungy daily, the bloating was almost gone. I'm honestly shocked it made such a difference so quickly.",
    rating: 5,
    initials: "SK",
  },
  {
    name: "James M.",
    role: "Personal Trainer",
    text: "My clients ask what I'm taking for energy. I tell them Fungy. No crash, no jitters, just clean sustained performance. The Cordyceps is no joke.",
    rating: 5,
    initials: "JM",
  },
  {
    name: "Nina R.",
    role: "Founder",
    text: "I was skeptical about functional mushrooms. But after a month I'm a total convert. Reishi has genuinely helped with my stress levels. This stuff works.",
    rating: 5,
    initials: "NR",
  },
];

export function TestimonialsSection() {
  const [active, setActive] = useState(0);
  const dragConstraints = useRef<HTMLDivElement>(null);

  const prev = () => setActive((a) => (a - 1 + testimonials.length) % testimonials.length);
  const next = () => setActive((a) => (a + 1) % testimonials.length);

  return (
    <section className="bg-surface-warm py-24 md:py-36 section-padding overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <FadeInView className="text-center mb-6">
          <span className="text-xs font-medium tracking-[0.12em] uppercase text-sage">
            What People Say
          </span>
        </FadeInView>
        <TextReveal
          text="Real results. Real people."
          as="h2"
          className="text-center mb-16"
          wordClassName="text-display-lg font-bold text-ink"
        />

        <div className="hidden md:block">
          <StaggerGroup className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {testimonials.slice(0, 3).map((t) => (
              <TestimonialCard key={t.name} testimonial={t} />
            ))}
          </StaggerGroup>
        </div>

        <div className="md:hidden">
          <div ref={dragConstraints} className="overflow-hidden">
            <motion.div
              drag="x"
              dragConstraints={dragConstraints}
              className="flex gap-4 cursor-grab active:cursor-grabbing"
              animate={{ x: -active * (320 + 16) }}
              transition={{ type: "spring", stiffness: 300, damping: 30 }}
            >
              {testimonials.map((t) => (
                <div key={t.name} className="min-w-[320px]">
                  <TestimonialCardMobile testimonial={t} />
                </div>
              ))}
            </motion.div>
          </div>

          <div className="flex items-center justify-center gap-4 mt-8">
            <button
              onClick={prev}
              className="w-9 h-9 rounded-full border border-sand-light flex items-center justify-center text-mist hover:text-espresso hover:border-espresso transition-colors"
              aria-label="Previous"
            >
              <ChevronLeft size={16} />
            </button>
            <div className="flex gap-2">
              {testimonials.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setActive(i)}
                  className={`w-1.5 h-1.5 rounded-full transition-all duration-300 ${
                    i === active ? "bg-espresso w-4" : "bg-sand-light"
                  }`}
                  aria-label={`Go to testimonial ${i + 1}`}
                />
              ))}
            </div>
            <button
              onClick={next}
              className="w-9 h-9 rounded-full border border-sand-light flex items-center justify-center text-mist hover:text-espresso hover:border-espresso transition-colors"
              aria-label="Next"
            >
              <ChevronRight size={16} />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}

function Stars({ count }: { count: number }) {
  return (
    <div className="flex gap-0.5">
      {[...Array(count)].map((_, i) => (
        <Star key={i} size={12} className="fill-sand text-sand" />
      ))}
    </div>
  );
}

function TestimonialCard({ testimonial }: { testimonial: (typeof testimonials)[0] }) {
  return (
    <motion.div
      variants={staggerItemVariants}
      className="bg-surface rounded-2xl p-7 border border-sand-light/60"
    >
      <Stars count={testimonial.rating} />
      <p className="text-sm text-ink leading-relaxed mt-4 mb-6">
        &ldquo;{testimonial.text}&rdquo;
      </p>
      <div className="flex items-center gap-3">
        <div className="w-9 h-9 rounded-full bg-espresso/10 flex items-center justify-center text-xs font-bold text-espresso">
          {testimonial.initials}
        </div>
        <div>
          <p className="text-sm font-semibold text-ink">{testimonial.name}</p>
          <p className="text-xs text-mist">{testimonial.role}</p>
        </div>
      </div>
    </motion.div>
  );
}

function TestimonialCardMobile({ testimonial }: { testimonial: (typeof testimonials)[0] }) {
  return (
    <div className="bg-surface rounded-2xl p-7 border border-sand-light/60">
      <Stars count={testimonial.rating} />
      <p className="text-sm text-ink leading-relaxed mt-4 mb-6">
        &ldquo;{testimonial.text}&rdquo;
      </p>
      <div className="flex items-center gap-3">
        <div className="w-9 h-9 rounded-full bg-espresso/10 flex items-center justify-center text-xs font-bold text-espresso">
          {testimonial.initials}
        </div>
        <div>
          <p className="text-sm font-semibold text-ink">{testimonial.name}</p>
          <p className="text-xs text-mist">{testimonial.role}</p>
        </div>
      </div>
    </div>
  );
}
