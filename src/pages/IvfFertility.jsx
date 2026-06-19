import React from 'react';
import { UserPlus, ShieldCheck, Star } from 'lucide-react';
import { GiBabyFace } from 'react-icons/gi';
import './PageStyles.css';

const IvfFertility = () => {
  const steps = [
    { title: "Initial Consultation & Testing", desc: "A comprehensive evaluation of both partners, including hormone tests and ultrasound scans to determine the best treatment plan." },
    { title: "Ovarian Stimulation", desc: "Fertility medications are administered to encourage the ovaries to produce multiple mature eggs instead of a single egg." },
    { title: "Egg Retrieval & Sperm Collection", desc: "A minor outpatient procedure to retrieve the eggs, along with the collection and preparation of the sperm sample." },
    { title: "Fertilization (IVF/ICSI)", desc: "The eggs and sperm are combined in our advanced laboratory to facilitate fertilization and embryo development." },
    { title: "Embryo Transfer", desc: "The healthiest embryos are carefully transferred into the uterus to establish a successful pregnancy." }
  ];

  return (
    <div className="page-container animate-fade-in">
      <section className="split-hero-header">
        <div className="split-hero-bg" style={{ background: 'linear-gradient(135deg, #ec4899 0%, #be185d 100%)' }}></div>
        <div className="container" style={{ position: 'relative' }}>
          <div className="split-hero-card" data-aos="fade-up">
            <GiBabyFace size={48} color="#ec4899" style={{ marginBottom: '1rem' }} />
            <h1>IVF & Fertility</h1>
            <p>Comprehensive fertility treatments and specialized care</p>
          </div>
        </div>
      </section>

      <section className="section-padding">
        <div className="container">
          <div className="text-center" style={{ marginBottom: '4rem' }}>
            <h2 className="section-title">The IVF Journey</h2>
            <p className="large-text" style={{ maxWidth: '700px', margin: '0 auto' }}>
              We understand that the fertility journey can be overwhelming. Our step-by-step process ensures you are supported and informed at every stage.
            </p>
          </div>

          {/* Vertical Timeline Layout */}
          <div style={{ position: 'relative', maxWidth: '800px', margin: '0 auto', padding: '2rem 0' }}>
            {/* The vertical line */}
            <div style={{ position: 'absolute', left: '24px', top: '0', bottom: '0', width: '4px', background: '#fce7f3', borderRadius: '2px', zIndex: 1 }}></div>
            
            {steps.map((step, idx) => (
              <div key={idx} style={{ display: 'flex', gap: '2rem', marginBottom: '3rem', position: 'relative', zIndex: 2 }} data-aos="fade-up">
                <div style={{ width: '52px', height: '52px', borderRadius: '50%', background: '#ec4899', color: 'white', display: 'flex', justifyContent: 'center', alignItems: 'center', fontWeight: 'bold', fontSize: '1.25rem', flexShrink: 0, border: '6px solid var(--bg-color)', boxShadow: '0 4px 10px rgba(236,72,153,0.3)' }}>
                  {idx + 1}
                </div>
                <div className="glass-effect" data-aos="fade-up" style={{ padding: '2rem', borderRadius: 'var(--radius-lg)', flexGrow: 1, borderLeft: '4px solid #ec4899' }}>
                  <h3 style={{ color: '#ec4899', marginBottom: '0.75rem', fontSize: '1.3rem' }}>{step.title}</h3>
                  <p style={{ margin: 0, color: 'var(--text-main)', lineHeight: 1.6 }}>{step.desc}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="trust-grid" style={{ gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '1.5rem', marginTop: '4rem' }}>
            <div className="trust-item glass-effect" data-aos="zoom-in" style={{ flexDirection: 'row', padding: '1.5rem', borderRadius: 'var(--radius-lg)' }}>
              <Star className="trust-icon" color="#ec4899" />
              <h4 style={{ margin: 0 }}>High Success Rates</h4>
            </div>
            <div className="trust-item glass-effect" data-aos="zoom-in" style={{ flexDirection: 'row', padding: '1.5rem', borderRadius: 'var(--radius-lg)' }}>
              <ShieldCheck className="trust-icon" color="#ec4899" />
              <h4 style={{ margin: 0 }}>Advanced Labs</h4>
            </div>
            <div className="trust-item glass-effect" data-aos="zoom-in" style={{ flexDirection: 'row', padding: '1.5rem', borderRadius: 'var(--radius-lg)' }}>
              <Star className="trust-icon" color="#ec4899" />
              <h4 style={{ margin: 0 }}>Emotional Support</h4>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default IvfFertility;
