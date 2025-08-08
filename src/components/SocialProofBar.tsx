'use client';
import React, { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { motion, AnimatePresence } from 'framer-motion';
import { Star } from 'lucide-react';

interface Testimonial {
  id: number;
  quote: string;
  author: string;
  location: string;
  rating: number;
}

const SocialProofBar: React.FC = () => {
  const { t } = useTranslation('socialProof');
  const [currentIndex, setCurrentIndex] = useState(0);

  // Get testimonials from translation with fallback
  const testimonials: Testimonial[] = React.useMemo(() => {
    try {
      const translatedTestimonials = t('testimonials', { returnObjects: true }) as Testimonial[];
      return Array.isArray(translatedTestimonials) ? translatedTestimonials : [];
    } catch {
      return [];
    }
  }, [t]);

  // Auto-rotate testimonials every 5 seconds
  useEffect(() => {
    if (testimonials.length <= 1) return;

    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => 
        prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1
      );
    }, 5000);

    return () => clearInterval(interval);
  }, [testimonials.length]);

  if (testimonials.length === 0) return null;

  const currentTestimonial = testimonials[currentIndex];

  return (
    <section className="relative w-full overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-r from-Bilio-yellow-soft/30 via-Bilio-blue-soft/20 to-Bilio-green-soft/30" />
      
      {/* Content */}
      <div className="relative flex items-center justify-center px-4 py-6 sm:px-8 sm:py-8">
        <div className="w-full max-w-4xl">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentTestimonial.id}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.5, ease: "easeInOut" }}
              className="flex flex-col items-center text-center"
            >
              {/* Star rating */}
              <div className="mb-3 flex items-center justify-center gap-1">
                {Array.from({ length: currentTestimonial.rating }, (_, i) => (
                  <Star
                    key={i}
                    className="h-4 w-4 fill-Bilio-yellow text-Bilio-yellow sm:h-5 sm:w-5"
                  />
                ))}
              </div>

              {/* Quote */}
              <blockquote className="mb-3 text-sm font-medium text-Bilio-gray-700 sm:text-base md:text-lg">
                "{currentTestimonial.quote}"
              </blockquote>

              {/* Author and location */}
              <cite className="text-xs text-Bilio-gray-600 sm:text-sm">
                <span className="font-semibold">{currentTestimonial.author}</span>
                {currentTestimonial.location && (
                  <>
                    {', '}
                    <span>{currentTestimonial.location}</span>
                  </>
                )}
              </cite>
            </motion.div>
          </AnimatePresence>

          {/* Dots indicator (only show if more than 1 testimonial) */}
          {testimonials.length > 1 && (
            <div className="mt-4 flex items-center justify-center gap-2">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentIndex(index)}
                  className={`h-2 w-2 rounded-full transition-colors duration-200 ${
                    index === currentIndex
                      ? 'bg-Bilio-yellow'
                      : 'bg-Bilio-gray-300 hover:bg-Bilio-gray-400'
                  }`}
                  aria-label={`Go to testimonial ${index + 1}`}
                />
              ))}
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default SocialProofBar;