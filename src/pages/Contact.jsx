import React from 'react';
import { Phone, Mail, CheckCircle2 } from 'lucide-react';
import Button from '../components/Button';
import './PageStyles.css';

const Contact = () => {
  const supports = [
    "Free consultation & treatment planning",
    "Detailed medical report review",
    "Transparent pricing (no hidden costs)",
    "Travel, visa & accommodation support",
    "Continuous care & follow-up"
  ];

  return (
    <div className="page-container animate-fade-in">
      <section className="page-header" style={{ background: 'linear-gradient(135deg, var(--text-main) 0%, var(--primary) 100%)' }}>
        <div className="container text-center">
          <h1>Contact Us</h1>
          <p>Your Health Journey Simplified. Complete support from start to finish.</p>
        </div>
      </section>

      <section className="section-padding">
        <div className="container">
          <div className="content-grid">
            {/* Support Info */}
            <div className="content-text">
              <h2 className="section-title">We are here for you</h2>
              <p className="large-text mb-lg">
                Reach out to our experts today to start planning your medical journey.
              </p>
              
              <div className="contact-methods" style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem', marginBottom: '2.5rem' }}>
                <a href="tel:+918590896135" style={{ display: 'flex', alignItems: 'center', gap: '1rem', fontSize: '1.25rem', color: 'var(--text-main)', textDecoration: 'none' }}>
                  <div style={{ background: 'var(--primary-light)', padding: '1rem', borderRadius: '50%', color: 'var(--primary)' }}>
                    <Phone size={24} />
                  </div>
                  <span>+91 85908 96135</span>
                </a>
                <a href="https://wa.me/918590896135" style={{ display: 'flex', alignItems: 'center', gap: '1rem', fontSize: '1.25rem', color: 'var(--text-main)', textDecoration: 'none' }}>
                  <div style={{ background: '#dcf8c6', padding: '1rem', borderRadius: '50%', color: '#128c7e' }}>
                    <i className="fa-brands fa-whatsapp" style={{ fontSize: '24px' }}></i>
                  </div>
                  <span>WhatsApp Now</span>
                </a>
                <a href="mailto:Info.hamdmedicaltourism@gmail.com" style={{ display: 'flex', alignItems: 'center', gap: '1rem', fontSize: '1.25rem', color: 'var(--text-main)', textDecoration: 'none' }}>
                  <div style={{ background: 'var(--primary-light)', padding: '1rem', borderRadius: '50%', color: 'var(--primary)' }}>
                    <Mail size={24} />
                  </div>
                  <span>Info.hamdmedicaltourism@gmail.com</span>
                </a>
              </div>
            </div>

            {/* Support List & Form */}
            <div className="glass-effect" style={{ padding: '3rem', borderRadius: 'var(--radius-xl)' }}>
              <h3 style={{ marginBottom: '1.5rem', color: 'var(--primary)' }}>What you get</h3>
              <ul style={{ padding: 0, display: 'flex', flexDirection: 'column', gap: '1rem', marginBottom: '2rem' }}>
                {supports.map((support, idx) => (
                  <li key={idx} style={{ display: 'flex', alignItems: 'flex-start', gap: '1rem', fontSize: '1rem' }}>
                    <CheckCircle2 size={20} color="var(--success)" style={{ marginTop: '2px', flexShrink: 0 }} />
                    {support}
                  </li>
                ))}
              </ul>
              
              <Button size="lg" variant="primary" style={{ width: '100%' }} href="https://wa.me/918590896135">
                Get Free Consultation
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
