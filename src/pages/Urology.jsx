import React from 'react';
import { Activity, ShieldCheck, Star, Clock, Phone } from 'lucide-react';
import './PageStyles.css';

const Urology = () => {
  const procedures = [
    { title: "Kidney Stones", desc: "Laser lithotripsy and minimally invasive stone removal." },
    { title: "Prostate Treatment", desc: "Advanced treatments for BPH and prostate disorders." },
    { title: "Urinary Disorders", desc: "Comprehensive care for incontinence and infections." },
    { title: "Urological Surgery", desc: "Robotic-assisted and laparoscopic urological surgeries." }
  ];

  return (
    <div className="page-container animate-fade-in">
      <section className="split-hero-header">
        <div className="split-hero-bg" style={{ background: 'linear-gradient(135deg, #f59e0b 0%, #b45309 100%)' }}></div>
        <div className="container" style={{ position: 'relative' }}>
          <div className="split-hero-card" data-aos="fade-up">
            <Activity size={48} color="#f59e0b" style={{ marginBottom: '1rem' }} />
            <h1>Urology</h1>
            <p>Advanced Urological Care</p>
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
              <div key={idx} className="glass-effect" data-aos="fade-up" style={{ padding: '2rem', borderRadius: 'var(--radius-lg)', borderTop: '4px solid #b45309' }}>
                <h3 style={{ color: '#b45309', marginBottom: '1rem' }}>{proc.title}</h3>
                <p style={{ color: 'var(--text-muted)', margin: 0 }}>{proc.desc}</p>
              </div>
            ))}
          </div>

        </div>
      </section>
    </div>
  );
};

export default Urology;
