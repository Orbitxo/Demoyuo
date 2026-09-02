export interface ServiceItem {
  id: string;
  title: string;
  subtitle: string;
  benefit: string;
  idealFor: string;
  iconName: 'Scale' | 'Users' | 'ShieldCheck' | 'MessageSquareQuote' | 'Clock' | 'FileText';
}

export interface TestimonialItem {
  id: string;
  clientName: string;
  caseType: string;
  location: string;
  rating: number;
  summary: string;
  keyHighlight: string;
  verifiedLabel: string;
  timeAgo: string;
}

export interface ProcessStep {
  stepNumber: number;
  title: string;
  description: string;
  highlight: string;
}

export interface CallbackRequest {
  fullName: string;
  phoneNumber: string;
  caseType: string;
  preferredTime: string;
  briefMessage: string;
}
