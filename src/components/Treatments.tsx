import React, { useState, useRef, useEffect } from 'react';
import { TREATMENTS, Treatment } from '../data/treatments';
import {
  ShieldCheck,
  Activity,
  Sparkles,
  Sun,
  Crown,
  Scissors,
  Smile,
  AlignJustify,
  CheckCircle,
  Clock,
  ArrowRight,
  X,
  Calendar,
  Check
} from 'lucide-react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

interface TreatmentsProps {
  onSelectTreatmentForBooking: (treatmentTitle: string) => void;
}

const iconMap: Record<string, React.ElementType> = {
  ShieldCheck,
  Activity,
  Sparkles,
  Sun,
  Crown,
  Scissors,
  Smile,
  AlignJustify,
  CheckCircle,
};

export const Treatments: React.FC<TreatmentsProps> = ({ onSelectTreatmentForBooking }) => {
  const [selectedCategory, setSelectedCategory] = useState<'all' | 'implant' | 'restorative' | 'cosmetic' | 'general'>('all');
  const [activeModalTreatment, setActiveModalTreatment] = useState<Treatment | null>(null);
  const sectionRef = useRef<HTMLElement>(null);
  const cardsGridRef = useRef<HTMLDivElement>(null);

  const categories = [
    { id: 'all', label: 'All Services' },
    { id: 'implant', label: 'Dental Implants' },
    { id: 'restorative', label: 'Restorative & RCT' },
    { id: 'cosmetic', label: 'Cosmetic Dentistry' },
    { id: 'general', label: 'General & Preventative' },
  ];

  const filteredTreatments = selectedCategory === 'all'
    ? TREATMENTS
    : TREATMENTS.filter((t) => t.category === selectedCategory);

  useEffect(() => {
    const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
    if (mediaQuery.matches) return;

    if (cardsGridRef.current) {
      gsap.fromTo(
        cardsGridRef.current.children,
        { y: 25, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.5,
          stagger: 0.08,
          ease: 'power2.out',
        }
      );
    }
  }, [selectedCategory]);

  return (
    <section id="treatments" ref={sectionRef} className="py-20 lg:py-28 bg-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <span className="text-xs font-bold uppercase tracking-wider text-[#16B8A6] block mb-2">
            Clinical Excellence
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#123B56] tracking-tight">
            Comprehensive Dental Treatments
          </h2>
          <p className="mt-4 text-base sm:text-lg text-slate-600 leading-relaxed">
            From precision dental implants to gentle root canals and preventative family care, we offer complete oral health solutions under one roof.
          </p>

          {/* Interactive Category Filter Tabs (Zero-pill compliant button group) */}
          <div className="flex flex-wrap items-center justify-center gap-2 mt-8 p-1.5 bg-[#F1FAFA] rounded-2xl border border-teal-100 max-w-2xl mx-auto">
            {categories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setSelectedCategory(cat.id as any)}
                className={`px-4 py-2 text-xs sm:text-sm font-semibold rounded-xl transition-all duration-200 cursor-pointer whitespace-nowrap ${
                  selectedCategory === cat.id
                    ? 'bg-[#123B56] text-white shadow-sm'
                    : 'text-[#253746] hover:text-[#123B56] hover:bg-white/60'
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>
        </div>

        {/* Treatment Cards Grid */}
        <div
          ref={cardsGridRef}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8"
        >
          {filteredTreatments.map((treatment) => {
            const Icon = iconMap[treatment.iconName] || ShieldCheck;
            return (
              <div
                key={treatment.id}
                className="group relative bg-[#F1FAFA]/40 hover:bg-white rounded-3xl p-7 border border-slate-200/80 hover:border-teal-200 shadow-xs hover:shadow-xl transition-all duration-300 flex flex-col justify-between"
              >
                <div>
                  {/* Card Top: Icon & Duration */}
                  <div className="flex items-center justify-between mb-5">
                    <div className="w-13 h-13 rounded-2xl bg-white border border-teal-100/80 flex items-center justify-center text-[#16B8A6] group-hover:bg-[#123B56] group-hover:text-white transition-all duration-300 shadow-xs">
                      <Icon className="w-6 h-6 transition-transform duration-300 group-hover:scale-110" />
                    </div>
                    <div className="flex items-center gap-1.5 text-xs font-medium text-slate-500">
                      <Clock className="w-3.5 h-3.5 text-[#16B8A6]" />
                      <span>{treatment.duration}</span>
                    </div>
                  </div>

                  {/* Treatment Title */}
                  <h3 className="font-display font-bold text-xl text-[#123B56] mb-3 group-hover:text-[#16B8A6] transition-colors">
                    {treatment.title}
                  </h3>

                  {/* Short Description */}
                  <p className="text-sm text-slate-600 leading-relaxed mb-6">
                    {treatment.shortDesc}
                  </p>

                  {/* Key Highlights */}
                  <div className="space-y-2 mb-6">
                    {treatment.benefits.slice(0, 2).map((benefit, bIdx) => (
                      <div key={bIdx} className="flex items-start gap-2 text-xs text-slate-600">
                        <Check className="w-3.5 h-3.5 text-[#16B8A6] shrink-0 mt-0.5" />
                        <span>{benefit}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Card Action Row */}
                <div className="pt-4 border-t border-slate-200/60 flex items-center justify-between">
                  <button
                    onClick={() => setActiveModalTreatment(treatment)}
                    className="text-xs font-bold text-[#123B56] hover:text-[#16B8A6] transition-colors inline-flex items-center gap-1.5 group/btn cursor-pointer"
                  >
                    <span>Treatment Details</span>
                    <ArrowRight className="w-3.5 h-3.5 transition-transform duration-200 group-hover/btn:translate-x-1" />
                  </button>

                  <button
                    onClick={() => onSelectTreatmentForBooking(treatment.title)}
                    className="px-3.5 py-1.5 rounded-full text-xs font-semibold bg-white border border-slate-200 hover:border-teal-200 hover:bg-[#F1FAFA] text-[#123B56] transition-all cursor-pointer"
                  >
                    Enquire
                  </button>
                </div>
              </div>
            );
          })}
        </div>

      </div>

      {/* Treatment Detail Modal */}
      {activeModalTreatment && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-[#123B56]/60 backdrop-blur-sm animate-fadeIn">
          <div
            className="bg-white rounded-3xl max-w-2xl w-full p-6 sm:p-8 shadow-2xl border border-slate-100 max-h-[90vh] overflow-y-auto relative"
            role="dialog"
            aria-modal="true"
          >
            {/* Close Button */}
            <button
              onClick={() => setActiveModalTreatment(null)}
              aria-label="Close treatment details"
              className="absolute top-5 right-5 p-2 rounded-full text-slate-400 hover:text-[#123B56] hover:bg-slate-100 transition-colors"
            >
              <X className="w-5 h-5" />
            </button>

            {/* Modal Header */}
            <div className="mb-6">
              <span className="text-xs font-bold uppercase tracking-wider text-[#16B8A6] block mb-1">
                Procedure Guide
              </span>
              <h3 className="text-2xl sm:text-3xl font-bold text-[#123B56]">
                {activeModalTreatment.title}
              </h3>
              <div className="flex items-center gap-3 mt-2 text-xs text-slate-500">
                <span className="flex items-center gap-1">
                  <Clock className="w-3.5 h-3.5 text-[#16B8A6]" /> Typical Duration: {activeModalTreatment.duration}
                </span>
                <span>·</span>
                <span>Suitable For: {activeModalTreatment.suitableFor}</span>
              </div>
            </div>

            {/* Modal Body */}
            <div className="space-y-6 text-sm text-slate-600">
              <p className="leading-relaxed bg-[#F1FAFA] p-4 rounded-2xl border border-teal-100 text-[#253746]">
                {activeModalTreatment.fullDesc}
              </p>

              {/* Benefits */}
              <div>
                <h4 className="font-display font-bold text-sm text-[#123B56] mb-3">
                  Key Patient Benefits
                </h4>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                  {activeModalTreatment.benefits.map((b, i) => (
                    <div key={i} className="flex items-start gap-2">
                      <CheckCircle className="w-4 h-4 text-[#16B8A6] shrink-0 mt-0.5" />
                      <span className="text-xs leading-relaxed">{b}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Procedure Steps */}
              <div>
                <h4 className="font-display font-bold text-sm text-[#123B56] mb-3">
                  Step-by-Step Clinical Approach
                </h4>
                <div className="space-y-2">
                  {activeModalTreatment.procedureSteps.map((step, idx) => (
                    <div key={idx} className="flex items-start gap-3 p-3 rounded-xl bg-slate-50 border border-slate-100">
                      <span className="w-5 h-5 rounded-full bg-[#123B56] text-white text-[11px] font-bold flex items-center justify-center shrink-0">
                        {idx + 1}
                      </span>
                      <span className="text-xs text-slate-700 leading-normal">{step}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Modal Actions */}
            <div className="mt-8 pt-6 border-t border-slate-100 flex flex-col sm:flex-row items-center justify-between gap-4">
              <span className="text-xs text-slate-500">
                Have questions regarding this treatment? Consult Dr. Shubham.
              </span>
              <button
                onClick={() => {
                  const title = activeModalTreatment.title;
                  setActiveModalTreatment(null);
                  onSelectTreatmentForBooking(title);
                }}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3 rounded-full bg-[#123B56] hover:bg-[#16B8A6] text-white font-semibold text-xs sm:text-sm transition-colors shadow"
              >
                <Calendar className="w-4 h-4 text-[#16B8A6]" />
                <span>Book This Treatment</span>
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
