import React, { useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import {
  ChevronLeft,
  ChevronRight,
  ChevronDown,
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
  Award,
  PhoneCall,
  Clock,
  Hand
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
import { FaWhatsapp, FaHandPointDown } from 'react-icons/fa';
import './Home.css';

// Official Crisp Flag components for GCC & International countries
const OmanFlag = () => (
  <img
    src="https://flagcdn.com/w40/om.png"
    srcSet="https://flagcdn.com/w80/om.png 2x"
    width="22"
    height="22"
    alt="Oman Flag"
    title="Oman"
    className="flag-icon"
  />
);

const SaudiFlag = () => (
  <img
    src="https://flagcdn.com/w40/sa.png"
    srcSet="https://flagcdn.com/w80/sa.png 2x"
    width="22"
    height="22"
    alt="Saudi Arabia Flag"
    title="Saudi Arabia"
    className="flag-icon"
  />
);

const UaeFlag = () => (
  <img
    src="https://flagcdn.com/w40/ae.png"
    srcSet="https://flagcdn.com/w80/ae.png 2x"
    width="22"
    height="22"
    alt="UAE Flag"
    title="United Arab Emirates"
    className="flag-icon"
  />
);

const QatarFlag = () => (
  <img
    src="https://flagcdn.com/w40/qa.png"
    srcSet="https://flagcdn.com/w80/qa.png 2x"
    width="22"
    height="22"
    alt="Qatar Flag"
    title="Qatar"
    className="flag-icon"
  />
);

const KuwaitFlag = () => (
  <img
    src="https://flagcdn.com/w40/kw.png"
    srcSet="https://flagcdn.com/w80/kw.png 2x"
    width="22"
    height="22"
    alt="Kuwait Flag"
    title="Kuwait"
    className="flag-icon"
  />
);

const MaldivesFlag = () => (
  <img
    src="https://flagcdn.com/w40/mv.png"
    srcSet="https://flagcdn.com/w80/mv.png 2x"
    width="22"
    height="22"
    alt="Maldives Flag"
    title="Maldives"
    className="flag-icon"
  />
);


const Home = () => {
  const carouselRef = useRef(null);
  const whatsappUrl = import.meta.env.VITE_WHATSAPP_URL || 'https://wa.me/919000000000';
  
  const [activeStep, setActiveStep] = useState(0);
  const [scrollProgress, setScrollProgress] = useState(0);
  const [isInteracting, setIsInteracting] = useState(false);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);
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
    if (maxScroll <= 0) {
      setCanScrollLeft(false);
      setCanScrollRight(false);
      return;
    }
    const progress = Math.min(100, Math.max(0, (scrollLeft / maxScroll) * 100));
    const step = Math.min(
      serviceItems.length - 1,
      Math.round((scrollLeft / maxScroll) * (serviceItems.length - 1))
    );
    setActiveStep(step);
    setScrollProgress(progress);
    setCanScrollLeft(scrollLeft > 5);
    setCanScrollRight(scrollLeft < maxScroll - 5);
  };

  const whyCarouselRef = useRef(null);
  const [canScrollWhyLeft, setCanScrollWhyLeft] = useState(false);
  const [canScrollWhyRight, setCanScrollWhyRight] = useState(true);

  const scrollWhyLeft = () => {
    if (whyCarouselRef.current) {
      whyCarouselRef.current.scrollBy({ left: -260, behavior: 'smooth' });
    }
  };

  const scrollWhyRight = () => {
    if (whyCarouselRef.current) {
      whyCarouselRef.current.scrollBy({ left: 260, behavior: 'smooth' });
    }
  };

  const updateWhyScrollProgress = () => {
    if (!whyCarouselRef.current) return;
    const { scrollLeft, scrollWidth, clientWidth } = whyCarouselRef.current;
    const maxScroll = scrollWidth - clientWidth;
    if (maxScroll <= 0) {
      setCanScrollWhyLeft(false);
      setCanScrollWhyRight(false);
      return;
    }
    setCanScrollWhyLeft(scrollLeft > 5);
    setCanScrollWhyRight(scrollLeft < maxScroll - 5);
  };

  React.useEffect(() => {
    updateScrollProgress();
    updateWhyScrollProgress();
  }, []);

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
    { icon: <UserCheck size={28} />, label: 'Medical Coordination', theme: 'theme-blue' },
    { icon: <Building2 size={28} />, label: 'Hospital Appointments', theme: 'theme-teal' },
    { icon: <FileText size={28} />, label: 'Second Opinion', theme: 'theme-indigo' },
    { icon: <CircleDollarSign size={28} />, label: 'Transparent Cost Estimate', theme: 'theme-amber' },
    { icon: <FileBadge size={28} />, label: 'Medical Visa', theme: 'theme-cyan' },
    { icon: <Plane size={28} />, label: 'Flight Assistance', theme: 'theme-sky' },
    { icon: <Car size={28} />, label: 'Airport Pickup', theme: 'theme-rose' },
    { icon: <Hotel size={28} />, label: 'Hotel Accommodation', theme: 'theme-purple' },
    { icon: <Headphones size={28} />, label: 'Interpreter Support', theme: 'theme-orange' },
    { icon: <HeartHandshake size={28} />, label: 'Treatment Support', theme: 'theme-pink' },
    { icon: <Sun size={28} />, label: 'Recovery & Wellness', theme: 'theme-emerald' },
    { icon: <MessageSquareHeart size={28} />, label: 'Post-Treatment Follow-up', theme: 'theme-violet' },
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
      num: '01',
      icon: <PhoneCall size={24} className="why-icon" />,
      title: '24/7 Support',
      desc: '24/7 instant medical coordination & emergency response.',
      badge: '24/7 Active',
      highlights: ['24/7 WhatsApp', 'On-Call Doctor'],
      theme: 'why-theme-blue'
    },
    {
      num: '02',
      icon: <Building2 size={24} className="why-icon" />,
      title: 'Trusted Hospital Network',
      desc: 'Top JCI & NABH accredited hospitals across Kerala.',
      badge: 'NABH Partner',
      highlights: ['50+ Hospitals', 'Top Surgeons'],
      theme: 'why-theme-emerald'
    },
    {
      num: '03',
      icon: <HeartHandshake size={24} className="why-icon" />,
      title: 'Dedicated Coordinator',
      desc: 'Personal bilingual guide for appointments & hospital care.',
      badge: '1-on-1 Support',
      highlights: ['Personal Guide', 'Ground Support'],
      theme: 'why-theme-indigo'
    },
    {
      num: '04',
      icon: <CircleDollarSign size={24} className="why-icon" />,
      title: 'Transparent Pricing',
      desc: 'Itemized cost estimates with zero hidden charges.',
      badge: 'No Hidden Fees',
      highlights: ['Itemized Quote', 'No Extra Cost'],
      theme: 'why-theme-amber'
    },
    {
      num: '05',
      icon: <Globe size={24} className="why-icon" />,
      title: 'Multilingual Assistance',
      desc: 'Arabic & English interpreters for all consultations.',
      badge: 'Arabic & English',
      highlights: ['Interpreter', 'Translation'],
      theme: 'why-theme-rose'
    },
    {
      num: '06',
      icon: <Stethoscope size={24} className="why-icon" />,
      title: 'Post-Treatment Care',
      desc: 'Surgeon follow-ups after your safe return home.',
      badge: 'Post Recovery',
      highlights: ['Follow-ups', 'Tele-Consults'],
      theme: 'why-theme-pink'
    },
  ];

  return (
    <div className="home-page">
      {/* Hero Section */}
      <section className="hero-section">
        <div className="container hero-layout">
          {/* Left Hero Content */}
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
            </div>

            <div className="hero-serving-flags">
              <div className="flags-row">
                <OmanFlag />
                <SaudiFlag />
                <UaeFlag />
                <QatarFlag />
                <KuwaitFlag />
                <MaldivesFlag />
              </div>
              <span className="serving-text">
                Proudly serving patients from Oman, Saudi Arabia, UAE, Qatar, Kuwait, Maldives and across the world.
              </span>
            </div>
          </div>
        </div>

        {/* Scroll Down Button */}
        <button
          className="hero-scroll-down-btn"
          onClick={() => {
            const nextSection = document.querySelector('.services-strip-section');
            if (nextSection) {
              nextSection.scrollIntoView({ behavior: 'smooth' });
            }
          }}
          aria-label="Scroll to next section"
        >
          <div className="finger-swipe-container">
            <div className="touch-ripple-circle"></div>
            <div className="arrow-trail-wrapper">
              <span className="trail-dot dot-1"></span>
              <span className="trail-dot dot-2"></span>
              <ChevronDown size={18} className="trail-arrow" />
            </div>
            <div className="swiping-finger-hand">
              <FaHandPointDown size={30} />
            </div>
          </div>
        </button>
      </section>

      {/* Extraordinary Floating Services Strip Carousel */}
      <section className="services-strip-section">
        <div className="container">
          <div className="extraordinary-carousel-card">
            {/* Header strip with title */}
            <div className="carousel-top-bar">
              <div className="carousel-title-block">
                <div className="carousel-badge-title">
                  <Sparkles size={16} className="sparkle-icon" />
                  <span>Patient Care & Services</span>
                </div>
              </div>
            </div>

            {/* Slider Track Wrapper with Side Arrows */}
            <div className="carousel-slider-wrapper">
              <button
                className={`carousel-side-arrow arrow-left ${!canScrollLeft ? 'arrow-hidden' : ''}`}
                onClick={scrollLeft}
                aria-label="Scroll left"
                disabled={!canScrollLeft}
              >
                <ChevronLeft size={20} />
              </button>

              {/* Main Interactive Track */}
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

              <button
                className={`carousel-side-arrow arrow-right ${!canScrollRight ? 'arrow-hidden' : ''}`}
                onClick={scrollRight}
                aria-label="Scroll right"
                disabled={!canScrollRight}
              >
                <ChevronRight size={20} />
              </button>
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
                  <span>Go to Treatment Details</span>
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
                  <span>Go to Services</span>
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

          {/* Mobile Swipe Hint Indicator */}
          <div className="why-mobile-swipe-hint">
            <span className="swipe-dot-pulse"></span>
            <span>Swipe to explore 6 advantages</span>
            <span className="swipe-arrow-anim">→</span>
          </div>

          {/* Why Advantage Slider Track Wrapper with Side Arrows */}
          <div className="why-slider-wrapper">
            <button
              className={`why-side-arrow arrow-left ${!canScrollWhyLeft ? 'arrow-hidden' : ''}`}
              onClick={scrollWhyLeft}
              aria-label="Scroll left"
              disabled={!canScrollWhyLeft}
            >
              <ChevronLeft size={20} />
            </button>

            <div
              className="why-advantage-grid"
              ref={whyCarouselRef}
              onScroll={updateWhyScrollProgress}
            >
              {whyChooseItems.map((item, idx) => (
                <div
                  key={idx}
                  className={`advantage-card ${item.theme}`}
                  data-aos="fade-up"
                  data-aos-delay={idx * 80}
                >
                  <div className="advantage-watermark">{item.num}</div>
                  
                  <div className="advantage-card-top">
                    <div className="advantage-icon-box">
                      <div className="advantage-glow-ring"></div>
                      {item.icon}
                    </div>
                    <span className="advantage-badge-chip">{item.badge}</span>
                  </div>

                  <h3 className="advantage-card-title">{item.title}</h3>
                  <p className="advantage-card-desc">{item.desc}</p>

                  <div className="advantage-highlights-list">
                    {item.highlights.map((high, hIdx) => (
                      <span key={hIdx} className="advantage-highlight-pill">
                        <CheckCircle2 size={13} className="high-check-icon" />
                        <span>{high}</span>
                      </span>
                    ))}
                  </div>

                  <div className="advantage-bottom-line"></div>
                </div>
              ))}
            </div>

            <button
              className={`why-side-arrow arrow-right ${!canScrollWhyRight ? 'arrow-hidden' : ''}`}
              onClick={scrollWhyRight}
              aria-label="Scroll right"
              disabled={!canScrollWhyRight}
            >
              <ChevronRight size={20} />
            </button>
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

