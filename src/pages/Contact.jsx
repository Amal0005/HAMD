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
      <section className="page-header" style={{ background: 'linear-gradient(135deg, var(--primary) 0%, var(--secondary) 100%)', padding: '3rem 0' }}>
        <div className="container">
          <div className="main-page-glass-strip">
            <div className="main-page-glass-icon">
              <Phone size={32} />
            </div>
            <div className="main-page-glass-text">
              <h1>Contact Us</h1>
              <p>Your Health Journey Simplified. Complete support from start to finish.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="section-padding">
        <div className="container">
          <div className="content-grid">
            {/* Support Info */}
            <div className="content-text" data-aos="fade-right">
              <h2 className="section-title">We are here for you</h2>
              <p className="large-text mb-lg">
                Reach out to our experts today to start planning your medical journey.
              </p>

              <div className="contact-methods">
                <a href={`tel:${import.meta.env.VITE_CONTACT_PHONE_LINK}`} className="contact-link">
                  <div className="contact-icon-wrapper" style={{ background: 'var(--primary-light)', color: 'var(--primary)' }}>
                    <Phone size={24} />
                  </div>
                  <span>{import.meta.env.VITE_CONTACT_PHONE}</span>
                </a>
                <a href={import.meta.env.VITE_WHATSAPP_URL} className="contact-link">
                  <div className="contact-icon-wrapper" style={{ background: '#dcf8c6', color: '#128c7e' }}>
                    <i className="fa-brands fa-whatsapp" style={{ fontSize: '24px' }}></i>
                  </div>
                  <span>WhatsApp Now</span>
                </a>
                <a href={`mailto:${import.meta.env.VITE_CONTACT_EMAIL}`} className="contact-link">
                  <div className="contact-icon-wrapper" style={{ background: 'var(--primary-light)', color: 'var(--primary)' }}>
                    <Mail size={24} />
                  </div>
                  <span style={{ wordBreak: 'break-all' }}>{import.meta.env.VITE_CONTACT_EMAIL}</span>
                </a>
              </div>
            </div>

            {/* Support List & Form */}
            <div className="glass-effect support-box" data-aos="fade-left">
              <h3 style={{ marginBottom: '1.5rem', color: 'var(--primary)' }}>What you get</h3>
              <ul style={{ padding: 0, display: 'flex', flexDirection: 'column', gap: '1rem', marginBottom: '2rem' }}>
                {supports.map((support, idx) => (
                  <li key={idx} style={{ display: 'flex', alignItems: 'flex-start', gap: '1rem', fontSize: '1rem' }}>
                    <CheckCircle2 size={20} color="var(--success)" style={{ marginTop: '2px', flexShrink: 0 }} />
                    {support}
                  </li>
                ))}
              </ul>

              <Button size="lg" variant="primary" style={{ width: '100%' }} href={import.meta.env.VITE_WHATSAPP_URL}>
                Speak with our medical experts <i className="fa-solid fa-arrow-right" style={{ marginLeft: '8px' }}></i>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
