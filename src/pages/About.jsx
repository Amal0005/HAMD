import React from 'react';
import { CheckCircle2 } from 'lucide-react';
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

      {/* Who We Are */}
      <section className="section-padding">
        <div className="container">
          <div className="content-grid">
            <div className="content-text">
              <h2 className="section-title">Who We Are</h2>
              <p className="large-text">
                HAMD Med Care is a trusted international patient care service dedicated to connecting patients with world-class hospitals and certified medical specialists.
              </p>
              <p>
                We simplify the entire process — from diagnosis to recovery — with complete transparency and personalized care. Our team ensures that you receive the highest standard of medical treatment without the administrative stress.
              </p>
            </div>
            <div className="content-image glass-effect">
              {/* Decorative block representing an image placeholder */}
              <div className="image-placeholder">
                <span className="placeholder-text">HAMD Care Team</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="section-padding bg-light">
        <div className="container">
          <div className="mission-vision-grid">
            <div className="mv-card">
              <div className="mv-icon">🎯</div>
              <h3>Our Mission</h3>
              <p>To make high-quality healthcare accessible, affordable, and stress-free for patients worldwide.</p>
            </div>
            <div className="mv-card">
              <div className="mv-icon">🌟</div>
              <h3>Our Vision</h3>
              <p>To become a globally trusted bridge between patients and advanced healthcare systems.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Why Trust HAMD */}
      <section className="section-padding">
        <div className="container text-center">
          <h2 className="section-title mb-lg">Why Trust HAMD</h2>
          <div className="trust-grid">
            {['Trusted hospital partnerships', 'Personalized patient coordination', 'Ethical and transparent approach', 'Focus on patient comfort and safety'].map((item, index) => (
              <div key={index} className="trust-item">
                <CheckCircle2 size={32} className="trust-icon" />
                <h4>{item}</h4>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
