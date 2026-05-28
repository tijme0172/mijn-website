import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { FaqSection } from "@/components/sections/FaqSection";

export const metadata = {
  title: "FAQ | Fungy Mushroom Coffee",
  description:
    "Everything you need to know about Fungy — ingredients, preparation, shipping, and our 30-day money-back guarantee.",
};

export default function FaqPage() {
  return (
    <>
      <Navbar />
      <main>
        <FaqSection />
      </main>
      <Footer />
    </>
  );
}
