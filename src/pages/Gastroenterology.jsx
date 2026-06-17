import React from 'react';
import { Pill, ShieldCheck, Star, Clock, MapPin, Phone } from 'lucide-react';
import './PageStyles.css';

const Gastroenterology = () => {
  const procedures = [
    { title: "Liver Care", desc: "Expert treatment for hepatitis, fatty liver, and cirrhosis." },
    { title: "Digestive Disorders", desc: "Management of IBS, acid reflux, and inflammatory bowel diseases." },
    { title: "Endoscopy", desc: "Advanced diagnostic and therapeutic endoscopic procedures." },
    { title: "GI Surgery", desc: "Minimally invasive surgeries for complex gastrointestinal conditions." }
  ];

  return (
    <div className="page-container animate-fade-in">
      <section className="split-hero-header">
        <div className="split-hero-bg" style={{ background: 'linear-gradient(135deg, #059669 0%, #064e3b 100%)' }}></div>
        <div className="container" style={{ position: 'relative' }}>
          <div className="split-hero-card">
            <Pill size={48} color="#059669" style={{ marginBottom: '1rem' }} />
            <h1>Gastroenterology</h1>
            <p>Expert Digestive & Liver Care</p>
          </div>
        </div>
      </section>

      <section className="section-padding" style={{ paddingTop: '6rem' }}>
        <div className="container">
          <div className="text-center" style={{ marginBottom: '3rem' }}>
            <h2 className="section-title">Our Procedures</h2>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '2rem' }}>
            {procedures.map((proc, idx) => (
              <div key={idx} className="glass-effect" style={{ padding: '2rem', borderRadius: 'var(--radius-lg)', borderTop: '4px solid #059669' }}>
                <h3 style={{ color: '#059669', marginBottom: '1rem' }}>{proc.title}</h3>
                <p style={{ color: 'var(--text-muted)', margin: 0 }}>{proc.desc}</p>
              </div>
            ))}
          </div>

        </div>
      </section>
    </div>
  );
};

export default Gastroenterology;
