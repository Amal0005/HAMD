import React from 'react';
import { CheckCircle2, Target, Award, Shield, Globe, HeartHandshake, Users } from 'lucide-react';
import './PageStyles.css';

const About = () => {
  return (
    <div className="page-container animate-fade-in">
      {/* Page Header */}
      <section className="page-header" style={{ background: 'linear-gradient(135deg, var(--primary) 0%, var(--secondary) 100%)', padding: '3rem 0' }}>
        <div className="container">
          <div className="main-page-glass-strip">
            <div className="main-page-glass-icon">
              <CheckCircle2 size={32} />
            </div>
            <div className="main-page-glass-text">
              <h1>About Us</h1>
              <p>Connecting patients with world-class hospitals and specialists.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="section-padding" style={{ paddingBottom: '3rem' }}>
        <div className="container">
          <div className="text-center" data-aos="fade-up" style={{ maxWidth: '800px', margin: '0 auto' }}>
            <h2 className="section-title">Who We Are</h2>
            <p className="large-text">
              HAMD Med Care is your trusted partner in medical tourism. We bridge the gap between global patients and India's finest healthcare facilities.
            </p>
            <p style={{ color: 'var(--text-muted)' }}>
              Our mission is to provide seamless, affordable, and high-quality medical experiences. We understand that traveling for medical treatment can be overwhelming, which is why we handle everything from visa assistance and hospital appointments to accommodation and post-operative care.
            </p>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="section-padding bg-light">
        <div className="container">
          <div className="mission-vision-grid">
            <div className="mv-card" data-aos="zoom-in" data-aos-delay="0">
              <Target className="mv-icon text-primary" />
              <h3 style={{ color: 'var(--primary)', marginBottom: '1rem' }}>Our Mission</h3>
              <p>To deliver ethical, transparent, and comprehensive medical travel support, ensuring every patient receives world-class treatment without stress.</p>
            </div>
            <div className="mv-card" data-aos="zoom-in" data-aos-delay="100">
              <Award className="mv-icon text-secondary" />
              <h3 style={{ color: 'var(--secondary)', marginBottom: '1rem' }}>Our Vision</h3>
              <p>To be the globally recognized leader in medical tourism, known for unwavering patient care, trust, and successful health outcomes.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="section-padding">
        <div className="container">
          <div className="text-center mb-lg" data-aos="fade-up">
            <h2 className="section-title">Why Choose HAMD?</h2>
            <p style={{ maxWidth: '600px', margin: '0 auto' }}>We partner only with JCI and NABH accredited hospitals to guarantee the highest standards of safety and care.</p>
          </div>

          <div className="trust-grid">
            <div className="trust-item" data-aos="fade-up" data-aos-delay="0">
              <Shield className="trust-icon" size={32} />
              <h4>Verified Hospitals</h4>
            </div>
            <div className="trust-item" data-aos="fade-up" data-aos-delay="100">
              <Globe className="trust-icon" size={32} />
              <h4>Global Support</h4>
            </div>
            <div className="trust-item" data-aos="fade-up" data-aos-delay="200">
              <HeartHandshake className="trust-icon" size={32} />
              <h4>Personalized Care</h4>
            </div>
            <div className="trust-item" data-aos="fade-up" data-aos-delay="300">
              <Users className="trust-icon" size={32} />
              <h4>Expert Doctors</h4>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
