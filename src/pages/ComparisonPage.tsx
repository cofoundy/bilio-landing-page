import React from "react";
import { useLocation, Link } from "react-router-dom";
import { ArrowLeft, Check, X, Star, Crown, Shield, Zap } from "lucide-react";
import { getComparisonData } from "@/data/comparisons";
import NavigationHeader from "@/components/NavigationHeader";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import NotFound from "./NotFound";

const ComparisonPage = () => {
  const location = useLocation();
  const slug = location.pathname.substring(1); // Remove leading slash
  const comparison = getComparisonData(slug);

  if (!comparison) {
    return <NotFound />;
  }

  // Generate structured data for comparison
  const comparisonStructuredData = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "name": comparison.title,
    "description": comparison.description,
    "url": `https://bilio.lat/${comparison.slug}`,
    "mainEntity": {
      "@type": "Article",
      "headline": comparison.title,
      "description": comparison.description,
      "author": {
        "@type": "Organization",
        "name": "Bilio"
      },
      "publisher": {
        "@type": "Organization",
        "name": "Bilio",
        "logo": {
          "@type": "ImageObject",
          "url": "https://bilio.lat/logoBilio.png"
        }
      },
      "datePublished": "2024-12-20",
      "dateModified": "2024-12-20"
    }
  };

  const faqStructuredData = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": comparison.faq.map(item => ({
      "@type": "Question",
      "name": item.question,
      "acceptedAnswer": {
        "@type": "Answer",
        "text": item.answer
      }
    }))
  };

  React.useEffect(() => {
    // Update SEO meta tags
    document.title = `${comparison.title} | Bilio`;
    
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

    updateMetaTag('description', comparison.description);
    updateMetaTag('keywords', comparison.seoKeywords.join(', '));

    // Update Open Graph tags
    updateOgTag('og:title', comparison.title);
    updateOgTag('og:description', comparison.description);
    updateOgTag('og:type', 'article');
    updateOgTag('og:url', `https://bilio.lat/${comparison.slug}`);

    // Add canonical URL
    let canonicalLink = document.querySelector('link[rel="canonical"]');
    if (!canonicalLink) {
      canonicalLink = document.createElement('link');
      canonicalLink.setAttribute('rel', 'canonical');
      document.head.appendChild(canonicalLink);
    }
    canonicalLink.setAttribute('href', `https://bilio.lat/${comparison.slug}`);

    // Add structured data
    const comparisonSchema = document.createElement('script');
    comparisonSchema.type = 'application/ld+json';
    comparisonSchema.textContent = JSON.stringify(comparisonStructuredData);
    document.head.appendChild(comparisonSchema);

    const faqSchema = document.createElement('script');
    faqSchema.type = 'application/ld+json';
    faqSchema.textContent = JSON.stringify(faqStructuredData);
    document.head.appendChild(faqSchema);

    return () => {
      // Cleanup on unmount
      if (comparisonSchema.parentNode) {
        comparisonSchema.parentNode.removeChild(comparisonSchema);
      }
      if (faqSchema.parentNode) {
        faqSchema.parentNode.removeChild(faqSchema);
      }
    };
  }, [comparison]);

  const renderBooleanValue = (value: string | boolean) => {
    if (typeof value === 'boolean') {
      return value ? (
        <Check className="w-5 h-5 text-green-600" />
      ) : (
        <X className="w-5 h-5 text-red-500" />
      );
    }
    return value;
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-white via-blue-50/30 to-yellow-50/20">
      <NavigationHeader />
      
      <main className="container mx-auto px-4 py-12">
        {/* Back navigation */}
        <Link to="/" className="inline-flex items-center text-Bilio-blue hover:text-Bilio-blue/80 mb-8">
          <ArrowLeft size={16} className="mr-2" />
          Volver al inicio
        </Link>

        {/* Header */}
        <section className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold mb-6 text-Bilio-gray-900">
            {comparison.title}
          </h1>
          <p className="text-xl text-Bilio-gray-600 max-w-4xl mx-auto mb-8">
            {comparison.description}
          </p>
        </section>

        {/* Quick comparison cards */}
        <section className="grid md:grid-cols-2 gap-8 mb-16">
          {/* Bilio card */}
          <Card className="relative border-2 border-Bilio-blue bg-white/90 backdrop-blur-sm">
            <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
              <Badge className="bg-Bilio-blue text-white px-4 py-1">
                <Crown size={14} className="mr-1" />
                Nuestra recomendación
              </Badge>
            </div>
            <CardHeader className="text-center pt-8">
              <CardTitle className="text-2xl text-Bilio-blue">{comparison.bilio.name}</CardTitle>
              <CardDescription className="text-lg">{comparison.bilio.description}</CardDescription>
              <div className="text-3xl font-bold mt-4">{comparison.bilio.price}</div>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div>
                  <h4 className="font-semibold text-green-700 mb-2">✅ Ventajas</h4>
                  <ul className="space-y-1">
                    {comparison.bilio.pros.map((pro, index) => (
                      <li key={index} className="text-sm flex items-start">
                        <Check size={16} className="text-green-600 mr-2 mt-0.5 flex-shrink-0" />
                        {pro}
                      </li>
                    ))}
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold text-red-700 mb-2">❌ Desventajas</h4>
                  <ul className="space-y-1">
                    {comparison.bilio.cons.map((con, index) => (
                      <li key={index} className="text-sm flex items-start">
                        <X size={16} className="text-red-500 mr-2 mt-0.5 flex-shrink-0" />
                        {con}
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="pt-4">
                  <p className="text-sm text-Bilio-gray-600 mb-2">
                    <strong>Mejor para:</strong> {comparison.bilio.targetAudience}
                  </p>
                  <p className="text-sm text-Bilio-gray-600">
                    <strong>Plataformas:</strong> {comparison.bilio.platforms.join(', ')}
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Competitor card */}
          <Card className="bg-white/90 backdrop-blur-sm">
            <CardHeader className="text-center">
              <CardTitle className="text-2xl text-Bilio-gray-900">{comparison.competitor.name}</CardTitle>
              <CardDescription className="text-lg">{comparison.competitor.description}</CardDescription>
              <div className="text-3xl font-bold mt-4">{comparison.competitor.price}</div>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div>
                  <h4 className="font-semibold text-green-700 mb-2">✅ Ventajas</h4>
                  <ul className="space-y-1">
                    {comparison.competitor.pros.map((pro, index) => (
                      <li key={index} className="text-sm flex items-start">
                        <Check size={16} className="text-green-600 mr-2 mt-0.5 flex-shrink-0" />
                        {pro}
                      </li>
                    ))}
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold text-red-700 mb-2">❌ Desventajas</h4>
                  <ul className="space-y-1">
                    {comparison.competitor.cons.map((con, index) => (
                      <li key={index} className="text-sm flex items-start">
                        <X size={16} className="text-red-500 mr-2 mt-0.5 flex-shrink-0" />
                        {con}
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="pt-4">
                  <p className="text-sm text-Bilio-gray-600 mb-2">
                    <strong>Mejor para:</strong> {comparison.competitor.targetAudience}
                  </p>
                  <p className="text-sm text-Bilio-gray-600">
                    <strong>Plataformas:</strong> {comparison.competitor.platforms.join(', ')}
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        </section>

        {/* Detailed comparison table */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-center mb-8 text-Bilio-gray-900">
            Comparación Detallada
          </h2>
          <Card className="bg-white/90 backdrop-blur-sm">
            <CardContent className="p-0">
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead>
                    <tr className="border-b">
                      <th className="text-left p-4 font-semibold">Característica</th>
                      <th className="text-center p-4 font-semibold text-Bilio-blue">
                        <div className="flex items-center justify-center">
                          <Crown size={16} className="mr-2" />
                          Bilio
                        </div>
                      </th>
                      <th className="text-center p-4 font-semibold">{comparison.competitor.name}</th>
                    </tr>
                  </thead>
                  <tbody>
                    {comparison.comparisonTable.map((row, index) => (
                      <tr key={index} className={`border-b ${row.bilioAdvantage ? 'bg-green-50' : ''}`}>
                        <td className="p-4 font-medium">
                          {row.feature}
                          {row.bilioAdvantage && (
                            <Shield size={16} className="inline ml-2 text-green-600" />
                          )}
                        </td>
                        <td className="p-4 text-center">
                          <div className={`${row.bilioAdvantage ? 'font-semibold text-green-700' : ''}`}>
                            {renderBooleanValue(row.bilio)}
                          </div>
                        </td>
                        <td className="p-4 text-center">
                          {renderBooleanValue(row.competitor)}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </CardContent>
          </Card>
        </section>

        {/* Verdict */}
        <section className="mb-16">
          <Card className="bg-gradient-to-r from-Bilio-blue/10 to-Bilio-yellow/10 border-2 border-Bilio-blue/20">
            <CardHeader className="text-center">
              <CardTitle className="text-2xl text-Bilio-gray-900 flex items-center justify-center">
                <Star size={24} className="mr-2 text-Bilio-blue" />
                Veredicto Final
              </CardTitle>
            </CardHeader>
            <CardContent className="text-center">
              <div className="text-6xl mb-4">
                {comparison.verdict.winner === 'bilio' ? '🏆' : 
                 comparison.verdict.winner === 'competitor' ? '🥈' : '🤝'}
              </div>
              <h3 className="text-xl font-bold mb-4 text-Bilio-gray-900">
                Ganador: {comparison.verdict.winner === 'bilio' ? 'Bilio' : 
                         comparison.verdict.winner === 'competitor' ? comparison.competitor.name : 'Empate'}
              </h3>
              <p className="text-lg text-Bilio-gray-700 mb-6 max-w-3xl mx-auto">
                {comparison.verdict.summary}
              </p>
              <div className="bg-white/70 rounded-lg p-6 max-w-4xl mx-auto">
                <h4 className="font-semibold mb-2">💡 Nuestra Recomendación</h4>
                <p className="text-Bilio-gray-700">{comparison.verdict.recommendation}</p>
              </div>
            </CardContent>
          </Card>
        </section>

        {/* FAQ */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-center mb-8 text-Bilio-gray-900">
            Preguntas Frecuentes
          </h2>
          <div className="max-w-4xl mx-auto space-y-6">
            {comparison.faq.map((item, index) => (
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

        {/* CTA */}
        <section className="text-center">
          <Card className="bg-gradient-to-r from-Bilio-blue to-Bilio-blue/80 text-white max-w-2xl mx-auto">
            <CardContent className="p-8">
              <h3 className="text-2xl font-bold mb-4">¿Listo para probar Bilio?</h3>
              <p className="mb-6">
                Únete a miles de usuarios que ya mejoraron sus finanzas con nuestro asistente IA.
              </p>
              <Button size="lg" variant="secondary" className="bg-white text-Bilio-blue hover:bg-gray-100">
                <Zap size={20} className="mr-2" />
                Comenzar Gratis en WhatsApp
              </Button>
            </CardContent>
          </Card>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default ComparisonPage;