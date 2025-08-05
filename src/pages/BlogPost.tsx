import React from "react";
import { useParams, Link } from "react-router-dom";
import { Calendar, Clock, ArrowLeft, User, Share2, Tag } from "lucide-react";
import { getPostBySlug, getRelatedPosts, BLOG_CATEGORIES } from "@/data/blog";
import NavigationHeader from "@/components/NavigationHeader";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import NotFound from "./NotFound";

const BlogPost = () => {
  const { slug } = useParams<{ slug: string }>();
  const post = slug ? getPostBySlug(slug) : undefined;
  const relatedPosts = slug ? getRelatedPosts(slug) : [];

  if (!post) {
    return <NotFound />;
  }

  const category = BLOG_CATEGORIES.find(cat => cat.slug === post.category);

  // Generate structured data for the blog post
  const postStructuredData = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    "headline": post.title,
    "description": post.description,
    "image": post.ogImage || "https://bilio.lat/logoBilio.png",
    "author": {
      "@type": "Organization",
      "name": post.author,
      "url": "https://bilio.lat"
    },
    "publisher": {
      "@type": "Organization",
      "name": "Bilio",
      "logo": {
        "@type": "ImageObject",
        "url": "https://bilio.lat/logoBilio.png"
      }
    },
    "datePublished": post.publishDate,
    "dateModified": post.lastModified,
    "mainEntityOfPage": {
      "@type": "WebPage",
      "@id": `https://bilio.lat/blog/${post.slug}`
    },
    "keywords": post.seoKeywords.join(", "),
    "wordCount": post.content.split(' ').length,
    "timeRequired": `PT${post.readTime}M`,
    "articleSection": category?.name,
    "about": {
      "@type": "Thing",
      "name": "Finanzas Personales"
    }
  };

  React.useEffect(() => {
    // Update SEO meta tags
    document.title = `${post.title} | Blog Bilio`;
    
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

    updateMetaTag('description', post.description);
    updateMetaTag('keywords', post.seoKeywords.join(', '));
    updateMetaTag('author', post.author);

    // Update Open Graph tags
    updateOgTag('og:title', post.title);
    updateOgTag('og:description', post.description);
    updateOgTag('og:type', 'article');
    updateOgTag('og:url', `https://bilio.lat/blog/${post.slug}`);
    updateOgTag('og:image', post.ogImage || 'https://bilio.lat/logoBilio.png');
    updateOgTag('article:published_time', post.publishDate);
    updateOgTag('article:modified_time', post.lastModified);
    updateOgTag('article:author', post.author);
    updateOgTag('article:section', category?.name || '');
    post.tags.forEach(tag => {
      const tagMeta = document.createElement('meta');
      tagMeta.setAttribute('property', 'article:tag');
      tagMeta.setAttribute('content', tag);
      document.head.appendChild(tagMeta);
    });

    // Add canonical URL
    let canonicalLink = document.querySelector('link[rel="canonical"]');
    if (!canonicalLink) {
      canonicalLink = document.createElement('link');
      canonicalLink.setAttribute('rel', 'canonical');
      document.head.appendChild(canonicalLink);
    }
    canonicalLink.setAttribute('href', `https://bilio.lat/blog/${post.slug}`);

    // Add structured data
    const schemaScript = document.createElement('script');
    schemaScript.type = 'application/ld+json';
    schemaScript.textContent = JSON.stringify(postStructuredData);
    document.head.appendChild(schemaScript);

    return () => {
      // Cleanup on unmount
      const tagsToRemove = document.querySelectorAll('meta[property="article:tag"]');
      tagsToRemove.forEach(tag => tag.remove());
      if (schemaScript.parentNode) {
        schemaScript.parentNode.removeChild(schemaScript);
      }
    };
  }, [post, category]);

  return (
    <div className="min-h-screen bg-gradient-to-br from-white via-blue-50/30 to-yellow-50/20">
      <NavigationHeader />
      
      <main className="container mx-auto px-4 py-12">
        {/* Back to blog */}
        <Link to="/blog" className="inline-flex items-center text-Bilio-blue hover:text-Bilio-blue/80 mb-8">
          <ArrowLeft size={16} className="mr-2" />
          Volver al blog
        </Link>

        {/* Article header */}
        <article className="max-w-4xl mx-auto">
          <header className="mb-8">
            <div className="flex items-center gap-2 mb-4">
              {category && (
                <Badge variant="secondary" className="bg-Bilio-blue/10 text-Bilio-blue">
                  {category.name}
                </Badge>
              )}
              {post.featured && (
                <Badge variant="outline" className="bg-yellow-50 text-yellow-700 border-yellow-200">
                  Destacado
                </Badge>
              )}
            </div>
            
            <h1 className="text-4xl md:text-5xl font-bold mb-6 text-Bilio-gray-900 leading-tight">
              {post.title}
            </h1>
            
            <p className="text-xl text-Bilio-gray-600 mb-6 leading-relaxed">
              {post.description}
            </p>
            
            <div className="flex flex-wrap items-center gap-6 text-sm text-Bilio-gray-500 mb-6">
              <div className="flex items-center gap-2">
                <User size={16} />
                <span>{post.author}</span>
              </div>
              <div className="flex items-center gap-2">
                <Calendar size={16} />
                <span>{new Date(post.publishDate).toLocaleDateString('es-ES', { 
                  year: 'numeric', 
                  month: 'long', 
                  day: 'numeric' 
                })}</span>
              </div>
              <div className="flex items-center gap-2">
                <Clock size={16} />
                <span>{post.readTime} min de lectura</span>
              </div>
            </div>

            {/* Tags */}
            <div className="flex flex-wrap gap-2 mb-6">
              {post.tags.map((tag) => (
                <Badge key={tag} variant="outline" className="bg-gray-50">
                  <Tag size={12} className="mr-1" />
                  {tag}
                </Badge>
              ))}
            </div>

            {/* Share button */}
            <Button 
              variant="outline" 
              onClick={() => {
                if (navigator.share) {
                  navigator.share({
                    title: post.title,
                    text: post.description,
                    url: window.location.href
                  });
                } else {
                  navigator.clipboard.writeText(window.location.href);
                  // You could add a toast notification here
                }
              }}
              className="mb-8"
            >
              <Share2 size={16} className="mr-2" />
              Compartir artículo
            </Button>
          </header>

          {/* Article content */}
          <div className="prose prose-lg max-w-none mb-12">
            <div 
              className="text-Bilio-gray-700 leading-relaxed"
              dangerouslySetInnerHTML={{ 
                __html: post.content
                  .replace(/\n\n/g, '</p><p>')
                  .replace(/\n/g, '<br>')
                  .replace(/^/, '<p>')
                  .replace(/$/, '</p>')
                  // Handle headings
                  .replace(/<p>### (.*?)<\/p>/g, '<h3 class="text-xl font-semibold mt-8 mb-4 text-Bilio-gray-900">$1</h3>')
                  .replace(/<p>## (.*?)<\/p>/g, '<h2 class="text-2xl font-bold mt-10 mb-6 text-Bilio-gray-900">$1</h2>')
                  .replace(/<p># (.*?)<\/p>/g, '<h1 class="text-3xl font-bold mt-10 mb-6 text-Bilio-gray-900">$1</h1>')
                  // Handle lists
                  .replace(/<p>- (.*?)<\/p>/g, '<li class="mb-2">$1</li>')
                  .replace(/(<li.*?<\/li>)/g, '<ul class="list-disc list-inside mb-4 space-y-2">$1</ul>')
              }} 
            />
          </div>

          {/* Related posts */}
          {relatedPosts.length > 0 && (
            <section className="border-t pt-12">
              <h2 className="text-2xl font-bold mb-8 text-Bilio-gray-900">Artículos relacionados</h2>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {relatedPosts.map((relatedPost) => (
                  <Card key={relatedPost.slug} className="group hover:shadow-lg transition-all duration-300 border-0 bg-white/80 backdrop-blur-sm">
                    <CardHeader className="pb-4">
                      <div className="flex items-center gap-2 mb-2">
                        <Badge variant="secondary" className="bg-Bilio-blue/10 text-Bilio-blue text-xs">
                          {BLOG_CATEGORIES.find(cat => cat.slug === relatedPost.category)?.name}
                        </Badge>
                      </div>
                      <CardTitle className="text-lg group-hover:text-Bilio-blue transition-colors">
                        <Link to={`/blog/${relatedPost.slug}`}>
                          {relatedPost.title}
                        </Link>
                      </CardTitle>
                      <CardDescription className="text-sm">
                        {relatedPost.description}
                      </CardDescription>
                    </CardHeader>
                    <CardContent>
                      <div className="flex items-center justify-between text-xs text-Bilio-gray-500 mb-3">
                        <span>{new Date(relatedPost.publishDate).toLocaleDateString('es-ES')}</span>
                        <span>{relatedPost.readTime} min</span>
                      </div>
                      <Link to={`/blog/${relatedPost.slug}`}>
                        <Button variant="ghost" size="sm" className="w-full group-hover:bg-Bilio-blue group-hover:text-white transition-all">
                          Leer artículo
                        </Button>
                      </Link>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </section>
          )}
        </article>
      </main>

      <Footer />
    </div>
  );
};

export default BlogPost;