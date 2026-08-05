import React, { useRef } from 'react';
import { Link } from 'react-router-dom';
import {
  ChevronLeft,
  ChevronRight,
  UserCheck,
  Building2,
  FileText,
  CircleDollarSign,
  FileBadge,
  Plane,
  Car,
  Hotel,
  Headphones,
  HeartHandshake,
  Sun,
  MessageSquareHeart,
  ShieldCheck,
  Globe,
  Heart,
  User,
  Receipt
} from 'lucide-react';
import { FaWhatsapp } from 'react-icons/fa';
import './Home.css';

// Crisp SVG Flag components for Middle Eastern countries
const OmanFlag = () => (
  <svg width="22" height="22" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg" className="flag-icon">
    <circle cx="16" cy="16" r="15" fill="#E5E7EB" stroke="#E5E7EB" strokeWidth="1"/>
    <g clipPath="url(#oman-clip)">
      <rect width="32" height="32" fill="#FFFFFF"/>
      <rect y="10.66" width="32" height="10.66" fill="#DC2626"/>
      <rect y="21.33" width="32" height="10.66" fill="#16A34A"/>
      <rect width="10.66" height="32" fill="#DC2626"/>
    </g>
    <defs>
      <clipPath id="oman-clip">
        <circle cx="16" cy="16" r="15"/>
      </clipPath>
    </defs>
  </svg>
);

const UaeFlag = () => (
  <svg width="22" height="22" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg" className="flag-icon">
    <circle cx="16" cy="16" r="15" fill="#E5E7EB" stroke="#E5E7EB" strokeWidth="1"/>
    <g clipPath="url(#uae-clip)">
      <rect width="32" height="10.66" fill="#16A34A"/>
      <rect y="10.66" width="32" height="10.66" fill="#FFFFFF"/>
      <rect y="21.33" width="32" height="10.66" fill="#1F2937"/>
      <rect width="9" height="32" fill="#DC2626"/>
    </g>
    <defs>
      <clipPath id="uae-clip">
        <circle cx="16" cy="16" r="15"/>
      </clipPath>
    </defs>
  </svg>
);

const SaudiFlag = () => (
  <svg width="22" height="22" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg" className="flag-icon">
    <circle cx="16" cy="16" r="15" fill="#15803D" stroke="#E5E7EB" strokeWidth="1"/>
    <g clipPath="url(#saudi-clip)">
      <rect width="32" height="32" fill="#15803D"/>
      <path d="M8 16H24M12 19L20 19" stroke="#FFFFFF" strokeWidth="2" strokeLinecap="round"/>
    </g>
    <defs>
      <clipPath id="saudi-clip">
        <circle cx="16" cy="16" r="15"/>
      </clipPath>
    </defs>
  </svg>
);

const QatarFlag = () => (
  <svg width="22" height="22" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg" className="flag-icon">
    <circle cx="16" cy="16" r="15" fill="#E5E7EB" stroke="#E5E7EB" strokeWidth="1"/>
    <g clipPath="url(#qatar-clip)">
      <rect width="32" height="32" fill="#881337"/>
      <path d="M0 0H10L14 3.2L10 6.4L14 9.6L10 12.8L14 16L10 19.2L14 22.4L10 25.6L14 28.8L10 32H0V0Z" fill="#FFFFFF"/>
    </g>
    <defs>
      <clipPath id="qatar-clip">
        <circle cx="16" cy="16" r="15"/>
      </clipPath>
    </defs>
  </svg>
);

const KuwaitFlag = () => (
  <svg width="22" height="22" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg" className="flag-icon">
    <circle cx="16" cy="16" r="15" fill="#E5E7EB" stroke="#E5E7EB" strokeWidth="1"/>
    <g clipPath="url(#kuwait-clip)">
      <rect width="32" height="10.66" fill="#16A34A"/>
      <rect y="10.66" width="32" height="10.66" fill="#FFFFFF"/>
      <rect y="21.33" width="32" height="10.66" fill="#DC2626"/>
      <path d="M0 0L10 16L0 32V0Z" fill="#1F2937"/>
    </g>
    <defs>
      <clipPath id="kuwait-clip">
        <circle cx="16" cy="16" r="15"/>
      </clipPath>
    </defs>
  </svg>
);

const Home = () => {
  const carouselRef = useRef(null);
  const whatsappUrl = import.meta.env.VITE_WHATSAPP_URL || 'https://wa.me/919000000000';

  const scrollLeft = () => {
    if (carouselRef.current) {
      carouselRef.current.scrollBy({ left: -260, behavior: 'smooth' });
    }
  };

  const scrollRight = () => {
    if (carouselRef.current) {
      carouselRef.current.scrollBy({ left: 260, behavior: 'smooth' });
    }
  };

  const serviceItems = [
    { icon: <UserCheck size={28} />, label: 'Medical Coordination' },
    { icon: <Building2 size={28} />, label: 'Hospital Appointments' },
    { icon: <FileText size={28} />, label: 'Second Opinion' },
    { icon: <CircleDollarSign size={28} />, label: 'Transparent Cost Estimate' },
    { icon: <FileBadge size={28} />, label: 'Medical Visa' },
    { icon: <Plane size={28} />, label: 'Flight Assistance' },
    { icon: <Car size={28} />, label: 'Airport Pickup' },
    { icon: <Hotel size={28} />, label: 'Hotel Accommodation' },
    { icon: <Headphones size={28} />, label: 'Interpreter Support' },
    { icon: <HeartHandshake size={28} />, label: 'Treatment Support' },
    { icon: <Sun size={28} />, label: 'Recovery & Wellness' },
    { icon: <MessageSquareHeart size={28} />, label: 'Post-Treatment Follow-up' },
  ];

  const whyChooseItems = [
    {
      icon: <Headphones size={32} className="why-icon" />,
      title: '24/7 International Patient Support',
      desc: 'We are with you anytime, anywhere.',
    },
    {
      icon: <ShieldCheck size={32} className="why-icon" />,
      title: 'Trusted Hospital Network',
      desc: 'Partnership with top hospitals in Kerala.',
    },
    {
      icon: <UserCheck size={32} className="why-icon" />,
      title: 'Dedicated Patient Coordinator',
      desc: 'A single point of contact throughout your journey.',
    },
    {
      icon: <Receipt size={32} className="why-icon" />,
      title: 'Transparent Pricing',
      desc: 'Clear and upfront pricing. No hidden fees.',
    },
    {
      icon: <Globe size={32} className="why-icon" />,
      title: 'Multilingual Assistance',
      desc: 'Support in Arabic, English and more.',
    },
    {
      icon: <Heart size={32} className="why-icon" />,
      title: 'Care Beyond Treatment',
      desc: 'We care for you, even after you go home.',
    },
  ];

  return (
    <div className="home-page">
      {/* Hero Section */}
      <section className="hero-section">
        <div className="container hero-layout">
          {/* Left Hero Content */}
          <div className="hero-left">
            <div className="hero-subheading">YOUR HEALTH, OUR PRIORITY</div>
            <h1 className="hero-main-heading">
              World-Class <br />
              Medical Care, <br />
              Without Stress
            </h1>
            <p className="hero-description">
              From medical consultation to your safe return home, HAMD manages every step of your healthcare journey in Kerala, India.
            </p>

            <div className="hero-buttons">
              <Link to="/contact" className="btn-primary-blue">
                <User size={18} />
                <span>Get Free Medical Opinion</span>
              </Link>
              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-outline-whatsapp"
              >
                <FaWhatsapp size={20} className="whatsapp-green-icon" />
                <span>WhatsApp Now</span>
              </a>
            </div>

            <div className="hero-serving-flags">
              <div className="flags-row">
                <OmanFlag />
                <UaeFlag />
                <SaudiFlag />
                <QatarFlag />
                <KuwaitFlag />
              </div>
              <span className="serving-text">
                Proudly serving patients from Oman, UAE, Saudi Arabia, Qatar, Kuwait and across the world.
              </span>
            </div>
          </div>

          {/* Right Hero Image */}
          <div className="hero-right">
            <div className="hero-image-wrapper">
              <img
                src="/hero_patient_doctor.png"
                alt="HAMD Med Connect Doctor Consultation with Middle Eastern Patient"
                className="hero-img"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Floating Services Strip Carousel */}
      <section className="services-strip-section">
        <div className="container">
          <div className="services-carousel-card">
            <button
              className="carousel-arrow left-arrow"
              onClick={scrollLeft}
              aria-label="Scroll left"
            >
              <ChevronLeft size={20} />
            </button>

            <div className="services-slider-track" ref={carouselRef}>
              {serviceItems.map((item, idx) => (
                <div key={idx} className="service-slide-item">
                  <div className="service-icon-box">{item.icon}</div>
                  <span className="service-item-label">{item.label}</span>
                </div>
              ))}
            </div>

            <button
              className="carousel-arrow right-arrow"
              onClick={scrollRight}
              aria-label="Scroll right"
            >
              <ChevronRight size={20} />
            </button>
          </div>
        </div>
      </section>

      {/* Why Choose HAMD Section */}
      <section className="why-choose-section">
        <div className="container">
          <div className="section-header text-center">
            <h2 className="why-title">Why Choose HAMD?</h2>
            <div className="title-underline"></div>
          </div>

          <div className="why-grid">
            {whyChooseItems.map((item, idx) => (
              <div key={idx} className="why-card">
                <div className="why-icon-wrapper">{item.icon}</div>
                <h3 className="why-card-title">{item.title}</h3>
                <p className="why-card-desc">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
