import React from 'react';
import { Link } from 'react-router-dom';
import TreatmentCard from '../components/TreatmentCard';
import { GiHeartOrgan, GiJoint, GiRibbon, GiBabyFace, GiEyeTarget, GiScalpel, GiBrain, GiKidneys, GiStomach } from 'react-icons/gi';
import './PageStyles.css';

const Treatments = () => {
  const treatments = [
    { icon: <GiHeartOrgan />, title: "Cardiology", desc: "Heart surgery, angioplasty, bypass surgery, and comprehensive cardiac care.", path: "/cardiology" },
    { icon: <GiJoint />, title: "Orthopedics", desc: "Joint replacement, spine surgery, and advanced sports injury treatment.", path: "/orthopedic-care" },
    { icon: <GiRibbon />, title: "Oncology", desc: "Advanced cancer diagnosis, chemotherapy, radiation therapy, and surgical oncology.", path: "/oncology" },
    { icon: <GiBabyFace />, title: "IVF & Fertility", desc: "Comprehensive fertility treatments with high success rates.", path: "/ivf-fertility" },
    { icon: <GiEyeTarget />, title: "Ophthalmology", desc: "Cataract, LASIK, retina treatments, and advanced eye care.", path: "/ophthalmology" },
    { icon: <GiScalpel />, title: "Cosmetic & Plastic Surgery", desc: "Rhinoplasty, liposuction, facelift, and aesthetic procedures.", path: "/cosmetic-surgery" },
    { icon: <GiBrain />, title: "Neurology", desc: "Brain and nerve-related treatments including advanced neurosurgery.", path: "/neurology" },
    { icon: <GiKidneys />, title: "Urology", desc: "Kidney stones, prostate treatment, urinary disorders, and urological surgeries.", path: "/urology" },
    { icon: <GiStomach />, title: "Gastroenterology", desc: "Liver care, digestive disorders, endoscopy, and gastrointestinal treatments.", path: "/gastroenterology" },
  ];

  return (
    <div className="page-container animate-fade-in">
      <section className="page-header" style={{ background: 'linear-gradient(135deg, var(--primary) 0%, var(--secondary) 100%)', padding: '3rem 0' }}>
        <div className="container">
          <div className="main-page-glass-strip">
            <div className="main-page-glass-icon">
              <GiHeartOrgan size={32} />
            </div>
            <div className="main-page-glass-text">
              <h1>Advanced Treatments</h1>
              <p>Access top specialists and hospitals for comprehensive medical care.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="section-padding bg-light">
        <div className="container">
          <div className="grid-3">
            {treatments.map((t, index) => (
              <div key={index} data-aos="fade-up" data-aos-delay={index * 100}>
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
