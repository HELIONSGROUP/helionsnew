/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import {
  Phone,
  Mail,
  MapPin,
  Clock,
  CheckCircle,
  X,
  Menu,
  ChevronRight,
  ArrowRight,
  Calendar,
  Send,
  ExternalLink,
  BookOpen,
  Briefcase,
  Award,
  Sparkles,
  MessageSquare
} from 'lucide-react';

interface ServiceItem {
  id: string;
  title: string;
  description: string;
  image: string;
  category: 'consulting' | 'finance' | 'operations' | 'marketing';
  highlights: string[];
}

interface CourseItem {
  id: string;
  title: string;
  image: string;
  category: string;
  duration: string;
  description: string;
  courses: string[];
  intakeSchedule: string;
}

const SERVICES: ServiceItem[] = [
  {
    id: 'business-consulting',
    title: 'Business Consulting',
    description:
      'Strategic planning, robust financial modeling, and targeted performance improvements to optimize operations and scale your business with confidence.',
    image: '/resources/90IwuqLNL5Tb_khbxTg4IH.jpg',
    category: 'consulting',
    highlights: [
      'Comprehensive strategic roadmaps for market growth',
      'Operational workflow auditing & bottleneck reduction',
      'Scalable SME governance & organizational design',
      'Feasibility studies & venture capital readiness'
    ]
  },
  {
    id: 'accounting-tax',
    title: 'Accounting, Finance & Tax Advisory',
    description:
      'Navigate ZIMRA compliance, optimize cash flow, and deliver precise financial reporting so you can focus on driving growth with total financial clarity.',
    image: '/resources/aXFGXbILPUr5SYd7kM64Sd.jpg',
    category: 'finance',
    highlights: [
      'ZIMRA tax clearance, VAT, PAYE & QPD returns filing',
      'Complete cloud bookkeeping with Sage Pastel & QuickBooks',
      'Management accounts, auditing prep & balance sheet health',
      'Cash flow forecasting and capital expenditure modeling'
    ]
  },
  {
    id: 'hr-consulting',
    title: 'HR Consulting',
    description:
      'Engineer dynamic talent strategies to attract top professionals, foster engagement, and build resilient, high-performing teams that drive your organization forward.',
    image: '/resources/97fucq-X-ib9XAroRPakw3.jpg',
    category: 'operations',
    highlights: [
      'Talent recruitment, screening & on-boarding protocols',
      'Performance appraisal systems & KPI tracking',
      'Labor law compliance & employee code of conduct',
      'Executive coaching & organizational restructuring'
    ]
  },
  {
    id: 'marketing-consulting',
    title: 'Marketing Consulting',
    description:
      'Bridge the critical gap between high-level brand strategy and practical execution. We ensure your messaging resonates, engages, and converts your target B2B audience.',
    image: '/resources/8IHvGSK58CV2e57xYBw4XP.jpg',
    category: 'marketing',
    highlights: [
      'Brand positioning & market penetration roadmaps',
      'Digital campaign design, lead funnels & ROI analytics',
      'Corporate collateral & high-conversion sales decks',
      'Content strategy & multi-channel social growth'
    ]
  },
  {
    id: 'virtual-assistant',
    title: 'Virtual Assistant Services',
    description:
      'Flexible, cost-effective administrative support tailored for busy entrepreneurs. We handle the operational details, allowing you to reclaim your time and focus on leadership.',
    image: '/resources/9D9LaTLZIMX36ta4nfZ4sw.jpg',
    category: 'operations',
    highlights: [
      'Executive schedule, calendar & email inbox management',
      'Client liaison, quotation drafting & customer support',
      'Data entry, digital document archiving & spreadsheet audits',
      'Meeting minutes, travel arrangements & procurement support'
    ]
  }
];

const COURSES: CourseItem[] = [
  {
    id: 'accounting-finance',
    title: 'Accounting & Finance',
    image: '/resources/8vL0zmkmNGacgbGfq2H_AB.jpg',
    category: 'Finance & Compliance',
    duration: '4 - 8 Weeks',
    intakeSchedule: 'Bi-monthly Intakes (Weekend & Evening)',
    description:
      'Master essential accounting principles, tax compliance, and modern bookkeeping software tools to manage SME books or elevate your professional career.',
    courses: [
      'Tax & Administration',
      'QuickBooks Accounting',
      'Sage Pastel',
      'Microsoft Excel for Accountants'
    ]
  },
  {
    id: 'digital-productivity',
    title: 'Digital Productivity',
    image: '/resources/bH9hv-RMok4aioDO-vGOWk.jpg',
    category: 'Technology & AI',
    duration: '3 - 6 Weeks',
    intakeSchedule: 'Monthly Intakes (Flexible Online/Hybrid)',
    description:
      'Learn modern digital systems, cloud automation, and AI workflows that multiply team output and unlock freelance opportunities.',
    courses: [
      'Google Workspace',
      'Generative AI Efficiency',
      'Virtual Assistant Training',
      'Google Sheets'
    ]
  },
  {
    id: 'growth-marketing',
    title: 'Growth & Marketing',
    image: '/resources/br1arfM9Pi88a3WzKx1OOa.jpg',
    category: 'Creative & Commercial',
    duration: '4 - 6 Weeks',
    intakeSchedule: 'Monthly Intakes (Hands-on Practical)',
    description:
      'Acquire hands-on creative design and high-converting performance marketing capabilities to launch brands and scale customer acquisition.',
    courses: [
      'Digital Marketing',
      'Graphic Designing'
    ]
  },
  {
    id: 'professional-development',
    title: 'Professional Development',
    image: '/resources/a9n_W-IJaxzcCdxgDAP_CL.jpg',
    category: 'Leadership & People',
    duration: '3 - 6 Weeks',
    intakeSchedule: 'Quarterly Executive Bootcamps',
    description:
      'Upskill your managerial, human resource, and operational execution capabilities with industry-standard Excel modeling and personnel frameworks.',
    courses: [
      'HR Strategy & Management',
      'Microsoft Excel for HR Professionals',
      'Microsoft Excel for Admin Assistants'
    ]
  }
];

const CORE_VALUES = [
  {
    name: 'Innovation',
    description: 'Pioneering practical, forward-looking methodologies and AI-augmented tools for modern business problems.'
  },
  {
    name: 'Integrity',
    description: 'Uncompromising transparency, fiduciary accountability, and ethical governance in every engagement.'
  },
  {
    name: 'Excellence',
    description: 'Delivering world-class execution standards with deep local market contextual intelligence.'
  },
  {
    name: 'Collaboration',
    description: 'Forging enduring partnerships that unify leadership, staff, and external stakeholders towards shared victories.'
  },
  {
    name: 'Sustainability',
    description: 'Designing resilient business models and financial foundations structured for lasting generational growth.'
  }
];

export default function App() {
  const [activeSection, setActiveSection] = useState('home');
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  // Booking Modal State
  const [bookingModalOpen, setBookingModalOpen] = useState(false);
  const [bookingType, setBookingType] = useState<'appointment' | 'intake' | 'order'>('appointment');
  const [selectedSubject, setSelectedSubject] = useState<string>('Business Consulting');

  // Card Details Modal State
  const [selectedService, setSelectedService] = useState<ServiceItem | null>(null);
  const [selectedCourse, setSelectedCourse] = useState<CourseItem | null>(null);

  // Form State
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    preferredDate: '',
    notes: ''
  });
  const [formSubmitted, setFormSubmitted] = useState(false);

  const WHATSAPP_URL = 'https://wa.me/message/JAG2IYJITX5TL1';
  const WHATSAPP_DIRECT_NUMBER = '263715403323';

  // Track scroll position
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 40) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }

      const sections = ['home', 'about', 'services', 'school', 'values', 'contact'];
      const current = sections.find((section) => {
        const el = document.getElementById(section);
        if (el) {
          const rect = el.getBoundingClientRect();
          return rect.top <= 200 && rect.bottom >= 200;
        }
        return false;
      });
      if (current) {
        setActiveSection(current);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const openBookingModal = (type: 'appointment' | 'intake' | 'order', defaultSubject?: string) => {
    setBookingType(type);
    if (defaultSubject) {
      setSelectedSubject(defaultSubject);
    } else {
      setSelectedSubject(type === 'intake' ? 'Accounting & Finance Course' : 'Business Consulting');
    }
    setFormSubmitted(false);
    setBookingModalOpen(true);
    setMobileMenuOpen(false);
  };

  const handleBookingSubmit = (e: React.FormEvent, openDirectWhatsApp: boolean = false) => {
    e.preventDefault();
    setFormSubmitted(true);

    if (openDirectWhatsApp) {
      const message = `Hello Helions Group Investments,%0A%0AI would like to inquire about: *${selectedSubject}*%0A%0A*Name:* ${formData.name || 'Not provided'}%0A*Phone:* ${formData.phone || 'Not provided'}%0A*Email:* ${formData.email || 'Not provided'}%0A*Preferred Date:* ${formData.preferredDate || 'Earliest available'}%0A*Notes:* ${formData.notes || 'Interested in details and intake schedules.'}`;
      window.open(`https://wa.me/${WHATSAPP_DIRECT_NUMBER}?text=${message}`, '_blank');
    }
  };

  return (
    <div className="min-h-screen bg-white text-gray-800">
      {/* Header Navigation */}
      <header className={`site-header ${isScrolled ? 'scrolled' : ''}`}>
        <div className="container nav-container">
          <a href="#home" className="logo" onClick={() => setActiveSection('home')}>
            <img
              src="/resources/b77_CGKdfy45Tu7gR4AkuR.jpg"
              alt="Helions Group Investments Logo"
              onError={(e) => {
                // Fallback if image fails to load
                (e.target as HTMLElement).style.display = 'none';
              }}
            />
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden lg:block">
            <ul className="desktop-nav">
              <li>
                <a
                  href="#about"
                  className={activeSection === 'about' ? 'active' : ''}
                >
                  About Us
                </a>
              </li>
              <li>
                <a
                  href="#services"
                  className={activeSection === 'services' ? 'active' : ''}
                >
                  Services
                </a>
              </li>
              <li>
                <a
                  href="#school"
                  className={activeSection === 'school' ? 'active' : ''}
                >
                  Business School
                </a>
              </li>
              <li>
                <a
                  href="#values"
                  className={activeSection === 'values' ? 'active' : ''}
                >
                  Values
                </a>
              </li>
              <li>
                <a
                  href="#contact"
                  className={activeSection === 'contact' ? 'active' : ''}
                >
                  Contact
                </a>
              </li>
            </ul>
          </nav>

          {/* CTA & Mobile Hamburger */}
          <div className="flex items-center gap-4">
            <button
              onClick={() => openBookingModal('appointment')}
              className="btn-primary hidden sm:inline-block"
            >
              Book an appointment
            </button>

            <button
              type="button"
              className="lg:hidden p-2 text-primary focus:outline-none"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-label="Toggle navigation menu"
            >
              {mobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation Drawer */}
        {mobileMenuOpen && (
          <div className="lg:hidden fixed top-[80px] left-0 w-full bg-white shadow-xl border-b border-gray-100 p-6 z-50 animate-fadeIn">
            <nav className="flex flex-col gap-4">
              <a
                href="#about"
                onClick={() => setMobileMenuOpen(false)}
                className="text-primary font-medium text-lg uppercase tracking-wider py-2 border-b border-gray-50 flex items-center justify-between"
              >
                About Us <ChevronRight size={18} className="text-secondary" />
              </a>
              <a
                href="#services"
                onClick={() => setMobileMenuOpen(false)}
                className="text-primary font-medium text-lg uppercase tracking-wider py-2 border-b border-gray-50 flex items-center justify-between"
              >
                Services <ChevronRight size={18} className="text-secondary" />
              </a>
              <a
                href="#school"
                onClick={() => setMobileMenuOpen(false)}
                className="text-primary font-medium text-lg uppercase tracking-wider py-2 border-b border-gray-50 flex items-center justify-between"
              >
                Business School <ChevronRight size={18} className="text-secondary" />
              </a>
              <a
                href="#values"
                onClick={() => setMobileMenuOpen(false)}
                className="text-primary font-medium text-lg uppercase tracking-wider py-2 border-b border-gray-50 flex items-center justify-between"
              >
                Values <ChevronRight size={18} className="text-secondary" />
              </a>
              <a
                href="#contact"
                onClick={() => setMobileMenuOpen(false)}
                className="text-primary font-medium text-lg uppercase tracking-wider py-2 border-b border-gray-50 flex items-center justify-between"
              >
                Contact <ChevronRight size={18} className="text-secondary" />
              </a>

              <div className="pt-4 flex flex-col gap-3">
                <button
                  onClick={() => openBookingModal('appointment')}
                  className="btn-primary w-full text-center"
                >
                  Book an appointment
                </button>
                <a
                  href={WHATSAPP_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-outline-primary w-full text-center flex items-center justify-center gap-2"
                >
                  <MessageSquare size={16} /> Chat on WhatsApp
                </a>
              </div>
            </nav>
          </div>
        )}
      </header>

      <main>
        {/* Hero Section */}
        <section className="hero" id="home">
          <div
            className="hero-bg"
            style={{
              backgroundImage: "url('/resources/972ZJ6lSxum8MzjnPLm4gb.jpg')"
            }}
          />
          <div className="hero-content fade-in">
            <h2>Diverse Excellence, Synergized Success</h2>
            <h1>Bridging Strategy and Practical Execution</h1>
            <p>
              A results-driven strategic partner for Zimbabwean SMEs, offering a
              multi-disciplinary approach that combines local market depth with
              global standards.
            </p>
            <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
              <button
                onClick={() => openBookingModal('appointment', 'General SME Strategic Consulting')}
                className="btn-primary cursor-pointer shadow-lg hover:shadow-orange-500/30"
              >
                Make a reservation
              </button>
              <a
                href="#services"
                className="btn-outline-primary !border-white !text-white hover:!bg-white hover:!text-primary"
              >
                Explore Services
              </a>
            </div>
          </div>
        </section>

        {/* About Section */}
        <section className="section-padding" id="about">
          <div className="container about-grid">
            <div className="about-text fade-in">
              <h2>Driving Sustainable Growth</h2>
              <p>
                Helions Group Investments is a Zimbabwe-based consulting and
                investment firm dedicated to providing strategic advisory,
                financial, HR, and marketing services.
              </p>
              <p>
                Primarily targeting SMEs and startups, we leverage ground-level
                market understanding and international standards to drive
                sustainable growth across diverse sectors including retail,
                farming, and professional training.
              </p>
              <p>
                We position ourselves as a results-driven strategic partner,
                offering a multi-disciplinary approach that bridges the gap
                between high-level strategy and practical, utility-driven
                execution.
              </p>
              <div className="pt-4 flex flex-wrap gap-4">
                <button
                  onClick={() => openBookingModal('appointment', 'Strategic Partnership Discussion')}
                  className="btn-primary"
                >
                  Partner With Us
                </button>
                <a
                  href="#contact"
                  className="btn-outline-primary"
                >
                  Get In Touch
                </a>
              </div>
            </div>
            <div className="about-image-wrapper fade-in">
              <img
                src="/resources/827eW2TRDFibKCOJ9lDO0R.jpg"
                alt="Helions Office Building Exterior"
                className="rounded-sm"
              />
            </div>
          </div>
        </section>

        {/* Services Section */}
        <section className="section-padding services-section" id="services">
          <div className="container">
            <div className="section-header fade-in">
              <h2>Our Services</h2>
              <div className="divider"></div>
              <p>
                A comprehensive, multi-disciplinary approach designed for
                practical purpose and evidential success.
              </p>
              <div style={{ marginTop: '2rem' }}>
                <button
                  onClick={() => openBookingModal('order', 'General Services Engagement')}
                  className="btn-primary cursor-pointer shadow-sm hover:shadow-md"
                >
                  Order online
                </button>
              </div>
            </div>

            <div className="services-grid fade-in">
              {SERVICES.map((service) => (
                <div
                  key={service.id}
                  className="service-card group"
                  onClick={() => setSelectedService(service)}
                >
                  <div className="overflow-hidden relative">
                    <img
                      src={service.image}
                      alt={service.title}
                      className="service-image group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-primary/20 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                      <span className="bg-white text-primary text-xs font-semibold px-3 py-1.5 rounded uppercase tracking-wider shadow">
                        View Details
                      </span>
                    </div>
                  </div>
                  <div className="service-content">
                    <h3>{service.title}</h3>
                    <p>{service.description}</p>
                    <div className="card-action-link">
                      <span>Learn More & Inquire</span>
                      <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Business School Section */}
        <section className="section-padding school-section" id="school">
          <div className="container">
            <div className="section-header fade-in">
              <h2>Helions Business School</h2>
              <div className="divider"></div>
              <p>
                Bridging the gap between academic theory and workplace reality.
                Empowering you with practical, real-world skills for
                professionals.
              </p>
            </div>

            <div className="course-grid fade-in">
              {COURSES.map((course) => (
                <div
                  key={course.id}
                  className="course-card group"
                  onClick={() => setSelectedCourse(course)}
                >
                  <div className="overflow-hidden relative">
                    <img
                      src={course.image}
                      alt={course.title}
                      className="course-image group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute top-3 right-3 bg-white/90 backdrop-blur-sm text-primary text-xs font-semibold px-2.5 py-1 rounded">
                      {course.duration}
                    </div>
                  </div>
                  <div className="course-content">
                    <h3>{course.title}</h3>
                    <ul className="course-list">
                      {course.courses.map((item, idx) => (
                        <li key={idx}>{item}</li>
                      ))}
                    </ul>
                    <div className="card-action-link pt-2 border-t border-gray-100 mt-4">
                      <span>Course Syllabus</span>
                      <ChevronRight size={14} className="group-hover:translate-x-1 transition-transform" />
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* The Helions Advantage Box */}
            <div className="advantage-box fade-in">
              <h3>The Helions Advantage</h3>
              <p>
                Our courses are designed for immediate impact. We provide
                expert-led, hands-on, and heavily industry-aligned
                training—moving beyond theory to equip you with the practical
                frameworks you need to succeed in today&apos;s corporate landscape.
              </p>
              <div style={{ marginTop: '2rem' }}>
                <button
                  onClick={() => openBookingModal('intake', 'Upcoming Business School Intake')}
                  className="btn-primary cursor-pointer shadow-md hover:shadow-orange-500/30"
                >
                  Book an Upcoming Intake
                </button>
              </div>
            </div>
          </div>
        </section>

        {/* Values Section */}
        <section className="section-padding values-section" id="values">
          <div
            className="values-bg"
            style={{
              backgroundImage: "url('/resources/aQ9pdfb7aZZbzdAs4HrOxa.jpg')"
            }}
          />
          <div className="container values-container fade-in">
            <div className="section-header">
              <h2>Our Core Values</h2>
              <div className="divider"></div>
            </div>

            <div className="values-grid">
              {CORE_VALUES.map((val, idx) => (
                <div key={idx} className="value-item group">
                  <h3>{val.name}</h3>
                  <p className="text-sm text-gray-200 mt-2 opacity-80 group-hover:opacity-100 transition-opacity">
                    {val.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer id="contact">
        <div className="container">
          <div className="footer-grid">
            {/* Brand Info */}
            <div className="footer-col">
              <img
                src="/resources/95fS2Anx6DIcZCqb-ye4tS.jpg"
                alt="Helions Group Investments Logo"
                className="footer-logo"
              />
              <p>
                Diverse Excellence, Synergized Success. Your strategic partner
                for practical, results-driven growth.
              </p>
              <div className="social-links">
                <a
                  href="https://www.instagram.com/invites/"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Instagram"
                >
                  <i className="fab fa-instagram"></i>
                </a>
                <a
                  href="https://www.linkedin.com/company/helions-group-investments-pvt-ltd"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="LinkedIn"
                >
                  <i className="fab fa-linkedin-in"></i>
                </a>
                <a
                  href="https://www.facebook.com/helionsgrpinv"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Facebook"
                >
                  <i className="fab fa-facebook-f"></i>
                </a>
              </div>
            </div>

            {/* Contact Info */}
            <div className="footer-col">
              <h4>Contact Us</h4>
              <ul className="contact-list">
                <li>
                  <i className="fas fa-map-marker-alt"></i>
                  <span>
                    <a
                      href="https://maps.google.com/?q=786/3,Kwekwe,Zimbabwe"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="hover:underline"
                    >
                      786/3, Kwekwe, ZW
                    </a>
                  </span>
                </li>
                <li>
                  <i className="fas fa-phone"></i>
                  <span>
                    <a href="tel:+263715403323">071 540 3323</a>
                  </span>
                </li>
                <li>
                  <i className="fas fa-envelope"></i>
                  <span>
                    <a href="mailto:helionsgroupzw@gmail.com">
                      helionsgroupzw@gmail.com
                    </a>
                  </span>
                </li>
                <li>
                  <i className="fas fa-envelope"></i>
                  <span>
                    <a href="mailto:info@helions.co.zw">info@helions.co.zw</a>
                  </span>
                </li>
              </ul>
            </div>

            {/* Operating Hours */}
            <div className="footer-col">
              <h4>Operating Hours</h4>
              <ul className="hours-list">
                <li>
                  <span>Monday</span> <span>8:00 AM - 4:00 PM</span>
                </li>
                <li>
                  <span>Tuesday</span> <span>8:00 AM - 4:00 PM</span>
                </li>
                <li>
                  <span>Wednesday</span> <span>8:00 AM - 4:00 PM</span>
                </li>
                <li>
                  <span>Thursday</span> <span>8:00 AM - 4:00 PM</span>
                </li>
                <li>
                  <span>Friday</span> <span>8:00 AM - 4:00 PM</span>
                </li>
                <li>
                  <span>Saturday</span> <span>9:00 AM - 12:00 PM</span>
                </li>
                <li>
                  <span>Sunday</span> <span>Closed</span>
                </li>
              </ul>
            </div>
          </div>

          <div className="footer-bottom">
            <p>
              &copy; {new Date().getFullYear()} Helions Group Investments (Private) Limited. All rights reserved.
            </p>
          </div>
        </div>
      </footer>

      {/* Original Google Pomelli Legal Reporting Footer Link */}
      <div className="legal-footer-bar">
        <a
          href="https://support.google.com/legal/answer/3110420"
          target="_blank"
          rel="noopener noreferrer"
        >
          Report legal issue
        </a>
      </div>

      {/* Floating WhatsApp Action Button */}
      <a
        href={WHATSAPP_URL}
        target="_blank"
        rel="noopener noreferrer"
        className="floating-whatsapp-btn"
        title="Chat with Helions on WhatsApp"
        aria-label="Chat on WhatsApp"
      >
        <i className="fab fa-whatsapp"></i>
      </a>

      {/* Service Detail Modal */}
      {selectedService && (
        <div className="fixed inset-0 z-50 bg-black/60 backdrop-blur-sm flex items-center justify-center p-4 animate-fadeIn">
          <div className="bg-white max-w-2xl w-full rounded-lg overflow-hidden shadow-2xl max-h-[90vh] flex flex-col">
            <div className="relative h-56 w-full">
              <img
                src={selectedService.image}
                alt={selectedService.title}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent flex items-end p-6">
                <div>
                  <span className="text-secondary text-xs uppercase tracking-widest font-semibold">
                    Service Overview
                  </span>
                  <h3 className="text-white text-2xl font-bold font-serif">
                    {selectedService.title}
                  </h3>
                </div>
              </div>
              <button
                onClick={() => setSelectedService(null)}
                className="absolute top-4 right-4 bg-white/80 hover:bg-white text-gray-800 p-2 rounded-full transition-all"
                aria-label="Close modal"
              >
                <X size={20} />
              </button>
            </div>

            <div className="p-6 overflow-y-auto flex-1">
              <p className="text-gray-700 leading-relaxed text-base mb-6">
                {selectedService.description}
              </p>

              <h4 className="text-primary font-bold text-sm uppercase tracking-wider mb-3">
                Key Deliverables & Capabilities
              </h4>
              <ul className="space-y-2 mb-6">
                {selectedService.highlights.map((h, i) => (
                  <li key={i} className="flex items-start gap-2.5 text-sm text-gray-600">
                    <CheckCircle size={16} className="text-secondary shrink-0 mt-0.5" />
                    <span>{h}</span>
                  </li>
                ))}
              </ul>

              <div className="bg-gray-50 p-4 rounded-lg border border-gray-100 flex items-center justify-between">
                <div>
                  <div className="text-xs text-gray-500 uppercase tracking-wider font-semibold">Ready to scale?</div>
                  <div className="text-sm font-medium text-gray-800">Direct consultation with senior advisor</div>
                </div>
                <button
                  onClick={() => {
                    const title = selectedService.title;
                    setSelectedService(null);
                    openBookingModal('order', title);
                  }}
                  className="btn-primary !py-2.5 !px-5 text-sm"
                >
                  Inquire Now
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Course Detail Modal */}
      {selectedCourse && (
        <div className="fixed inset-0 z-50 bg-black/60 backdrop-blur-sm flex items-center justify-center p-4 animate-fadeIn">
          <div className="bg-white max-w-2xl w-full rounded-lg overflow-hidden shadow-2xl max-h-[90vh] flex flex-col">
            <div className="relative h-56 w-full">
              <img
                src={selectedCourse.image}
                alt={selectedCourse.title}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent flex items-end p-6">
                <div>
                  <span className="text-secondary text-xs uppercase tracking-widest font-semibold">
                    Helions Business School Intake
                  </span>
                  <h3 className="text-white text-2xl font-bold font-serif">
                    {selectedCourse.title}
                  </h3>
                </div>
              </div>
              <button
                onClick={() => setSelectedCourse(null)}
                className="absolute top-4 right-4 bg-white/80 hover:bg-white text-gray-800 p-2 rounded-full transition-all"
                aria-label="Close modal"
              >
                <X size={20} />
              </button>
            </div>

            <div className="p-6 overflow-y-auto flex-1">
              <div className="flex flex-wrap gap-4 mb-4 text-xs font-semibold">
                <span className="bg-blue-50 text-primary px-3 py-1 rounded">
                  Duration: {selectedCourse.duration}
                </span>
                <span className="bg-orange-50 text-secondary px-3 py-1 rounded">
                  {selectedCourse.intakeSchedule}
                </span>
              </div>

              <p className="text-gray-700 leading-relaxed text-base mb-6">
                {selectedCourse.description}
              </p>

              <h4 className="text-primary font-bold text-sm uppercase tracking-wider mb-3">
                Course Modules & Curriculum
              </h4>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-6">
                {selectedCourse.courses.map((item, idx) => (
                  <div
                    key={idx}
                    className="p-3 bg-gray-50 rounded border border-gray-100 flex items-center gap-3"
                  >
                    <BookOpen size={18} className="text-secondary shrink-0" />
                    <span className="text-sm font-medium text-gray-800">{item}</span>
                  </div>
                ))}
              </div>

              <div className="p-4 bg-primary/5 rounded-lg border border-primary/10 flex items-center justify-between">
                <div>
                  <div className="text-xs text-primary font-bold uppercase tracking-wider">Next Enrollment Cycle</div>
                  <div className="text-sm text-gray-700">Limited seats for optimal mentor interaction</div>
                </div>
                <button
                  onClick={() => {
                    const title = `${selectedCourse.title} Course Intake`;
                    setSelectedCourse(null);
                    openBookingModal('intake', title);
                  }}
                  className="btn-primary !py-2.5 !px-5 text-sm"
                >
                  Register Intake
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Booking / Appointment / Intake Form Modal */}
      {bookingModalOpen && (
        <div className="fixed inset-0 z-50 bg-black/60 backdrop-blur-sm flex items-center justify-center p-4 animate-fadeIn">
          <div className="bg-white max-w-xl w-full rounded-lg shadow-2xl overflow-hidden flex flex-col max-h-[90vh]">
            <div className="bg-primary text-white p-6 relative">
              <button
                onClick={() => setBookingModalOpen(false)}
                className="absolute top-4 right-4 text-white/80 hover:text-white p-1 rounded-full"
                aria-label="Close modal"
              >
                <X size={22} />
              </button>
              <div className="text-xs font-semibold text-secondary uppercase tracking-widest mb-1">
                {bookingType === 'appointment'
                  ? 'Consultation Appointment'
                  : bookingType === 'intake'
                  ? 'Business School Registration'
                  : 'Service Request'}
              </div>
              <h3 className="text-2xl font-serif font-bold text-white">
                {bookingType === 'appointment'
                  ? 'Book a Strategy Session'
                  : bookingType === 'intake'
                  ? 'Enroll in Upcoming Intake'
                  : 'Request Service Proposal'}
              </h3>
              <p className="text-xs text-white/80 mt-1">
                Helions Group Investments &bull; 786/3 Kwekwe, ZW &bull; 071 540 3323
              </p>
            </div>

            <div className="p-6 overflow-y-auto flex-1">
              {formSubmitted ? (
                <div className="text-center py-8">
                  <div className="w-16 h-16 bg-green-100 text-green-600 rounded-full flex items-center justify-center mx-auto mb-4">
                    <CheckCircle size={36} />
                  </div>
                  <h4 className="text-2xl font-serif font-bold text-primary mb-2">
                    Request Received!
                  </h4>
                  <p className="text-gray-600 text-sm max-w-md mx-auto mb-6">
                    Thank you, <span className="font-semibold text-gray-800">{formData.name || 'Valued Client'}</span>. Your inquiry for <strong>{selectedSubject}</strong> has been logged. Our advisory team will contact you shortly.
                  </p>

                  <div className="p-4 bg-gray-50 rounded-lg text-left text-xs space-y-2 mb-6 border border-gray-100">
                    <div className="flex justify-between">
                      <span className="text-gray-500">Service/Course:</span>
                      <span className="font-medium text-gray-800">{selectedSubject}</span>
                    </div>
                    {formData.phone && (
                      <div className="flex justify-between">
                        <span className="text-gray-500">Phone:</span>
                        <span className="font-medium text-gray-800">{formData.phone}</span>
                      </div>
                    )}
                    {formData.email && (
                      <div className="flex justify-between">
                        <span className="text-gray-500">Email:</span>
                        <span className="font-medium text-gray-800">{formData.email}</span>
                      </div>
                    )}
                  </div>

                  <div className="flex flex-col sm:flex-row gap-3 justify-center">
                    <a
                      href={WHATSAPP_URL}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn-primary !bg-[#25D366] !border-[#25D366] flex items-center justify-center gap-2"
                    >
                      <i className="fab fa-whatsapp"></i> Chat on WhatsApp Now
                    </a>
                    <button
                      onClick={() => setBookingModalOpen(false)}
                      className="btn-outline-primary"
                    >
                      Back to Website
                    </button>
                  </div>
                </div>
              ) : (
                <form onSubmit={(e) => handleBookingSubmit(e, false)} className="space-y-4">
                  <div>
                    <label className="block text-xs font-semibold text-gray-700 uppercase tracking-wider mb-1">
                      Subject / Intake
                    </label>
                    <select
                      value={selectedSubject}
                      onChange={(e) => setSelectedSubject(e.target.value)}
                      className="w-full border border-gray-300 rounded px-3 py-2 text-sm focus:outline-none focus:border-primary"
                    >
                      <optgroup label="Consulting & Advisory Services">
                        <option value="Business Consulting">Business Consulting</option>
                        <option value="Accounting, Finance & Tax Advisory">Accounting, Finance & Tax Advisory</option>
                        <option value="HR Consulting">HR Consulting</option>
                        <option value="Marketing Consulting">Marketing Consulting</option>
                        <option value="Virtual Assistant Services">Virtual Assistant Services</option>
                      </optgroup>
                      <optgroup label="Helions Business School Courses">
                        <option value="Accounting & Finance Course Intake">Accounting & Finance Course</option>
                        <option value="Digital Productivity Course Intake">Digital Productivity Course</option>
                        <option value="Growth & Marketing Course Intake">Growth & Marketing Course</option>
                        <option value="Professional Development Course Intake">Professional Development Course</option>
                      </optgroup>
                    </select>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-semibold text-gray-700 uppercase tracking-wider mb-1">
                        Full Name *
                      </label>
                      <input
                        type="text"
                        required
                        placeholder="e.g. John Moyo"
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        className="w-full border border-gray-300 rounded px-3 py-2 text-sm focus:outline-none focus:border-primary"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-semibold text-gray-700 uppercase tracking-wider mb-1">
                        Phone / WhatsApp *
                      </label>
                      <input
                        type="tel"
                        required
                        placeholder="e.g. 071 540 3323"
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        className="w-full border border-gray-300 rounded px-3 py-2 text-sm focus:outline-none focus:border-primary"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-semibold text-gray-700 uppercase tracking-wider mb-1">
                        Email Address
                      </label>
                      <input
                        type="email"
                        placeholder="e.g. yourname@domain.co.zw"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        className="w-full border border-gray-300 rounded px-3 py-2 text-sm focus:outline-none focus:border-primary"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-semibold text-gray-700 uppercase tracking-wider mb-1">
                        Preferred Date / Timeline
                      </label>
                      <input
                        type="date"
                        value={formData.preferredDate}
                        onChange={(e) => setFormData({ ...formData, preferredDate: e.target.value })}
                        className="w-full border border-gray-300 rounded px-3 py-2 text-sm focus:outline-none focus:border-primary"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-gray-700 uppercase tracking-wider mb-1">
                      Brief Description / Requirements
                    </label>
                    <textarea
                      rows={3}
                      placeholder="Share your specific business needs or questions..."
                      value={formData.notes}
                      onChange={(e) => setFormData({ ...formData, notes: e.target.value })}
                      className="w-full border border-gray-300 rounded px-3 py-2 text-sm focus:outline-none focus:border-primary resize-none"
                    />
                  </div>

                  <div className="pt-2 flex flex-col sm:flex-row gap-3">
                    <button
                      type="button"
                      onClick={(e) => handleBookingSubmit(e, true)}
                      className="btn-primary flex-1 !bg-[#25D366] !border-[#25D366] flex items-center justify-center gap-2"
                    >
                      <i className="fab fa-whatsapp text-lg"></i>
                      <span>Send via WhatsApp</span>
                    </button>
                    <button
                      type="submit"
                      className="btn-primary flex-1 flex items-center justify-center gap-2"
                    >
                      <Send size={16} />
                      <span>Submit Request</span>
                    </button>
                  </div>
                </form>
              )}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
