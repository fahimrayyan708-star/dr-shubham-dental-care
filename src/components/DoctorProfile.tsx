import React, { useRef, useEffect } from 'react';
import { Calendar, Phone, MessageCircle, Heart, CheckCircle2 } from 'lucide-react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

interface DoctorProfileProps {
  onBookAppointment: () => void;
}

export const DoctorProfile: React.FC<DoctorProfileProps> = ({ onBookAppointment }) => {
  const sectionRef = useRef<HTMLElement>(null);
  const cardRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
    if (mediaQuery.matches) return;

    const ctx = gsap.context(() => {
      if (cardRef.current) {
        gsap.from(cardRef.current, {
          y: 40,
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

  return (
    <section id="doctor" ref={sectionRef} className="py-20 lg:py-28 bg-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs font-bold uppercase tracking-wider text-[#16B8A6] block mb-2">
            Meet Your Doctor
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#123B56] tracking-tight">
            Dedicated Care with Dr. Shubham
          </h2>
          <p className="mt-4 text-base sm:text-lg text-slate-600 leading-relaxed">
            Committed to providing compassionate, patient-centered dentistry in a friendly, gentle environment.
          </p>
        </div>

        {/* Doctor Card */}
        <div
          ref={cardRef}
          className="max-w-5xl mx-auto bg-gradient-to-br from-[#F1FAFA] to-white rounded-3xl border border-teal-100/80 shadow-lg overflow-hidden"
        >
          <div className="grid grid-cols-1 lg:grid-cols-12 items-center">
            
            {/* Left: Doctor Portrait */}
            <div className="lg:col-span-5 relative bg-slate-100 flex items-center justify-center p-6 sm:p-8">
              <div className="relative w-full max-w-sm rounded-2xl overflow-hidden shadow-md border-4 border-white">
                <img
                  src="/src/assets/images/doctor_shubham_portrait_1794292932898.jpg"
                  alt="Dr. Shubham - Dentist at Dr Shubham Dental Clinic and Implant Centre"
                  className="w-full h-[400px] object-cover object-top"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#123B56]/50 via-transparent to-transparent pointer-events-none" />
                <div className="absolute bottom-4 left-4 right-4 text-white">
                  <span className="block font-display font-bold text-lg leading-tight">Dr. Shubham</span>
                  <span className="block text-xs text-teal-200">Dentist · Clinic Founder</span>
                </div>
              </div>
            </div>

            {/* Right: Doctor Biography & Approach */}
            <div className="lg:col-span-7 p-8 sm:p-10 lg:p-12 flex flex-col justify-between">
              <div>
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white border border-teal-100 text-xs font-semibold text-[#16B8A6] mb-4">
                  <Heart className="w-3.5 h-3.5 text-[#16B8A6]" />
                  <span>Patient-First Philosophy</span>
                </div>

                <h3 className="text-2xl sm:text-3xl font-bold text-[#123B56] tracking-tight mb-2">
                  Dr. Shubham
                </h3>
                <span className="text-sm font-semibold text-[#16B8A6] block mb-5">
                  Dentist · DR SHUBHAM DENTAL CLINIC AND IMPLANT CENTRE
                </span>

                <p className="text-slate-600 leading-relaxed text-sm sm:text-base mb-5">
                  Dr. Shubham is dedicated to delivering attentive, gentle dental care to residents across Rudrapur. With a keen emphasis on patient comfort, honest clinical transparency, and thorough diagnosis, Dr. Shubham ensures that patients of all ages feel relaxed and well-informed at every appointment.
                </p>

                <p className="text-slate-600 leading-relaxed text-sm sm:text-base mb-6">
                  From explaining radiographic images to designing tailored implant restorations and pain-free root canals, Dr. Shubham takes time to answer every query before initiating care.
                </p>

                {/* Patient Commitments */}
                <div className="space-y-2.5 mb-8">
                  <div className="flex items-center gap-2.5 text-xs sm:text-sm text-slate-700">
                    <CheckCircle2 className="w-4 h-4 text-[#16B8A6] shrink-0" />
                    <span>Gentle, anxiety-free approach for nervous patients</span>
                  </div>
                  <div className="flex items-center gap-2.5 text-xs sm:text-sm text-slate-700">
                    <CheckCircle2 className="w-4 h-4 text-[#16B8A6] shrink-0" />
                    <span>Clear and honest treatment planning without hidden fees</span>
                  </div>
                  <div className="flex items-center gap-2.5 text-xs sm:text-sm text-slate-700">
                    <CheckCircle2 className="w-4 h-4 text-[#16B8A6] shrink-0" />
                    <span>Accessible clinic timings 7 days a week: 10:00 AM – 8:00 PM</span>
                  </div>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="pt-6 border-t border-slate-200/60 flex flex-wrap items-center gap-3">
                <button
                  onClick={onBookAppointment}
                  className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-[#123B56] hover:bg-[#16B8A6] text-white font-semibold text-xs sm:text-sm transition-colors shadow-sm cursor-pointer"
                >
                  <Calendar className="w-4 h-4 text-[#16B8A6]" />
                  <span>Book Consultation with Dr. Shubham</span>
                </button>

                <a
                  href="https://wa.me/918279848678?text=Hello%20Dr.%20Shubham,%20I%20would%20like%20to%20consult%20about%20a%20dental%20concern."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-5 py-3 rounded-full bg-[#25D366]/10 hover:bg-[#25D366]/20 text-[#123B56] border border-[#25D366]/30 font-semibold text-xs sm:text-sm transition-colors"
                >
                  <MessageCircle className="w-4 h-4 text-[#25D366]" />
                  <span>WhatsApp Doctor</span>
                </a>
              </div>

            </div>

          </div>
        </div>

      </div>
    </section>
  );
};
