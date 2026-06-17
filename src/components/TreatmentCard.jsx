import React from 'react';
import './TreatmentCard.css';

const TreatmentCard = ({ icon, title, description }) => {
  return (
    <div className="treatment-card animate-fade-in">
      <div className="treatment-icon-wrapper">
        {icon}
      </div>
      <h3 className="treatment-title">{title}</h3>
      <p className="treatment-desc">{description}</p>
    </div>
  );
};

export default TreatmentCard;
