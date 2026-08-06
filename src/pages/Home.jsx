import React, { useRef, useState } from 'react';
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
  Receipt,
  ArrowRight,
  Stethoscope,
  Activity,
  CheckCircle2,
  CalendarCheck,
  Sparkles,
  Award
} from 'lucide-react';
import {
  GiHeartOrgan,
  GiJoint,
  GiRibbon,
  GiBabyFace,
  GiEyeTarget,
  GiScalpel,
  GiBrain,
  GiKidneys,
  GiStomach,
  GiLotus
} from 'react-icons/gi';
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
  
  const [activeStep, setActiveStep] = useState(0);
  const [scrollProgress, setScrollProgress] = useState(0);
  const [isInteracting, setIsInteracting] = useState(false);
  const isDragging = useRef(false);
  const startX = useRef(0);
  const scrollLeftPos = useRef(0);
  const animFrameId = useRef(null);
  const resumeTimerRef = useRef(null);

  // Triggered whenever user touches, scrolls, or drags the carousel
  const handleUserInteraction = () => {
    setIsInteracting(true);
    if (resumeTimerRef.current) {
      clearTimeout(resumeTimerRef.current);
    }
    resumeTimerRef.current = setTimeout(() => {
      setIsInteracting(false);
    }, 2200); // Smoothly resumes auto-scroll 2.2s after user finishes scrolling
  };

  const scrollLeft = () => {
    handleUserInteraction();
    if (carouselRef.current) {
      carouselRef.current.scrollBy({ left: -280, behavior: 'smooth' });
    }
  };

  const scrollRight = () => {
    handleUserInteraction();
    if (carouselRef.current) {
      carouselRef.current.scrollBy({ left: 280, behavior: 'smooth' });
    }
  };

  const updateScrollProgress = () => {
    if (!carouselRef.current) return;
    const { scrollLeft, scrollWidth, clientWidth } = carouselRef.current;
    const maxScroll = scrollWidth - clientWidth;
    if (maxScroll <= 0) return;
    const progress = Math.min(100, Math.max(0, (scrollLeft / maxScroll) * 100));
    const step = Math.min(
      serviceItems.length - 1,
      Math.round((scrollLeft / maxScroll) * (serviceItems.length - 1))
    );
    setActiveStep(step);
    setScrollProgress(progress);
  };

  // Continuous Ultra-Smooth Auto-Scroll Engine (60 FPS)
  React.useEffect(() => {
    let lastTime = performance.now();
    const scrollSpeed = 0.65; // Smooth gentle pixel speed

    const step = (time) => {
      if (!isInteracting && carouselRef.current) {
        const delta = Math.min((time - lastTime) / 16.6, 2);
        const container = carouselRef.current;
        const maxScroll = container.scrollWidth - container.clientWidth;

        if (maxScroll > 0) {
          if (container.scrollLeft >= maxScroll - 1) {
            container.scrollLeft = 0; // Loop back smoothly to start
          } else {
            container.scrollLeft += scrollSpeed * delta;
          }
          updateScrollProgress();
        }
      }
      lastTime = time;
      animFrameId.current = requestAnimationFrame(step);
    };

    animFrameId.current = requestAnimationFrame(step);

    return () => {
      if (animFrameId.current) {
        cancelAnimationFrame(animFrameId.current);
      }
      if (resumeTimerRef.current) {
        clearTimeout(resumeTimerRef.current);
      }
    };
  }, [isInteracting]);

  // Touch and Mouse Drag handlers with auto-resume support
  const handleMouseDown = (e) => {
    isDragging.current = true;
    handleUserInteraction();
    startX.current = e.pageX - carouselRef.current.offsetLeft;
    scrollLeftPos.current = carouselRef.current.scrollLeft;
  };

  const handleMouseLeave = () => {
    isDragging.current = false;
  };

  const handleMouseUp = () => {
    isDragging.current = false;
    handleUserInteraction();
  };

  const handleMouseMove = (e) => {
    if (!isDragging.current) return;
    e.preventDefault();
    handleUserInteraction();
    const x = e.pageX - carouselRef.current.offsetLeft;
    const walk = (x - startX.current) * 1.5;
    carouselRef.current.scrollLeft = scrollLeftPos.current - walk;
  };

  const handleTouchStart = () => {
    handleUserInteraction();
  };

  const handleTouchMove = () => {
    handleUserInteraction();
  };

  const handleTouchEnd = () => {
    handleUserInteraction();
  };

  const handleScroll = () => {
    updateScrollProgress();
    handleUserInteraction();
  };

  const serviceItems = [
    { icon: <UserCheck size={26} />, label: 'Medical Coordination', theme: 'theme-blue' },
    { icon: <Building2 size={26} />, label: 'Hospital Appointments', theme: 'theme-teal' },
    { icon: <FileText size={26} />, label: 'Second Opinion', theme: 'theme-indigo' },
    { icon: <CircleDollarSign size={26} />, label: 'Transparent Cost Estimate', theme: 'theme-amber' },
    { icon: <FileBadge size={26} />, label: 'Medical Visa', theme: 'theme-cyan' },
    { icon: <Plane size={26} />, label: 'Flight Assistance', theme: 'theme-sky' },
    { icon: <Car size={26} />, label: 'Airport Pickup', theme: 'theme-rose' },
    { icon: <Hotel size={26} />, label: 'Hotel Accommodation', theme: 'theme-purple' },
    { icon: <Headphones size={26} />, label: 'Interpreter Support', theme: 'theme-orange' },
    { icon: <HeartHandshake size={26} />, label: 'Treatment Support', theme: 'theme-pink' },
    { icon: <Sun size={26} />, label: 'Recovery & Wellness', theme: 'theme-emerald' },
    { icon: <MessageSquareHeart size={26} />, label: 'Post-Treatment Follow-up', theme: 'theme-violet' },
  ];

  const treatments = [
    {
      icon: <GiHeartOrgan className="treatment-specialty-icon" />,
      title: "Cardiology & Cardiac Surgery",
      desc: "Bypass surgery, angioplasty, valve replacement & pediatric cardiology by world-class cardiologists.",
      path: "/cardiology",
      badge: "Popular",
      theme: "card-theme-red"
    },
    {
      icon: <GiJoint className="treatment-specialty-icon" />,
      title: "Orthopedics & Joint Replacement",
      desc: "Robotic knee & hip replacements, complex spine surgery & advanced arthroscopic care.",
      path: "/orthopedic-care",
      badge: "High Demand",
      theme: "card-theme-emerald"
    },
    {
      icon: <GiRibbon className="treatment-specialty-icon" />,
      title: "Oncology & Cancer Care",
      desc: "Comprehensive surgical oncology, target chemotherapy, radiation therapy & immunotherapy.",
      path: "/oncology",
      badge: "Specialized",
      theme: "card-theme-purple"
    },
    {
      icon: <GiBabyFace className="treatment-specialty-icon" />,
      title: "IVF & Fertility Care",
      desc: "Advanced reproductive technologies, ICSI, egg freezing & high IVF success rates.",
      path: "/ivf-fertility",
      badge: "High Success Rate",
      theme: "card-theme-pink"
    },
    {
      icon: <GiEyeTarget className="treatment-specialty-icon" />,
      title: "Ophthalmology & Eye Care",
      desc: "Blade-free LASIK, cataract surgery, retina care & pediatric eye treatments.",
      path: "/ophthalmology",
      theme: "card-theme-cyan"
    },
    {
      icon: <GiScalpel className="treatment-specialty-icon" />,
      title: "Cosmetic & Plastic Surgery",
      desc: "Rhinoplasty, liposuction, body contouring, facelifts & aesthetic reconstructive procedures.",
      path: "/cosmetic-surgery",
      theme: "card-theme-amber"
    },
    {
      icon: <GiBrain className="treatment-specialty-icon" />,
      title: "Neurology & Neurosurgery",
      desc: "Brain tumor surgery, stroke rehabilitation, spine surgery & epilepsy management.",
      path: "/neurology",
      theme: "card-theme-blue"
    },
    {
      icon: <GiKidneys className="treatment-specialty-icon" />,
      title: "Urology & Kidney Care",
      desc: "Laser kidney stone removal, prostate treatments, dialysis & reconstructive urology.",
      path: "/urology",
      theme: "card-theme-indigo"
    },
    {
      icon: <GiStomach className="treatment-specialty-icon" />,
      title: "Gastroenterology & Liver Care",
      desc: "Advanced endoscopy, liver transplants, bariatric surgery & digestive system care.",
      path: "/gastroenterology",
      theme: "card-theme-teal"
    },
    {
      icon: <GiLotus className="treatment-specialty-icon" />,
      title: "Ayurveda & Wellness Rejuvenation",
      desc: "Authentic Panchakarma therapies, stress relief, detox & holistic healing retreats in Kerala.",
      path: "/wellness-ayurveda",
      badge: "Kerala Specialty",
      theme: "card-theme-green"
    }
  ];

  const whyChooseItems = [
    {
      icon: <Headphones size={28} className="why-icon" />,
      title: '24/7 International Patient Support',
      desc: 'Round-the-clock emergency medical coordination and instant response for international patients.',
      badge: '24/7 Active Support',
      theme: 'why-theme-blue'
    },
    {
      icon: <ShieldCheck size={28} className="why-icon" />,
      title: 'Trusted NABH Hospital Network',
      desc: 'Direct partnership with top JCI & NABH-accredited multi-specialty hospitals across Kerala.',
      badge: 'NABH Accredited',
      theme: 'why-theme-emerald'
    },
    {
      icon: <UserCheck size={28} className="why-icon" />,
      title: 'Dedicated Patient Coordinator',
      desc: 'Your personal bilingual coordinator handles appointments, hospital admission, and daily ground support.',
      badge: 'Single Point of Contact',
      theme: 'why-theme-indigo'
    },
    {
      icon: <Receipt size={28} className="why-icon" />,
      title: 'Transparent Upfront Pricing',
      desc: 'Detailed itemized cost estimates provided before you travel with zero surprise charges.',
      badge: 'No Hidden Fees',
      theme: 'why-theme-amber'
    },
    {
      icon: <Globe size={28} className="why-icon" />,
      title: 'Native Multilingual Assistance',
      desc: 'Fluent Arabic and English interpreters accompany you to every doctor consultation and hospital visit.',
      badge: 'Arabic & English',
      theme: 'why-theme-rose'
    },
    {
      icon: <Heart size={28} className="why-icon" />,
      title: 'Care Beyond Treatment',
      desc: 'Continued medical follow-ups with your operating surgeons even after your safe return home.',
      badge: 'Post-Recovery Care',
      theme: 'why-theme-pink'
    },
  ];

  return (
    <div className="home-page">
      {/* Hero Section */}
      <section className="hero-section">
        <div className="container hero-layout">
          {/* Right Hero Image (Rendered First on Mobile) */}
          <div className="hero-right">
            <div className="hero-image-wrapper">
              <img
                src="/hero_patient_doctor.png"
                alt="HAMD Med Connect Doctor Consultation with Middle Eastern Patient"
                className="hero-img"
              />
            </div>
          </div>

          {/* Left Hero Content (Rendered Below Image on Mobile) */}
          <div className="hero-left">
            <div className="hero-subheading-badge">
              <Sparkles size={14} className="badge-sparkle-icon" />
              <span>YOUR HEALTH, OUR PRIORITY</span>
            </div>
            
            <h1 className="hero-main-heading">
              World-Class <br />
              Medical Care, <br />
              Without Stress
            </h1>
            <p className="hero-description">
              From medical consultation to your safe return home, HAMD manages every step of your healthcare journey in Kerala, India.
            </p>

            <div className="hero-buttons">
              <Link to="/contact" className="btn-hero-primary-glow">
                <div className="btn-icon-bubble">
                  <User size={18} />
                </div>
                <span className="btn-text">Get Free Medical Opinion</span>
                <ArrowRight size={18} className="btn-arrow-icon" />
              </Link>

              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-hero-whatsapp-glass"
              >
                <div className="btn-icon-bubble whatsapp-bubble">
                  <FaWhatsapp size={20} />
                </div>
                <span className="btn-text">WhatsApp Now</span>
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
        </div>
      </section>

      {/* Extraordinary Floating Services Strip Carousel */}
      <section className="services-strip-section">
        <div className="container">
          <div className="extraordinary-carousel-card">
            {/* Header strip with title & sleek navigation controls */}
            <div className="carousel-top-bar">
              <div className="carousel-title-block">
                <div className="carousel-badge-title">
                  <Sparkles size={16} className="sparkle-icon" />
                  <span>Patient Care & Services</span>
                </div>
              </div>

              <div className="carousel-arrow-group">
                <button
                  className="glass-carousel-arrow"
                  onClick={scrollLeft}
                  aria-label="Scroll left"
                >
                  <ChevronLeft size={18} />
                </button>
                <button
                  className="glass-carousel-arrow"
                  onClick={scrollRight}
                  aria-label="Scroll right"
                >
                  <ChevronRight size={18} />
                </button>
              </div>
            </div>

            {/* Main Interactive Drag/Swipe Track */}
            <div
              className="extraordinary-slider-track"
              ref={carouselRef}
              onMouseEnter={() => setIsInteracting(true)}
              onMouseLeave={() => handleUserInteraction()}
              onMouseDown={handleMouseDown}
              onMouseUp={handleMouseUp}
              onMouseMove={handleMouseMove}
              onTouchStart={handleTouchStart}
              onTouchMove={handleTouchMove}
              onTouchEnd={handleTouchEnd}
              onScroll={handleScroll}
            >
              {serviceItems.map((item, idx) => (
                <Link
                  to="/services"
                  key={idx}
                  className={`extraordinary-service-item ${item.theme} ${activeStep === idx ? 'item-active' : ''}`}
                >
                  <div className="icon-glow-ring"></div>
                  <div className="extraordinary-icon-box">
                    {item.icon}
                  </div>
                  <span className="extraordinary-item-label">{item.label}</span>
                </Link>
              ))}
            </div>

            {/* Bottom Progress Bar Navigation */}
            <div className="carousel-bottom-nav">
              <div className="carousel-progress-track">
                <div
                  className="carousel-progress-fill"
                  style={{ width: `${Math.max(8, scrollProgress)}%` }}
                ></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Quick Navigation Gateway Options: Treatment Details & Services */}
      <section className="home-nav-gateway-section" id="nav-options">
        <div className="container">
          <div className="section-header text-center">
            <span className="section-badge">
              <Sparkles size={16} /> Fast Navigation
            </span>
            <h2 className="section-main-title">Explore Medical Care Options</h2>
            <p className="section-sub-desc">
              Select an option below to view complete details about our specialized medical treatments or end-to-end patient concierge services.
            </p>
            <div className="title-underline"></div>
          </div>

          <div className="gateway-cards-grid">
            {/* Gateway Card 1: Treatment Details */}
            <div className="gateway-card gateway-card-treatments" data-aos="fade-right">
              <div className="gateway-card-badge">Specialties & Procedures</div>
              <div className="gateway-icon-header">
                <div className="gateway-icon-box icon-box-treatments">
                  <GiHeartOrgan size={36} />
                </div>
                <h3 className="gateway-card-title">Treatment Details</h3>
              </div>
              
              <p className="gateway-card-desc">
                Access world-class surgeries and treatments in Kerala. Explore procedures, hospital care, and recovery for all major medical specialties.
              </p>

              <div className="gateway-tags-container">
                <span className="gateway-tags-label">Popular Specialties:</span>
                <div className="gateway-tags-list">
                  <Link to="/cardiology" className="gateway-tag">Cardiology</Link>
                  <Link to="/orthopedic-care" className="gateway-tag">Orthopedics</Link>
                  <Link to="/oncology" className="gateway-tag">Oncology</Link>
                  <Link to="/ivf-fertility" className="gateway-tag">IVF Care</Link>
                  <Link to="/neurology" className="gateway-tag">Neurology</Link>
                </div>
              </div>

              <div className="gateway-card-action">
                <Link to="/treatments" className="btn-gateway btn-gateway-treatments">
                  <span>Go to Treatment Details Page</span>
                  <ArrowRight size={20} className="btn-arrow-movable" />
                </Link>
              </div>
            </div>

            {/* Gateway Card 2: Our Services */}
            <div className="gateway-card gateway-card-services" data-aos="fade-left">
              <div className="gateway-card-badge">Concierge & Patient Support</div>
              <div className="gateway-icon-header">
                <div className="gateway-icon-box icon-box-services">
                  <Plane size={34} />
                </div>
                <h3 className="gateway-card-title">Our Services</h3>
              </div>
              
              <p className="gateway-card-desc">
                From initial consultation to safe return home, we handle medical visas, hospital bookings, flight transfers, hotel stays & 24/7 interpreters.
              </p>

              <div className="gateway-tags-container">
                <span className="gateway-tags-label">Key Services:</span>
                <div className="gateway-tags-list">
                  <Link to="/services" className="gateway-tag">Free Second Opinion</Link>
                  <Link to="/services" className="gateway-tag">Medical Visa</Link>
                  <Link to="/services" className="gateway-tag">Airport Pickup</Link>
                  <Link to="/services" className="gateway-tag">Hotel Stay</Link>
                  <Link to="/services" className="gateway-tag">24/7 Coordinator</Link>
                </div>
              </div>

              <div className="gateway-card-action">
                <Link to="/services" className="btn-gateway btn-gateway-services">
                  <span>Go to Services Page</span>
                  <ArrowRight size={20} className="btn-arrow-movable" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose HAMD Section - The HAMD Advantage */}
      <section className="why-choose-section" id="why-hamd">
        <div className="container">
          <div className="section-header text-center">
            <span className="section-badge">
              <Award size={16} /> The HAMD Advantage
            </span>
            <h2 className="section-main-title">Why Patients Choose HAMD Med Connect</h2>
            <p className="section-sub-desc">
              We combine world-class medical expertise in Kerala with personalized healthcare concierge, transparent pricing, and 24/7 patient support.
            </p>
            <div className="title-underline"></div>
          </div>

          <div className="why-advantage-grid">
            {whyChooseItems.map((item, idx) => (
              <div
                key={idx}
                className={`advantage-card ${item.theme}`}
                data-aos="fade-up"
                data-aos-delay={idx * 80}
              >
                <div className="advantage-card-top">
                  <div className="advantage-icon-box">
                    <div className="advantage-glow-ring"></div>
                    {item.icon}
                  </div>
                  <span className="advantage-badge-chip">{item.badge}</span>
                </div>

                <h3 className="advantage-card-title">{item.title}</h3>
                <p className="advantage-card-desc">{item.desc}</p>
                <div className="advantage-bottom-line"></div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Treatment & Service Consultation Banner */}
      <section className="home-cta-banner">
        <div className="container">
          <div className="cta-banner-content">
            <div className="cta-text">
              <h2>Need Help Choosing a Treatment or Planning Your Medical Trip?</h2>
              <p>Send us your medical reports today for a free evaluation and transparent cost estimate.</p>
            </div>
            <div className="cta-actions">
              <Link to="/contact" className="btn-cta-primary">
                Request Free Opinion
              </Link>
              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-cta-whatsapp"
              >
                <FaWhatsapp size={20} />
                <span>WhatsApp Consultant</span>
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;

