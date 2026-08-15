import React from 'react';
import { Link } from 'react-router-dom';
import { Leaf, UserCheck, CheckCircle2, Sparkles, Palmtree, HeartHandshake, ArrowRight } from 'lucide-react';
import './PageStyles.css';

const WellnessAyurveda = () => {
  const ayurvedaFeatures = [
    {
      icon: <Leaf size={24} />,
      title: "Authentic Ayurveda",
      desc: "Traditional Kerala Ayurvedic care"
    },
    {
      icon: <UserCheck size={24} />,
      title: "Experienced Practitioners",
      desc: "Care from qualified Ayurveda professionals"
    },
    {
      icon: <CheckCircle2 size={24} />,
      title: "Personalised Care",
      desc: "Treatment plans based on individual needs"
    },
    {
      icon: <Sparkles size={24} />,
      title: "Panchakarma & Wellness",
      desc: "Traditional therapies and rejuvenation programmes"
    },
    {
      icon: <Palmtree size={24} />,
      title: "Kerala Ayurveda",
      desc: "Experience Ayurveda in its traditional home"
    },
    {
      icon: <HeartHandshake size={24} />,
      title: "Complete Support",
      desc: "Appointments, accommodation, transport & coordination"
    }
  ];

  return (
    <div className="page-container animate-fade-in">
      <section className="page-header" style={{ background: 'linear-gradient(135deg, #059669 0%, #047857 100%)', padding: '4rem 0 3.5rem 0' }}>
        <div className="container text-center">
          <div className="ayurveda-badge mb-md" style={{ background: 'rgba(255,255,255,0.18)', color: '#ffffff', border: '1px solid rgba(255,255,255,0.3)', margin: '0 auto 1.25rem auto' }}>
            <Leaf size={16} />
            <span>Ayurveda</span>
          </div>
          <h1 style={{ color: '#ffffff', fontSize: 'clamp(2.2rem, 4.5vw, 3.2rem)', fontWeight: 800, marginBottom: '1rem' }}>
            Discover Ayurveda in Kerala
          </h1>
          <p style={{ color: '#d1fae5', fontSize: '1.15rem', maxWidth: '720px', margin: '0 auto', lineHeight: 1.6 }}>
            Experience traditional Ayurvedic care in Kerala with personalised treatment, wellness programmes and complete support from HAMD.
          </p>
        </div>
      </section>

      <section className="section-padding bg-light">
        <div className="container">
          <div className="section-title text-center mb-xl">
            <h2>Our Authentic Ayurvedic Offerings</h2>
            <p className="text-muted">Comprehensive Panchakarma, detox & traditional rejuvenation care in Kerala</p>
          </div>

          <div className="ayurveda-features-grid mb-xl">
            {ayurvedaFeatures.map((item, idx) => (
              <div className="ayurveda-feature-card" key={idx} data-aos="fade-up" data-aos-delay={idx * 80}>
                <div className="ayurveda-icon-wrapper">
                  {item.icon}
                </div>
                <div className="ayurveda-feature-info">
                  <h3>{item.title}</h3>
                  <p>{item.desc}</p>
                </div>
              </div>
            ))}
          </div>

          <div style={{ textAlign: 'center', marginTop: '2.5rem' }}>
            <Link to="/contact" className="btn-ayurveda-cta">
              <span>Book Free Consultation with Ayurveda Specialist</span>
              <ArrowRight size={18} />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default WellnessAyurveda;
