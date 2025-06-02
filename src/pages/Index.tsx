
import React from "react";
import NavigationHeader from "@/components/NavigationHeader";
import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import HowItWorksSection from "@/components/HowItWorksSection";
import BenefitsSection from "@/components/BenefitsSection";
import TestimonialsSection from "@/components/TestimonialsSection";
import PricingSection from "@/components/PricingSection";
import FAQSection from "@/components/FAQSection";
import CTASection from "@/components/CTASection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <NavigationHeader />
      <HeroSection />
      <AboutSection />
      {/* <HowItWorksSection /> */}
      <BenefitsSection />
      {/* <TestimonialsSection /> */}
      <PricingSection />
      <FAQSection />
      <CTASection />
      <Footer />
    </div>
  );
};

export default Index;
