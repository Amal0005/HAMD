import React from 'react';
import { Activity, ShieldCheck, Star } from 'lucide-react';
import { GiJoint } from 'react-icons/gi';
import './PageStyles.css';

const OrthopedicCare = () => {
  const treatments = [
    { title: "Knee Replacement", desc: "Advanced total and partial knee replacements." },
    { title: "Hip Replacement", desc: "Minimally invasive hip resurfacing and replacement." },
    { title: "Spine Surgery", desc: "Expert treatment for herniated discs and spinal fusion." },
    { title: "Sports Injuries", desc: "Specialized care for ligament tears and joint repair." }
  ];

  return (
    <div className="page-container animate-fade-in">
      <section className="split-hero-header">
        <div className="split-hero-bg" style={{ background: 'linear-gradient(135deg, #10b981 0%, #047857 100%)' }}></div>
        <div className="container" style={{ position: 'relative' }}>
          <div className="split-hero-card" data-aos="fade-up">
            <GiJoint size={48} color="#10b981" style={{ marginBottom: '1rem' }} />
            <h1>Orthopedic Care</h1>
            <p>Advanced Joint Replacement & Spine Surgery</p>
          </div>
        </div>
      </section>

      <section className="section-padding">
        <div className="container">
          <div className="text-center" style={{ marginBottom: '4rem' }}>
            <h2 className="section-title">Comprehensive Bone & Joint Care</h2>
            <p className="large-text" style={{ maxWidth: '700px', margin: '0 auto' }}>
              Regain your mobility and live a pain-free life with our advanced orthopedic treatments. We use the latest surgical techniques for faster recovery.
            </p>
          </div>

          {/* Action Cards Grid */}
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '2rem', maxWidth: '1000px', margin: '0 auto' }}>
            {treatments.map((treatment, idx) => (
              <div key={idx} className="glass-effect" data-aos="fade-up" style={{ padding: '3rem 2rem', borderRadius: 'var(--radius-xl)', textAlign: 'center', transition: 'transform 0.3s, box-shadow 0.3s', cursor: 'pointer', borderTop: '4px solid #0284c7' }}
                   onMouseEnter={(e) => { e.currentTarget.style.transform = 'translateY(-10px)'; e.currentTarget.style.boxShadow = '0 20px 40px rgba(2,132,199,0.15)' }}
                   onMouseLeave={(e) => { e.currentTarget.style.transform = 'translateY(0)'; e.currentTarget.style.boxShadow = 'var(--shadow-md)' }}>
                <div style={{ width: '80px', height: '80px', borderRadius: '50%', background: 'linear-gradient(135deg, #e0f2fe 0%, #bae6fd 100%)', color: '#0284c7', display: 'flex', justifyContent: 'center', alignItems: 'center', margin: '0 auto 1.5rem auto' }}>
                  <GiJoint size={36} />
                </div>
                <h3 style={{ color: '#0284c7', marginBottom: '1rem' }}>{treatment.title}</h3>
                <p style={{ color: 'var(--text-main)', margin: 0, lineHeight: 1.6 }}>{treatment.desc}</p>
              </div>
            ))}
          </div>

          <div className="trust-grid" style={{ gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '1.5rem', marginTop: '4rem' }}>
            <div className="trust-item glass-effect" data-aos="zoom-in" style={{ flexDirection: 'row', padding: '1.5rem', borderRadius: 'var(--radius-lg)' }}>
              <Star className="trust-icon" color="#0284c7" />
              <h4 style={{ margin: 0 }}>Advanced Techniques</h4>
            </div>
            <div className="trust-item glass-effect" data-aos="zoom-in" style={{ flexDirection: 'row', padding: '1.5rem', borderRadius: 'var(--radius-lg)' }}>
              <ShieldCheck className="trust-icon" color="#0284c7" />
              <h4 style={{ margin: 0 }}>Faster Recovery</h4>
            </div>
            <div className="trust-item glass-effect" data-aos="zoom-in" style={{ flexDirection: 'row', padding: '1.5rem', borderRadius: 'var(--radius-lg)' }}>
              <Star className="trust-icon" color="#0284c7" />
              <h4 style={{ margin: 0 }}>World-Class Care</h4>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default OrthopedicCare;
