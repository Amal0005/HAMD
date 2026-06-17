import React from 'react';
import { Link } from 'react-router-dom';
import TreatmentCard from '../components/TreatmentCard';
import { Heart, Activity, Brain, UserPlus, Eye, Scissors, Pill, FlaskConical } from 'lucide-react';
import './PageStyles.css';

const Treatments = () => {
  const treatments = [
    { icon: <Heart />, title: "Cardiology", desc: "Heart surgery, angioplasty, bypass surgery, and comprehensive cardiac care." },
    { icon: <Activity />, title: "Orthopedics", desc: "Joint replacement, spine surgery, and advanced sports injury treatment.", path: "/orthopedic-care" },
    { icon: <UserPlus />, title: "Oncology", desc: "Advanced cancer diagnosis, chemotherapy, radiation therapy, and surgical oncology." },
    { icon: <FlaskConical />, title: "IVF & Fertility", desc: "Comprehensive fertility treatments with high success rates." },
    { icon: <Eye />, title: "Ophthalmology", desc: "Cataract, LASIK, retina treatments, and advanced eye care." },
    { icon: <Scissors />, title: "Cosmetic & Plastic Surgery", desc: "Rhinoplasty, liposuction, facelift, and aesthetic procedures.", path: "/cosmetic-surgery" },
    { icon: <Brain />, title: "Neurology", desc: "Brain and nerve-related treatments including advanced neurosurgery." },
    { icon: <Activity />, title: "Urology", desc: "Kidney stones, prostate treatment, urinary disorders, and urological surgeries." },
    { icon: <Pill />, title: "Gastroenterology", desc: "Liver care, digestive disorders, endoscopy, and gastrointestinal treatments." },
  ];

  return (
    <div className="page-container animate-fade-in">
      <section className="page-header">
        <div className="container text-center">
          <h1>Advanced Treatments</h1>
          <p>Access top specialists and hospitals for comprehensive medical care.</p>
        </div>
      </section>

      <section className="section-padding bg-light">
        <div className="container">
          <div className="grid-3">
            {treatments.map((t, index) => (
              <div key={index} className="animate-fade-in" style={{ animationDelay: `${index * 100}ms` }}>
                {t.path ? (
                  <Link to={t.path} style={{ textDecoration: 'none', color: 'inherit', display: 'block', height: '100%' }}>
                    <TreatmentCard icon={t.icon} title={t.title} description={t.desc} />
                  </Link>
                ) : (
                  <TreatmentCard icon={t.icon} title={t.title} description={t.desc} />
                )}
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Treatments;
