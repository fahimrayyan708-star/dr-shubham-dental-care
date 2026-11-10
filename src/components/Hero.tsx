import React, { useEffect, useRef } from 'react';
import { Calendar, ArrowRight, ShieldCheck, HeartHandshake, Sparkles, Clock, MapPin } from 'lucide-react';
import gsap from 'gsap';

interface HeroProps {
  onOpenBooking: () => void;
  onExploreTreatments: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenBooking, onExploreTreatments }) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const headlineRef = useRef<HTMLHeadingElement>(null);
  const subheadingRef = useRef<HTMLParagraphElement>(null);
  const ctaGroupRef = useRef<HTMLDivElement>(null);
  const badgesRef = useRef<HTMLDivElement>(null);
  const imageWrapperRef = useRef<HTMLDivElement>(null);
  const floatingCardRef = useRef<HTMLDivElement>(null);
  const floatShape1Ref = useRef<HTMLDivElement>(null);
  const floatShape2Ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Check prefers-reduced-motion
    const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
    if (mediaQuery.matches) return;

    const ctx = gsap.context(() => {
      const tl = gsap.timeline({ defaults: { ease: 'power3.out' } });

      // Staggered text entrance
      tl.from(headlineRef.current, {
        y: 40,
        opacity: 0,
        duration: 0.85,
        delay: 0.1,
      })
      .from(
        subheadingRef.current,
        {
          y: 24,
          opacity: 0,
          duration: 0.65,
        },
        '-=0.5'
      )
      .from(
        ctaGroupRef.current,
        {
          y: 20,
          opacity: 0,
          duration: 0.55,
        },
        '-=0.4'
      )
      .from(
        badgesRef.current,
        {
          y: 16,
          opacity: 0,
          duration: 0.5,
        },
        '-=0.3'
      )
      .from(
        imageWrapperRef.current,
        {
          scale: 0.95,
          opacity: 0,
          duration: 0.9,
          ease: 'expo.out',
        },
        '-=0.7'
      )
      .from(
        floatingCardRef.current,
        {
          y: 30,
          opacity: 0,
          duration: 0.6,
        },
        '-=0.4'
      );

      // Subtle continuous floating motion for decorative accents
      if (floatShape1Ref.current) {
        gsap.to(floatShape1Ref.current, {
          y: -14,
          x: 8,
          rotation: 3,
          duration: 4,
          repeat: -1,
          yoyo: true,
          ease: 'sine.inOut',
        });
      }

      if (floatShape2Ref.current) {
        gsap.to(floatShape2Ref.current, {
          y: 16,
          x: -10,
          rotation: -4,
          duration: 5,
          repeat: -1,
          yoyo: true,
          ease: 'sine.inOut',
        });
      }

      if (floatingCardRef.current) {
        gsap.to(floatingCardRef.current, {
          y: -8,
          duration: 3.5,
          repeat: -1,
          yoyo: true,
          ease: 'sine.inOut',
        });
      }
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      id="home"
      ref={containerRef}
      className="relative min-h-[92vh] lg:min-h-screen flex items-center pt-28 pb-16 lg:pt-32 lg:pb-20 overflow-hidden bg-gradient-to-b from-[#F1FAFA] via-white to-white"
    >
      {/* Elegant Organic Background Gradients & Dental Blobs */}
      <div
        ref={floatShape1Ref}
        className="pointer-events-none absolute -top-16 -right-16 w-96 h-96 rounded-full bg-gradient-to-br from-[#16B8A6]/10 to-[#123B56]/5 blur-3xl"
        aria-hidden="true"
      />
      <div
        ref={floatShape2Ref}
        className="pointer-events-none absolute top-1/2 -left-20 w-80 h-80 rounded-full bg-[#E8F5FA] blur-2xl opacity-70"
        aria-hidden="true"
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Column: Text & CTAs */}
          <div className="lg:col-span-7 xl:col-span-6 flex flex-col items-start text-left">
            
            {/* Trust Pill / Location Indicator */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white border border-teal-100 shadow-xs mb-6 text-xs font-semibold text-[#123B56]">
              <span className="flex h-2 w-2 rounded-full bg-[#16B8A6]" />
              <span>Oasis City, Gangapur Road, Rudrapur</span>
              <span className="text-slate-300">|</span>
              <span className="text-[#16B8A6] flex items-center gap-1">
                <Clock className="w-3 h-3 inline" /> 10 AM – 8 PM
              </span>
            </div>

            {/* Main Headline */}
            <h1
              ref={headlineRef}
              className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-[#123B56] tracking-tight leading-[1.12] mb-6 text-balance"
            >
              Your Smile Deserves{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#123B56] via-[#16B8A6] to-[#123B56]">
                Expert Care.
              </span>
            </h1>

            {/* Subheading */}
            <p
              ref={subheadingRef}
              className="text-base sm:text-lg text-slate-600 leading-relaxed max-w-xl mb-8 font-normal"
            >
              Experience comfortable, personalized dental care with a focus on your smile, confidence, and long-term oral health. Advanced dental implants and gentle family dentistry led by Dr. Shubham.
            </p>

            {/* Buttons */}
            <div
              ref={ctaGroupRef}
              className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3.5 w-full sm:w-auto mb-10"
            >
              <button
                onClick={onOpenBooking}
                className="inline-flex items-center justify-center gap-2.5 px-7 py-3.5 rounded-full bg-[#123B56] hover:bg-[#16B8A6] text-white font-semibold text-sm transition-all duration-200 shadow-md hover:shadow-lg active:scale-98 whitespace-nowrap cursor-pointer"
              >
                <Calendar className="w-4 h-4 text-[#16B8A6] group-hover:text-white" />
                <span>Book Your Appointment</span>
              </button>

              <button
                onClick={onExploreTreatments}
                className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-full bg-white hover:bg-[#F1FAFA] text-[#123B56] border border-slate-200 font-semibold text-sm transition-all duration-200 hover:border-teal-200 whitespace-nowrap cursor-pointer"
              >
                <span>Explore Treatments</span>
                <ArrowRight className="w-4 h-4 text-[#16B8A6]" />
              </button>
            </div>

            {/* Trust Indicators */}
            <div
              ref={badgesRef}
              className="w-full pt-6 border-t border-slate-200/80 grid grid-cols-2 sm:grid-cols-3 gap-4"
            >
              <div className="flex items-center gap-2.5">
                <div className="w-8 h-8 rounded-lg bg-[#E8F5FA] flex items-center justify-center text-[#16B8A6] shrink-0">
                  <HeartHandshake className="w-4 h-4" />
                </div>
                <div>
                  <span className="block text-xs font-bold text-[#123B56] leading-tight">Gentle & Painless</span>
                  <span className="block text-[11px] text-slate-500">Patient-first comfort</span>
                </div>
              </div>

              <div className="flex items-center gap-2.5">
                <div className="w-8 h-8 rounded-lg bg-[#E8F5FA] flex items-center justify-center text-[#16B8A6] shrink-0">
                  <ShieldCheck className="w-4 h-4" />
                </div>
                <div>
                  <span className="block text-xs font-bold text-[#123B56] leading-tight">100% Sterile</span>
                  <span className="block text-[11px] text-slate-500">Autoclave protocol</span>
                </div>
              </div>

              <div className="flex items-center gap-2.5 col-span-2 sm:col-span-1">
                <div className="w-8 h-8 rounded-lg bg-[#E8F5FA] flex items-center justify-center text-[#16B8A6] shrink-0">
                  <Sparkles className="w-4 h-4" />
                </div>
                <div>
                  <span className="block text-xs font-bold text-[#123B56] leading-tight">Implant Centre</span>
                  <span className="block text-[11px] text-slate-500">3D guided placement</span>
                </div>
              </div>
            </div>

          </div>

          {/* Right Column: Hero Visual Image with Organic Framing */}
          <div className="lg:col-span-5 xl:col-span-6 relative flex justify-center">
            
            {/* Visual Frame */}
            <div
              ref={imageWrapperRef}
              className="relative w-full max-w-lg lg:max-w-none rounded-3xl overflow-hidden shadow-2xl border-4 border-white bg-slate-100 group"
            >
              <img
                src="/src/assets/images/hero_dentist_care_1794292933600.jpg"
                alt="Dr. Shubham consulting with patient in modern dental clinic operatory"
                className="w-full h-[400px] sm:h-[480px] lg:h-[520px] object-cover transition-transform duration-700 group-hover:scale-102"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#123B56]/50 via-transparent to-transparent pointer-events-none" />

              {/* Bottom Image Caption Bar */}
              <div className="absolute bottom-4 left-4 right-4 p-3.5 rounded-2xl bg-white/95 backdrop-blur-md border border-white/60 shadow-lg flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="w-9 h-9 rounded-xl bg-[#16B8A6]/15 flex items-center justify-center text-[#16B8A6]">
                    <MapPin className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="block text-xs font-bold text-[#123B56]">Oasis City, Gangapur Road</span>
                    <span className="block text-[11px] text-slate-500">Opposite Bikaner Sweets, Rudrapur</span>
                  </div>
                </div>
                <a
                  href="https://www.google.co.in/maps/place/DR+SHUBHAM+DENTAL+CLINIC+AND+IMPLANT+CENTRE/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-2.5 py-1.5 rounded-lg bg-[#F1FAFA] text-[#123B56] hover:text-[#16B8A6] text-xs font-semibold transition-colors flex items-center gap-1"
                >
                  <span>Map</span>
                  <ArrowRight className="w-3 h-3" />
                </a>
              </div>
            </div>

            {/* Subtle Floating Interactive Card */}
            <div
              ref={floatingCardRef}
              className="hidden sm:flex absolute -top-5 -left-6 bg-white p-4 rounded-2xl shadow-xl border border-teal-100 items-center gap-3.5 z-20"
            >
              <div className="w-11 h-11 rounded-xl bg-gradient-to-br from-[#123B56] to-[#16B8A6] flex items-center justify-center text-white shadow-sm">
                <Sparkles className="w-5 h-5 text-teal-200" />
              </div>
              <div>
                <div className="flex items-center gap-1">
                  <span className="text-xs font-bold text-[#123B56]">Modern Dental Care</span>
                </div>
                <span className="text-[11px] text-slate-500 block">Personalized treatment plans</span>
              </div>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
};
