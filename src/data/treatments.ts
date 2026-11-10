export interface Treatment {
  id: string;
  title: string;
  shortDesc: string;
  category: 'implant' | 'restorative' | 'cosmetic' | 'general';
  duration: string;
  suitableFor: string;
  fullDesc: string;
  benefits: string[];
  procedureSteps: string[];
  iconName: string;
}

export const TREATMENTS: Treatment[] = [
  {
    id: 'dental-implants',
    title: 'Dental Implants',
    shortDesc: 'Permanent, durable, and natural-feeling tooth replacements designed to restore full chewing power and aesthetics.',
    category: 'implant',
    duration: '2–3 visits',
    suitableFor: 'Single or multiple missing teeth, loose dentures',
    fullDesc: 'Dental implants are the gold standard for replacing missing teeth. A biocompatible titanium post is surgically placed into the jawbone, acting as a sturdy root that fuses with bone tissue. Topped with a custom porcelain crown, your implant looks, feels, and functions exactly like a natural tooth.',
    benefits: [
      'Preserves jawbone density and facial contours',
      'Lifelong durability with proper oral hygiene',
      'No grinding or damage to adjacent healthy teeth',
      'Full bite force restoration for worry-free eating'
    ],
    procedureSteps: [
      'Comprehensive 3D intraoral scan & bone evaluation',
      'Gentle implant placement under local anesthesia',
      'Osseointegration healing phase',
      'Custom abutment & aesthetic zirconia crown placement'
    ],
    iconName: 'ShieldCheck'
  },
  {
    id: 'root-canal',
    title: 'Root Canal Treatment (RCT)',
    shortDesc: 'Modern, painless endodontic therapy using precision rotary instruments to save severely infected or painful teeth.',
    category: 'restorative',
    duration: '1–2 sessions',
    suitableFor: 'Deep cavities, severe toothache, nerve inflammation',
    fullDesc: 'Gone are the days of painful root canals. At Dr. Shubham Dental Clinic, we utilize advanced rotary endodontics and apex locators to gently remove infected pulp, sterilize canals, and seal the tooth comfortably—saving your natural tooth and providing immediate relief.',
    benefits: [
      'Immediate relief from severe toothache and sensitivity',
      'Retains your natural tooth structure and bite alignment',
      'High success rate with computerized sterilization',
      'Completed in a single or two gentle appointments'
    ],
    procedureSteps: [
      'Digital diagnostic X-ray to map root canal canals',
      'Painless local anesthesia administration',
      'Gentle removal of infected pulp & antiseptic irrigation',
      'Hermetic gutta-percha sealing & restorative crown prep'
    ],
    iconName: 'Activity'
  },
  {
    id: 'teeth-cleaning',
    title: 'Teeth Cleaning & Scaling',
    shortDesc: 'Professional ultrasonic scaling and polishing to remove tough calculus, stain buildup, and safeguard gum health.',
    category: 'general',
    duration: '30–45 mins',
    suitableFor: 'Bleeding gums, yellow tartar stains, bad breath',
    fullDesc: 'Daily brushing alone cannot eliminate hardened tartar (calculus). Our ultrasonic scaling gently vibrates away bacterial deposits above and beneath the gumline, followed by a fine polishing paste that leaves teeth feeling smooth, clean, and fresh.',
    benefits: [
      'Prevents gum disease (gingivitis & periodontitis)',
      'Eliminates persistent bad breath (halitosis)',
      'Removes tea, coffee, and tobacco stains',
      'Essential bi-annual maintenance for oral wellness'
    ],
    procedureSteps: [
      'Gum pocket depth and plaque assessment',
      'Gentle ultrasonic scaling with cooling water spray',
      'Interdental flossing and antiseptic rinse',
      'Enamel polishing with fluoride-rich paste'
    ],
    iconName: 'Sparkles'
  },
  {
    id: 'teeth-whitening',
    title: 'Teeth Whitening',
    shortDesc: 'Clinically proven, enamel-safe bleaching treatments that brighten stained or discolored teeth by several shades.',
    category: 'cosmetic',
    duration: '45–60 mins',
    suitableFor: 'Yellowed enamel, coffee/tea stains, pre-wedding prep',
    fullDesc: 'Brighten your smile safely under dental supervision. We use pH-neutral, clinical-grade whitening agents that penetrate enamel micro-pores to break down deep discoloration caused by foods, beverages, and age—without harming enamel integrity.',
    benefits: [
      'Visibly brighter smile in a single clinic appointment',
      'Formulated with desensitizers for zero gum discomfort',
      'Long-lasting results with simple maintenance',
      'Customized shade matching tailored to your complexion'
    ],
    procedureSteps: [
      'Shade assessment and pre-treatment photography',
      'Protective gingival barrier application on gums',
      'Controlled application of active whitening gel',
      'Post-whitening fluoride polish and care guide'
    ],
    iconName: 'Sun'
  },
  {
    id: 'crowns-bridges',
    title: 'Dental Crowns & Bridges',
    shortDesc: 'Custom-crafted zirconia and ceramic restorations to protect fractured teeth and seamlessly bridge missing gaps.',
    category: 'restorative',
    duration: '2 visits',
    suitableFor: 'Post-RCT teeth, heavily broken teeth, missing gaps',
    fullDesc: 'Whether reinforcing a tooth after a root canal or bridging a gap between remaining teeth, our aesthetic zirconia and porcelain-fused-to-metal (PFM) crowns offer exact color matching, seamless margins, and long-lasting strength.',
    benefits: [
      'Restores chewing capacity and prevents tooth fracture',
      'Custom color-matched to your surrounding natural teeth',
      'High biocompatibility with zero metal margins exposed',
      'Reinforces weak, worn, or cracked dental enamel'
    ],
    procedureSteps: [
      'Tooth preparation and contour smoothing',
      'High-precision digital impression capture',
      'Temporary crown placement for aesthetic comfort',
      'Permanent cementation of custom zirconia crown'
    ],
    iconName: 'Crown'
  },
  {
    id: 'tooth-extraction',
    title: 'Tooth Extraction & Wisdom Teeth',
    shortDesc: 'Gentle, atraumatic extractions performed with utmost care and pain-free local anesthesia for damaged or impacted teeth.',
    category: 'general',
    duration: '30–60 mins',
    suitableFor: 'Unsalvageable decay, painful impacted wisdom teeth',
    fullDesc: 'We prioritize preserving your natural teeth whenever possible. When extraction is unavoidable due to severe crowding, fracture, or painful wisdom tooth impaction, Dr. Shubham performs gentle, atraumatic extractions designed for rapid healing and minimal post-op tenderness.',
    benefits: [
      'Relieves chronic pain and swelling caused by impaction',
      'Prevents infection spreading to adjacent bone and teeth',
      'Atraumatic socket preservation for future implants',
      'Clear, supportive post-operative recovery instructions'
    ],
    procedureSteps: [
      'Digital radiographic mapping of root angles',
      'Profound targeted local anesthesia',
      'Gentle tooth mobilization without excessive pressure',
      'Sterile gauze placement and post-care medications'
    ],
    iconName: 'Scissors'
  },
  {
    id: 'cosmetic-dentistry',
    title: 'Cosmetic Dentistry & Veneers',
    shortDesc: 'Aesthetic smile makeovers, porcelain veneers, and composite bonding to fix chipped, gapped, or uneven teeth.',
    category: 'cosmetic',
    duration: '1–2 visits',
    suitableFor: 'Chipped front teeth, gaps (diastema), minor misalignments',
    fullDesc: 'Transform your smile with artistic cosmetic dentistry. From ultra-thin porcelain veneers that mask discoloration and chips to direct tooth-colored composite bonding, we design balanced, radiant smiles tailored to your unique facial geometry.',
    benefits: [
      'Corrects chipped edges, awkward gaps, and asymmetries',
      'Natural translucency that mimics organic enamel',
      'Minimally invasive with conservative tooth prep',
      'Boosts personal and professional social confidence'
    ],
    procedureSteps: [
      'Aesthetic smile assessment & digital simulation',
      'Micro-conservative enamel preparation',
      'Custom shade matching under natural lighting',
      'Adhesive resin bonding and meticulous hand-polishing'
    ],
    iconName: 'Smile'
  },
  {
    id: 'braces-orthodontics',
    title: 'Braces & Clear Aligners',
    shortDesc: 'Orthodontic correction for crooked teeth, deep bites, and crowded smiles using modern aesthetic braces and aligners.',
    category: 'general',
    duration: 'Customized plan',
    suitableFor: 'Crowded teeth, gaps, malocclusion, teen & adult smiles',
    fullDesc: 'Straight teeth are easier to clean and stay healthier for a lifetime. We offer contemporary orthodontic solutions, from low-profile ceramic and metal brackets to discreet clear aligner consultation, guiding teeth into harmonious alignment.',
    benefits: [
      'Proper jaw bite alignment relieves TMJ stress',
      'Easier cleaning reduces future decay and gum issues',
      'Aesthetic options available for working adults',
      'Step-by-step progress monitoring at every visit'
    ],
    procedureSteps: [
      'Diagnostic orthodontic records and cephalometric analysis',
      'Personalized alignment treatment roadmap',
      'Bracket bonding or aligner tray dispensing',
      'Periodic progress adjustments & retainer stabilization'
    ],
    iconName: 'AlignJustify'
  },
  {
    id: 'general-checkups',
    title: 'Comprehensive Dental Checkups',
    shortDesc: 'Routine preventative screenings, digital X-rays, and oral cancer detection to spot small issues before they become painful.',
    category: 'general',
    duration: '20–30 mins',
    suitableFor: 'Routine 6-month checks, children, families, elderly',
    fullDesc: 'Preventative care is the cornerstone of lifelong oral wellness. Our detailed checkups inspect teeth, gums, soft tissues, and existing restorations, providing transparent guidance without unnecessary procedures.',
    benefits: [
      'Early detection saves teeth and avoids costly emergencies',
      'High-resolution digital X-rays with low radiation',
      'Individualized oral hygiene coaching and diet advice',
      'Comfortable, family-friendly checkup experience'
    ],
    procedureSteps: [
      'Visual examination of all teeth and soft tissues',
      'High-resolution intraoral camera walkthrough',
      'Periodontal gum screening',
      'Personalized preventative report & discussion'
    ],
    iconName: 'CheckCircle'
  }
];
