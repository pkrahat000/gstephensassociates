import React, { useState, useEffect } from 'react';
import { 
  Building, 
  Home, 
  Layers, 
  ShieldCheck, 
  FileText, 
  Award, 
  Users, 
  BookOpen, 
  Calendar, 
  Phone, 
  Mail, 
  MapPin, 
  Search, 
  ArrowRight, 
  CheckCircle2, 
  Star, 
  Menu, 
  X, 
  ChevronDown, 
  Clock, 
  HardHat, 
  ExternalLink,
  ChevronRight,
  Sparkles,
  Info
} from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  COMPANY_NAME, 
  TAGLINE, 
  LICENSE_NUMBERS, 
  GLENN_STEPHENS_BIO, 
  INSPECTION_CATEGORIES, 
  TESTIMONIALS_DATA, 
  PREFERRED_PARTNERS, 
  RECENT_EVENTS, 
  COMPANY_CONTACT_DETAILS, 
  FAQS_DATA, 
  MEDIA_RESOURCES 
} from './data';

// @ts-ignore
import picture2Image from '../assets/Images/Picture2-e1698234685883.png';
// @ts-ignore
import regeneratedImage1 from './assets/images/regenerated_image_1783353791483.jpg';
// @ts-ignore
import blackGSALogo from '../assets/Images/Black-GSA-Logo-r-1024x398.png';
// @ts-ignore
import residentialInspectionImage from '../assets/Images/20170821_180540-scaled.jpg';
// @ts-ignore
import commercialImg from '../assets/Images/20230517_092406-scaled.jpg';
// @ts-ignore
import commercialRoofImg from './assets/images/regenerated_image_1783356661390.jpg';
// @ts-ignore
import insuranceImg from './assets/images/assets/Images/Picture4-e1698234643435.png';
// @ts-ignore
import residentialRoofImg from './assets/images/regenerated_image_1783356569424.png';
// @ts-ignore
import newConstructionImg from './assets/images/assets/Images/Inspecting-Attic.png';
// @ts-ignore
import picture1Logo from '../assets/Images/Picture1-e1698234722770.png';
// @ts-ignore
import picture4Logo from '../assets/Images/Picture4-e1698234643435.png';
// @ts-ignore
import picture5Logo from '../assets/Images/Picture5-e1698234745998.png';
// @ts-ignore
import partnerLogo4 from '../assets/Images/20231108_092057-150x150.jpg';

const getPartnerLogo = (company: string) => {
  switch (company) {
    case 'Decision, Inc.':
      return picture5Logo;
    case 'Reliable Florida Home Inspections':
      return picture4Logo;
    case 'Watertite Co.':
      return picture1Logo;
    case 'Highlight Electric, Inc.':
      return partnerLogo4;
    default:
      return picture1Logo;
  }
};

const getCategoryImg = (id: string) => {
  switch (id) {
    case 'commercial-inspections':
      return commercialImg;
    case 'commercial-roof-inspections':
      return commercialRoofImg;
    case 'insurance-inspections':
      return insuranceImg;
    case 'residential-inspections':
      return residentialInspectionImage;
    case 'residential-roof-inspections':
      return residentialRoofImg;
    case 'new-construction-inspections':
      return newConstructionImg;
    default:
      return residentialInspectionImage;
  }
};

export default function App() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [faqSearch, setFaqSearch] = useState('');
  const [activeFaq, setActiveFaq] = useState<number | null>(null);
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [selectedInspection, setSelectedInspection] = useState<any>(INSPECTION_CATEGORIES[0]);
  const [testimonialIndex, setTestimonialIndex] = useState(0);

  // Contact form state
  const [formName, setFormName] = useState('');
  const [formEmail, setFormEmail] = useState('');
  const [formPhone, setFormPhone] = useState('');
  const [formSubject, setFormSubject] = useState('General Inquiry');
  const [formMessage, setFormMessage] = useState('');
  const [formSubmitted, setFormSubmitted] = useState(false);

  // Monitor scroll to trigger navbar state change
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 40) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Autoplay testimonials
  useEffect(() => {
    const interval = setInterval(() => {
      setTestimonialIndex((prev) => (prev + 1) % TESTIMONIALS_DATA.length);
    }, 8000);
    return () => clearInterval(interval);
  }, []);

  const filteredFaqs = FAQS_DATA.filter(faq => 
    faq.question.toLowerCase().includes(faqSearch.toLowerCase()) || 
    faq.answer.toLowerCase().includes(faqSearch.toLowerCase())
  );

  const handleContactSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setFormSubmitted(true);
    setTimeout(() => {
      setFormSubmitted(false);
      setFormName('');
      setFormEmail('');
      setFormPhone('');
      setFormMessage('');
    }, 4000);
  };

  return (
    <div className="relative min-h-screen bg-white selection:bg-[#D4AF37]/30 selection:text-neutral-900 overflow-x-hidden">
      {/* Top Professional Credentials Banner */}
      <div className="w-full bg-[#0B2545] border-b border-white/10 py-2 px-4 text-xs font-medium text-white/95">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row md:justify-between items-center gap-2">
          <div className="flex flex-wrap justify-center items-center gap-x-5 gap-y-1">
            <span className="inline-flex items-center gap-1.5 text-white/80 uppercase tracking-widest text-[10px] font-semibold border-r border-white/20 pr-4">
              State Credentials:
            </span>
            {LICENSE_NUMBERS.map((license) => (
              <span key={license.code} className="inline-flex items-center gap-1.5 hover:text-[#D4AF37] transition-colors">
                <span className="font-semibold text-white/70">{license.code}</span>
                <span className="text-white/40">•</span>
                <span className="text-white/90 text-[11px]">{license.name}</span>
              </span>
            ))}
          </div>
          <div className="hidden lg:flex items-center gap-4 text-[11px] text-white/80">
            <span className="inline-flex items-center gap-1">
              <Phone className="w-3.5 h-3.5 text-[#D4AF37]" />
              {COMPANY_CONTACT_DETAILS.phone}
            </span>
            <span className="text-white/20">|</span>
            <span className="inline-flex items-center gap-1">
              <Mail className="w-3.5 h-3.5 text-[#D4AF37]" />
              {COMPANY_CONTACT_DETAILS.email}
            </span>
          </div>
        </div>
      </div>

      {/* Header & Sticky Navbar */}
      <header 
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ease-in-out ${
          isScrolled 
            ? 'bg-white shadow-[0_10px_30px_rgba(0,0,0,0.08)] py-3 border-b border-gray-100' 
            : 'bg-transparent py-5'
        }`}
        style={{ top: '33px' }} // Position directly below the license bar
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            {/* Elegant Modern Logo Container */}
            <a href="#" className="group flex items-center focus:outline-none">
              <img 
                src={blackGSALogo} 
                alt="G. Stephens &amp; Associates, Inc." 
                className="h-14 md:h-[70px] w-auto object-contain"
                referrerPolicy="no-referrer"
              />
            </a>

            {/* Centered Desktop Navigation */}
            <nav className="hidden md:flex items-center gap-8">
              <a href="#" className="relative py-2 text-sm font-semibold text-[#0B2545] hover:text-[#D4AF37] transition-all group">
                Home
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-[#D4AF37] transition-all duration-300 group-hover:w-full"></span>
              </a>
              <a href="#about" className="relative py-2 text-sm font-semibold text-[#0B2545] hover:text-[#D4AF37] transition-all group">
                About Glenn
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-[#D4AF37] transition-all duration-300 group-hover:w-full"></span>
              </a>
              <a href="#inspections" className="relative py-2 text-sm font-semibold text-[#0B2545] hover:text-[#D4AF37] transition-all group">
                Inspections
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-[#D4AF37] transition-all duration-300 group-hover:w-full"></span>
              </a>
              <a href="#media" className="relative py-2 text-sm font-semibold text-[#0B2545] hover:text-[#D4AF37] transition-all group">
                Media & Resources
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-[#D4AF37] transition-all duration-300 group-hover:w-full"></span>
              </a>
              <a href="#partners" className="relative py-2 text-sm font-semibold text-[#0B2545] hover:text-[#D4AF37] transition-all group">
                Partners
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-[#D4AF37] transition-all duration-300 group-hover:w-full"></span>
              </a>
              <a href="#events" className="relative py-2 text-sm font-semibold text-[#0B2545] hover:text-[#D4AF37] transition-all group">
                Events
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-[#D4AF37] transition-all duration-300 group-hover:w-full"></span>
              </a>
            </nav>

            {/* Navbar CTA Buttons */}
            <div className="hidden md:flex items-center gap-4">
              <a 
                href="#contact" 
                className="px-5 py-2.5 bg-[#0B2545] text-white hover:bg-[#D4AF37] hover:text-[#0B2545] rounded-xl text-sm font-bold shadow-md hover:shadow-lg transition-all duration-300 transform hover:-translate-y-0.5 flex items-center gap-2"
              >
                Contact Us
                <ArrowRight className="w-4 h-4" />
              </a>
            </div>

            {/* Mobile Menu Toggle button */}
            <button 
              onClick={() => setMobileMenuOpen(true)}
              className="md:hidden p-2 text-neutral-800 hover:text-[#0B2545] transition-colors focus:outline-none"
              aria-label="Open navigation menu"
            >
              <Menu className="w-6 h-6" />
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Slide-Over Screen Blur Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-55 bg-neutral-950/80 backdrop-blur-md md:hidden"
          >
            <motion.div 
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'spring', damping: 25, stiffness: 180 }}
              className="absolute top-0 right-0 bottom-0 w-full max-w-sm bg-white p-6 shadow-2xl flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between pb-6 border-b border-gray-100">
                  <img 
                    src={blackGSALogo} 
                    alt="G. Stephens &amp; Associates, Inc." 
                    className="h-9 w-auto object-contain"
                    referrerPolicy="no-referrer"
                  />
                  <button 
                    onClick={() => setMobileMenuOpen(false)}
                    className="p-2 text-neutral-500 hover:text-neutral-900 transition-colors rounded-lg bg-gray-100"
                  >
                    <X className="w-5 h-5" />
                  </button>
                </div>

                <nav className="flex flex-col gap-5 mt-8">
                  <a 
                    href="#" 
                    onClick={() => setMobileMenuOpen(false)}
                    className="text-lg font-bold text-neutral-800 hover:text-[#0B2545] px-2 py-1 transition-colors"
                  >
                    Home
                  </a>
                  <a 
                    href="#about" 
                    onClick={() => setMobileMenuOpen(false)}
                    className="text-lg font-bold text-neutral-800 hover:text-[#0B2545] px-2 py-1 transition-colors"
                  >
                    About Glenn
                  </a>
                  <a 
                    href="#inspections" 
                    onClick={() => setMobileMenuOpen(false)}
                    className="text-lg font-bold text-neutral-800 hover:text-[#0B2545] px-2 py-1 transition-colors"
                  >
                    Inspections
                  </a>
                  <a 
                    href="#media" 
                    onClick={() => setMobileMenuOpen(false)}
                    className="text-lg font-bold text-neutral-800 hover:text-[#0B2545] px-2 py-1 transition-colors"
                  >
                    Media & Resources
                  </a>
                  <a 
                    href="#partners" 
                    onClick={() => setMobileMenuOpen(false)}
                    className="text-lg font-bold text-neutral-800 hover:text-[#0B2545] px-2 py-1 transition-colors"
                  >
                    Partners
                  </a>
                  <a 
                    href="#events" 
                    onClick={() => setMobileMenuOpen(false)}
                    className="text-lg font-bold text-neutral-800 hover:text-[#0B2545] px-2 py-1 transition-colors"
                  >
                    Events
                  </a>
                </nav>
              </div>

              <div className="pt-6 border-t border-gray-100 flex flex-col gap-4">
                <div className="text-xs text-neutral-500">
                  <p className="font-semibold text-neutral-800 mb-1">State Active Certifications:</p>
                  <p>Licensed Home Inspector HI418</p>
                  <p>Roofing Contractor CCC1329969</p>
                  <p>Residential Contractor CRC1327314</p>
                </div>
                <a 
                  href="#contact" 
                  onClick={() => setMobileMenuOpen(false)}
                  className="w-full text-center py-3 bg-[#0B2545] text-white hover:bg-[#D4AF37] hover:text-[#0B2545] rounded-xl font-bold transition-all text-sm shadow-md"
                >
                  Contact Us Now
                </a>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Cinematic Hero Section */}
      <section className="relative min-h-screen pt-36 pb-20 flex items-center bg-gradient-to-b from-[#0B2545]/5 to-white overflow-hidden">
        {/* Abstract Architectural Geometric Background Lines */}
        <div className="absolute inset-0 z-0 opacity-20 pointer-events-none">
          <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse">
                <path d="M 40 0 L 0 0 0 40" fill="none" stroke="#0B2545" strokeWidth="0.5" />
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#grid)" />
            {/* Angled architectural trusses */}
            <line x1="10%" y1="0" x2="90%" y2="100%" stroke="#0B2545" strokeWidth="1" strokeDasharray="5,5" />
            <line x1="90%" y1="0" x2="10%" y2="100%" stroke="#0B2545" strokeWidth="1" strokeDasharray="5,5" />
            <circle cx="50%" cy="50%" r="200" fill="none" stroke="#D4AF37" strokeWidth="1" strokeDasharray="10,10" />
          </svg>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Left Hero Content */}
          <div className="lg:col-span-7 flex flex-col items-start gap-6">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="inline-flex items-center gap-2 px-3 py-1 bg-[#D4AF37]/10 border border-[#D4AF37]/30 rounded-full text-[#0B2545] font-semibold text-xs tracking-wider uppercase"
            >
              <Sparkles className="w-3.5 h-3.5 text-[#D4AF37]" />
              Florida Certified Building & Roofing Experts
            </motion.div>

            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-4xl sm:text-5xl lg:text-6xl font-black text-[#0B2545] tracking-tight font-display leading-[1.1]"
            >
              Consulting, <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#D4AF37] to-[#B8972E]">Educating</span>, & <br />
              Inspections
            </motion.h1>

            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-lg md:text-xl text-neutral-600 font-medium max-w-2xl leading-relaxed"
            >
              Providing award-winning luxury-tier residential and commercial inspection audits. Driven by over 30 years of elite building contractor and roof contractor expertise in Southwest Florida.
            </motion.p>

            {/* Badges of Licenses */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="grid grid-cols-1 sm:grid-cols-3 gap-3 w-full max-w-2xl mt-2"
            >
              {LICENSE_NUMBERS.map((lic) => (
                <div key={lic.code} className="flex items-center gap-3 p-3 bg-white/60 backdrop-blur-md rounded-xl border border-gray-100 hover:border-[#D4AF37]/40 transition-all shadow-sm">
                  <div className="p-2 bg-[#0B2545]/5 text-[#0B2545] rounded-lg">
                    <CheckCircle2 className="w-4 h-4 text-[#D4AF37]" />
                  </div>
                  <div className="flex flex-col">
                    <span className="text-[10px] uppercase font-bold text-neutral-400 tracking-wider">License {lic.code}</span>
                    <span className="text-xs font-bold text-[#0B2545]">{lic.name}</span>
                  </div>
                </div>
              ))}
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="flex flex-wrap gap-4 mt-4"
            >
              <a 
                href="#contact" 
                className="px-8 py-4 bg-[#0B2545] hover:bg-[#D4AF37] text-white hover:text-[#0B2545] rounded-xl text-base font-bold shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 flex items-center gap-2"
              >
                Schedule Inspection
                <ArrowRight className="w-5 h-5" />
              </a>
              <a 
                href="#inspections" 
                className="px-8 py-4 bg-white hover:bg-neutral-50 text-neutral-800 border border-neutral-200 hover:border-neutral-300 rounded-xl text-base font-bold transition-all transform hover:-translate-y-1 flex items-center gap-2 shadow-sm"
              >
                Explore Services
              </a>
            </motion.div>

            {/* Quick Experience Trust Stat */}
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.6 }}
              className="flex items-center gap-6 mt-8 p-4 bg-white/70 backdrop-blur-md rounded-2xl border border-gray-100 w-full sm:w-auto"
            >
              <div className="flex -space-x-2">
                <div className="w-8 h-8 rounded-full bg-[#0B2545] flex items-center justify-center text-white text-[10px] font-bold">FL</div>
                <div className="w-8 h-8 rounded-full bg-[#D4AF37] flex items-center justify-center text-[#0B2545] text-[10px] font-bold">SRQ</div>
                <div className="w-8 h-8 rounded-full bg-neutral-800 flex items-center justify-center text-white text-[10px] font-bold">30+</div>
              </div>
              <div className="flex flex-col text-left">
                <div className="flex items-center gap-1">
                  <span className="text-sm font-bold text-[#0B2545]">Florida Elite Inspector Group</span>
                  <div className="flex text-[#D4AF37]">
                    <Star className="w-3.5 h-3.5 fill-current" />
                    <Star className="w-3.5 h-3.5 fill-current" />
                    <Star className="w-3.5 h-3.5 fill-current" />
                    <Star className="w-3.5 h-3.5 fill-current" />
                    <Star className="w-3.5 h-3.5 fill-current" />
                  </div>
                </div>
                <span className="text-xs text-neutral-500">100% Licensed • Sarasota & Manatee County Specialist</span>
              </div>
            </motion.div>
          </div>

          {/* Right Hero Visuals - Layered Premium Cards with real inspection photography concepts */}
          <div className="lg:col-span-5 relative mt-8 lg:mt-0">
            <div className="relative w-full max-w-lg mx-auto aspect-square">
              {/* Outer soft glowing accent */}
              <div className="absolute inset-4 rounded-[40px] bg-gradient-to-tr from-[#D4AF37]/10 to-[#0B2545]/10 blur-2xl z-0" />

              {/* Main Professional Inspector Picture Plate */}
              <div className="absolute inset-0 rounded-[32px] overflow-hidden border border-neutral-200/50 shadow-2xl z-10 bg-neutral-200">
                <img 
                  src={picture2Image} 
                  alt="Premium Florida Home Architecture & Structural Inspection"
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover"
                />
                {/* Dark overlay with linear mesh gradient */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#0B2545]/90 via-[#0B2545]/30 to-transparent" />
              </div>

              {/* Floating Real-time credential stats badge */}
              <div className="absolute -bottom-6 -left-6 bg-white rounded-2xl p-5 shadow-2xl border border-gray-100 z-20 max-w-[240px] flex items-start gap-4">
                <div className="p-3 bg-[#D4AF37]/10 text-[#D4AF37] rounded-xl">
                  <Award className="w-6 h-6" />
                </div>
                <div className="text-left">
                  <h4 className="text-2xl font-black text-[#0B2545] tracking-tight">30+</h4>
                  <p className="text-xs font-semibold text-neutral-500 uppercase tracking-wider leading-snug">Years Licensed Practice</p>
                </div>
              </div>

              {/* Floating Blueprint-style inspection area card */}
              <div className="absolute -top-6 -right-6 bg-[#0B2545] text-white rounded-2xl p-4 shadow-2xl border border-white/10 z-20 max-w-[220px] flex items-center gap-3">
                <div className="p-2.5 bg-white/10 text-[#D4AF37] rounded-xl">
                  <MapPin className="w-5 h-5" />
                </div>
                <div className="text-left">
                  <h5 className="text-xs font-bold tracking-wider text-[#D4AF37] uppercase">Coverage</h5>
                  <p className="text-xs font-semibold text-white/90">Sarasota &amp; Manatee</p>
                </div>
              </div>

              {/* Decorative engineering focus target lines */}
              <svg className="absolute -inset-10 w-[calc(100%+80px)] h-[calc(100%+80px)] pointer-events-none z-15 stroke-neutral-300/40" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M40 0h40M0 40v40" strokeWidth="1" />
                <rect x="50" y="50" width="calc(100% - 100px)" height="calc(100% - 100px)" rx="30" strokeWidth="0.5" strokeDasharray="4,4" />
              </svg>
            </div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 flex flex-col items-center gap-2 cursor-pointer z-20">
          <span className="text-[10px] font-black tracking-[0.2em] text-[#0B2545]/60 uppercase">Discover more</span>
          <div className="w-6 h-10 rounded-full border-2 border-[#0B2545]/20 flex justify-center p-1">
            <motion.div 
              animate={{ y: [0, 12, 0] }}
              transition={{ repeat: Infinity, duration: 2 }}
              className="w-1.5 h-1.5 rounded-full bg-[#D4AF37]"
            />
          </div>
        </div>
      </section>

      {/* About Section - Preserving Glenn Stephens' Bio content EXACTLY */}
      <section id="about" className="py-24 bg-white relative overflow-hidden border-t border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
            
            {/* Left Column: Portrait & Credentials Overview */}
            <div className="lg:col-span-5 relative">
              <div className="relative aspect-[3/4] max-w-sm mx-auto rounded-[32px] overflow-hidden shadow-2xl border border-gray-200 bg-neutral-100">
                {/* Fallback pattern / image */}
                <img 
                  src={regeneratedImage1} 
                  alt="Glenn Stephens - President of G. Stephens & Associates, Inc."
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover"
                />
                {/* Aesthetic gradient shield */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#0B2545]/80 via-transparent to-transparent" />
                
                {/* Floating Certificate indicator */}
                <div className="absolute bottom-6 left-6 right-6 p-4 bg-white/95 backdrop-blur-md rounded-2xl border border-gray-100 shadow-xl flex items-center gap-3">
                  <div className="p-2.5 bg-[#0B2545]/10 text-[#0B2545] rounded-xl">
                    <Award className="w-5 h-5 text-[#D4AF37]" />
                  </div>
                  <div>
                    <h5 className="text-xs font-black text-[#0B2545] uppercase tracking-wider">Licensed President</h5>
                    <p className="text-xs text-neutral-500 font-semibold">Glenn Stephens, President</p>
                  </div>
                </div>
              </div>

              {/* Decorative outline frames */}
              <div className="absolute -top-6 -left-6 w-24 h-24 border-t-2 border-l-2 border-[#D4AF37]/60 rounded-tl-[32px] pointer-events-none" />
              <div className="absolute -bottom-6 -right-6 w-24 h-24 border-b-2 border-r-2 border-[#0B2545]/30 rounded-br-[32px] pointer-events-none" />
            </div>

            {/* Right Column: Bio text block preserving every original word */}
            <div className="lg:col-span-7 flex flex-col items-start gap-6 text-left">
              <div className="inline-flex items-center gap-2 px-3 py-1 bg-[#0B2545]/5 rounded-full text-sm font-semibold text-[#0B2545]">
                <Users className="w-4 h-4 text-[#D4AF37]" />
                Executive Leadership Profile
              </div>

              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-[#0B2545] tracking-tight font-display">
                Dedicated Technical Expertise
              </h2>

              <div className="h-1 w-20 bg-[#D4AF37] rounded-full"></div>

              {/* THE ENTIRE EXACT BIO PARAGRAPH */}
              <blockquote className="text-xl md:text-2xl font-medium text-neutral-800 leading-relaxed border-l-4 border-[#D4AF37] pl-6 my-4 bg-[#D4AF37]/5 py-4 pr-4 rounded-r-2xl">
                &ldquo;{GLENN_STEPHENS_BIO}&rdquo;
              </blockquote>

              <p className="text-neutral-600 leading-relaxed text-lg">
                As a fully integrated consulting, education, and inspection firm, G. Stephens &amp; Associates, Inc.® brings dual-industry qualifications directly to your job site or prospective real estate deal. By utilizing a deep, code-expert level of building wisdom, we ensure that you remain fully protected, educated, and secure.
              </p>

              {/* Value propositions / bullet details */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 w-full mt-4">
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-[#D4AF37] shrink-0 mt-0.5" />
                  <div>
                    <h4 className="text-sm font-bold text-[#0B2545]">Unmatched Credentials</h4>
                    <p className="text-xs text-neutral-500">Dual licensed contractor &amp; state inspector.</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-[#D4AF37] shrink-0 mt-0.5" />
                  <div>
                    <h4 className="text-sm font-bold text-[#0B2545]">Local Sarasota/Manatee Expert</h4>
                    <p className="text-xs text-neutral-500">In-depth knowledge of Gulf Coast weather impacts.</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-[#D4AF37] shrink-0 mt-0.5" />
                  <div>
                    <h4 className="text-sm font-bold text-[#0B2545]">Educational Authority</h4>
                    <p className="text-xs text-neutral-500">Leading workshops on Florida building code guidelines.</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-[#D4AF37] shrink-0 mt-0.5" />
                  <div>
                    <h4 className="text-sm font-bold text-[#0B2545]">Comprehensive Inspections</h4>
                    <p className="text-xs text-neutral-500">Meticulous slope/flat roof &amp; commercial auditing.</p>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Services Section - Displaying all inspection categories beautifully with hover lifts and original data */}
      <section id="inspections" className="py-24 bg-neutral-50 relative overflow-hidden border-t border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16 text-left">
            <div className="max-w-2xl">
              <div className="inline-flex items-center gap-2 px-3 py-1 bg-[#D4AF37]/10 rounded-full text-xs font-semibold text-[#B8972E] uppercase tracking-wider mb-3">
                <Building className="w-3.5 h-3.5" />
                Professional Inspection Categories
              </div>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-[#0B2545] tracking-tight font-display">
                Types of Inspections
              </h2>
              <p className="text-neutral-600 mt-4 text-base">
                Meticulous structural assessments, roofing surveys, and building code consultations performed to the absolute highest state specifications. Click any category below to drill down into technical details.
              </p>
            </div>
            
            {/* View switcher or stat */}
            <div className="p-4 bg-white rounded-2xl shadow-sm border border-gray-200/60 flex items-center gap-3">
              <span className="w-2.5 h-2.5 rounded-full bg-[#D4AF37] animate-pulse"></span>
              <span className="text-xs font-bold text-[#0B2545] uppercase tracking-wider">
                6 Verified Services Maintained
              </span>
            </div>
          </div>

          {/* Interactive Bento Grid Layout */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {INSPECTION_CATEGORIES.map((category) => (
              <motion.div 
                key={category.id}
                whileHover={{ y: -6, scale: 1.01 }}
                className="bg-white rounded-2xl border border-neutral-200/50 hover:border-[#D4AF37]/40 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col justify-between group text-left overflow-hidden h-full"
              >
                <div className="w-full h-44 relative overflow-hidden bg-neutral-100">
                  <img 
                    src={getCategoryImg(category.id)} 
                    alt={category.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    referrerPolicy="no-referrer"
                  />
                  {/* Subtle decorative banner/badge on image if needed */}
                </div>
                
                <div className="p-8 pt-6 flex flex-col justify-between flex-grow">
                  <div>
                    <h3 className="text-xl font-bold text-[#0B2545] tracking-tight mb-3 group-hover:text-[#D4AF37] transition-colors duration-200">
                      {category.title}
                    </h3>
                    <p className="text-neutral-500 text-sm leading-relaxed mb-6">
                      {category.description}
                    </p>
                  </div>
                  
                  <div className="pt-4 border-t border-gray-50 flex items-center justify-between mt-auto">
                    <span className="text-xs font-bold text-[#0B2545]/60 group-hover:text-[#0B2545] transition-colors">
                      Sarasota / Manatee
                    </span>
                    <a 
                      href="#contact" 
                      onClick={() => {
                        setFormSubject(`Inquiry: ${category.title}`);
                        const element = document.getElementById('contact');
                        element?.scrollIntoView({ behavior: 'smooth' });
                      }}
                      className="inline-flex items-center gap-1.5 text-xs font-bold text-[#0B2545] hover:text-[#D4AF37] transition-colors"
                    >
                      Inquire Service
                      <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-1" />
                    </a>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

        </div>
      </section>

      {/* Featured Educational Focus and Code Compliance Showcase */}
      <section className="py-24 bg-[#0B2545] text-white relative overflow-hidden">
        {/* Architect blueprint grid overlay */}
        <div className="absolute inset-0 opacity-10 pointer-events-none">
          <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <pattern id="grid-dark" width="60" height="60" patternUnits="userSpaceOnUse">
                <path d="M 60 0 L 0 0 0 60" fill="none" stroke="#ffffff" strokeWidth="0.5" />
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#grid-dark)" />
          </svg>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
            
            {/* Left side: Technical values list */}
            <div className="lg:col-span-7 text-left flex flex-col items-start gap-6">
              <span className="px-3 py-1 bg-white/10 border border-white/20 rounded-full text-[#D4AF37] font-semibold text-xs tracking-wider uppercase">
                Industry-Leading Standard Certification
              </span>
              
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight font-display text-white">
                Dual Licensed Authority: <br />
                <span className="text-[#D4AF37]">Building &amp; Roofing Contractor</span>
              </h2>

              <p className="text-white/80 text-lg leading-relaxed max-w-2xl">
                Unlike general home inspectors, G. Stephens &amp; Associates, Inc.® holds active primary builder licenses (CRC1327314) and roofing contractor licenses (CCC1329969) in Florida. This means our reviews are not simple checklist assessments, but true technical audits driven by deep execution knowledge.
              </p>

              {/* Feature metrics */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 w-full mt-4">
                <div className="p-5 bg-white/5 rounded-2xl border border-white/10 text-left">
                  <div className="text-3xl font-black text-[#D4AF37] mb-1">100%</div>
                  <p className="text-xs font-bold uppercase tracking-wider text-white/70">Florida Code Compliant</p>
                </div>
                <div className="p-5 bg-white/5 rounded-2xl border border-white/10 text-left">
                  <div className="text-3xl font-black text-[#D4AF37] mb-1">30+ Yrs</div>
                  <p className="text-xs font-bold uppercase tracking-wider text-white/70">Southwest Florida Resident</p>
                </div>
                <div className="p-5 bg-white/5 rounded-2xl border border-white/10 text-left">
                  <div className="text-3xl font-black text-[#D4AF37] mb-1">HI418</div>
                  <p className="text-xs font-bold uppercase tracking-wider text-white/70">Licensed Home Inspector</p>
                </div>
              </div>
            </div>

            {/* Right side: Interactive Showcase visual card */}
            <div className="lg:col-span-5">
              <div className="bg-white text-neutral-900 rounded-[32px] p-8 border border-white/10 shadow-2xl relative">
                <div className="absolute top-4 right-4 text-xs font-bold tracking-widest text-[#D4AF37] uppercase bg-[#0B2545] py-1 px-2.5 rounded">
                  CODE EXPERT
                </div>
                
                <h4 className="text-xl font-bold text-[#0B2545] tracking-tight mb-4 flex items-center gap-2">
                  <Award className="w-5 h-5 text-[#D4AF37]" />
                  Florida Building Code Seminars
                </h4>

                <p className="text-sm text-neutral-600 leading-relaxed mb-6">
                  Glenn Stephens routinely trains active property adjusters, legal consultants, and building personnel on roof durability patterns, wind-load mitigations, and Southwest Florida structural design requirements.
                </p>

                <div className="space-y-4">
                  <div className="p-4 bg-neutral-50 rounded-xl border border-neutral-100 flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-[#D4AF37] shrink-0 mt-0.5" />
                    <div>
                      <h5 className="text-xs font-bold text-[#0B2545] uppercase tracking-wider">Consulting</h5>
                      <p className="text-xs text-neutral-500">Expert-witness services and litigation support.</p>
                    </div>
                  </div>
                  <div className="p-4 bg-neutral-50 rounded-xl border border-neutral-100 flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-[#D4AF37] shrink-0 mt-0.5" />
                    <div>
                      <h5 className="text-xs font-bold text-[#0B2545] uppercase tracking-wider">Educating</h5>
                      <p className="text-xs text-neutral-500">Accredited educational seminars on Florida codes.</p>
                    </div>
                  </div>
                </div>

                <div className="mt-6 pt-6 border-t border-gray-100 text-center">
                  <a 
                    href="#contact" 
                    className="inline-flex items-center gap-2 text-sm font-bold text-[#0B2545] hover:text-[#D4AF37] transition-colors"
                  >
                    Request Professional Consulting
                    <ArrowRight className="w-4 h-4" />
                  </a>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Media & Resources Section - Display original media content */}
      <section id="media" className="py-24 bg-white relative overflow-hidden border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-left">
          
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16">
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1 bg-[#0B2545]/5 rounded-full text-xs font-semibold text-[#0B2545] uppercase tracking-wider mb-3">
                <FileText className="w-3.5 h-3.5 text-[#D4AF37]" />
                Media Center &amp; Publications
              </div>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-[#0B2545] tracking-tight font-display">
                Original Publications &amp; Media
              </h2>
              <p className="text-neutral-500 mt-4 max-w-2xl text-base">
                Explore real, detailed educational guidelines written directly by Glenn Stephens. Our focus is keeping property owners fully informed.
              </p>
            </div>
            <a 
              href="#contact" 
              className="inline-flex items-center gap-2 text-sm font-bold text-[#0B2545] hover:text-[#D4AF37] transition-all bg-[#D4AF37]/10 py-2.5 px-5 rounded-xl border border-[#D4AF37]/20"
            >
              Request Custom Guide
              <ArrowRight className="w-4 h-4" />
            </a>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {MEDIA_RESOURCES.map((item) => (
              <div 
                key={item.id} 
                className="bg-neutral-50 rounded-[24px] p-8 border border-neutral-200/50 hover:border-[#D4AF37]/30 transition-all shadow-sm hover:shadow-md flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-[10px] font-bold text-[#D4AF37] uppercase tracking-widest bg-[#0B2545] px-2.5 py-1 rounded">
                      {item.type}
                    </span>
                    <span className="text-xs text-neutral-400 font-semibold">{item.date}</span>
                  </div>
                  <h3 className="text-xl font-bold text-[#0B2545] tracking-tight mb-4">
                    {item.title}
                  </h3>
                  <p className="text-sm text-neutral-500 leading-relaxed mb-6">
                    A comprehensive, deep-dive examination analyzing state-level regulatory protocols, mitigation features, and structural compliance updates that directly protect Florida Gulf Coast homes.
                  </p>
                </div>
                <div className="pt-4 border-t border-neutral-200/40 flex items-center justify-between">
                  <span className="text-xs text-neutral-400 font-medium">Author: Glenn Stephens</span>
                  <a 
                    href={item.url} 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="inline-flex items-center gap-1.5 text-xs font-bold text-[#0B2545] hover:text-[#D4AF37] transition-colors"
                  >
                    View Document
                    <ExternalLink className="w-3.5 h-3.5" />
                  </a>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* Preferred Partners Section - Preserving original partner connections */}
      <section id="partners" className="py-20 bg-neutral-50 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <div className="max-w-3xl mx-auto mb-12">
            <span className="text-xs font-black tracking-[0.25em] text-[#D4AF37] uppercase">AFFILIATIONS &amp; CERTIFICATIONS</span>
            <h2 className="text-3xl sm:text-4xl font-black text-[#0B2545] tracking-tight font-display mt-2">
              Preferred Industry Partners
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {PREFERRED_PARTNERS.map((partner, index) => (
              <div 
                key={index} 
                className="bg-white rounded-2xl border border-gray-200/60 shadow-sm flex flex-col hover:border-[#D4AF37]/50 transition-all overflow-hidden h-full group text-left"
              >
                <div className="w-full h-40 relative overflow-hidden bg-white border-b border-gray-100 flex items-center justify-center p-6">
                  <img 
                    src={getPartnerLogo(partner.company)} 
                    alt={partner.company}
                    className="max-h-24 max-w-[85%] object-contain group-hover:scale-105 transition-transform duration-500"
                    referrerPolicy="no-referrer"
                  />
                </div>
                <div className="p-6 flex flex-col flex-grow">
                  <span className="text-[10px] font-black tracking-widest text-[#D4AF37] uppercase mb-1">
                    {partner.category}
                  </span>
                  <h4 className="text-base font-black text-[#0B2545] tracking-tight font-display mb-3">
                    {partner.company}
                  </h4>
                  
                  <div className="mt-auto space-y-1.5 pt-3 border-t border-gray-50">
                    {partner.contact && (
                      <div className="flex items-center gap-1.5 text-xs text-neutral-500 font-semibold">
                        <Users className="w-3.5 h-3.5 text-[#0B2545]/50 shrink-0" />
                        <span>{partner.contact}</span>
                      </div>
                    )}
                    <div className="flex items-center gap-1.5 text-xs text-neutral-500 font-semibold">
                      <Phone className="w-3.5 h-3.5 text-[#0B2545]/50 shrink-0" />
                      <a href={`tel:${partner.phone}`} className="hover:text-[#D4AF37] transition-colors">
                        {partner.phone}
                      </a>
                    </div>
                    <div className="flex items-center gap-1.5 text-xs text-neutral-500 font-semibold break-all">
                      <Mail className="w-3.5 h-3.5 text-[#0B2545]/50 shrink-0" />
                      <a href={`mailto:${partner.email}`} className="hover:text-[#D4AF37] transition-colors">
                        {partner.email}
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials - Glassmorphism, 5-star, Google Badge slider */}
      <section className="py-24 bg-white relative overflow-hidden border-t border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          
          <div className="text-center max-w-2xl mx-auto mb-16">
            <span className="px-3 py-1 bg-[#D4AF37]/10 rounded-full text-[#B8972E] font-semibold text-xs tracking-wider uppercase inline-flex items-center gap-1.5">
              <Star className="w-3.5 h-3.5 fill-current" />
              100% Client Satisfaction
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-[#0B2545] tracking-tight font-display mt-4">
              Real Customer Feedback
            </h2>
          </div>

          {/* Glassmorphism Slider Panel */}
          <div className="max-w-4xl mx-auto relative">
            <div className="bg-gradient-to-tr from-[#0B2545] to-[#123C69] text-white rounded-[32px] p-8 md:p-12 shadow-2xl relative overflow-hidden">
              
              {/* Decorative Quotation graphic */}
              <div className="absolute -top-10 -right-10 text-white/5 font-serif text-[240px] pointer-events-none select-none">
                &ldquo;
              </div>

              <div className="relative z-10 flex flex-col gap-6 text-left">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2 px-3 py-1 bg-white/10 rounded-lg text-xs font-bold text-[#D4AF37]">
                    <Star className="w-3.5 h-3.5 fill-current" />
                    <span>5.0 Rating</span>
                  </div>
                  <span className="text-xs text-white/60 font-semibold uppercase tracking-widest bg-white/10 px-2.5 py-1 rounded">
                    {TESTIMONIALS_DATA[testimonialIndex].source}
                  </span>
                </div>

                <p className="text-lg md:text-xl font-medium text-white/95 leading-relaxed italic">
                  &ldquo;{TESTIMONIALS_DATA[testimonialIndex].text}&rdquo;
                </p>

                <div className="pt-6 border-t border-white/10 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-[#D4AF37]/20 border border-[#D4AF37]/55 flex items-center justify-center font-bold text-[#D4AF37]">
                      {TESTIMONIALS_DATA[testimonialIndex].name.substring(0, 2)}
                    </div>
                    <div>
                      <h4 className="text-base font-bold text-white">{TESTIMONIALS_DATA[testimonialIndex].name}</h4>
                      <p className="text-xs text-white/60">{TESTIMONIALS_DATA[testimonialIndex].role}</p>
                    </div>
                  </div>
                  
                  {/* Pagination Indicators */}
                  <div className="flex items-center gap-2">
                    {TESTIMONIALS_DATA.map((_, idx) => (
                      <button 
                        key={idx}
                        onClick={() => setTestimonialIndex(idx)}
                        className={`w-2.5 h-2.5 rounded-full transition-all duration-300 ${idx === testimonialIndex ? 'bg-[#D4AF37] w-6' : 'bg-white/30 hover:bg-white/50'}`}
                        aria-label={`Go to testimonial ${idx + 1}`}
                      />
                    ))}
                  </div>
                </div>
              </div>

            </div>
          </div>

        </div>
      </section>

      {/* Events Section - Preserving scheduled local event timelines */}
      <section id="events" className="py-24 bg-neutral-50 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-left">
          
          <div className="max-w-2xl mb-16">
            <span className="text-xs font-black tracking-widest text-[#D4AF37] uppercase">COMMUNITY OUTREACH &amp; WORKSHOPS</span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-[#0B2545] tracking-tight font-display mt-2">
              Recent &amp; Upcoming Events
            </h2>
            <p className="text-neutral-500 mt-4 text-base">
              Accredited educational seminars covering Florida structural compliance, windstorm evaluations, and roofing certifications. Join us in raising state-level property awareness.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {RECENT_EVENTS.map((event) => (
              <div 
                key={event.id} 
                className="bg-white rounded-[24px] p-8 border border-neutral-200/50 shadow-sm flex flex-col justify-between text-left"
              >
                <div>
                  <div className="flex items-center gap-4 mb-4">
                    <div className="px-3 py-1 bg-[#0B2545]/5 text-[#0B2545] text-xs font-bold rounded-lg flex items-center gap-1.5">
                      <Calendar className="w-3.5 h-3.5 text-[#D4AF37]" />
                      {event.date}
                    </div>
                    <div className="px-3 py-1 bg-[#D4AF37]/10 text-[#0B2545] text-xs font-bold rounded-lg flex items-center gap-1.5">
                      <MapPin className="w-3.5 h-3.5 text-[#D4AF37]" />
                      {event.location}
                    </div>
                  </div>
                  
                  <h3 className="text-xl font-bold text-[#0B2545] tracking-tight mb-3">
                    {event.title}
                  </h3>
                  
                  <p className="text-sm text-neutral-500 leading-relaxed">
                    {event.description}
                  </p>
                </div>
                
                <div className="mt-6 pt-4 border-t border-neutral-100 flex justify-between items-center">
                  <span className="text-xs text-neutral-400 font-semibold">Led by: Glenn Stephens, President</span>
                  <a 
                    href="#contact" 
                    onClick={() => {
                      setFormSubject(`RSVP/Inquiry: ${event.title}`);
                      const el = document.getElementById('contact');
                      el?.scrollIntoView({ behavior: 'smooth' });
                    }}
                    className="inline-flex items-center gap-1.5 text-xs font-bold text-[#0B2545] hover:text-[#D4AF37] transition-colors"
                  >
                    Register / RSVP
                    <ArrowRight className="w-3.5 h-3.5" />
                  </a>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* Professional Accordion FAQ Section */}
      <section className="py-24 bg-white relative overflow-hidden border-t border-b border-gray-100">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 relative z-10 text-left">
          
          <div className="text-center max-w-2xl mx-auto mb-12">
            <span className="text-xs font-black tracking-widest text-[#D4AF37] uppercase">TECHNICAL ASSISTANCE</span>
            <h2 className="text-3xl sm:text-4xl font-black text-[#0B2545] tracking-tight font-display mt-2">
              Frequently Asked Questions
            </h2>
          </div>

          {/* Interactive Search Capable Filter */}
          <div className="relative mb-8 max-w-md mx-auto">
            <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-neutral-400">
              <Search className="w-5 h-5" />
            </div>
            <input 
              type="text"
              placeholder="Search general inspection questions..."
              value={faqSearch}
              onChange={(e) => setFaqSearch(e.target.value)}
              className="w-full pl-11 pr-4 py-3 bg-neutral-50 border border-neutral-200 focus:border-[#D4AF37] focus:ring-1 focus:ring-[#D4AF37] rounded-xl text-sm focus:outline-none transition-all placeholder:text-neutral-400 font-medium"
            />
          </div>

          <div className="space-y-4">
            {filteredFaqs.map((faq, index) => {
              const isOpen = activeFaq === faq.id;
              return (
                <div 
                  key={faq.id} 
                  className="bg-neutral-50 rounded-2xl border border-neutral-200/50 overflow-hidden transition-all"
                >
                  <button 
                    onClick={() => setActiveFaq(isOpen ? null : faq.id)}
                    className="w-full px-6 py-5 flex items-center justify-between text-left focus:outline-none gap-4"
                  >
                    <span className="font-bold text-[#0B2545] text-base md:text-lg leading-snug">
                      {faq.question}
                    </span>
                    <div className={`p-2 rounded-lg bg-white shadow-sm transition-transform duration-300 ${isOpen ? 'rotate-180 text-[#D4AF37]' : 'text-neutral-400'}`}>
                      <ChevronDown className="w-4 h-4" />
                    </div>
                  </button>
                  
                  <AnimatePresence>
                    {isOpen && (
                      <motion.div 
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: 'auto', opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.25 }}
                      >
                        <div className="px-6 pb-6 pt-2 text-neutral-600 text-sm md:text-base leading-relaxed border-t border-neutral-100/50 bg-white">
                          {faq.answer}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              );
            })}

            {filteredFaqs.length === 0 && (
              <div className="p-8 text-center text-neutral-400">
                <Info className="w-8 h-8 mx-auto text-[#D4AF37] mb-2" />
                No matching inspection topics found. Please type another question or contact us directly.
              </div>
            )}
          </div>

        </div>
      </section>

      {/* Two-Column Premium Contact & Map Form */}
      <section id="contact" className="py-24 bg-neutral-50 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-start text-left">
            
            {/* Left Column: Details panel */}
            <div className="lg:col-span-5 flex flex-col items-start gap-6">
              <span className="px-3 py-1 bg-[#D4AF37]/10 rounded-full text-xs font-semibold text-[#B8972E] uppercase tracking-wider">
                GET IN TOUCH
              </span>
              
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-[#0B2545] tracking-tight font-display">
                Request An Inspection
              </h2>

              <p className="text-neutral-500 text-base leading-relaxed">
                Connect directly with our Sarasota office to obtain a flat roof evaluation, code compliance consultation, residential inspection, or detailed insurance mitigation audit.
              </p>

              {/* Direct Details list */}
              <div className="space-y-6 w-full mt-4">
                <div className="flex items-start gap-4">
                  <div className="p-3 bg-white rounded-xl shadow-sm text-[#D4AF37] border border-neutral-200/50">
                    <Phone className="w-5 h-5" />
                  </div>
                  <div>
                    <h5 className="text-[10px] font-black uppercase text-neutral-400 tracking-wider">Office Telephone</h5>
                    <p className="text-lg font-black text-[#0B2545]">{COMPANY_CONTACT_DETAILS.phone}</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="p-3 bg-white rounded-xl shadow-sm text-[#D4AF37] border border-neutral-200/50">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div>
                    <h5 className="text-[10px] font-black uppercase text-neutral-400 tracking-wider">Corporate Email</h5>
                    <p className="text-base font-bold text-[#0B2545] hover:text-[#D4AF37] transition-colors">{COMPANY_CONTACT_DETAILS.email}</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="p-3 bg-white rounded-xl shadow-sm text-[#D4AF37] border border-neutral-200/50">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <div>
                    <h5 className="text-[10px] font-black uppercase text-neutral-400 tracking-wider">Primary Service Location</h5>
                    <p className="text-sm font-semibold text-neutral-700">{COMPANY_CONTACT_DETAILS.address}</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="p-3 bg-white rounded-xl shadow-sm text-[#D4AF37] border border-neutral-200/50">
                    <Clock className="w-5 h-5" />
                  </div>
                  <div>
                    <h5 className="text-[10px] font-black uppercase text-neutral-400 tracking-wider">Business Operating Hours</h5>
                    <p className="text-xs font-semibold text-neutral-600 leading-snug">{COMPANY_CONTACT_DETAILS.officeHours}</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Column: Interactive clean input form fields */}
            <div className="lg:col-span-7 w-full">
              <div className="bg-white rounded-3xl p-8 md:p-10 border border-neutral-200/50 shadow-xl">
                <h4 className="text-xl font-bold text-[#0B2545] tracking-tight mb-2">Send Secure Message</h4>
                <p className="text-xs text-neutral-400 font-semibold mb-8">All fields are monitored daily. Average response time is under 2 hours during normal business operating hours.</p>

                {formSubmitted ? (
                  <motion.div 
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="p-8 text-center bg-emerald-50 border border-emerald-100 rounded-2xl flex flex-col items-center gap-4"
                  >
                    <CheckCircle2 className="w-12 h-12 text-emerald-500" />
                    <div>
                      <h4 className="text-lg font-bold text-emerald-800">Request Received Successfully</h4>
                      <p className="text-xs text-emerald-600 mt-1">Thank you, {formName}. Glenn Stephens or an office associate will contact you shortly.</p>
                    </div>
                  </motion.div>
                ) : (
                  <form onSubmit={handleContactSubmit} className="space-y-6">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                      <div className="flex flex-col gap-2">
                        <label className="text-xs font-black uppercase text-neutral-400 tracking-wider">Full Name</label>
                        <input 
                          type="text"
                          required
                          value={formName}
                          onChange={(e) => setFormName(e.target.value)}
                          placeholder="Glenn Stephens"
                          className="w-full px-4 py-3 bg-neutral-50 border border-neutral-200 focus:border-[#D4AF37] focus:ring-1 focus:ring-[#D4AF37] rounded-xl text-sm focus:outline-none transition-all placeholder:text-neutral-400 font-medium"
                        />
                      </div>
                      <div className="flex flex-col gap-2">
                        <label className="text-xs font-black uppercase text-neutral-400 tracking-wider">Email Address</label>
                        <input 
                          type="email"
                          required
                          value={formEmail}
                          onChange={(e) => setFormEmail(e.target.value)}
                          placeholder="gstephens@associates.com"
                          className="w-full px-4 py-3 bg-neutral-50 border border-neutral-200 focus:border-[#D4AF37] focus:ring-1 focus:ring-[#D4AF37] rounded-xl text-sm focus:outline-none transition-all placeholder:text-neutral-400 font-medium"
                        />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                      <div className="flex flex-col gap-2">
                        <label className="text-xs font-black uppercase text-neutral-400 tracking-wider">Phone Number</label>
                        <input 
                          type="tel"
                          required
                          value={formPhone}
                          onChange={(e) => setFormPhone(e.target.value)}
                          placeholder="(941) 914-1204"
                          className="w-full px-4 py-3 bg-neutral-50 border border-neutral-200 focus:border-[#D4AF37] focus:ring-1 focus:ring-[#D4AF37] rounded-xl text-sm focus:outline-none transition-all placeholder:text-neutral-400 font-medium"
                        />
                      </div>
                      <div className="flex flex-col gap-2">
                        <label className="text-xs font-black uppercase text-neutral-400 tracking-wider">Service Requested</label>
                        <select 
                          value={formSubject}
                          onChange={(e) => setFormSubject(e.target.value)}
                          className="w-full px-4 py-3 bg-neutral-50 border border-neutral-200 focus:border-[#D4AF37] focus:ring-1 focus:ring-[#D4AF37] rounded-xl text-sm focus:outline-none transition-all font-medium"
                        >
                          <option value="General Inquiry">General Inquiry</option>
                          <option value="Residential Home Inspection">Residential Home Inspection</option>
                          <option value="Phase Construction Audit">Phase Construction Audit</option>
                          <option value="Commercial Condition Assessment">Commercial Condition Assessment</option>
                          <option value="Slope/Flat Roof evaluation">Slope/Flat Roof evaluation</option>
                          <option value="Wind Mitigation / Insurance Credits">Wind Mitigation / Insurance Credits</option>
                          <option value="Code Seminar / Educational Class">Code Seminar / Educational Class</option>
                        </select>
                      </div>
                    </div>

                    <div className="flex flex-col gap-2">
                      <label className="text-xs font-black uppercase text-neutral-400 tracking-wider">Detailed Message</label>
                      <textarea 
                        rows={4}
                        required
                        value={formMessage}
                        onChange={(e) => setFormMessage(e.target.value)}
                        placeholder="Detail your request, property location, timeline constraints..."
                        className="w-full px-4 py-3 bg-neutral-50 border border-neutral-200 focus:border-[#D4AF37] focus:ring-1 focus:ring-[#D4AF37] rounded-xl text-sm focus:outline-none transition-all placeholder:text-neutral-400 font-medium resize-none"
                      />
                    </div>

                    <button 
                      type="submit"
                      className="w-full py-4 bg-[#0B2545] hover:bg-[#D4AF37] text-white hover:text-[#0B2545] rounded-xl text-sm font-bold shadow-md hover:shadow-lg transition-all duration-300 transform hover:-translate-y-0.5 flex items-center justify-center gap-2"
                    >
                      Submit Booking Inquiry
                      <ArrowRight className="w-4 h-4" />
                    </button>
                  </form>
                )}
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Elegant Dark Multi-Column Footer with Licenses & Legal structure */}
      <footer className="bg-[#0B2545] text-white pt-16 pb-8 border-t border-white/10 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 text-left pb-12 border-b border-white/10">
            {/* Column 1: Company Logo / Bio statement */}
            <div className="flex flex-col gap-4">
              <div className="bg-white p-3.5 rounded-xl inline-block w-fit max-w-[280px]">
                <img 
                  src={blackGSALogo} 
                  alt="G. Stephens &amp; Associates, Inc." 
                  className="h-14 md:h-16 w-auto object-contain"
                  referrerPolicy="no-referrer"
                />
              </div>
              <p className="text-xs text-white/60 leading-relaxed mt-2">
                Delivering high-end building code audits, residential/commercial inspections, and expert windstorm mitigations in Southwest Florida Gulf Coast since 1996.
              </p>
              
              {/* Credentials quick view */}
              <div className="flex flex-wrap gap-2 mt-2">
                <span className="text-[10px] font-bold text-white bg-white/10 py-1 px-2.5 rounded">HI418</span>
                <span className="text-[10px] font-bold text-white bg-white/10 py-1 px-2.5 rounded">CCC1329969</span>
                <span className="text-[10px] font-bold text-white bg-white/10 py-1 px-2.5 rounded">CRC1327314</span>
              </div>
            </div>

            {/* Column 2: Quick Links */}
            <div>
              <h5 className="text-xs font-black uppercase text-white/50 tracking-widest mb-4">Quick Navigation</h5>
              <ul className="space-y-2.5 text-xs text-white/80">
                <li><a href="#" className="hover:text-[#D4AF37] transition-colors">Home Page</a></li>
                <li><a href="#about" className="hover:text-[#D4AF37] transition-colors">Glenn Stephens Bio</a></li>
                <li><a href="#inspections" className="hover:text-[#D4AF37] transition-colors">Inspection Types</a></li>
                <li><a href="#media" className="hover:text-[#D4AF37] transition-colors">Publications &amp; Resources</a></li>
                <li><a href="#events" className="hover:text-[#D4AF37] transition-colors">Outreach Seminars</a></li>
              </ul>
            </div>

            {/* Column 3: Category services list */}
            <div>
              <h5 className="text-xs font-black uppercase text-white/50 tracking-widest mb-4">Core Services</h5>
              <ul className="space-y-2.5 text-xs text-white/80">
                <li><a href="#inspections" className="hover:text-[#D4AF37] transition-colors">New Construction</a></li>
                <li><a href="#inspections" className="hover:text-[#D4AF37] transition-colors">Phase Inspections</a></li>
                <li><a href="#inspections" className="hover:text-[#D4AF37] transition-colors">Residential Inspections</a></li>
                <li><a href="#inspections" className="hover:text-[#D4AF37] transition-colors">Commercial Inspections</a></li>
                <li><a href="#inspections" className="hover:text-[#D4AF37] transition-colors">Wind Mitigation Audit</a></li>
              </ul>
            </div>

            {/* Column 4: Contact links */}
            <div>
              <h5 className="text-xs font-black uppercase text-white/50 tracking-widest mb-4">Office Contact</h5>
              <ul className="space-y-3 text-xs text-white/80">
                <li className="flex items-center gap-2">
                  <Phone className="w-4 h-4 text-[#D4AF37]" />
                  <span>{COMPANY_CONTACT_DETAILS.phone}</span>
                </li>
                <li className="flex items-center gap-2">
                  <Mail className="w-4 h-4 text-[#D4AF37]" />
                  <span className="break-all">{COMPANY_CONTACT_DETAILS.email}</span>
                </li>
                <li className="flex items-center gap-2">
                  <MapPin className="w-4 h-4 text-[#D4AF37]" />
                  <span>Sarasota / Manatee Counties</span>
                </li>
              </ul>
            </div>
          </div>

          {/* Lower Legal Frame */}
          <div className="pt-8 flex flex-col md:flex-row md:justify-between items-center gap-4 text-[10px] text-white/40 font-bold uppercase tracking-widest text-center md:text-left">
            <div>
              <p>&copy; {new Date().getFullYear()} {COMPANY_NAME} All Rights Reserved.</p>
              <p className="mt-1">HI418 • CCC1329969 • CRC1327314</p>
            </div>
            <div className="flex gap-4">
              <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
              <span>•</span>
              <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
              <span>•</span>
              <a href="#" className="hover:text-white transition-colors">Site Map</a>
            </div>
          </div>

        </div>
      </footer>
    </div>
  );
}
