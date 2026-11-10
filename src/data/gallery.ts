export interface GalleryItem {
  id: string;
  title: string;
  category: 'operatory' | 'technology' | 'reception' | 'care';
  categoryLabel: string;
  image: string;
  description: string;
}

export const GALLERY_ITEMS: GalleryItem[] = [
  {
    id: 'operatory-main',
    title: 'Advanced Operatory Suite',
    category: 'operatory',
    categoryLabel: 'Treatment Room',
    image: '/src/assets/images/clinic_operatory_modern_1794292935010.jpg',
    description: 'Ergonomic treatment suite equipped with computerized dental chair, hygienic surgical lighting, and sterilised instrumentation.'
  },
  {
    id: 'implant-tech',
    title: 'Precision Implant & 3D Imaging Unit',
    category: 'technology',
    categoryLabel: 'Dental Tech',
    image: '/src/assets/images/dental_implant_tech_1794292935707.jpg',
    description: 'High-precision intraoral 3D scanning and implant surgical planning setup for accurate, minimally invasive procedures.'
  },
  {
    id: 'reception-lounge',
    title: 'Welcoming Patient Lounge',
    category: 'reception',
    categoryLabel: 'Reception Area',
    image: '/src/assets/images/clinic_reception_lounge_1794292935473.jpg',
    description: 'Spacious and serene waiting environment designed to help patients and families relax before their consultation.'
  },
  {
    id: 'doctor-care',
    title: 'Personalized Doctor Consultation',
    category: 'care',
    categoryLabel: 'Patient Care',
    image: '/src/assets/images/hero_dentist_care_1794292933600.jpg',
    description: 'Dr. Shubham walking a patient through diagnostic dental scans with transparent, gentle explanations.'
  },
  {
    id: 'doctor-portrait',
    title: 'Dr. Shubham – Dentist in Clinic',
    category: 'operatory',
    categoryLabel: 'Our Doctor',
    image: '/src/assets/images/doctor_shubham_portrait_1794292932898.jpg',
    description: 'Dedicated to compassionate patient care, gentle treatments, and modern oral health standards in Rudrapur.'
  }
];
