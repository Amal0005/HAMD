import React from 'react';
import { Activity, ShieldCheck, Star } from 'lucide-react';
import './PageStyles.css';

const OrthopedicCare = () => {
  const treatments = [
    "Knee Replacement",
    "Hip Replacement",
    "Spine Surgery",
    "Sports Injury Treatment"
  ];

  return (
    <div className="page-container animate-fade-in">
      <section className="page-header" style={{ background: 'linear-gradient(135deg, #0284c7 0%, #38bdf8 100%)' }}>
        <div className="container text-center">
          <h1>Orthopedic Care</h1>
          <p>Move Better, Live Better</p>
        </div>
      </section>

      <section className="section-padding">
        <div className="container">
          <div className="content-grid">
            <div className="content-text">
              <h2 className="section-title">Comprehensive Bone & Joint Care</h2>
              <p className="large-text mb-lg">
                Regain your mobility and live a pain-free life with our advanced orthopedic treatments.
              </p>
              
              <ul style={{ padding: 0, display: 'flex', flexDirection: 'column', gap: '1rem', marginBottom: '2rem' }}>
                {treatments.map((treatment, idx) => (
                  <li key={idx} style={{ display: 'flex', alignItems: 'center', gap: '1rem', fontSize: '1.1rem', fontWeight: '500' }}>
                    <div style={{ background: '#e0f2fe', padding: '0.5rem', borderRadius: '50%', color: '#0284c7' }}>
                      <Activity size={20} />
                    </div>
                    {treatment}
                  </li>
                ))}
              </ul>
            </div>

            <div className="trust-grid" style={{ gridTemplateColumns: '1fr', gap: '1rem' }}>
              <div className="trust-item" style={{ flexDirection: 'row' }}>
                <Star className="trust-icon" />
                <h4 style={{ margin: 0 }}>Advanced Surgical Techniques</h4>
              </div>
              <div className="trust-item" style={{ flexDirection: 'row' }}>
                <ShieldCheck className="trust-icon" />
                <h4 style={{ margin: 0 }}>Faster Recovery Programs</h4>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default OrthopedicCare;
