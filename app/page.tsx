import Header from "@/components/layout/Header";
import HeroSection from "@/components/sections/HeroSection";
import FeaturesSection from "@/components/sections/FeaturesSection";
import PricingSection from "@/components/sections/PricingSection";
import SocialProofSection from "@/components/sections/SocialProofSection";
import FinalCTASection from "@/components/sections/FinalCTASection";
import Footer from "@/components/layout/Footer";

export default function Home() {
  return (
    <main className="min-h-screen bg-slate-950 text-slate-50">
      <Header />

      <section id="hero">
        <HeroSection />
      </section>

      <FeaturesSection />
      <PricingSection />
      <SocialProofSection />
      <FinalCTASection />
      <Footer />
    </main>
  );
}