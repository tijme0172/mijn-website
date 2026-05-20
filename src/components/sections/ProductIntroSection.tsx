import { SlideInView } from "@/components/motion/SlideInView";
import { FadeInView } from "@/components/motion/FadeInView";
import { TextReveal } from "@/components/motion/TextReveal";

export function ProductIntroSection() {
  return (
    <section id="story" className="bg-canvas section-padding py-24 md:py-36">
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-16 items-center">
        <SlideInView direction="left" className="order-2 md:order-1">
          <span className="text-xs font-medium tracking-[0.12em] uppercase text-sage mb-6 block">
            The Fungy Difference
          </span>
          <TextReveal
            text="Not just a drink. A daily ritual."
            as="h2"
            className="mb-6"
            wordClassName="text-display-lg font-bold text-ink"
          />
          <p className="text-mist text-lg leading-relaxed mb-6">
            We combined five of the most powerful functional mushrooms with a
            smooth, earthy base. No jitters. No crash. Just clean, sustained
            energy that lasts all day.
          </p>
          <p className="text-mist text-lg leading-relaxed mb-10">
            Each serving is packed with adaptogens that help your body manage
            stress, sharpen your focus, and support your gut — all in one cup.
          </p>
          <a href="#products" className="btn-primary inline-block text-sm">
            Explore Products
          </a>
        </SlideInView>

        <FadeInView
          className="order-1 md:order-2 relative"
          delay={0.2}
        >
          <div className="relative aspect-square max-w-lg mx-auto">
            <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-sand/30 via-canvas to-surface-warm" />
            <div className="absolute inset-8 rounded-2xl bg-surface-warm/80 border border-sand-light/50 flex items-center justify-center">
              <div className="text-center">
                <div className="text-8xl mb-4">🍄</div>
                <p className="text-sm text-mist font-medium tracking-wide">
                  Product photography
                </p>
                <p className="text-xs text-sand mt-1">coming soon</p>
              </div>
            </div>
          </div>
        </FadeInView>
      </div>
    </section>
  );
}
