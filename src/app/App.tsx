import { LazyMotion, domAnimation } from "framer-motion";
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
import { AnimatedBackground } from "./components/motion/AnimatedBackground";

export default function App() {
  return (
    <LazyMotion features={domAnimation} strict>
      <div className="relative min-h-screen bg-bilio-bg font-body overflow-x-hidden">
        <AnimatedBackground />
        <div className="relative" style={{ zIndex: 1 }}>
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
      </div>
    </LazyMotion>
  );
}
