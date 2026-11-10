import React from 'react';
import { Phone, MapPin, Clock, ArrowUp, Navigation, MessageCircle } from 'lucide-react';
import { TREATMENTS } from '../data/treatments';

interface FooterProps {
  onSelectTreatment: (treatmentTitle: string) => void;
  onOpenBooking: () => void;
}

export const Footer: React.FC<FooterProps> = ({ onSelectTreatment, onOpenBooking }) => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const googleMapsUrl = 'https://www.google.co.in/maps/place/DR+SHUBHAM+DENTAL+CLINIC+AND+IMPLANT+CENTRE/';

  return (
    <footer className="bg-[#123B56] text-white pt-16 pb-12 border-t border-slate-700/50 relative overflow-hidden">
      {/* Background Accent glow */}
      <div className="pointer-events-none absolute bottom-0 right-0 w-96 h-96 rounded-full bg-[#16B8A6]/10 blur-3xl" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 pb-16 border-b border-white/10">
          
          {/* Col 1: Brand & Description (Col span 4) */}
          <div className="lg:col-span-4">
            <div className="flex items-center gap-3 mb-5">
              <div className="w-10 h-10 rounded-xl bg-white/10 flex items-center justify-center text-[#16B8A6]">
                <svg
                  className="w-5 h-5"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2.2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M12 2C8.5 2 6 4 6 7.5c0 3 1.5 6 3 9.5 1 2.3 2 4 3 5 1-1 2-2.7 3-5 1.5-3.5 3-6.5 3-9.5C18 4 15.5 2 12 2z" />
                  <path d="M9 10h6" />
                </svg>
              </div>
              <div>
                <span className="block font-display font-bold text-base tracking-tight text-white leading-tight">
                  DR SHUBHAM
                </span>
                <span className="block text-[10px] font-semibold tracking-wider text-[#16B8A6] uppercase">
                  Dental Clinic & Implant Centre
                </span>
              </div>
            </div>

            <p className="text-xs sm:text-sm text-slate-300 leading-relaxed mb-6 max-w-sm">
              Providing premier dental healthcare and advanced implant services in Rudrapur. Committed to gentle care, transparent consultations, and healthy lifelong smiles.
            </p>

            <div className="flex items-center gap-3">
              <a
                href="https://wa.me/918279848678"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-full bg-white/10 hover:bg-[#25D366] text-white flex items-center justify-center transition-colors"
                title="Chat with us on WhatsApp"
              >
                <MessageCircle className="w-4 h-4" />
              </a>
              <a
                href={googleMapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-full bg-white/10 hover:bg-[#16B8A6] text-white flex items-center justify-center transition-colors"
                title="Google Maps Location"
              >
                <Navigation className="w-4 h-4" />
              </a>
              <a
                href="tel:+918279848678"
                className="w-9 h-9 rounded-full bg-white/10 hover:bg-[#16B8A6] text-white flex items-center justify-center transition-colors"
                title="Direct Phone Call"
              >
                <Phone className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Col 2: Quick Links (Col span 2) */}
          <div className="lg:col-span-2">
            <h4 className="font-display font-bold text-sm text-white uppercase tracking-wider mb-4 text-[#16B8A6]">
              Navigation
            </h4>
            <ul className="space-y-2.5 text-xs sm:text-sm text-slate-300">
              <li>
                <a href="#home" className="hover:text-[#16B8A6] transition-colors">
                  Home
                </a>
              </li>
              <li>
                <a href="#about" className="hover:text-[#16B8A6] transition-colors">
                  About Clinic
                </a>
              </li>
              <li>
                <a href="#treatments" className="hover:text-[#16B8A6] transition-colors">
                  Treatments
                </a>
              </li>
              <li>
                <a href="#why-us" className="hover:text-[#16B8A6] transition-colors">
                  Why Choose Us
                </a>
              </li>
              <li>
                <a href="#doctor" className="hover:text-[#16B8A6] transition-colors">
                  Meet Dr. Shubham
                </a>
              </li>
              <li>
                <a href="#gallery" className="hover:text-[#16B8A6] transition-colors">
                  Clinic Gallery
                </a>
              </li>
              <li>
                <a href="#contact" className="hover:text-[#16B8A6] transition-colors">
                  Contact & Map
                </a>
              </li>
            </ul>
          </div>

          {/* Col 3: Dental Treatments (Col span 3) */}
          <div className="lg:col-span-3">
            <h4 className="font-display font-bold text-sm text-white uppercase tracking-wider mb-4 text-[#16B8A6]">
              Treatments
            </h4>
            <ul className="space-y-2 text-xs text-slate-300">
              {TREATMENTS.slice(0, 6).map((treatment) => (
                <li key={treatment.id}>
                  <button
                    onClick={() => {
                      onSelectTreatment(treatment.title);
                      const el = document.getElementById('appointment');
                      el?.scrollIntoView({ behavior: 'smooth' });
                    }}
                    className="hover:text-[#16B8A6] transition-colors text-left cursor-pointer"
                  >
                    {treatment.title}
                  </button>
                </li>
              ))}
              <li>
                <a href="#treatments" className="text-teal-300 hover:text-white transition-colors block mt-2 font-medium">
                  View All 9 Treatments →
                </a>
              </li>
            </ul>
          </div>

          {/* Col 4: Visit & Inquiries (Col span 3) */}
          <div className="lg:col-span-3">
            <h4 className="font-display font-bold text-sm text-white uppercase tracking-wider mb-4 text-[#16B8A6]">
              Visit Clinic
            </h4>

            <div className="space-y-3.5 text-xs text-slate-300">
              <div className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-[#16B8A6] shrink-0 mt-0.5" />
                <span>
                  Oasis City, Daksh Crossing, Gangapur Road, Gali No. 2, Opposite Bikaner Sweets, Rudrapur, Uttarakhand 263153.
                </span>
              </div>

              <div className="flex items-center gap-2.5">
                <Phone className="w-4 h-4 text-[#16B8A6] shrink-0" />
                <a href="tel:+918279848678" className="hover:text-teal-300 transition-colors font-medium">
                  +91 82798 48678
                </a>
              </div>

              <div className="flex items-center gap-2.5">
                <Clock className="w-4 h-4 text-[#16B8A6] shrink-0" />
                <span>10:00 AM – 8:00 PM (Daily)</span>
              </div>
            </div>

            <div className="mt-5">
              <button
                onClick={onOpenBooking}
                className="w-full py-2.5 px-4 rounded-xl bg-[#16B8A6] hover:bg-teal-500 text-white font-bold text-xs transition-colors shadow-sm cursor-pointer"
              >
                Schedule Consultation
              </button>
            </div>
          </div>

        </div>

        {/* Bottom Copyright & Back to Top */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-400">
          <p>
            © {new Date().getFullYear()} DR SHUBHAM DENTAL CLINIC AND IMPLANT CENTRE. All rights reserved.
          </p>

          <div className="flex items-center gap-6">
            <span>Dentist in Rudrapur, Uttarakhand</span>
            <button
              onClick={scrollToTop}
              className="flex items-center gap-1.5 hover:text-white transition-colors cursor-pointer"
              aria-label="Scroll back to top"
            >
              <span>Back to Top</span>
              <ArrowUp className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>

      </div>
    </footer>
  );
};
