import React from "react";
import { useParams } from "react-router-dom";
import { getLocationData, DEFAULT_LOCATION } from "@/data/locations";
import NavigationHeader from "@/components/NavigationHeader";
import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import BenefitsSection from "@/components/BenefitsSection";
import PricingSection from "@/components/PricingSection";
import Faq1 from "@/components/mvpblocks/faq-1";
import CTASection from "@/components/CTASection";
import Footer from "@/components/Footer";
import LocationSEOHead from "@/components/LocationSEOHead";

const LocationPage = () => {
  const { location } = useParams<{ location: string }>();
  const locationData = getLocationData(location);
  
  // If invalid location, redirect to default (handled by routing)
  if (!location && location !== DEFAULT_LOCATION) {
    // This would be handled by the routing configuration
  }

  return (
    <div className="min-h-screen">
      <LocationSEOHead locationData={locationData} />
      <NavigationHeader locationData={locationData} />
      <main role="main">
        <HeroSection locationData={locationData} />
        <AboutSection locationData={locationData} />
        <BenefitsSection locationData={locationData} />
        <PricingSection locationData={locationData} />
        <Faq1 locationData={locationData} />
        <CTASection locationData={locationData} />
      </main>
      <Footer locationData={locationData} />
    </div>
  );
};

export default LocationPage;