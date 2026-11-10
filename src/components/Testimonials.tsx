import React, { useState } from 'react';
import { TESTIMONIALS } from '../data/testimonials';
import { Star, ChevronLeft, ChevronRight, Quote, CheckCircle2 } from 'lucide-react';

export const Testimonials: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const prevTestimonial = () => {
    setCurrentIndex((prev) => (prev === 0 ? TESTIMONIALS.length - 1 : prev - 1));
  };

  const nextTestimonial = () => {
    setCurrentIndex((prev) => (prev === TESTIMONIALS.length - 1 ? 0 : prev + 1));
  };

  const current = TESTIMONIALS[currentIndex];

  return (
    <section className="py-20 lg:py-28 bg-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs font-bold uppercase tracking-wider text-[#16B8A6] block mb-2">
            Patient Voices
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#123B56] tracking-tight">
            Trusted by Smiles in Rudrapur
          </h2>
          <p className="mt-4 text-base sm:text-lg text-slate-600 leading-relaxed">
            Real feedback from patients who have experienced our gentle, transparent care and state-of-the-art clinic.
          </p>
        </div>

        {/* Testimonial Showcase Card */}
        <div className="max-w-4xl mx-auto">
          <div className="relative bg-gradient-to-br from-[#F1FAFA] to-white rounded-3xl p-8 sm:p-12 border border-teal-100 shadow-md">
            
            {/* Top Row: Quote Icon & Stars */}
            <div className="flex items-center justify-between mb-8">
              <div className="w-12 h-12 rounded-2xl bg-[#123B56] flex items-center justify-center text-[#16B8A6]">
                <Quote className="w-6 h-6 text-teal-300" />
              </div>

              {/* Star Rating */}
              <div className="flex items-center gap-1">
                {[...Array(current.rating)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-amber-400 text-amber-400" />
                ))}
              </div>
            </div>

            {/* Review Text */}
            <blockquote className="text-lg sm:text-xl lg:text-2xl text-[#123B56] font-medium leading-relaxed mb-8">
              "{current.review}"
            </blockquote>

            {/* Bottom Meta & Reviewer Details */}
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pt-6 border-t border-slate-200/80">
              <div>
                <div className="flex items-center gap-2">
                  <h4 className="font-display font-bold text-base text-[#123B56]">
                    {current.patientName}
                  </h4>
                  <span className="inline-flex items-center gap-1 text-[11px] font-semibold text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded-md">
                    <CheckCircle2 className="w-3 h-3 text-emerald-600" />
                    <span>{current.date}</span>
                  </span>
                </div>
                <div className="text-xs text-slate-500 mt-0.5">
                  <span>{current.location}</span> · <span className="text-[#16B8A6] font-medium">{current.treatment}</span>
                </div>
              </div>

              {/* Navigation Arrows */}
              <div className="flex items-center gap-2">
                <button
                  onClick={prevTestimonial}
                  aria-label="Previous review"
                  className="p-2.5 rounded-full border border-slate-200 bg-white hover:bg-[#F1FAFA] text-[#123B56] hover:border-teal-200 transition-colors cursor-pointer"
                >
                  <ChevronLeft className="w-5 h-5" />
                </button>
                <button
                  onClick={nextTestimonial}
                  aria-label="Next review"
                  className="p-2.5 rounded-full border border-slate-200 bg-white hover:bg-[#F1FAFA] text-[#123B56] hover:border-teal-200 transition-colors cursor-pointer"
                >
                  <ChevronRight className="w-5 h-5" />
                </button>
              </div>
            </div>

          </div>

          {/* Dots Indicator */}
          <div className="flex items-center justify-center gap-2 mt-6">
            {TESTIMONIALS.map((_, idx) => (
              <button
                key={idx}
                onClick={() => setCurrentIndex(idx)}
                aria-label={`Go to slide ${idx + 1}`}
                className={`h-2 rounded-full transition-all cursor-pointer ${
                  currentIndex === idx ? 'w-8 bg-[#16B8A6]' : 'w-2 bg-slate-200 hover:bg-slate-300'
                }`}
              />
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};
