import React from "react";
import { useLocation, Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { ArrowLeft, Check, MessageCircle, Star, ArrowRight, Users, Shield } from "lucide-react";
import { getUseCaseData } from "@/data/useCases";
import NavigationHeader from "@/components/NavigationHeader";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import NotFound from "./NotFound";

const UseCasePage = () => {
  const location = useLocation();
  const slug = location.pathname.substring(1); // Remove leading slash
  const useCase = getUseCaseData(slug);
  const { t } = useTranslation('useCases');

  if (!useCase) {
    return <NotFound />;
  }

  // Generate structured data for the use case page
  const useCaseStructuredData = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "name": useCase.title,
    "description": useCase.description,
    "url": `https://bilio.lat/${useCase.slug}`,
    "mainEntity": {
      "@type": "Service",
      "name": useCase.hero.headline,
      "description": useCase.hero.subheadline,
      "provider": {
        "@type": "Organization",
        "name": "Bilio",
        "url": "https://bilio.lat"
      },
      "hasOfferCatalog": {
        "@type": "OfferCatalog",
        "name": "Financial Services",
        "itemListElement": useCase.benefits.map((benefit, index) => ({
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": benefit.title,
            "description": benefit.description
          }
        }))
      }
    }
  };

  const faqStructuredData = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": useCase.faq.map(item => ({
      "@type": "Question",
      "name": item.question,
      "acceptedAnswer": {
        "@type": "Answer",
        "text": item.answer
      }
    }))
  };

  const howToStructuredData = {
    "@context": "https://schema.org",
    "@type": "HowTo",
    "name": `${t('howItWorksSteps')} ${useCase.hero.headline}`,
    "description": useCase.hero.subheadline,
    "step": useCase.howItWorks.map(step => ({
      "@type": "HowToStep",
      "name": step.title,
      "text": step.description,
      "example": step.example
    }))
  };

  React.useEffect(() => {
    // Update SEO meta tags
    document.title = useCase.title;
    
    const updateMetaTag = (name: string, content: string) => {
      let tag = document.querySelector(`meta[name="${name}"]`);
      if (!tag) {
        tag = document.createElement('meta');
        tag.setAttribute('name', name);
        document.head.appendChild(tag);
      }
      tag.setAttribute('content', content);
    };

    const updateOgTag = (property: string, content: string) => {
      let tag = document.querySelector(`meta[property="${property}"]`);
      if (!tag) {
        tag = document.createElement('meta');
        tag.setAttribute('property', property);
        document.head.appendChild(tag);
      }
      tag.setAttribute('content', content);
    };

    updateMetaTag('description', useCase.description);
    updateMetaTag('keywords', useCase.seoKeywords.join(', '));

    // Update Open Graph tags
    updateOgTag('og:title', useCase.title);
    updateOgTag('og:description', useCase.description);
    updateOgTag('og:type', 'website');
    updateOgTag('og:url', `https://bilio.lat/${useCase.slug}`);

    // Add canonical URL
    let canonicalLink = document.querySelector('link[rel="canonical"]');
    if (!canonicalLink) {
      canonicalLink = document.createElement('link');
      canonicalLink.setAttribute('rel', 'canonical');
      document.head.appendChild(canonicalLink);
    }
    canonicalLink.setAttribute('href', `https://bilio.lat/${useCase.slug}`);

    // Add structured data
    const useCaseSchema = document.createElement('script');
    useCaseSchema.type = 'application/ld+json';
    useCaseSchema.textContent = JSON.stringify(useCaseStructuredData);
    document.head.appendChild(useCaseSchema);

    const faqSchema = document.createElement('script');
    faqSchema.type = 'application/ld+json';
    faqSchema.textContent = JSON.stringify(faqStructuredData);
    document.head.appendChild(faqSchema);

    const howToSchema = document.createElement('script');
    howToSchema.type = 'application/ld+json';
    howToSchema.textContent = JSON.stringify(howToStructuredData);
    document.head.appendChild(howToSchema);

    return () => {
      // Cleanup on unmount
      if (useCaseSchema.parentNode) {
        useCaseSchema.parentNode.removeChild(useCaseSchema);
      }
      if (faqSchema.parentNode) {
        faqSchema.parentNode.removeChild(faqSchema);
      }
      if (howToSchema.parentNode) {
        howToSchema.parentNode.removeChild(howToSchema);
      }
    };
  }, [useCase]);

  return (
    <div className="min-h-screen bg-gradient-to-br from-white via-blue-50/30 to-yellow-50/20">
      <NavigationHeader />
      
      <main className="container mx-auto px-4 py-12">
        {/* Back navigation */}
        <Link to="/" className="inline-flex items-center text-Bilio-blue hover:text-Bilio-blue/80 mb-8">
          <ArrowLeft size={16} className="mr-2" />
          {t('backToHome')}
        </Link>

        {/* Hero Section */}
        <section className="text-center mb-16">
          <h1 className="text-4xl md:text-6xl font-bold mb-6 text-Bilio-gray-900 leading-tight">
            {useCase.hero.headline}
          </h1>
          <p className="text-xl md:text-2xl text-Bilio-gray-600 max-w-4xl mx-auto mb-8">
            {useCase.hero.subheadline}
          </p>
          
          {/* Problem/Solution */}
          <div className="max-w-4xl mx-auto grid md:grid-cols-2 gap-8 mb-12">
            <Card className="bg-red-50 border-red-200">
              <CardHeader>
                <CardTitle className="text-red-700 flex items-center">
                  ❌ {t('problem')}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-red-600">{useCase.hero.pain_point}</p>
              </CardContent>
            </Card>
            
            <Card className="bg-green-50 border-green-200">
              <CardHeader>
                <CardTitle className="text-green-700 flex items-center">
                  ✅ {t('solution')}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-green-600">{useCase.hero.solution}</p>
              </CardContent>
            </Card>
          </div>

          <Button size="lg" className="bg-Bilio-blue hover:bg-Bilio-blue/90 text-white">
            <MessageCircle size={20} className="mr-2" />
            {t('startFreeWhatsApp')}
          </Button>
        </section>

        {/* Benefits */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-center mb-12 text-Bilio-gray-900">
            {t('whyBetter')}
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {useCase.benefits.map((benefit, index) => (
              <Card key={index} className="group hover:shadow-lg transition-all duration-300 border-0 bg-white/80 backdrop-blur-sm">
                <CardHeader className="text-center">
                  <div className="text-4xl mb-4">{benefit.icon}</div>
                  <CardTitle className="text-xl group-hover:text-Bilio-blue transition-colors">
                    {benefit.title}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-Bilio-gray-600 text-center">
                    {benefit.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* How It Works */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-center mb-12 text-Bilio-gray-900">
            {t('howItWorksSteps')}
          </h2>
          <div className="max-w-4xl mx-auto">
            {useCase.howItWorks.map((step, index) => (
              <Card key={index} className="mb-6 bg-white/90 backdrop-blur-sm border-l-4 border-Bilio-blue">
                <CardContent className="p-6">
                  <div className="flex items-start gap-4">
                    <div className="flex-shrink-0">
                      <div className="w-12 h-12 bg-Bilio-blue text-white rounded-full flex items-center justify-center font-bold text-lg">
                        {step.step}
                      </div>
                    </div>
                    <div className="flex-1">
                      <h3 className="text-xl font-semibold mb-2 text-Bilio-gray-900">
                        {step.title}
                      </h3>
                      <p className="text-Bilio-gray-600 mb-3">
                        {step.description}
                      </p>
                      <div className="bg-gray-100 rounded-lg p-3">
                        <p className="text-sm text-Bilio-gray-700 italic">
                          <strong>{t('exampleLabel')}</strong> {step.example}
                        </p>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* Testimonials */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-center mb-12 text-Bilio-gray-900">
            {t('successCases')}
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {useCase.testimonials.map((testimonial, index) => (
              <Card key={index} className="bg-white/90 backdrop-blur-sm">
                <CardHeader>
                  <div className="flex items-center gap-1 mb-2">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} size={16} className="fill-yellow-400 text-yellow-400" />
                    ))}
                  </div>
                  <CardDescription className="italic text-Bilio-gray-700">
                    "{testimonial.quote}"
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="mb-3">
                    <p className="font-semibold text-Bilio-gray-900">{testimonial.name}</p>
                    <p className="text-sm text-Bilio-gray-600">{testimonial.role}</p>
                  </div>
                  <Badge variant="secondary" className="bg-green-100 text-green-700">
                    <Check size={14} className="mr-1" />
                    {testimonial.result}
                  </Badge>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* FAQ */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-center mb-12 text-Bilio-gray-900">
            {t('faq')}
          </h2>
          <div className="max-w-4xl mx-auto space-y-6">
            {useCase.faq.map((item, index) => (
              <Card key={index} className="bg-white/90 backdrop-blur-sm">
                <CardHeader>
                  <CardTitle className="text-lg text-Bilio-gray-900">
                    {item.question}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-Bilio-gray-700">{item.answer}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* Related Pages */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-center mb-12 text-Bilio-gray-900">
            {t('relatedPages')}
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {useCase.relatedPages.map((page, index) => (
              <Card key={index} className="group hover:shadow-lg transition-all duration-300 cursor-pointer bg-white/80 backdrop-blur-sm">
                <CardContent className="p-6 text-center">
                  <h3 className="font-semibold mb-2 group-hover:text-Bilio-blue transition-colors">
                    {page.replace('/', '').replace('-', ' ').replace(/\b\w/g, l => l.toUpperCase())}
                  </h3>
                  <Link to={page}>
                    <Button variant="ghost" size="sm" className="w-full group-hover:bg-Bilio-blue group-hover:text-white transition-all">
                      {t('seeMore')}
                      <ArrowRight size={16} className="ml-2" />
                    </Button>
                  </Link>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* Final CTA */}
        <section className="text-center">
          <Card className="bg-gradient-to-r from-Bilio-blue to-Bilio-blue/80 text-white max-w-3xl mx-auto">
            <CardContent className="p-12">
              <h3 className="text-3xl font-bold mb-6">
                {t('readyToRevolutionize')}
              </h3>
              <p className="text-xl mb-8 opacity-90">
                {t('joinThousands')} {useCase.hero.headline.toLowerCase()}
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button size="lg" variant="secondary" className="bg-white text-Bilio-blue hover:bg-gray-100">
                  <MessageCircle size={20} className="mr-2" />
                  {t('startFree')}
                </Button>
                <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-Bilio-blue">
                  <Users size={20} className="mr-2" />
                  {t('seeTestimonials')}
                </Button>
              </div>
              <div className="flex items-center justify-center mt-6 text-sm opacity-75">
                <Shield size={16} className="mr-2" />
                {t('freeForever')}
              </div>
            </CardContent>
          </Card>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default UseCasePage;