
import React from "react";
import NavigationHeader from "@/components/NavigationHeader";
import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import HowItWorksSection from "@/components/HowItWorksSection";
import BenefitsSection from "@/components/BenefitsSection";
import TestimonialsSection from "@/components/TestimonialsSection";
import PricingSection from "@/components/PricingSection";
import Faq1 from "@/components/mvpblocks/faq-1";
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
        <AboutSection />
        {/* <HowItWorksSection /> */}
        <BenefitsSection />
        {/* <TestimonialsSection /> */}
        <PricingSection />
        <Faq1 />
        <CTASection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
