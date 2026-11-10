import React, { useRef, useEffect } from 'react';
import {
  Heart,
  Smile,
  ShieldCheck,
  MessageSquare,
  FileText,
  Sparkles
} from 'lucide-react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export const WhyChooseUs: React.FC = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const cardsContainerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
    if (mediaQuery.matches) return;

    const ctx = gsap.context(() => {
      if (cardsContainerRef.current) {
        gsap.from(cardsContainerRef.current.children, {
          y: 35,
          opacity: 0,
          duration: 0.65,
          stagger: 0.1,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: sectionRef.current,
            start: 'top 75%',
          },
        });
      }
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  const features = [
    {
      icon: Heart,
      title: 'Patient-Focused Approach',
      desc: 'We put your comfort and peace of mind first. Every consultation is unhurried, giving you full opportunity to discuss symptoms and preferences.',
    },
    {
      icon: Smile,
      title: 'Gentle Dental Care',
      desc: 'Using ultra-fine anesthetic delivery and calming bedside manner, we ensure pain-free root canals, extractions, and restorative procedures.',
    },
    {
      icon: ShieldCheck,
      title: 'Hygiene-Conscious Environment',
      desc: 'Our clinic adheres to strict autoclave sterilization and medical-grade surface sanitization between every patient visit.',
    },
    {
      icon: MessageSquare,
      title: 'Clear Treatment Explanations',
      desc: 'No medical jargon or ambiguity. We explain your diagnosis with digital imaging and outline all viable paths before taking any action.',
    },
    {
      icon: FileText,
      title: 'Personalized Treatment Planning',
      desc: 'No cookie-cutter dentistry. We tailor care schedules, restorative materials, and checkup timelines specifically to your lifestyle.',
    },
    {
      icon: Sparkles,
      title: 'Implant-Focused Expertise',
      desc: 'Specialized focus on dental implants with modern surgical guides for permanent, natural, and rock-solid tooth replacement.',
    },
  ];

  return (
    <section id="why-us" ref={sectionRef} className="py-20 lg:py-28 bg-[#F1FAFA]/60 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs font-bold uppercase tracking-wider text-[#16B8A6] block mb-2">
            Why Choose Us
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#123B56] tracking-tight">
            Your Comfort. Our Priority.
          </h2>
          <p className="mt-4 text-base sm:text-lg text-slate-600 leading-relaxed">
            We are committed to delivering dental excellence with genuine warmth, transparent guidance, and spotless hygiene.
          </p>
        </div>

        {/* 6 Grid Cards */}
        <div
          ref={cardsContainerRef}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8"
        >
          {features.map((item, index) => {
            const Icon = item.icon;
            return (
              <div
                key={index}
                className="p-8 rounded-3xl bg-white border border-slate-200/80 shadow-xs hover:shadow-xl hover:border-teal-200 transition-all duration-300 group"
              >
                <div className="w-12 h-12 rounded-2xl bg-[#E8F5FA] text-[#16B8A6] group-hover:bg-[#123B56] group-hover:text-white transition-colors duration-300 flex items-center justify-center mb-6">
                  <Icon className="w-6 h-6 transition-transform duration-300 group-hover:scale-110" />
                </div>
                <h3 className="font-display font-bold text-lg text-[#123B56] mb-3 group-hover:text-[#16B8A6] transition-colors">
                  {item.title}
                </h3>
                <p className="text-sm text-slate-600 leading-relaxed">
                  {item.desc}
                </p>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
