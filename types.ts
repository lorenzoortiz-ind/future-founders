export interface NavItem {
  label: string;
  href: string;
  isButton?: boolean;
}

export interface Testimonial {
  text: string;
  author: string;
  role: string;
  company: string;
  image?: string;
}

export interface Founder {
  name: string;
  role: string;
  bio: string;
  quote: string;
  image: string;
  stats: {
    label: string;
    value: string;
  }[];
}

export enum PricingTier {
  DIGITAL = 'DIGITAL',
  BUNDLE = 'BUNDLE',
  WORKBOOK = 'WORKBOOK'
}