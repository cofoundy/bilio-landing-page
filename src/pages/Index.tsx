
import React from "react";
import NavigationHeader from "@/components/NavigationHeader";
import HeroSection from "@/components/HeroSection";
import HowItWorksSection from "@/components/HowItWorksSection";
import GlobalSection from "@/components/GlobalSection";
import PricingSection from "@/components/PricingSection";
import SocialProofBar from "@/components/SocialProofBar";
import CTASection from "@/components/CTASection";
import Footer from "@/components/Footer";
import SEOHead from "@/components/SEOHead";

const Index = () => {
  return (
    <div className="min-h-screen">
      <SEOHead />
      <NavigationHeader />
      <main role="main">
        <HeroSection />
        <HowItWorksSection />
        <GlobalSection />
        <PricingSection />
        <SocialProofBar />
        <CTASection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
