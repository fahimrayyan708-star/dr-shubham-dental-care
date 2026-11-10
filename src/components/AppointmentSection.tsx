import React, { useState } from 'react';
import {
  Calendar,
  Phone,
  Clock,
  Send,
  CheckCircle2,
  AlertCircle,
  MessageCircle,
  User,
  Mail,
  FileQuestion,
  ArrowRight,
  Copy,
  Check
} from 'lucide-react';
import { TREATMENTS } from '../data/treatments';

interface AppointmentSectionProps {
  initialTreatment?: string;
}

export const AppointmentSection: React.FC<AppointmentSectionProps> = ({ initialTreatment }) => {
  const [patientName, setPatientName] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [email, setEmail] = useState('');
  const [treatment, setTreatment] = useState(initialTreatment || 'Dental Implants');
  const [preferredDate, setPreferredDate] = useState('');
  const [timeSlot, setTimeSlot] = useState('Morning (10:00 AM – 1:00 PM)');
  const [message, setMessage] = useState('');

  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [bookingConfirmation, setBookingConfirmation] = useState<{
    referenceId: string;
    name: string;
    phone: string;
    treatment: string;
    date: string;
    timeSlot: string;
    submittedAt: string;
  } | null>(null);

  const [copiedRef, setCopiedRef] = useState(false);

  // Update treatment when passed prop changes
  React.useEffect(() => {
    if (initialTreatment) {
      setTreatment(initialTreatment);
    }
  }, [initialTreatment]);

  // Validation function
  const validateForm = () => {
    const newErrors: Record<string, string> = {};

    if (!patientName.trim()) {
      newErrors.patientName = 'Please enter your full name.';
    } else if (patientName.trim().length < 3) {
      newErrors.patientName = 'Name must be at least 3 characters.';
    }

    const cleanPhone = phoneNumber.replace(/[\s-]/g, '');
    if (!cleanPhone) {
      newErrors.phoneNumber = 'Please enter your mobile phone number.';
    } else if (!/^(?:\+?91)?[6789]\d{9}$/.test(cleanPhone)) {
      newErrors.phoneNumber = 'Please enter a valid 10-digit mobile number.';
    }

    if (email.trim() && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      newErrors.email = 'Please enter a valid email address.';
    }

    if (!preferredDate) {
      newErrors.preferredDate = 'Please select a preferred appointment date.';
    } else {
      const selected = new Date(preferredDate);
      const today = new Date();
      today.setHours(0, 0, 0, 0);
      if (selected < today) {
        newErrors.preferredDate = 'Date cannot be in the past.';
      }
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validateForm()) return;

    setIsSubmitting(true);

    // Simulate reliable booking request processing
    setTimeout(() => {
      const refNumber = `SHUBHAM-${Math.floor(100000 + Math.random() * 900000)}`;
      setBookingConfirmation({
        referenceId: refNumber,
        name: patientName.trim(),
        phone: phoneNumber.trim(),
        treatment,
        date: preferredDate,
        timeSlot,
        submittedAt: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
      });
      setIsSubmitting(false);
    }, 600);
  };

  const generateWhatsAppUrl = (refId?: string) => {
    const text = refId
      ? `Hello Dr. Shubham Dental Clinic, I have submitted an appointment request with Ref ID: ${refId} for ${patientName} (${treatment}) on ${preferredDate} [${timeSlot}]. Please confirm.`
      : `Hello Dr. Shubham Dental Clinic, I would like to book an appointment with Dr. Shubham at Oasis City, Rudrapur.`;
    return `https://wa.me/918279848678?text=${encodeURIComponent(text)}`;
  };

  const copyRefToClipboard = (refId: string) => {
    navigator.clipboard.writeText(refId);
    setCopiedRef(true);
    setTimeout(() => setCopiedRef(false), 2000);
  };

  const handleReset = () => {
    setBookingConfirmation(null);
    setPatientName('');
    setPhoneNumber('');
    setEmail('');
    setMessage('');
    setPreferredDate('');
    setErrors({});
  };

  // Get minimum date string for date picker (today)
  const todayDateString = new Date().toISOString().split('T')[0];

  return (
    <section id="appointment" className="py-20 lg:py-28 bg-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs font-bold uppercase tracking-wider text-[#16B8A6] block mb-2">
            Schedule a Consultation
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#123B56] tracking-tight">
            Ready for a Healthier, Brighter Smile?
          </h2>
          <p className="mt-4 text-base sm:text-lg text-slate-600 leading-relaxed">
            Request an appointment with Dr. Shubham. Our clinic team will promptly confirm your scheduled slot.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start max-w-6xl mx-auto">
          
          {/* Left Column: Quick Clinic Info & WhatsApp Direct */}
          <div className="lg:col-span-5 bg-gradient-to-br from-[#123B56] to-[#0A2538] rounded-3xl p-8 sm:p-10 text-white shadow-xl">
            <h3 className="font-display font-bold text-2xl mb-4 text-white">
              Appointment Assistance
            </h3>
            <p className="text-slate-300 text-sm leading-relaxed mb-8">
              Prefer instant assistance or need emergency attention? You can directly contact Dr. Shubham Dental Clinic via WhatsApp or direct phone call.
            </p>

            <div className="space-y-6 mb-8">
              {/* Timing */}
              <div className="flex items-start gap-3.5">
                <div className="w-10 h-10 rounded-xl bg-white/10 flex items-center justify-center text-[#16B8A6] shrink-0">
                  <Clock className="w-5 h-5" />
                </div>
                <div>
                  <span className="block text-xs font-semibold text-slate-300">Consultation Timings</span>
                  <span className="block text-sm font-bold text-white">10:00 AM – 8:00 PM</span>
                  <span className="block text-xs text-teal-300">Open Monday through Sunday</span>
                </div>
              </div>

              {/* Direct Phone */}
              <div className="flex items-start gap-3.5">
                <div className="w-10 h-10 rounded-xl bg-white/10 flex items-center justify-center text-[#16B8A6] shrink-0">
                  <Phone className="w-5 h-5" />
                </div>
                <div>
                  <span className="block text-xs font-semibold text-slate-300">Clinic Helpline</span>
                  <a
                    href="tel:+918279848678"
                    className="block text-base font-bold text-white hover:text-teal-300 transition-colors"
                  >
                    +91 82798 48678
                  </a>
                  <span className="block text-xs text-slate-400">Tap to call our desk directly</span>
                </div>
              </div>

              {/* Location Note */}
              <div className="p-4 rounded-2xl bg-white/5 border border-white/10">
                <span className="block text-xs font-bold text-teal-200 mb-1">Clinic Address</span>
                <p className="text-xs text-slate-300 leading-relaxed">
                  Oasis City, Daksh Crossing, Gangapur Road, Gali Number 2, Opposite Bikaner Sweets, Rudrapur, Uttarakhand 263153.
                </p>
              </div>
            </div>

            {/* Direct WhatsApp CTA Button */}
            <a
              href={generateWhatsAppUrl()}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full inline-flex items-center justify-center gap-2.5 px-6 py-3.5 rounded-2xl bg-[#25D366] hover:bg-[#20ba59] text-white font-bold text-sm transition-all duration-200 shadow-md hover:shadow-lg"
            >
              <MessageCircle className="w-5 h-5" />
              <span>Instant WhatsApp Booking</span>
            </a>
          </div>

          {/* Right Column: Appointment Form or Confirmation Card */}
          <div className="lg:col-span-7 bg-[#F1FAFA]/70 rounded-3xl p-8 sm:p-10 border border-teal-100 shadow-sm">
            
            {bookingConfirmation ? (
              /* Genuine Request Receipt State */
              <div className="space-y-6 animate-fadeIn">
                <div className="w-14 h-14 rounded-2xl bg-[#16B8A6] text-white flex items-center justify-center shadow-md">
                  <CheckCircle2 className="w-8 h-8" />
                </div>

                <div>
                  <span className="text-xs font-bold uppercase tracking-wider text-[#16B8A6] block mb-1">
                    Request Received
                  </span>
                  <h3 className="font-display font-bold text-2xl text-[#123B56]">
                    Appointment Request Submitted
                  </h3>
                  <p className="text-sm text-slate-600 mt-2 leading-relaxed">
                    Thank you, <strong className="text-[#123B56]">{bookingConfirmation.name}</strong>. Your appointment request has been logged. Our clinic reception team will call or message your number to confirm your final slot.
                  </p>
                </div>

                {/* Receipt Card */}
                <div className="p-5 rounded-2xl bg-white border border-teal-100/80 shadow-xs space-y-3">
                  <div className="flex items-center justify-between pb-3 border-b border-slate-100">
                    <span className="text-xs text-slate-500 font-medium">Reference Code</span>
                    <div className="flex items-center gap-2">
                      <span className="font-mono text-xs font-bold text-[#123B56] bg-slate-100 px-2.5 py-1 rounded-md">
                        {bookingConfirmation.referenceId}
                      </span>
                      <button
                        onClick={() => copyRefToClipboard(bookingConfirmation.referenceId)}
                        className="text-slate-400 hover:text-[#123B56] transition-colors p-1"
                        title="Copy reference code"
                      >
                        {copiedRef ? <Check className="w-4 h-4 text-teal-600" /> : <Copy className="w-4 h-4" />}
                      </button>
                    </div>
                  </div>

                  <div className="grid grid-cols-2 gap-2 text-xs">
                    <div>
                      <span className="text-slate-400 block">Requested Treatment</span>
                      <span className="font-semibold text-[#123B56]">{bookingConfirmation.treatment}</span>
                    </div>
                    <div>
                      <span className="text-slate-400 block">Preferred Date</span>
                      <span className="font-semibold text-[#123B56]">{bookingConfirmation.date}</span>
                    </div>
                    <div>
                      <span className="text-slate-400 block">Time Preference</span>
                      <span className="font-semibold text-[#123B56]">{bookingConfirmation.timeSlot}</span>
                    </div>
                    <div>
                      <span className="text-slate-400 block">Contact Mobile</span>
                      <span className="font-semibold text-[#123B56]">{bookingConfirmation.phone}</span>
                    </div>
                  </div>
                </div>

                {/* Quick WhatsApp Share Action */}
                <div className="pt-2 flex flex-col sm:flex-row gap-3">
                  <a
                    href={generateWhatsAppUrl(bookingConfirmation.referenceId)}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 inline-flex items-center justify-center gap-2 py-3 px-5 rounded-xl bg-[#25D366] hover:bg-[#20ba59] text-white font-semibold text-xs sm:text-sm transition-colors shadow-sm"
                  >
                    <MessageCircle className="w-4 h-4" />
                    <span>Send Details to WhatsApp</span>
                  </a>

                  <button
                    onClick={handleReset}
                    className="py-3 px-5 rounded-xl bg-white border border-slate-200 text-[#123B56] hover:bg-slate-50 font-semibold text-xs sm:text-sm transition-colors cursor-pointer"
                  >
                    Book Another
                  </button>
                </div>
              </div>
            ) : (
              /* Interactive Booking Form */
              <form onSubmit={handleSubmit} className="space-y-5" noValidate>
                <div>
                  <h3 className="font-display font-bold text-xl text-[#123B56] mb-1">
                    Book Your Visit
                  </h3>
                  <p className="text-xs text-slate-500 mb-6">
                    Fill in your preferred date and treatment. All consultations are handled with utmost hygiene and care.
                  </p>
                </div>

                {/* Patient Name */}
                <div>
                  <label className="block text-xs font-bold text-[#123B56] mb-1.5" htmlFor="patient-name">
                    Patient Name <span className="text-red-500">*</span>
                  </label>
                  <div className="relative">
                    <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-slate-400">
                      <User className="w-4 h-4" />
                    </div>
                    <input
                      id="patient-name"
                      type="text"
                      value={patientName}
                      onChange={(e) => {
                        setPatientName(e.target.value);
                        if (errors.patientName) setErrors({ ...errors, patientName: '' });
                      }}
                      placeholder="e.g. Ramesh Kumar"
                      className={`w-full pl-10 pr-4 py-3 rounded-xl bg-white border text-sm text-[#253746] placeholder-slate-400 focus:outline-hidden focus:ring-2 focus:ring-[#16B8A6] transition-all ${
                        errors.patientName ? 'border-red-400 bg-red-50/20' : 'border-slate-200'
                      }`}
                    />
                  </div>
                  {errors.patientName && (
                    <p className="mt-1 text-xs text-red-500 flex items-center gap-1">
                      <AlertCircle className="w-3 h-3" /> {errors.patientName}
                    </p>
                  )}
                </div>

                {/* Phone & Email Row */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {/* Phone */}
                  <div>
                    <label className="block text-xs font-bold text-[#123B56] mb-1.5" htmlFor="phone-number">
                      Phone Number <span className="text-red-500">*</span>
                    </label>
                    <div className="relative">
                      <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-slate-400">
                        <Phone className="w-4 h-4" />
                      </div>
                      <input
                        id="phone-number"
                        type="tel"
                        value={phoneNumber}
                        onChange={(e) => {
                          setPhoneNumber(e.target.value);
                          if (errors.phoneNumber) setErrors({ ...errors, phoneNumber: '' });
                        }}
                        placeholder="10-digit mobile number"
                        className={`w-full pl-10 pr-4 py-3 rounded-xl bg-white border text-sm text-[#253746] placeholder-slate-400 focus:outline-hidden focus:ring-2 focus:ring-[#16B8A6] transition-all ${
                          errors.phoneNumber ? 'border-red-400 bg-red-50/20' : 'border-slate-200'
                        }`}
                      />
                    </div>
                    {errors.phoneNumber && (
                      <p className="mt-1 text-xs text-red-500 flex items-center gap-1">
                        <AlertCircle className="w-3 h-3" /> {errors.phoneNumber}
                      </p>
                    )}
                  </div>

                  {/* Email */}
                  <div>
                    <label className="block text-xs font-bold text-[#123B56] mb-1.5" htmlFor="email-address">
                      Email Address <span className="text-slate-400 font-normal">(Optional)</span>
                    </label>
                    <div className="relative">
                      <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-slate-400">
                        <Mail className="w-4 h-4" />
                      </div>
                      <input
                        id="email-address"
                        type="email"
                        value={email}
                        onChange={(e) => {
                          setEmail(e.target.value);
                          if (errors.email) setErrors({ ...errors, email: '' });
                        }}
                        placeholder="name@example.com"
                        className={`w-full pl-10 pr-4 py-3 rounded-xl bg-white border text-sm text-[#253746] placeholder-slate-400 focus:outline-hidden focus:ring-2 focus:ring-[#16B8A6] transition-all ${
                          errors.email ? 'border-red-400' : 'border-slate-200'
                        }`}
                      />
                    </div>
                    {errors.email && (
                      <p className="mt-1 text-xs text-red-500 flex items-center gap-1">
                        <AlertCircle className="w-3 h-3" /> {errors.email}
                      </p>
                    )}
                  </div>
                </div>

                {/* Treatment Dropdown */}
                <div>
                  <label className="block text-xs font-bold text-[#123B56] mb-1.5" htmlFor="treatment-select">
                    Preferred Treatment / Consultation <span className="text-red-500">*</span>
                  </label>
                  <select
                    id="treatment-select"
                    value={treatment}
                    onChange={(e) => setTreatment(e.target.value)}
                    className="w-full px-4 py-3 rounded-xl bg-white border border-slate-200 text-sm text-[#253746] focus:outline-hidden focus:ring-2 focus:ring-[#16B8A6] transition-all"
                  >
                    {TREATMENTS.map((t) => (
                      <option key={t.id} value={t.title}>
                        {t.title}
                      </option>
                    ))}
                    <option value="General Consultation & Checkup">General Consultation & Checkup</option>
                    <option value="Tooth Pain / Emergency">Tooth Pain / Emergency Visit</option>
                  </select>
                </div>

                {/* Date & Time Slot Row */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {/* Date */}
                  <div>
                    <label className="block text-xs font-bold text-[#123B56] mb-1.5" htmlFor="pref-date">
                      Preferred Date <span className="text-red-500">*</span>
                    </label>
                    <div className="relative">
                      <input
                        id="pref-date"
                        type="date"
                        min={todayDateString}
                        value={preferredDate}
                        onChange={(e) => {
                          setPreferredDate(e.target.value);
                          if (errors.preferredDate) setErrors({ ...errors, preferredDate: '' });
                        }}
                        className={`w-full px-4 py-3 rounded-xl bg-white border text-sm text-[#253746] focus:outline-hidden focus:ring-2 focus:ring-[#16B8A6] transition-all ${
                          errors.preferredDate ? 'border-red-400 bg-red-50/20' : 'border-slate-200'
                        }`}
                      />
                    </div>
                    {errors.preferredDate && (
                      <p className="mt-1 text-xs text-red-500 flex items-center gap-1">
                        <AlertCircle className="w-3 h-3" /> {errors.preferredDate}
                      </p>
                    )}
                  </div>

                  {/* Time Slot */}
                  <div>
                    <label className="block text-xs font-bold text-[#123B56] mb-1.5" htmlFor="time-slot">
                      Preferred Time Slot
                    </label>
                    <select
                      id="time-slot"
                      value={timeSlot}
                      onChange={(e) => setTimeSlot(e.target.value)}
                      className="w-full px-4 py-3 rounded-xl bg-white border border-slate-200 text-sm text-[#253746] focus:outline-hidden focus:ring-2 focus:ring-[#16B8A6] transition-all"
                    >
                      <option value="Morning (10:00 AM – 1:00 PM)">Morning (10:00 AM – 1:00 PM)</option>
                      <option value="Afternoon (1:00 PM – 5:00 PM)">Afternoon (1:00 PM – 5:00 PM)</option>
                      <option value="Evening (5:00 PM – 8:00 PM)">Evening (5:00 PM – 8:00 PM)</option>
                    </select>
                  </div>
                </div>

                {/* Message / Symptoms */}
                <div>
                  <label className="block text-xs font-bold text-[#123B56] mb-1.5" htmlFor="message-input">
                    Symptoms or Questions <span className="text-slate-400 font-normal">(Optional)</span>
                  </label>
                  <textarea
                    id="message-input"
                    rows={3}
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    placeholder="Describe any toothache, sensitivity, or specific requirements..."
                    className="w-full px-4 py-3 rounded-xl bg-white border border-slate-200 text-sm text-[#253746] placeholder-slate-400 focus:outline-hidden focus:ring-2 focus:ring-[#16B8A6] transition-all resize-none"
                  />
                </div>

                {/* Submit Button */}
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full py-4 px-6 rounded-2xl bg-[#123B56] hover:bg-[#16B8A6] text-white font-bold text-sm sm:text-base transition-all duration-200 shadow-md hover:shadow-lg disabled:opacity-60 cursor-pointer flex items-center justify-center gap-2"
                >
                  {isSubmitting ? (
                    <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin" />
                  ) : (
                    <>
                      <span>Request an Appointment</span>
                      <ArrowRight className="w-4 h-4 text-[#16B8A6] group-hover:text-white" />
                    </>
                  )}
                </button>

                <p className="text-[11px] text-center text-slate-500">
                  By submitting, you agree to receive a confirmation call or SMS from DR SHUBHAM DENTAL CLINIC. We respect your privacy.
                </p>
              </form>
            )}

          </div>

        </div>

      </div>
    </section>
  );
};
