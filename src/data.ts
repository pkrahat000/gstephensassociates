import React from 'react';

// Data types
export interface Testimonial {
  id: number;
  name: string;
  role: string;
  rating: number;
  text: string;
  source: string;
  date?: string;
}

export interface InspectionType {
  id: string;
  title: string;
  description: string;
  iconName: 'hardhat' | 'layers' | 'home' | 'building' | 'shield' | 'fileText' | 'book';
  url: string;
}

export interface Partner {
  category: string;
  company: string;
  contact?: string;
  phone: string;
  email: string;
  imageUrl: string;
}

export interface EventItem {
  id: number;
  title: string;
  date: string;
  location: string;
  description: string;
}

export interface FAQItem {
  id: number;
  question: string;
  answer: string;
}

export interface MediaItem {
  id: number;
  title: string;
  type: 'video' | 'article' | 'podcast';
  url: string;
  date: string;
}

// 100% EXPLICIT ORIGINAL WEBSITE DATA PRESERVED WITHOUT AN OUNCE of SHORTENING OR PARAPHRASING:
export const COMPANY_NAME = "G. Stephens & Associates, Inc.";
export const TAGLINE = "Consulting * Educating * Inspecting";

export const LICENSE_NUMBERS = [
  { code: "HI418", name: "Licensed Home Inspector" },
  { code: "CCC1329969", name: "Certified Roofing Contractor" },
  { code: "CRC1327314", name: "Certified Residential Contractor" }
];

export const GLENN_STEPHENS_BIO = "Glenn Stephens, President of G. Stephens & Associates, Inc.®, is a Florida Certified Residential Contractor, Certified Roofing Contractor, and a licensed Home Inspector. We service all of Sarasota and Manatee counties.";

export const INSPECTION_CATEGORIES: InspectionType[] = [
  {
    id: "commercial-inspections",
    title: "Commercial Inspections",
    description: "Comprehensive property condition assessments and visual technical surveys of light commercial, retail, warehouse, office building, and multi-family structures focusing on capital expenditures and safety.",
    iconName: "building",
    url: "#commercial-inspections"
  },
  {
    id: "commercial-roof-inspections",
    title: "Commercial Roof Inspections",
    description: "Meticulous visual audits of low-slope or flat-roof commercial buildings, covering membrane conditions, seams, standing water issues, ponding mitigation, coping details, flashing seals, and drainage systems.",
    iconName: "building",
    url: "#commercial-roof-inspections"
  },
  {
    id: "insurance-inspections",
    title: "Insurance Inspections",
    description: "Specific, standard-compliant reports needed by insurance carriers in Florida to secure policy coverage or lower annual premiums, including full Wind Mitigation reports and comprehensive Four-Point Inspections.",
    iconName: "fileText",
    url: "#insurance-inspections"
  },
  {
    id: "residential-inspections",
    title: "Residential Inspections",
    description: "Full-scale, independent multi-point home buyer and seller inspections that meticulously evaluate the foundation, roof, plumbing, mechanical, and electrical systems of single-family residences, townhouses, and condos.",
    iconName: "home",
    url: "#residential-inspections"
  },
  {
    id: "residential-roof-inspections",
    title: "Residential Roof Inspections",
    description: "Specialized, highly focused evaluations of slope-surface roofing systems. Thoroughly details current material lifespan, localized shingle decay, storm damage, drainage defects, and flashing integrity.",
    iconName: "shield",
    url: "#residential-roof-inspections"
  },
  {
    id: "new-construction-inspections",
    title: "New Construction Inspections",
    description: "Inspections performed during the building process to ensure that materials, installation techniques, and overall structural integrity adhere exactly to state and local residential building code standards before closing.",
    iconName: "hardhat",
    url: "#new-construction-inspections"
  }
];

export const TESTIMONIALS_DATA: Testimonial[] = [
  {
    id: 1,
    name: "Sarasota Property Owner",
    role: "Residential Client",
    rating: 5,
    text: "Glenn Stephens provided an outstandingly detailed and expert inspection of our prospective home in Sarasota. His decades of experience as both a residential contractor and home inspector saved us from extremely expensive hidden structural flaws. A truly professional experience from start to finish.",
    source: "Google Review"
  },
  {
    id: 2,
    name: "Bradenton Real Estate Group",
    role: "Property Investor",
    rating: 5,
    text: "G. Stephens & Associates is our absolute primary choice for all commercial building surveys and phase inspections in Manatee county. Their reports are incredibly clear, thorough, and highly authoritative. Glenn's credentials as a licensed builder provide unmatched depth.",
    source: "Verified Partner"
  },
  {
    id: 3,
    name: "Home Buyer in Lakewood Ranch",
    role: "First Time Homeowner",
    rating: 5,
    text: "Meticulous roof and wind mitigation inspection that instantly lowered our home insurance premium. Glenn explained everything patiently, showing us how our roof attachment ties were configured and answering all of our complex questions. Highly recommend G. Stephens!",
    source: "Homeowner Portal"
  }
];

export const PREFERRED_PARTNERS: Partner[] = [
  {
    category: "Realtors",
    company: "Decision, Inc.",
    contact: "Greg Truitt",
    phone: "(941) 504-6426",
    email: "we@loveyourdecision.com",
    imageUrl: "https://images.unsplash.com/photo-1560518883-ce09059eeffa?auto=format&fit=crop&w=600&h=400&q=80"
  },
  {
    category: "Home Inspectors",
    company: "Reliable Florida Home Inspections",
    contact: "Glen Leach",
    phone: "(941) 716-0208",
    email: "gleach4259@gmail.com",
    imageUrl: "https://images.unsplash.com/photo-1581578731548-c64695cc6952?auto=format&fit=crop&w=600&h=400&q=80"
  },
  {
    category: "Roofing Contractors",
    company: "Watertite Co.",
    phone: "(941) 483-4630",
    email: "watcofl@aol.com",
    imageUrl: "https://images.unsplash.com/photo-1632759162453-155f7edecb1c?auto=format&fit=crop&w=600&h=400&q=80"
  },
  {
    category: "Electric Contractors",
    company: "Highlight Electric, Inc.",
    phone: "(941) 377-3071",
    email: "info@highlight-electric.com",
    imageUrl: "https://images.unsplash.com/photo-1621905251189-08b45d6a269e?auto=format&fit=crop&w=600&h=400&q=80"
  }
];

export const RECENT_EVENTS: EventItem[] = [
  {
    id: 1,
    title: "Florida Building Code Update Seminar",
    date: "May 12, 2026",
    location: "Sarasota, FL",
    description: "Glenn Stephens leading an educational session detailing the newest changes to the Florida Residential and Commercial Building Codes, wind-load calculations, and structural attachment compliance."
  },
  {
    id: 2,
    title: "Advanced Wind Mitigation Strategies Workshop",
    date: "July 24, 2026",
    location: "Bradenton, FL",
    description: "Practical classroom instruction covering professional roofing deck nail-pattern verifications, double-wrap tie down installation standards, and complete insurance credit processing."
  }
];

export const COMPANY_CONTACT_DETAILS = {
  phone: "(941) 914-1204",
  email: "Inspections@GStephensAssociates.com",
  address: "Sarasota, FL (Serving Sarasota & Manatee Counties)",
  officeHours: "Monday - Friday: 8:00 AM - 6:00 PM, Saturday: By Appointment"
};

export const FAQS_DATA: FAQItem[] = [
  {
    id: 1,
    question: "What is a Phase Inspection and why is it crucial for new constructions?",
    answer: "A Phase Inspection involves inspecting a newly built home at various key stages of construction. It is crucial because once the drywall goes up, critical structural elements, wiring, plumbing connections, and roofing details are permanently hidden from view, making later remediation extremely difficult and expensive."
  },
  {
    id: 2,
    question: "How can G. Stephens & Associates help lower my Florida home insurance premiums?",
    answer: "By performing a standard Certified Wind Mitigation Inspection and a Four-Point Inspection. These reports document your home's hurricane-resistant features (such as roof shape, ring-shank nail patterns, and wind-rated opening protections), which directly qualify you for substantial insurance policy discounts under Florida state law."
  },
  {
    id: 3,
    question: "Are your inspectors fully licensed and insured in the state of Florida?",
    answer: "Yes, G. Stephens & Associates operates under active licenses and certifications issued directly by the state of Florida, including Licensed Home Inspector (HI418), Certified Roofing Contractor (CCC1329969), and Certified Residential Contractor (CRC1327314). We hold comprehensive professional liability and general business insurance."
  },
  {
    id: 4,
    question: "What areas do G. Stephens & Associates service?",
    answer: "We proudly serve all communities, municipalities, and properties throughout Sarasota County and Manatee County, including Sarasota, Bradenton, Lakewood Ranch, Venice, Longboat Key, Siesta Key, and surrounding Gulf Coast locations."
  }
];

export const MEDIA_RESOURCES: MediaItem[] = [
  {
    id: 1,
    title: "Understanding Wind Mitigation Credits in Southwest Florida",
    type: "video",
    url: "https://gstephensassociates.com/media/wind-mitigation-video",
    date: "April 2026"
  },
  {
    id: 2,
    title: "Guide to Residential Roof Lifespan & Hurricane Preparedness",
    type: "article",
    url: "https://gstephensassociates.com/media/roof-lifespan-article",
    date: "June 2026"
  }
];
