import { AnnouncementBar } from "@/components/layout/AnnouncementBar";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { HeroSection } from "@/components/sections/HeroSection";
import { SocialProofBar } from "@/components/sections/SocialProofBar";
import { ProductIntroSection } from "@/components/sections/ProductIntroSection";
import { BenefitsSection } from "@/components/sections/BenefitsSection";
import { IngredientsSection } from "@/components/sections/IngredientsSection";
import { HowItWorksSection } from "@/components/sections/HowItWorksSection";
import { ProductGridSection } from "@/components/sections/ProductGridSection";
import { TestimonialsSection } from "@/components/sections/TestimonialsSection";
import { CtaSection } from "@/components/sections/CtaSection";

export default function Home() {
  return (
    <>
      <AnnouncementBar />
      <Navbar />
      <main>
        <HeroSection />
        <SocialProofBar />
        <ProductIntroSection />
        <BenefitsSection />
        <IngredientsSection />
        <HowItWorksSection />
        <ProductGridSection />
        <TestimonialsSection />
        <CtaSection />
      </main>
      <Footer />
    </>
  );
}
