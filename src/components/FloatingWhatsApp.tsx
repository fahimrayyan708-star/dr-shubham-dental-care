import React, { useState } from 'react';
import { MessageCircle, Phone, X } from 'lucide-react';

export const FloatingWhatsApp: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  const clinicPhone = '+918279848678';
  const whatsappUrl = `https://wa.me/918279848678?text=${encodeURIComponent(
    'Hello Dr. Shubham Dental Clinic, I would like to enquire about an appointment.'
  )}`;

  return (
    <div className="fixed bottom-6 right-6 z-40 flex flex-col items-end gap-3">
      {/* Expanded Quick Contact Panel */}
      {isOpen && (
        <div className="bg-white rounded-2xl shadow-2xl border border-teal-100 p-4 w-72 mb-1 animate-fadeIn">
          <div className="flex items-center justify-between pb-3 border-b border-slate-100 mb-3">
            <div className="flex items-center gap-2">
              <span className="w-2.5 h-2.5 rounded-full bg-[#16B8A6] animate-pulse" />
              <span className="text-xs font-bold text-[#123B56]">Clinic Helpdesk</span>
            </div>
            <button
              onClick={() => setIsOpen(false)}
              className="text-slate-400 hover:text-slate-600 p-1"
              aria-label="Close helpdesk"
            >
              <X className="w-4 h-4" />
            </button>
          </div>

          <p className="text-xs text-slate-600 mb-4 leading-relaxed">
            Have a toothache or appointment query? Chat directly with Dr. Shubham Dental Clinic.
          </p>

          <div className="space-y-2">
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full flex items-center justify-center gap-2 py-2.5 px-3 rounded-xl bg-[#25D366] hover:bg-[#20ba59] text-white font-semibold text-xs transition-colors shadow-sm"
            >
              <MessageCircle className="w-4 h-4" />
              <span>Chat on WhatsApp</span>
            </a>

            <a
              href={`tel:${clinicPhone}`}
              className="w-full flex items-center justify-center gap-2 py-2.5 px-3 rounded-xl bg-[#123B56] hover:bg-[#16B8A6] text-white font-semibold text-xs transition-colors shadow-sm"
            >
              <Phone className="w-3.5 h-3.5" />
              <span>Call +91 82798 48678</span>
            </a>
          </div>
        </div>
      )}

      {/* Floating Toggle Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        aria-label="Contact clinic via WhatsApp or phone"
        className="w-14 h-14 rounded-full bg-[#25D366] hover:bg-[#20ba59] text-white flex items-center justify-center shadow-lg hover:shadow-2xl transition-all duration-300 hover:scale-105 active:scale-95 cursor-pointer relative group"
      >
        <span className="absolute -top-1 -right-1 w-3.5 h-3.5 bg-red-500 rounded-full border-2 border-white" />
        <MessageCircle className="w-7 h-7" />
      </button>
    </div>
  );
};
