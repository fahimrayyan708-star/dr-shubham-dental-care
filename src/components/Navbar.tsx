import React, { useState, useEffect, useRef } from 'react';
import { Phone, Calendar, Menu, X, ArrowUpRight } from 'lucide-react';
import gsap from 'gsap';

interface NavbarProps {
  onOpenBooking: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenBooking }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const navRef = useRef<HTMLElement>(null);
  const mobileMenuRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      const scrolled = window.scrollY > 40;
      setIsScrolled(scrolled);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    if (navRef.current) {
      gsap.to(navRef.current, {
        backgroundColor: isScrolled ? 'rgba(255, 255, 255, 0.95)' : 'rgba(255, 255, 255, 0.0)',
        boxShadow: isScrolled ? '0 4px 20px -2px rgba(18, 59, 86, 0.08)' : '0 0px 0px rgba(0, 0, 0, 0)',
        backdropFilter: isScrolled ? 'blur(12px)' : 'blur(0px)',
        borderBottomColor: isScrolled ? 'rgba(226, 232, 240, 0.8)' : 'transparent',
        duration: 0.35,
        ease: 'power2.out',
      });
    }
  }, [isScrolled]);

  useEffect(() => {
    if (mobileMenuOpen && mobileMenuRef.current) {
      gsap.fromTo(
        mobileMenuRef.current,
        { opacity: 0, y: -16 },
        { opacity: 1, y: 0, duration: 0.28, ease: 'power2.out' }
      );
    }
  }, [mobileMenuOpen]);

  const navLinks = [
    { label: 'Home', href: '#home' },
    { label: 'About', href: '#about' },
    { label: 'Treatments', href: '#treatments' },
    { label: 'Why Choose Us', href: '#why-us' },
    { label: 'Gallery', href: '#gallery' },
    { label: 'Contact', href: '#contact' },
  ];

  return (
    <header
      ref={navRef}
      className="fixed top-0 left-0 right-0 z-50 transition-colors duration-200 border-b border-transparent"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between gap-8">
        {/* Zone 1: Brand Wordmark */}
        <a
          href="#home"
          className="flex items-center gap-2.5 text-left group whitespace-nowrap shrink-0"
        >
          <div className="w-10 h-10 rounded-xl bg-[#123B56] flex items-center justify-center text-white shadow-sm transition-transform group-hover:scale-105 duration-200">
            {/* Minimalist Dental Emblem */}
            <svg
              className="w-5 h-5 text-[#16B8A6]"
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
            <span className="block font-display font-bold text-base sm:text-lg tracking-tight text-[#123B56] leading-tight">
              DR SHUBHAM
            </span>
            <span className="block text-[10px] sm:text-xs font-medium tracking-wider text-[#16B8A6] uppercase">
              Dental Clinic & Implant Centre
            </span>
          </div>
        </a>

        {/* Zone 2: Navigation Links */}
        <nav className="hidden lg:flex items-center gap-7 text-sm font-medium text-[#253746]">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="relative py-1 hover:text-[#16B8A6] transition-colors whitespace-nowrap shrink-0 group"
            >
              {link.label}
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-[#16B8A6] transition-all duration-200 group-hover:w-full" />
            </a>
          ))}
        </nav>

        {/* Zone 3: Primary Action & Quick Phone */}
        <div className="hidden sm:flex items-center gap-4 shrink-0">
          <a
            href="tel:+918279848678"
            className="hidden xl:flex items-center gap-2 text-xs font-medium text-[#123B56] hover:text-[#16B8A6] transition-colors whitespace-nowrap"
            title="Call Clinic: +91 82798 48678"
          >
            <div className="w-7 h-7 rounded-full bg-[#E8F5FA] flex items-center justify-center text-[#16B8A6]">
              <Phone className="w-3.5 h-3.5" />
            </div>
            <span>+91 82798 48678</span>
          </a>

          <button
            onClick={onOpenBooking}
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full text-xs sm:text-sm font-semibold text-white bg-[#123B56] hover:bg-[#16B8A6] transition-all duration-200 shadow-sm hover:shadow active:scale-95 whitespace-nowrap shrink-0 cursor-pointer"
          >
            <Calendar className="w-4 h-4 text-[#16B8A6] group-hover:text-white" />
            <span>Book Appointment</span>
          </button>
        </div>

        {/* Mobile Hamburger Button */}
        <div className="flex items-center gap-2 lg:hidden">
          <button
            onClick={onOpenBooking}
            className="sm:hidden px-3.5 py-1.5 rounded-full text-xs font-semibold text-white bg-[#123B56] whitespace-nowrap"
          >
            Book
          </button>
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle navigation menu"
            className="p-2 rounded-lg text-[#123B56] hover:bg-slate-100 transition-colors"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Animated Dropdown */}
      {mobileMenuOpen && (
        <div
          ref={mobileMenuRef}
          className="lg:hidden bg-white/95 backdrop-blur-xl border-b border-slate-200 px-6 py-6 shadow-xl"
        >
          <nav className="flex flex-col gap-4 text-base font-medium text-[#123B56]">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="py-2 border-b border-slate-100 flex items-center justify-between hover:text-[#16B8A6] transition-colors"
              >
                <span>{link.label}</span>
                <ArrowUpRight className="w-4 h-4 text-slate-400" />
              </a>
            ))}
          </nav>

          <div className="mt-6 pt-4 border-t border-slate-100 flex flex-col gap-3">
            <a
              href="tel:+918279848678"
              className="flex items-center justify-center gap-2.5 py-3 rounded-xl bg-[#F1FAFA] text-[#123B56] font-medium text-sm"
            >
              <Phone className="w-4 h-4 text-[#16B8A6]" />
              <span>Call +91 82798 48678</span>
            </a>
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenBooking();
              }}
              className="w-full py-3 rounded-xl bg-[#123B56] text-white font-semibold text-sm hover:bg-[#16B8A6] transition-colors shadow"
            >
              Book Your Appointment
            </button>
          </div>
        </div>
      )}
    </header>
  );
};
