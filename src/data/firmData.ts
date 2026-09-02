import { ServiceItem, TestimonialItem, ProcessStep } from '../types';

export const FIRM_CONFIG = {
  name: 'Advocate Sridharan & Associates',
  tagline: 'Bangalore Family Law & Custody Advocates',
  phoneDisplay: '+91 98801 23456',
  phoneRaw: '+919880123456',
  secondaryPhone: '+91 80 4123 7890',
  whatsappRaw: '919880123456',
  email: 'consult@sridharanlaw.in',
  city: 'Bangalore',
  address: 'Suite 402, 4th Floor, Prestige Meridian, MG Road (Near Family Court), Bangalore, Karnataka 560001',
  operatingHours: 'Mon – Sat: 8:30 AM – 8:30 PM | Urgent Cases: 24/7 Available by Phone',
  googleRating: '5.0',
  totalReviewsCount: '140+',
  experienceYears: '18+ Years Experience',
  courtsPracticed: 'Bangalore Family Courts (Nyaya Degula), High Court of Karnataka & City Civil Courts',
};

export const SERVICES: ServiceItem[] = [
  {
    id: 'mutual-divorce',
    title: 'Mutual Divorce',
    subtitle: 'Section 13B / Amicable Separation',
    benefit: 'Fast, amicable resolution with minimal court appearances and zero unnecessary conflict.',
    idealFor: 'Couples agreed on separation seeking swift waiver of cooling period and dignified closure.',
    iconName: 'Users',
  },
  {
    id: 'contested-divorce',
    title: 'Contested Divorce',
    subtitle: 'Strategic Court Representation',
    benefit: 'Strong, strategic representation to protect your rights when mutual agreement isn’t possible.',
    idealFor: 'Complex disputes involving cruelty, desertion, adultery, maintenance, or contested asset division.',
    iconName: 'ShieldCheck',
  },
  {
    id: 'child-custody',
    title: 'Child Custody & Visitation',
    subtitle: 'Guardian & Wards Act / Parental Rights',
    benefit: 'Protecting your parental rights and safeguarding your child’s emotional and financial well-being.',
    idealFor: 'Navigating interim custody, visitation schedules, schooling decisions, and child maintenance.',
    iconName: 'Scale',
  },
  {
    id: 'family-consultation',
    title: 'Family Law Consultation',
    subtitle: 'Confidential Legal Roadmap',
    benefit: 'Clear, plain-language answers before you decide your next steps — strictly confidential.',
    idealFor: 'Individuals exploring their legal standing, alimony calculations, property rights, or pre-litigation options.',
    iconName: 'MessageSquareQuote',
  },
];

export const PROCESS_STEPS: ProcessStep[] = [
  {
    stepNumber: 1,
    title: 'Call for a Free Consultation',
    description: 'Share your situation with us in complete confidence. There is no obligation, no pressure, and no legal jargon.',
    highlight: 'Direct phone discussion with a senior family law advocate',
  },
  {
    stepNumber: 2,
    title: 'Get a Clear Plan',
    description: 'We give you a plain-language explanation of your legal options, realistic timelines, and cost transparency.',
    highlight: 'Customized strategy for Bangalore Family Courts',
  },
  {
    stepNumber: 3,
    title: 'We Handle Everything',
    description: 'From drafting petitions to managing court appearances and negotiations, while you focus on your family’s peace of mind.',
    highlight: 'Dignified, discreet, and fast-tracked execution',
  },
];

export const TESTIMONIALS: TestimonialItem[] = [
  {
    id: 'review-pb',
    clientName: 'P.B.',
    caseType: 'Mutual Consent Divorce',
    location: 'Koramangala, Bangalore',
    rating: 5,
    summary: 'Praised the professional, patient handling of a mutual divorce, calling the entire legal process peaceful and meticulously well-guided at every stage.',
    keyHighlight: 'Peaceful, calm, and well-guided process',
    verifiedLabel: 'Google Review',
    timeAgo: '2 months ago',
  },
  {
    id: 'review-bhartendu',
    clientName: 'Bhartendu',
    caseType: 'Divorce & Settlement Matter',
    location: 'Indiranagar, Bangalore',
    rating: 5,
    summary: 'Shared that the case was resolved significantly faster than expected, highlighting clear, proactive communication and honest guidance from start to finish.',
    keyHighlight: 'Resolved faster than expected with crystal-clear communication',
    verifiedLabel: 'Google Review',
    timeAgo: '3 months ago',
  },
  {
    id: 'review-bala',
    clientName: 'Bala Kumar S.',
    caseType: 'Bangalore Family Court Matter',
    location: 'Whitefield, Bangalore',
    rating: 5,
    summary: 'Noted his Bangalore divorce case was completed in just one week thanks to the team’s exceptional organization, document readiness, and court coordination.',
    keyHighlight: 'Completed swiftly in 1 week through outstanding organization',
    verifiedLabel: 'Google Review',
    timeAgo: '1 month ago',
  },
  {
    id: 'review-vinay',
    clientName: 'Vinay Gowda',
    caseType: 'Custody & Legal Advisory',
    location: 'Jayanagar, Bangalore',
    rating: 5,
    summary: 'Described the advocate as always reachable, empathetic, and patient, answering every urgent question without hesitation during a stressful period.',
    keyHighlight: 'Always reachable, patient & answered every query',
    verifiedLabel: 'Google Review',
    timeAgo: '4 months ago',
  },
];

export const TRUST_POINTS = [
  {
    title: '100% Confidential',
    desc: 'Every call, document, and consultation is strictly privileged and discreet.',
  },
  {
    title: 'Bangalore Jurisdiction Experts',
    desc: 'Daily practice across Bangalore Principal Family Court (Nyaya Degula) & Karnataka High Court.',
  },
  {
    title: 'No Hidden Delays',
    desc: 'We prioritize swift mutual settlements and structured timelines to save you months of stress.',
  },
  {
    title: 'Compassionate, Human Approach',
    desc: 'Clear, plain-language guidance focused on your dignity, privacy, and future.',
  },
];
