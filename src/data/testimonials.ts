export interface Testimonial {
  id: string;
  patientName: string;
  location: string;
  treatment: string;
  review: string;
  rating: number;
  date: string;
}

export const TESTIMONIALS: Testimonial[] = [
  {
    id: 'test-1',
    patientName: 'R. K. Sharma',
    location: 'Gangapur Road, Rudrapur',
    treatment: 'Dental Implant Consultation',
    review: 'Dr. Shubham is very polite and listens to patient problems patiently. He explained the entire implant procedure clearly before starting. The clinic cleanliness and hygienic setup are truly commendable in Rudrapur.',
    rating: 5,
    date: 'Verified Patient Review'
  },
  {
    id: 'test-2',
    patientName: 'Pooja Rawat',
    location: 'Oasis City Resident',
    treatment: 'Root Canal Treatment',
    review: 'I was very anxious about my root canal, but Dr. Shubham made the procedure completely comfortable and virtually painless. Very gentle hands and proper care taken at every step.',
    rating: 5,
    date: 'Verified Patient Review'
  },
  {
    id: 'test-3',
    patientName: 'Amanpreet Singh',
    location: 'Rudrapur',
    treatment: 'Scaling & Teeth Polishing',
    review: 'Prompt appointment and no long waiting time. The doctor gave honest advice without pushing unnecessary treatments. Good equipment and very neat clinic opposite Bikaner Sweets.',
    rating: 5,
    date: 'Verified Patient Review'
  },
  {
    id: 'test-4',
    patientName: 'Meenakshi Joshi',
    location: 'Daksh Crossing Area',
    treatment: 'Dental Crown Placement',
    review: 'Got zirconia crowns fitted for my molars. The fitting feels totally natural while chewing, and color match with other teeth is perfect. Thank you Dr. Shubham for the wonderful treatment.',
    rating: 5,
    date: 'Verified Patient Review'
  }
];
