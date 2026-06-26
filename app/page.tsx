import Header from "@/components/layout/head";
import HeroSection from "@/components/sections/myhero";
import FeaturesSection from "@/components/sections/featuresec";
import PricingSection from "@/components/sections/pricesec";
import SocialProofSection from "@/components/sections/SocialProofSection";
import FinalCTASection from "@/components/sections/finalsec";
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