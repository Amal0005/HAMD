import React from 'react';
import { Scissors, ShieldCheck, Star } from 'lucide-react';
import './PageStyles.css';

const CosmeticSurgery = () => {
  const procedures = [
    "Rhinoplasty (Nose Surgery)",
    "Liposuction",
    "Hair Transplant",
    "Facelift & Skin Treatments"
  ];

  return (
    <div className="page-container animate-fade-in">
      <section className="page-header" style={{ background: 'linear-gradient(135deg, #f43f5e 0%, #fb923c 100%)' }}>
        <div className="container text-center">
          <h1>Cosmetic Surgery</h1>
          <p>Enhance Your Confidence with Safe Procedures</p>
        </div>
      </section>

      <section className="section-padding">
        <div className="container">
          <div className="content-grid">
            <div className="content-text">
              <h2 className="section-title">Advanced Cosmetic Treatments</h2>
              <p className="large-text mb-lg">
                We provide state-of-the-art aesthetic and reconstructive procedures tailored to your unique goals.
              </p>
              
              <ul style={{ padding: 0, display: 'flex', flexDirection: 'column', gap: '1rem', marginBottom: '2rem' }}>
                {procedures.map((proc, idx) => (
                  <li key={idx} style={{ display: 'flex', alignItems: 'center', gap: '1rem', fontSize: '1.1rem', fontWeight: '500' }}>
                    <div style={{ background: 'var(--primary-light)', padding: '0.5rem', borderRadius: '50%', color: 'var(--primary)' }}>
                      <Scissors size={20} />
                    </div>
                    {proc}
                  </li>
                ))}
              </ul>
            </div>

            <div className="trust-grid" style={{ gridTemplateColumns: '1fr', gap: '1rem' }}>
              <div className="trust-item" style={{ flexDirection: 'row' }}>
                <Star className="trust-icon" />
                <h4 style={{ margin: 0 }}>Experienced Surgeons</h4>
              </div>
              <div className="trust-item" style={{ flexDirection: 'row' }}>
                <ShieldCheck className="trust-icon" />
                <h4 style={{ margin: 0 }}>Modern Techniques</h4>
              </div>
              <div className="trust-item" style={{ flexDirection: 'row' }}>
                <Star className="trust-icon" />
                <h4 style={{ margin: 0 }}>Safe & Comfortable Care</h4>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default CosmeticSurgery;
