import React from 'react';
import './TreatmentCard.css';

const TreatmentCard = ({ icon, title, description }) => {
  return (
    <div className="treatment-card animate-fade-in">
      <div className="treatment-bg-icon">
        {icon}
      </div>
      <div className="treatment-content">
        <h3 className="treatment-title">{title}</h3>
        <p className="treatment-desc">{description}</p>
      </div>
    </div>
  );
};

export default TreatmentCard;
