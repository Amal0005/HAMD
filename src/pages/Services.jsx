import React from 'react';
import { 
  MessageSquare, FileText, Stethoscope, Calculator, 
  CalendarCheck, FileCheck, Plane, Building, Car, HeartHandshake,
  Activity, ArrowRight, Route
} from 'lucide-react';
import Button from '../components/Button';
import './PageStyles.css';

const Services = () => {
  const stages = [
    {
      stageNumber: "01",
      title: "Before You Leave Home",
      desc: "We ensure everything is well-prepared before your journey begins.",
      items: [
        { icon: <MessageSquare size={24} />, title: "Speak with Our Medical Expert", desc: "Connect with our experienced medical team to discuss your condition and understand the best way forward." },
        { icon: <FileText size={24} />, title: "Medical Report Analysis", desc: "Your reports are carefully reviewed by qualified specialists to provide accurate guidance." },
        { icon: <Stethoscope size={24} />, title: "Treatment Planning & Second Opinion", desc: "Receive a personalized treatment plan along with expert second opinions for better decision-making." },
        { icon: <Calculator size={24} />, title: "Transparent Cost Estimation", desc: "Get a clear and detailed cost breakdown with no hidden charges." }
      ]
    },
    {
      stageNumber: "02",
      title: "Travel & Arrival",
      desc: "We take care of your travel arrangements so you can focus on your health.",
      items: [
        { icon: <FileCheck size={24} />, title: "Visa Assistance & Documentation", desc: "Complete support for obtaining your medical visa without hassle." },
        { icon: <Plane size={24} />, title: "Travel & Flight Coordination", desc: "Assistance with booking and organizing your travel schedule." },
        { icon: <Car size={24} />, title: "Airport Pickup & Local Support", desc: "Safe pickup and on-ground assistance for a smooth arrival experience." },
        { icon: <Building size={24} />, title: "Accommodation Arrangement", desc: "Comfortable stay options near your treatment facility for convenience." }
      ]
    },
    {
      stageNumber: "03",
      title: "Treatment & Recovery",
      desc: "Our support continues throughout your treatment and recovery.",
      items: [
        { icon: <CalendarCheck size={24} />, title: "Hospital & Appointment Booking", desc: "Priority access to leading hospitals and experienced specialists." },
        { icon: <Activity size={24} />, title: "Treatment Coordination", desc: "End-to-end assistance during your treatment journey." },
        { icon: <HeartHandshake size={24} />, title: "Post-Treatment Follow-up", desc: "Continued care and medical guidance even after you return home." }
      ]
    }
  ];

  return (
    <div className="page-container animate-fade-in">
      <section className="page-header" style={{ background: 'linear-gradient(135deg, var(--primary) 0%, var(--secondary) 100%)', padding: '3rem 0' }}>
        <div className="container">
          <div className="main-page-glass-strip">
            <div className="main-page-glass-icon">
              <Route size={32} />
            </div>
            <div className="main-page-glass-text">
              <h1 style={{ fontSize: '2rem' }}>Your Treatment Journey</h1>
              <p>From your first consultation to complete recovery — we guide you at every step with care, clarity, and confidence.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="section-padding bg-light">
        <div className="container">
          {stages.map((stage, sIdx) => (
            <div key={sIdx} style={{ marginBottom: '4rem' }} data-aos="fade-up">
              <div style={{ display: 'flex', alignItems: 'baseline', gap: '1rem', marginBottom: '1rem' }}>
                <span style={{ fontSize: '3rem', fontWeight: '800', color: 'var(--primary)', opacity: '0.2' }}>{stage.stageNumber}</span>
                <h2 className="section-title" style={{ margin: 0, fontSize: '2rem' }}>Stage {sIdx + 1}: {stage.title}</h2>
              </div>
              <p className="large-text" style={{ marginBottom: '2.5rem', color: 'var(--text-muted)' }}>{stage.desc}</p>
              
              <div className="process-list" style={{ gap: '2rem' }}>
                {stage.items.map((item, iIdx) => (
                  <div key={iIdx} className="process-step glass-effect" style={{ borderLeft: '4px solid var(--primary)' }}>
                    <div className="step-icon">
                      {item.icon}
                    </div>
                    <div>
                      <h4 style={{ color: 'var(--text-main)', fontSize: '1.15rem', marginBottom: '0.5rem' }}>{item.title}</h4>
                      <p style={{ margin: 0, color: 'var(--text-muted)', lineHeight: '1.6' }}>{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
              
              {sIdx < stages.length - 1 && (
                <div style={{ textAlign: 'center', margin: '3rem 0', color: 'var(--border-color)' }}>
                  <div style={{ height: '50px', width: '2px', backgroundColor: 'var(--primary)', opacity: 0.3, margin: '0 auto' }}></div>
                </div>
              )}
            </div>
          ))}
        </div>
      </section>

      <section className="section-padding" style={{ background: 'linear-gradient(135deg, var(--surface-color) 0%, #f0f9ff 100%)' }}>
        <div className="container text-center" data-aos="fade-up">
          <h2 style={{ fontSize: '2.5rem', color: 'var(--primary)', marginBottom: '1rem' }}>Start Your Journey Today</h2>
          <p className="large-text" style={{ maxWidth: '700px', margin: '0 auto 2.5rem auto' }}>
            Let us take care of the details while you focus on your recovery. Contact us now to begin your treatment journey with confidence.
          </p>
          <Button size="lg" variant="primary" href={import.meta.env.VITE_WHATSAPP_URL} icon={<ArrowRight />}>
            Contact Us Now
          </Button>
        </div>
      </section>
    </div>
  );
};

export default Services;
