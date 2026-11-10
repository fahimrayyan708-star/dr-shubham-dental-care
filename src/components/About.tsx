import React, { useRef, useEffect } from 'react';
import { CheckCircle2, Shield, Heart, Sparkles, ArrowRight } from 'lucide-react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

interface AboutProps {
  onLearnMore: () => void;
  onBookAppointment: () => void;
}

export const About: React.FC<AboutProps> = ({ onLearnMore, onBookAppointment }) => {
  const sectionRef = useRef<HTMLElement>(null);
  const textColRef = useRef<HTMLDivElement>(null);
  const imgColRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
    if (mediaQuery.matches) return;

    const ctx = gsap.context(() => {
      if (textColRef.current && imgColRef.current) {
        gsap.from(textColRef.current, {
          x: -30,
          opacity: 0,
          duration: 0.8,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: sectionRef.current,
            start: 'top 75%',
          },
        });

        gsap.from(imgColRef.current, {
          x: 30,
          opacity: 0,
          duration: 0.8,
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

  const corePillars = [
    {
      title: 'Gentle, Patient-Focused Care',
      desc: 'We take time to listen, explain every step clearly, and tailor treatments to your personal comfort level.',
    },
    {
      title: 'Hospital-Standard Sterilization',
      desc: 'Multi-stage instrument autoclaving and surface disinfection protocols maintain a safe, clean environment.',
    },
    {
      title: 'Advanced Dental Implant Centre',
      desc: 'Modern diagnostic planning and restorative techniques to replace missing teeth securely and permanently.',
    },
    {
      title: 'Transparent Treatment Planning',
      desc: 'Clear upfront explanations of diagnosis, options, and costs with zero hidden surprises.',
    },
  ];

  return (
    <section id="about" ref={sectionRef} className="py-20 lg:py-28 bg-[#F1FAFA]/50 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs font-bold uppercase tracking-wider text-[#16B8A6] block mb-2">
            About Our Practice
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#123B56] tracking-tight">
            Where Healthy Smiles Begin.
          </h2>
          <p className="mt-4 text-base sm:text-lg text-slate-600 leading-relaxed">
            Welcome to DR SHUBHAM DENTAL CLINIC AND IMPLANT CENTRE in Rudrapur, Uttarakhand — where compassionate care meets modern dental excellence.
          </p>
        </div>

        {/* Two-Column Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Left Column: Image with Clinic Operatory */}
          <div ref={imgColRef} className="lg:col-span-6 relative">
            <div className="relative rounded-3xl overflow-hidden shadow-xl border-4 border-white bg-slate-100 group">
              <img
                src="/src/assets/images/clinic_operatory_modern_1794292935010.jpg"
                alt="Modern dental operatory room at Dr. Shubham Dental Clinic"
                className="w-full h-[380px] sm:h-[460px] object-cover transition-transform duration-700 group-hover:scale-102"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#123B56]/40 via-transparent to-transparent pointer-events-none" />

              {/* Inset Badge */}
              <div className="absolute top-4 left-4 px-3.5 py-1.5 rounded-full bg-white/95 backdrop-blur-md shadow-sm text-xs font-semibold text-[#123B56] flex items-center gap-2">
                <Sparkles className="w-3.5 h-3.5 text-[#16B8A6]" />
                <span>Pristine Operatory Suite</span>
              </div>
            </div>

            {/* Overlapping Info Card */}
            <div className="mt-6 sm:mt-0 sm:absolute sm:-bottom-8 sm:-right-6 bg-white p-5 rounded-2xl shadow-xl border border-teal-100 max-w-xs">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-[#16B8A6]/15 flex items-center justify-center text-[#16B8A6] shrink-0">
                  <Shield className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="font-display font-bold text-sm text-[#123B56]">Clean & Safe</h4>
                  <p className="text-xs text-slate-500">Rigorous infection control for complete family reassurance</p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Narrative & Values */}
          <div ref={textColRef} className="lg:col-span-6 flex flex-col items-start">
            <h3 className="text-2xl sm:text-3xl font-bold text-[#123B56] tracking-tight mb-5">
              Compassionate Dentistry Tailored to You
            </h3>

            <p className="text-slate-600 leading-relaxed mb-6 text-sm sm:text-base">
              At <strong className="font-semibold text-[#123B56]">DR SHUBHAM DENTAL CLINIC AND IMPLANT CENTRE</strong>, we believe every dental appointment should be calm, comfortable, and empowering. Under the leadership of <strong className="font-semibold text-[#123B56]">Dr. Shubham</strong>, our practice serves individuals and families throughout Rudrapur with attentive, personalized oral healthcare.
            </p>

            <p className="text-slate-600 leading-relaxed mb-8 text-sm sm:text-base">
              Whether you require routine preventative care, gentle root canal therapy, or permanent dental implants to restore missing teeth, we prioritize unhurried consultations and clear communication so you are always in control of your dental journey.
            </p>

            {/* Core Pillars List */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 w-full mb-8">
              {corePillars.map((pillar, i) => (
                <div key={i} className="p-4 rounded-xl bg-white border border-slate-200/80 shadow-xs">
                  <div className="flex items-center gap-2 mb-1.5">
                    <CheckCircle2 className="w-4 h-4 text-[#16B8A6] shrink-0" />
                    <h4 className="font-display font-bold text-xs sm:text-sm text-[#123B56]">
                      {pillar.title}
                    </h4>
                  </div>
                  <p className="text-xs text-slate-500 leading-relaxed pl-6">
                    {pillar.desc}
                  </p>
                </div>
              ))}
            </div>

            {/* Action CTA */}
            <div className="flex flex-wrap items-center gap-4">
              <button
                onClick={onLearnMore}
                className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-[#123B56] text-white font-semibold text-xs sm:text-sm hover:bg-[#16B8A6] transition-all duration-200 shadow-sm cursor-pointer"
              >
                <span>View Treatments</span>
                <ArrowRight className="w-4 h-4 text-[#16B8A6]" />
              </button>

              <button
                onClick={onBookAppointment}
                className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-white text-[#123B56] border border-slate-300 font-semibold text-xs sm:text-sm hover:border-teal-200 hover:bg-[#F1FAFA] transition-all duration-200 cursor-pointer"
              >
                <span>Book Consultation</span>
              </button>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
};
