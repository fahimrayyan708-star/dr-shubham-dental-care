import React, { useState } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { Highlights } from './components/Highlights';
import { About } from './components/About';
import { Treatments } from './components/Treatments';
import { WhyChooseUs } from './components/WhyChooseUs';
import { DoctorProfile } from './components/DoctorProfile';
import { Gallery } from './components/Gallery';
import { Testimonials } from './components/Testimonials';
import { AppointmentSection } from './components/AppointmentSection';
import { LocationContact } from './components/LocationContact';
import { Footer } from './components/Footer';
import { FloatingWhatsApp } from './components/FloatingWhatsApp';

export default function App() {
  const [selectedTreatment, setSelectedTreatment] = useState<string>('Dental Implants');

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      const navOffset = 80;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - navOffset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth',
      });
    }
  };

  const handleOpenBooking = () => {
    scrollToSection('appointment');
  };

  const handleExploreTreatments = () => {
    scrollToSection('treatments');
  };

  const handleSelectTreatmentForBooking = (treatmentTitle: string) => {
    setSelectedTreatment(treatmentTitle);
    scrollToSection('appointment');
  };

  return (
    <div className="min-h-screen flex flex-col bg-white text-[#253746] selection:bg-[#16B8A6]/20 selection:text-[#123B56]">
      {/* Sticky Navigation Bar with GSAP scroll styling */}
      <Navbar onOpenBooking={handleOpenBooking} />

      {/* Main Content Sections */}
      <main className="flex-1">
        {/* Full-screen Hero Section with GSAP entrance and realistic operatory imagery */}
        <Hero
          onOpenBooking={handleOpenBooking}
          onExploreTreatments={handleExploreTreatments}
        />

        {/* 4-Item Clinical Highlights Bar */}
        <Highlights />

        {/* About the Clinic & Operatory Architecture */}
        <About
          onLearnMore={handleExploreTreatments}
          onBookAppointment={handleOpenBooking}
        />

        {/* Comprehensive Dental Treatments with Modal & Filters */}
        <Treatments
          onSelectTreatmentForBooking={handleSelectTreatmentForBooking}
        />

        {/* Why Choose Us: 6 Comfort & Hygiene Pillars */}
        <WhyChooseUs />

        {/* Meet the Dentist: Dr. Shubham Dedicated Profile */}
        <DoctorProfile onBookAppointment={handleOpenBooking} />

        {/* Clinic Gallery with Lightbox preview */}
        <Gallery />

        {/* Verified Patient Reviews Carousel */}
        <Testimonials />

        {/* Interactive Appointment Request Section with Validation & WhatsApp */}
        <AppointmentSection initialTreatment={selectedTreatment} />

        {/* Location & Embedded Interactive Map */}
        <LocationContact />
      </main>

      {/* Sophisticated Dark Navy Footer */}
      <Footer
        onSelectTreatment={handleSelectTreatmentForBooking}
        onOpenBooking={handleOpenBooking}
      />

      {/* Quick WhatsApp & Call Floating Widget */}
      <FloatingWhatsApp />
    </div>
  );
}
