import React from 'react';
import { Activity, ShieldCheck, Star, UserPlus } from 'lucide-react';
import './PageStyles.css';

const Oncology = () => {
  return (
    <div className="page-container animate-fade-in">
      <section className="split-hero-header">
        <div className="split-hero-bg" style={{ background: 'linear-gradient(135deg, #1d4ed8 0%, #1e3a8a 100%)' }}></div>
        <div className="container" style={{ position: 'relative' }}>
          <div className="split-hero-card">
            <UserPlus size={48} color="#1d4ed8" style={{ marginBottom: '1rem' }} />
            <h1>Oncology</h1>
            <p>Advanced Cancer Treatment & Surgical Oncology</p>
          </div>
        </div>
      </section>

      <section className="section-padding">
        <div className="container">
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '1.5rem', gridAutoRows: 'minmax(200px, auto)' }}>
            
            {/* Main feature box spanning 2 columns on desktop */}
            <div className="glass-effect" style={{ gridColumn: '1 / -1', padding: '3rem', borderRadius: 'var(--radius-xl)' }}>
              <h2 className="section-title">Comprehensive Oncology</h2>
              <p className="large-text" style={{ maxWidth: '800px' }}>
                We provide state-of-the-art cancer diagnosis and treatments tailored to your unique health goals. Our globally recognized oncologists utilize the latest precision medicine techniques.
              </p>
            </div>

            {/* Smaller Bento Boxes */}
            <div className="glass-effect" style={{ padding: '2.5rem', borderRadius: 'var(--radius-xl)', background: 'linear-gradient(135deg, var(--surface-color) 0%, #f3e8ff 100%)', borderLeft: '4px solid #a855f7' }}>
              <h3 style={{ color: '#a855f7', marginBottom: '1rem' }}>Cancer Diagnosis</h3>
              <p>Advanced imaging and biopsy procedures for early and accurate cancer detection.</p>
            </div>

            <div className="glass-effect" style={{ padding: '2.5rem', borderRadius: 'var(--radius-xl)', background: 'linear-gradient(135deg, var(--surface-color) 0%, #f3e8ff 100%)', borderLeft: '4px solid #a855f7' }}>
              <h3 style={{ color: '#a855f7', marginBottom: '1rem' }}>Chemotherapy</h3>
              <p>Personalized chemotherapy protocols designed to maximize efficacy and minimize side effects.</p>
            </div>

            <div className="glass-effect" style={{ padding: '2.5rem', borderRadius: 'var(--radius-xl)', background: 'linear-gradient(135deg, var(--surface-color) 0%, #f3e8ff 100%)', borderLeft: '4px solid #a855f7' }}>
              <h3 style={{ color: '#a855f7', marginBottom: '1rem' }}>Radiation Therapy</h3>
              <p>Precise, targeted radiation treatments to eliminate cancer cells safely.</p>
            </div>

            {/* Trust Badges row */}
            <div style={{ gridColumn: '1 / -1', display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '1.5rem', marginTop: '2rem' }}>
              <div className="trust-item glass-effect" style={{ flexDirection: 'row', padding: '1.5rem', borderRadius: 'var(--radius-lg)' }}>
                <Star className="trust-icon" color="#a855f7" />
                <h4 style={{ margin: 0 }}>Expert Oncologists</h4>
              </div>
              <div className="trust-item glass-effect" style={{ flexDirection: 'row', padding: '1.5rem', borderRadius: 'var(--radius-lg)' }}>
                <ShieldCheck className="trust-icon" color="#a855f7" />
                <h4 style={{ margin: 0 }}>Modern Technology</h4>
              </div>
              <div className="trust-item glass-effect" style={{ flexDirection: 'row', padding: '1.5rem', borderRadius: 'var(--radius-lg)' }}>
                <Star className="trust-icon" color="#a855f7" />
                <h4 style={{ margin: 0 }}>Compassionate Care</h4>
              </div>
            </div>

          </div>
        </div>
      </section>
    </div>
  );
};

export default Oncology;
