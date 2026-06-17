import React from 'react';
import { Heart, ShieldCheck, Star } from 'lucide-react';
import './PageStyles.css';

const Cardiology = () => {
  return (
    <div className="page-container animate-fade-in">
      <section className="split-hero-header">
        <div className="split-hero-bg" style={{ background: 'linear-gradient(135deg, #ef4444 0%, #991b1b 100%)' }}></div>
        <div className="container" style={{ position: 'relative' }}>
          <div className="split-hero-card">
            <Heart size={48} color="#ef4444" style={{ marginBottom: '1rem' }} />
            <h1>Cardiology</h1>
            <p>World-Class Cardiac Care & Heart Surgeries</p>
          </div>
        </div>
      </section>

      <section className="section-padding">
        <div className="container">
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '1.5rem', gridAutoRows: 'minmax(200px, auto)' }}>
            
            {/* Main feature box spanning 2 columns on desktop */}
            <div className="glass-effect" style={{ gridColumn: '1 / -1', padding: '3rem', borderRadius: 'var(--radius-xl)' }}>
              <h2 className="section-title">Advanced Cardiac Treatments</h2>
              <p className="large-text" style={{ maxWidth: '800px' }}>
                We provide state-of-the-art heart procedures and comprehensive cardiac care tailored to your unique health goals. Our globally recognized cardiologists utilize the latest minimally invasive techniques.
              </p>
            </div>

            {/* Smaller Bento Boxes */}
            <div className="glass-effect" style={{ padding: '2.5rem', borderRadius: 'var(--radius-xl)', background: 'linear-gradient(135deg, var(--surface-color) 0%, #fee2e2 100%)', borderLeft: '4px solid #ef4444' }}>
              <h3 style={{ color: '#ef4444', marginBottom: '1rem' }}>Heart Surgery</h3>
              <p>Advanced open-heart and minimally invasive surgeries for valve replacements and repairs.</p>
            </div>

            <div className="glass-effect" style={{ padding: '2.5rem', borderRadius: 'var(--radius-xl)', background: 'linear-gradient(135deg, var(--surface-color) 0%, #fee2e2 100%)', borderLeft: '4px solid #ef4444' }}>
              <h3 style={{ color: '#ef4444', marginBottom: '1rem' }}>Angioplasty</h3>
              <p>Cutting-edge coronary angioplasty and stenting to restore optimal blood flow.</p>
            </div>

            <div className="glass-effect" style={{ padding: '2.5rem', borderRadius: 'var(--radius-xl)', background: 'linear-gradient(135deg, var(--surface-color) 0%, #fee2e2 100%)', borderLeft: '4px solid #ef4444' }}>
              <h3 style={{ color: '#ef4444', marginBottom: '1rem' }}>Bypass Surgery (CABG)</h3>
              <p>Expert coronary artery bypass grafting performed by leading thoracic surgeons.</p>
            </div>

            {/* Trust Badges row */}
            <div style={{ gridColumn: '1 / -1', display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '1.5rem', marginTop: '2rem' }}>
              <div className="trust-item glass-effect" style={{ flexDirection: 'row', padding: '1.5rem', borderRadius: 'var(--radius-lg)' }}>
                <Star className="trust-icon" color="#ef4444" />
                <h4 style={{ margin: 0 }}>Expert Cardiologists</h4>
              </div>
              <div className="trust-item glass-effect" style={{ flexDirection: 'row', padding: '1.5rem', borderRadius: 'var(--radius-lg)' }}>
                <ShieldCheck className="trust-icon" color="#ef4444" />
                <h4 style={{ margin: 0 }}>Modern Technology</h4>
              </div>
              <div className="trust-item glass-effect" style={{ flexDirection: 'row', padding: '1.5rem', borderRadius: 'var(--radius-lg)' }}>
                <Star className="trust-icon" color="#ef4444" />
                <h4 style={{ margin: 0 }}>Safe & Comfortable Care</h4>
              </div>
            </div>

          </div>
        </div>
      </section>
    </div>
  );
};

export default Cardiology;
