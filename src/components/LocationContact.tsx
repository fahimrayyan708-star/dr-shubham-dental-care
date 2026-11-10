import React from 'react';
import { MapPin, Phone, Clock, Navigation, ExternalLink, MessageCircle } from 'lucide-react';

export const LocationContact: React.FC = () => {
  const googleMapsUrl = 'https://www.google.co.in/maps/place/DR+SHUBHAM+DENTAL+CLINIC+AND+IMPLANT+CENTRE/';
  
  return (
    <section id="contact" className="py-20 lg:py-28 bg-[#F1FAFA]/60 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs font-bold uppercase tracking-wider text-[#16B8A6] block mb-2">
            Find Us Easily
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#123B56] tracking-tight">
            Clinic Location & Contact
          </h2>
          <p className="mt-4 text-base sm:text-lg text-slate-600 leading-relaxed">
            Conveniently situated at Oasis City on Gangapur Road, directly opposite Bikaner Sweets in Rudrapur.
          </p>
        </div>

        {/* Content Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          
          {/* Left Column: Contact Cards */}
          <div className="lg:col-span-5 flex flex-col justify-between gap-5">
            
            {/* Address Card */}
            <div className="p-7 rounded-3xl bg-white border border-slate-200/80 shadow-xs hover:border-teal-200 transition-colors">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-2xl bg-[#E8F5FA] text-[#16B8A6] flex items-center justify-center shrink-0">
                  <MapPin className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="font-display font-bold text-base text-[#123B56] mb-1">
                    Clinic Address
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                    Oasis City, Daksh Crossing, Gangapur Road, Gali Number 2, Opposite Bikaner Sweets, Rudrapur, Uttarakhand 263153, India.
                  </p>
                  <div className="mt-3">
                    <a
                      href={googleMapsUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 text-xs font-bold text-[#16B8A6] hover:text-[#123B56] transition-colors"
                    >
                      <span>Open in Google Maps</span>
                      <ExternalLink className="w-3.5 h-3.5" />
                    </a>
                  </div>
                </div>
              </div>
            </div>

            {/* Phone & Inquiries Card */}
            <div className="p-7 rounded-3xl bg-white border border-slate-200/80 shadow-xs hover:border-teal-200 transition-colors">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-2xl bg-[#E8F5FA] text-[#16B8A6] flex items-center justify-center shrink-0">
                  <Phone className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="font-display font-bold text-base text-[#123B56] mb-1">
                    Telephone & Call-to-Book
                  </h3>
                  <p className="text-xs text-slate-500 mb-2">
                    Speak directly with Dr. Shubham's reception team
                  </p>
                  <a
                    href="tel:+918279848678"
                    className="text-lg sm:text-xl font-bold text-[#123B56] hover:text-[#16B8A6] transition-colors block"
                  >
                    +91 82798 48678
                  </a>
                  <div className="mt-3 flex items-center gap-3">
                    <a
                      href="tel:+918279848678"
                      className="px-3.5 py-1.5 rounded-full bg-[#123B56] text-white text-xs font-semibold hover:bg-[#16B8A6] transition-colors"
                    >
                      Call Now
                    </a>
                    <a
                      href="https://wa.me/918279848678"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1 px-3.5 py-1.5 rounded-full bg-[#25D366]/10 text-emerald-800 text-xs font-semibold hover:bg-[#25D366]/20 transition-colors"
                    >
                      <MessageCircle className="w-3.5 h-3.5 text-[#25D366]" />
                      <span>WhatsApp</span>
                    </a>
                  </div>
                </div>
              </div>
            </div>

            {/* Operating Hours Card */}
            <div className="p-7 rounded-3xl bg-white border border-slate-200/80 shadow-xs hover:border-teal-200 transition-colors">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-2xl bg-[#E8F5FA] text-[#16B8A6] flex items-center justify-center shrink-0">
                  <Clock className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="font-display font-bold text-base text-[#123B56] mb-1">
                    Opening Hours
                  </h3>
                  <div className="space-y-1 text-xs sm:text-sm text-slate-600">
                    <div className="flex justify-between gap-6">
                      <span className="font-medium text-[#123B56]">Monday – Sunday:</span>
                      <span className="font-semibold text-emerald-700">10:00 AM – 8:00 PM</span>
                    </div>
                  </div>
                  <p className="mt-2 text-[11px] text-slate-400">
                    (As listed on Google Maps; open 7 days a week)
                  </p>
                </div>
              </div>
            </div>

          </div>

          {/* Right Column: Embedded Google Map & Direction Banner */}
          <div className="lg:col-span-7 flex flex-col rounded-3xl overflow-hidden border border-slate-200 shadow-md bg-white">
            
            {/* Top Bar above map */}
            <div className="p-4 sm:p-5 bg-white border-b border-slate-100 flex flex-wrap items-center justify-between gap-4">
              <div className="flex items-center gap-2">
                <span className="w-2.5 h-2.5 rounded-full bg-[#16B8A6]" />
                <span className="text-xs font-bold text-[#123B56]">Interactive Map</span>
                <span className="text-xs text-slate-400">· Rudrapur, Uttarakhand</span>
              </div>
              <a
                href={googleMapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#123B56] text-white hover:bg-[#16B8A6] text-xs font-semibold transition-colors"
              >
                <Navigation className="w-3.5 h-3.5 text-teal-300" />
                <span>Get Directions</span>
              </a>
            </div>

            {/* Google Maps iFrame */}
            <div className="relative w-full h-[380px] sm:h-[450px] bg-slate-100">
              <iframe
                title="Google Maps Location of DR SHUBHAM DENTAL CLINIC AND IMPLANT CENTRE"
                src="https://maps.google.com/maps?q=DR+SHUBHAM+DENTAL+CLINIC+AND+IMPLANT+CENTRE,+Gangapur+Road,+Rudrapur,+Uttarakhand&t=&z=15&ie=UTF8&iwloc=&output=embed"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen={false}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="w-full h-full"
              />
            </div>

            {/* Landmark Guidance Footer */}
            <div className="p-4 sm:p-5 bg-[#F1FAFA] border-t border-teal-100 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 text-xs text-slate-600">
              <div className="flex items-center gap-2">
                <MapPin className="w-4 h-4 text-[#16B8A6] shrink-0" />
                <span>
                  <strong className="text-[#123B56]">Key Landmark:</strong> Located right opposite Bikaner Sweets at Gali No. 2, Daksh Crossing.
                </span>
              </div>
              <a
                href="tel:+918279848678"
                className="text-[#123B56] font-bold hover:text-[#16B8A6] shrink-0"
              >
                Call for Directions →
              </a>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
