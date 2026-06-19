import React from 'react';
import { Scissors, ShieldCheck, Star } from 'lucide-react';
import { GiScalpel } from 'react-icons/gi';
import './PageStyles.css';

const CosmeticSurgery = () => {
  const procedures = [
    { title: "Rhinoplasty (Nose Surgery)", desc: "Expert reshaping of the nose for aesthetic enhancement or functional correction." },
    { title: "Liposuction & Body Contouring", desc: "Advanced fat removal and body sculpting techniques to achieve your desired silhouette." },
    { title: "Hair Transplant", desc: "Permanent, natural-looking hair restoration using FUE and FUT methods." },
    { title: "Facelift & Skin Treatments", desc: "Comprehensive facial rejuvenation including surgical facelifts and non-invasive treatments." }
  ];

  return (
    <div className="page-container animate-fade-in">
      <section className="split-hero-header">
        <div className="split-hero-bg" style={{ background: 'linear-gradient(135deg, #f43f5e 0%, #c1121f 100%)' }}></div>
        <div className="container" style={{ position: 'relative' }}>
          <div className="split-hero-card" data-aos="fade-up">
            <GiScalpel size={48} color="#f43f5e" style={{ marginBottom: '1rem' }} />
            <h1>Cosmetic Surgery</h1>
            <p>Enhance Your Confidence with Safe Procedures</p>
          </div>
        </div>
      </section>

      <section className="section-padding">
        <div className="container">
          <div className="text-center" style={{ marginBottom: '4rem' }}>
            <h2 className="section-title">Advanced Cosmetic Treatments</h2>
            <p className="large-text" style={{ maxWidth: '700px', margin: '0 auto' }}>
              We provide state-of-the-art aesthetic and reconstructive procedures tailored to your unique goals. Our focus is on natural-looking, beautiful results.
            </p>
          </div>

          {/* Alternating Feature Layout */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '3rem', maxWidth: '900px', margin: '0 auto' }}>
            {procedures.map((proc, idx) => {
              const isEven = idx % 2 === 0;
              return (
                <div key={idx} style={{ display: 'flex', flexDirection: isEven ? 'row' : 'row-reverse', alignItems: 'center', gap: '3rem' }}>
                  
                  {/* Text Side */}
                  <div style={{ flex: 1, textAlign: isEven ? 'right' : 'left' }}>
                    <h3 style={{ color: '#f43f5e', marginBottom: '1rem', fontSize: '1.5rem' }}>{proc.title}</h3>
                    <p style={{ fontSize: '1.1rem', color: 'var(--text-main)', lineHeight: 1.6 }}>{proc.desc}</p>
                  </div>
                  
                  {/* Icon Card Side */}
                  <div className="glass-effect" data-aos="fade-up" style={{ width: '120px', height: '120px', flexShrink: 0, borderRadius: 'var(--radius-xl)', display: 'flex', justifyContent: 'center', alignItems: 'center', background: 'linear-gradient(135deg, var(--surface-color) 0%, #ffe4e6 100%)', border: '1px solid #fda4af', boxShadow: '0 10px 25px rgba(244,63,94,0.15)' }}>
                    <GiScalpel size={40} color="#f43f5e" />
                  </div>

                </div>
              );
            })}
          </div>

          <div className="trust-grid" style={{ gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '1.5rem', marginTop: '5rem' }}>
            <div className="trust-item glass-effect" data-aos="zoom-in" style={{ flexDirection: 'row', padding: '1.5rem', borderRadius: 'var(--radius-lg)' }}>
              <Star className="trust-icon" color="#f43f5e" />
              <h4 style={{ margin: 0 }}>Experienced Surgeons</h4>
            </div>
            <div className="trust-item glass-effect" data-aos="zoom-in" style={{ flexDirection: 'row', padding: '1.5rem', borderRadius: 'var(--radius-lg)' }}>
              <ShieldCheck className="trust-icon" color="#f43f5e" />
              <h4 style={{ margin: 0 }}>Modern Techniques</h4>
            </div>
            <div className="trust-item glass-effect" data-aos="zoom-in" style={{ flexDirection: 'row', padding: '1.5rem', borderRadius: 'var(--radius-lg)' }}>
              <Star className="trust-icon" color="#f43f5e" />
              <h4 style={{ margin: 0 }}>Safe & Comfortable Care</h4>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default CosmeticSurgery;
