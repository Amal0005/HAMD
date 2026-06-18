import React from 'react';
import Button from '../components/Button';
import { ShieldCheck, Globe, Clock, HeartPulse, Briefcase } from 'lucide-react';
import './Home.css';

const Home = () => {
  return (
    <div className="home-page animate-fade-in">
      {/* Hero Section */}
      <section className="hero">
        <div className="container hero-container">
          <div className="hero-content">
            <div className="hero-badge animate-fade-in">
              <span className="pulse-dot"></span>
              24/7 Global Patient Care
            </div>
            <h1 className="hero-title animate-fade-in delay-100">
              World-Class Medical Treatment,<br />
              <span className="highlight-text">Without the Stress</span>
            </h1>
            <p className="hero-subtitle animate-fade-in delay-200">
              From first consultation to full recovery, we take care of everything. We connect you with trusted hospitals and expert doctors across India and globally.
            </p>
            <div className="hero-actions animate-fade-in delay-300">
              <Button size="lg" variant="primary" to="/contact" className="btn-glow">
                Free Consultation <i className="fa-solid fa-arrow-right" style={{ marginLeft: '8px' }}></i>
              </Button>
              <Button size="lg" variant="outline" href={import.meta.env.VITE_WHATSAPP_URL} icon={<i className="fa-brands fa-whatsapp" style={{ fontSize: '1.2rem' }}></i>} className="btn-whatsapp">
                WhatsApp Now
              </Button>
            </div>
          </div>
        </div>

        {/* Decorative Background Shapes */}
        <div className="hero-shape shape-1"></div>
        <div className="hero-shape shape-2"></div>
      </section>

      {/* Highlights Section */}
      <section className="highlights section-padding">
        <div className="container">
          <div className="highlights-grid">
            <div className="highlight-item glass-effect" data-aos="fade-up" data-aos-delay="0">
              <Clock size={40} className="highlight-icon" />
              <h3>8+ Years</h3>
              <p>Of Experience</p>
            </div>
            <div className="highlight-item glass-effect" data-aos="fade-up" data-aos-delay="100">
              <Globe size={40} className="highlight-icon" />
              <h3>10+ Countries</h3>
              <p>Served Successfully</p>
            </div>
            <div className="highlight-item glass-effect" data-aos="fade-up" data-aos-delay="200">
              <ShieldCheck size={40} className="highlight-icon" />
              <h3>JCI Accredited</h3>
              <p>Trusted Hospitals</p>
            </div>
            <div className="highlight-item glass-effect" data-aos="fade-up" data-aos-delay="300">
              <HeartPulse size={40} className="highlight-icon" />
              <h3>Expert Doctors</h3>
              <p>& Specialists</p>
            </div>
          </div>
        </div>
      </section>

      {/* Explore Offerings Section */}
      <section className="explore-offerings section-padding" data-aos="fade-up" style={{ backgroundColor: 'rgba(2, 82, 138, 0.03)' }}>
        <div className="container text-center">
          <h2 style={{ marginBottom: '2rem', color: 'var(--primary)' }}>Explore Our Medical Offerings</h2>
          <div style={{ display: 'flex', gap: '1.5rem', justifyContent: 'center', flexWrap: 'wrap' }}>
            <Button size="lg" variant="primary" to="/services" icon={<Briefcase size={20} />}>
              Our Services
            </Button>
            <Button size="lg" variant="secondary" to="/treatments" icon={<HeartPulse size={20} />}>
              Specialized Treatments
            </Button>
          </div>
        </div>
      </section>

      {/* Trust & Support Summary */}
      <section className="support-summary section-padding" data-aos="zoom-in">
        <div className="container text-center">
          <h2>Worldwide Medical Tourism Support</h2>
          <p className="section-desc">Our 24×7 Patient Care Team is always here for you, everywhere you go.</p>
        </div>
      </section>
    </div>
  );
};

export default Home;
