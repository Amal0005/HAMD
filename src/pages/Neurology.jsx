import React, { useState } from 'react';
import { Brain, ShieldCheck, Star, ChevronDown } from 'lucide-react';
import { GiBrain } from 'react-icons/gi';
import './PageStyles.css';

const Neurology = () => {
  const [openIndex, setOpenIndex] = useState(0);

  const procedures = [
    { title: "Neurosurgery", desc: "Advanced surgical interventions for brain tumors, aneurysms, and complex neurological disorders using state-of-the-art navigation systems." },
    { title: "Stroke Treatment", desc: "Rapid response and comprehensive care for ischemic and hemorrhagic strokes, including rehabilitation." },
    { title: "Epilepsy Care", desc: "Expert diagnosis and management of epilepsy, including surgical options for medication-resistant cases." },
    { title: "Spinal Cord Surgery", desc: "Minimally invasive and complex surgeries for spinal cord injuries, tumors, and degenerative conditions." }
  ];

  return (
    <div className="page-container animate-fade-in">
      <section className="split-hero-header">
        <div className="split-hero-bg" style={{ background: 'linear-gradient(135deg, #8b5cf6 0%, #4c1d95 100%)' }}></div>
        <div className="container" style={{ position: 'relative' }}>
          <div className="split-hero-card" data-aos="fade-up">
            <GiBrain size={48} color="#8b5cf6" style={{ marginBottom: '1rem' }} />
            <h1>Neurology</h1>
            <p>Advanced brain and nerve-related treatments</p>
          </div>
        </div>
      </section>

      <section className="section-padding">
        <div className="container">
          <div className="content-grid" style={{ alignItems: 'flex-start' }}>
            <div className="content-text">
              <h2 className="section-title">Comprehensive Neurology</h2>
              <p className="large-text mb-lg">
                We provide state-of-the-art neurological treatments and neurosurgery tailored to your unique health goals.
              </p>
              
              {/* Accordion Layout */}
              <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                {procedures.map((proc, idx) => {
                  const isOpen = openIndex === idx;
                  return (
                    <div key={idx} className="glass-effect" data-aos="fade-up" style={{ borderRadius: 'var(--radius-md)', overflow: 'hidden', border: `1px solid ${isOpen ? '#8b5cf6' : 'rgba(0,0,0,0.05)'}`, transition: 'all 0.3s' }}>
                      <button 
                        onClick={() => setOpenIndex(isOpen ? -1 : idx)}
                        style={{ width: '100%', background: 'transparent', border: 'none', padding: '1.5rem', display: 'flex', alignItems: 'center', justifyContent: 'space-between', cursor: 'pointer', textAlign: 'left' }}
                      >
                        <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
                          <div style={{ background: isOpen ? '#8b5cf6' : 'var(--primary-light)', padding: '0.5rem', borderRadius: '50%', color: isOpen ? 'white' : 'var(--primary)', transition: 'all 0.3s' }}>
                            <GiBrain size={20} />
                          </div>
                          <span style={{ fontSize: '1.1rem', fontWeight: '600', color: isOpen ? '#8b5cf6' : 'var(--text-main)' }}>{proc.title}</span>
                        </div>
                        <ChevronDown size={20} color={isOpen ? '#8b5cf6' : 'var(--text-muted)'} style={{ transform: isOpen ? 'rotate(180deg)' : 'rotate(0deg)', transition: 'transform 0.3s' }} />
                      </button>
                      
                      <div style={{ maxHeight: isOpen ? '200px' : '0', overflow: 'hidden', transition: 'max-height 0.4s ease-in-out', background: 'rgba(255,255,255,0.5)' }}>
                        <p style={{ padding: '0 1.5rem 1.5rem 4.5rem', margin: 0, color: 'var(--text-main)', lineHeight: 1.6 }}>
                          {proc.desc}
                        </p>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>

            <div className="trust-grid" style={{ gridTemplateColumns: '1fr', gap: '1.5rem' }}>
              <div className="trust-item glass-effect" data-aos="zoom-in" style={{ flexDirection: 'row', padding: '1.5rem' }}>
                <Star className="trust-icon" color="#8b5cf6" />
                <h4 style={{ margin: 0 }}>Expert Neurologists</h4>
              </div>
              <div className="trust-item glass-effect" data-aos="zoom-in" style={{ flexDirection: 'row', padding: '1.5rem' }}>
                <ShieldCheck className="trust-icon" color="#8b5cf6" />
                <h4 style={{ margin: 0 }}>Modern Technology</h4>
              </div>
              <div className="trust-item glass-effect" data-aos="zoom-in" style={{ flexDirection: 'row', padding: '1.5rem' }}>
                <Star className="trust-icon" color="#8b5cf6" />
                <h4 style={{ margin: 0 }}>Safe & Comfortable Care</h4>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Neurology;
