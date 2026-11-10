import React from 'react';
import { ShieldCheck, Clock, Award, Sparkles } from 'lucide-react';

export const Highlights: React.FC = () => {
  const highlights = [
    {
      icon: Sparkles,
      title: 'Advanced Implantology',
      description: 'Precision digital treatment planning and natural tooth replacement.',
    },
    {
      icon: ShieldCheck,
      title: 'Strict Sterilization Protocol',
      description: 'Class-B hospital-grade autoclaving for every instrument and surface.',
    },
    {
      icon: Clock,
      title: '10:00 AM – 8:00 PM',
      description: 'Convenient 7-day clinic timing to accommodate work and family schedules.',
    },
    {
      icon: Award,
      title: 'Comfort-First Dentistry',
      description: 'Gentle, clear communication ensuring zero anxiety for every patient.',
    },
  ];

  return (
    <section className="bg-white border-y border-slate-100 py-8 lg:py-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
          {highlights.map((item, idx) => {
            const Icon = item.icon;
            return (
              <div
                key={idx}
                className="flex items-start gap-4 p-4 rounded-2xl bg-[#F1FAFA]/60 border border-teal-50 hover:bg-[#F1FAFA] transition-colors duration-200"
              >
                <div className="w-11 h-11 rounded-xl bg-white shadow-xs border border-teal-100/60 flex items-center justify-center text-[#16B8A6] shrink-0">
                  <Icon className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="font-display font-bold text-sm text-[#123B56] mb-1">
                    {item.title}
                  </h3>
                  <p className="text-xs text-slate-500 leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
