import React from 'react';
import { 
  MessageSquare, FileText, Stethoscope, Calculator, 
  CalendarCheck, FileCheck, Plane, Building, Car, HeartHandshake 
} from 'lucide-react';
import './PageStyles.css';

const Services = () => {
  const steps = [
    { icon: <MessageSquare size={24} />, title: "Free Initial Consultation", desc: "Speak with our experts to discuss your medical needs." },
    { icon: <FileText size={24} />, title: "Medical Report Analysis", desc: "Comprehensive review of your reports by specialists." },
    { icon: <Stethoscope size={24} />, title: "Treatment Planning & Second Opinion", desc: "Detailed pathway for your recovery." },
    { icon: <Calculator size={24} />, title: "Transparent Cost Estimation", desc: "Clear pricing with no hidden charges." },
    { icon: <CalendarCheck size={24} />, title: "Hospital & Appointment Booking", desc: "Priority appointments with top doctors." },
    { icon: <FileCheck size={24} />, title: "Visa Assistance & Documentation", desc: "Guidance for medical visa applications." },
    { icon: <Plane size={24} />, title: "Travel & Flight Coordination", desc: "Seamless travel arrangements for you and your companion." },
    { icon: <Building size={24} />, title: "Accommodation Arrangement", desc: "Comfortable stays near the hospital." },
    { icon: <Car size={24} />, title: "Airport Pickup & Local Support", desc: "Dedicated local coordinator and transport." },
    { icon: <HeartHandshake size={24} />, title: "Post-Treatment Follow-up", desc: "Continuous care even after you return home." },
  ];

  return (
    <div className="page-container animate-fade-in">
      <section className="page-header">
        <div className="container text-center">
          <h1>Our Services</h1>
          <p>Complete Medical Travel Support, managing every step of your journey.</p>
        </div>
      </section>

      <section className="section-padding">
        <div className="container">
          <div className="text-center mb-lg">
            <h2 className="section-title">We Manage Every Step</h2>
            <p className="large-text">From your home to full recovery, HAMD Med Care is by your side.</p>
          </div>
          
          <div className="process-list">
            {steps.map((step, index) => (
              <div key={index} className="process-step animate-fade-in" style={{ animationDelay: `${index * 50}ms` }}>
                <div className="step-icon">
                  {step.icon}
                </div>
                <div>
                  <h4>{step.title}</h4>
                  <p style={{ margin: 0, fontSize: '0.9rem' }}>{step.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Services;
