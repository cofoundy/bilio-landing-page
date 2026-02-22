import { Navbar } from "./components/Navbar";
import { HeroSection } from "./components/HeroSection";
import { SocialProofBar } from "./components/SocialProofBar";
import { ProblemSection } from "./components/ProblemSection";
import { FeaturesSection } from "./components/FeaturesSection";
import { FeaturesBento } from "./components/FeaturesBento";
import { HowItWorks } from "./components/HowItWorks";
import { PricingSection } from "./components/PricingSection";
import { WaitlistCTA } from "./components/WaitlistCTA";
import { FAQSection } from "./components/FAQSection";
import { Footer } from "./components/Footer";

export default function App() {
  return (
    <div style={{ minHeight: "100vh", background: "#151515", fontFamily: "Hind Vadodara, sans-serif", overflowX: "hidden" }}>
      <Navbar />
      <HeroSection />
      <SocialProofBar />
      <ProblemSection />
      <FeaturesSection />
      <FeaturesBento />
      <HowItWorks />
      <PricingSection />
      <WaitlistCTA />
      <FAQSection />
      <Footer />
    </div>
  );
}
