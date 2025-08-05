import React from "react";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { Calendar, Clock, ArrowRight, User } from "lucide-react";
import { BLOG_POSTS, BLOG_CATEGORIES, getFeaturedPosts, getPostsByCategory } from "@/data/blog";
import NavigationHeader from "@/components/NavigationHeader";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

const BlogIndex = () => {
  const { t } = useTranslation('blog');
  const featuredPosts = getFeaturedPosts();
  const categories = BLOG_CATEGORIES;

  // Generate structured data for blog
  const blogStructuredData = {
    "@context": "https://schema.org",
    "@type": "Blog",
    "name": t('title'),
    "description": "Consejos de finanzas personales, control de gastos y tecnología financiera",
    "url": "https://bilio.lat/blog",
    "publisher": {
      "@type": "Organization",
      "name": "Bilio",
      "logo": {
        "@type": "ImageObject",
        "url": "https://bilio.lat/logoBilio.png"
      }
    },
    "blogPost": BLOG_POSTS.map(post => ({
      "@type": "BlogPosting",
      "headline": post.title,
      "description": post.description,
      "url": `https://bilio.lat/blog/${post.slug}`,
      "datePublished": post.publishDate,
      "dateModified": post.lastModified,
      "author": {
        "@type": "Organization",
        "name": post.author
      },
      "image": post.ogImage || "https://bilio.lat/logoBilio.png",
      "keywords": post.seoKeywords.join(", ")
    }))
  };

  React.useEffect(() => {
    // Update SEO meta tags
    document.title = t('pageTitle');
    
    const updateMetaTag = (name: string, content: string) => {
      let tag = document.querySelector(`meta[name="${name}"]`);
      if (!tag) {
        tag = document.createElement('meta');
        tag.setAttribute('name', name);
        document.head.appendChild(tag);
      }
      tag.setAttribute('content', content);
    };

    updateMetaTag('description', 'Descubre consejos expertos sobre finanzas personales, control de gastos con IA y tecnología financiera en el blog de Bilio.');
    updateMetaTag('keywords', 'blog finanzas, finanzas personales, control gastos, inteligencia artificial, presupuesto, ahorro');

    // Add structured data
    const schemaScript = document.createElement('script');
    schemaScript.type = 'application/ld+json';
    schemaScript.textContent = JSON.stringify(blogStructuredData);
    document.head.appendChild(schemaScript);

    return () => {
      // Cleanup structured data on unmount
      document.head.removeChild(schemaScript);
    };
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-white via-blue-50/30 to-yellow-50/20">
      <NavigationHeader />
      
      <main className="container mx-auto px-4 py-12">
        {/* Hero Section */}
        <section className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold mb-6 text-Bilio-gray-900">
{t('title')}
          </h1>
          <p className="text-xl text-Bilio-gray-600 max-w-3xl mx-auto mb-8">
            Consejos expertos sobre finanzas personales, control de gastos con IA y la revolución de la tecnología financiera
          </p>
        </section>

        {/* Featured Posts */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold mb-8 text-Bilio-gray-900">{t('featuredArticles')}</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {featuredPosts.map((post) => (
              <Card key={post.slug} className="group hover:shadow-lg transition-all duration-300 border-0 bg-white/80 backdrop-blur-sm">
                <CardHeader className="pb-4">
                  <div className="flex items-center gap-2 mb-2">
                    <Badge variant="secondary" className="bg-Bilio-blue/10 text-Bilio-blue">
                      {categories.find(cat => cat.slug === post.category)?.name}
                    </Badge>
                    <Badge variant="outline" className="bg-yellow-50 text-yellow-700 border-yellow-200">
                      Destacado
                    </Badge>
                  </div>
                  <CardTitle className="group-hover:text-Bilio-blue transition-colors">
                    <Link to={`/blog/${post.slug}`}>
                      {post.title}
                    </Link>
                  </CardTitle>
                  <CardDescription className="text-Bilio-gray-600">
                    {post.description}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex items-center justify-between text-sm text-Bilio-gray-500 mb-4">
                    <div className="flex items-center gap-4">
                      <div className="flex items-center gap-1">
                        <User size={14} />
                        <span>{post.author}</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <Calendar size={14} />
                        <span>{new Date(post.publishDate).toLocaleDateString('es-ES')}</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <Clock size={14} />
                        <span>{post.readTime} min</span>
                      </div>
                    </div>
                  </div>
                  <Link to={`/blog/${post.slug}`}>
                    <Button variant="ghost" className="w-full group-hover:bg-Bilio-blue group-hover:text-white transition-all">
{t('readArticle')}
                      <ArrowRight size={16} className="ml-2" />
                    </Button>
                  </Link>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* Categories */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold mb-8 text-Bilio-gray-900">Categorías</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {categories.map((category) => {
              const categoryPosts = getPostsByCategory(category.slug);
              return (
                <Card key={category.slug} className="group hover:shadow-lg transition-all duration-300 cursor-pointer border-0 bg-white/80 backdrop-blur-sm">
                  <CardHeader className="text-center">
                    <div className={`w-16 h-16 mx-auto mb-4 rounded-full bg-${category.color}-100 flex items-center justify-center`}>
                      <div className={`w-8 h-8 bg-${category.color}-500 rounded-full`}></div>
                    </div>
                    <CardTitle className="text-lg group-hover:text-Bilio-blue transition-colors">
                      {category.name}
                    </CardTitle>
                    <CardDescription>
                      {category.description}
                    </CardDescription>
                    <Badge variant="secondary" className="w-fit mx-auto mt-2">
                      {categoryPosts.length} artículos
                    </Badge>
                  </CardHeader>
                </Card>
              );
            })}
          </div>
        </section>

        {/* All Posts */}
        <section>
          <h2 className="text-3xl font-bold mb-8 text-Bilio-gray-900">{t('allArticles')}</h2>
          <div className="space-y-6">
            {BLOG_POSTS.map((post) => (
              <Card key={post.slug} className="group hover:shadow-lg transition-all duration-300 border-0 bg-white/80 backdrop-blur-sm">
                <CardContent className="p-6">
                  <div className="flex flex-col md:flex-row md:items-start gap-4">
                    <div className="flex-1">
                      <div className="flex items-center gap-2 mb-2">
                        <Badge variant="secondary" className="bg-Bilio-blue/10 text-Bilio-blue">
                          {categories.find(cat => cat.slug === post.category)?.name}
                        </Badge>
                        {post.featured && (
                          <Badge variant="outline" className="bg-yellow-50 text-yellow-700 border-yellow-200">
                            Destacado
                          </Badge>
                        )}
                      </div>
                      <h3 className="text-xl font-semibold mb-2 group-hover:text-Bilio-blue transition-colors">
                        <Link to={`/blog/${post.slug}`}>
                          {post.title}
                        </Link>
                      </h3>
                      <p className="text-Bilio-gray-600 mb-4">
                        {post.description}
                      </p>
                      <div className="flex items-center gap-4 text-sm text-Bilio-gray-500">
                        <div className="flex items-center gap-1">
                          <User size={14} />
                          <span>{post.author}</span>
                        </div>
                        <div className="flex items-center gap-1">
                          <Calendar size={14} />
                          <span>{new Date(post.publishDate).toLocaleDateString('es-ES')}</span>
                        </div>
                        <div className="flex items-center gap-1">
                          <Clock size={14} />
                          <span>{post.readTime} min</span>
                        </div>
                      </div>
                    </div>
                    <div className="md:ml-6">
                      <Link to={`/blog/${post.slug}`}>
                        <Button variant="outline" className="group-hover:bg-Bilio-blue group-hover:text-white group-hover:border-Bilio-blue transition-all">
{t('readMore')}
                          <ArrowRight size={16} className="ml-2" />
                        </Button>
                      </Link>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default BlogIndex;