import React from 'react';
import { Leaf, ShieldCheck, Star } from 'lucide-react';
import './PageStyles.css';

const WellnessAyurveda = () => {
  const therapies = [
    "Ayurveda Treatments",
    "Detox & Rejuvenation Programs",
    "Therapeutic Massage & Healing"
  ];

  return (
    <div className="page-container animate-fade-in">
      <section className="page-header" style={{ background: 'linear-gradient(135deg, #059669 0%, #34d399 100%)' }}>
        <div className="container text-center">
          <h1>Wellness & Ayurveda</h1>
          <p>Natural Healing & Wellness</p>
        </div>
      </section>

      <section className="section-padding">
        <div className="container">
          <div className="content-grid">
            <div className="content-text">
              <h2 className="section-title">Restore Your Inner Balance</h2>
              <p className="large-text mb-lg">
                Experience the ancient wisdom of Ayurveda combined with modern luxury for complete rejuvenation.
              </p>
              
              <ul style={{ padding: 0, display: 'flex', flexDirection: 'column', gap: '1rem', marginBottom: '2rem' }}>
                {therapies.map((therapy, idx) => (
                  <li key={idx} style={{ display: 'flex', alignItems: 'center', gap: '1rem', fontSize: '1.1rem', fontWeight: '500' }}>
                    <div style={{ background: '#d1fae5', padding: '0.5rem', borderRadius: '50%', color: '#059669' }}>
                      <Leaf size={20} />
                    </div>
                    {therapy}
                  </li>
                ))}
              </ul>
            </div>

            <div className="trust-grid" style={{ gridTemplateColumns: '1fr', gap: '1rem' }}>
              <div className="trust-item" style={{ flexDirection: 'row' }}>
                <Star className="trust-icon" />
                <h4 style={{ margin: 0 }}>Holistic Approach</h4>
              </div>
              <div className="trust-item" style={{ flexDirection: 'row' }}>
                <ShieldCheck className="trust-icon" />
                <h4 style={{ margin: 0 }}>Experienced Therapists</h4>
              </div>
              <div className="trust-item" style={{ flexDirection: 'row' }}>
                <Star className="trust-icon" />
                <h4 style={{ margin: 0 }}>Peaceful Recovery Environment</h4>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default WellnessAyurveda;
