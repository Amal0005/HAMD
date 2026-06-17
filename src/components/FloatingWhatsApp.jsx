import React from 'react';
import './FloatingWhatsApp.css';

const FloatingWhatsApp = () => {
  return (
    <a 
      href="https://wa.me/918590896135" 
      className="floating-wa" 
      target="_blank" 
      rel="noopener noreferrer"
      aria-label="Chat on WhatsApp"
    >
      <div className="floating-wa-icon">
        <i className="fa-brands fa-whatsapp" style={{ fontSize: '36px' }}></i>
      </div>
      <span className="floating-wa-tooltip">How can we help?</span>
    </a>
  );
};

export default FloatingWhatsApp;
