import React from 'react';
import { Link } from 'react-router-dom';
import { Phone, Mail, MapPin } from 'lucide-react';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-grid">
          {/* Brand Col */}
          <div className="footer-col">
            <Link to="/" className="footer-logo">
              <img src="/LogoHAMD.png" alt="HAMD Med Connect" className="logo-img" />
            </Link>
            <p className="footer-desc">
              Your Trusted Partner in Global Healthcare. We simplify the entire process — from diagnosis to recovery — with complete transparency and personalized care.
            </p>
            <div style={{ display: 'flex', gap: '1rem', marginTop: '1.5rem' }}>
              <a href="https://www.facebook.com/share/1C48auHXo2/" target="_blank" rel="noopener noreferrer" style={{ color: 'var(--primary)', fontSize: '1.5rem' }}>
                <i className="fa-brands fa-facebook"></i>
              </a>
              <a href="https://www.instagram.com/hamd_medconnect?igsh=MWgxdTB5bjR6ZWR3YQ==" target="_blank" rel="noopener noreferrer" style={{ color: 'var(--primary)', fontSize: '1.5rem' }}>
                <i className="fa-brands fa-instagram"></i>
              </a>
            </div>
          </div>

          {/* Quick Links Col */}
          <div className="footer-col">
            <h3>Quick Links</h3>
            <ul className="footer-links">
              <li><Link to="/about">About Us</Link></li>
              <li><Link to="/services">Our Services</Link></li>
              <li><Link to="/treatments">Treatments</Link></li>
              <li><Link to="/contact">Contact</Link></li>
            </ul>
          </div>

          {/* Specialties Col */}
          <div className="footer-col">
            <h3>Specialties</h3>
            <ul className="footer-links">
              <li><Link to="/treatments">Cardiology</Link></li>
              <li><Link to="/treatments">Oncology</Link></li>
              <li><Link to="/cosmetic-surgery">Cosmetic Surgery</Link></li>
              <li><Link to="/orthopedic-care">Orthopedic Care</Link></li>
              <li><Link to="/wellness-ayurveda">Wellness & Ayurveda</Link></li>
            </ul>
          </div>

          {/* Contact Col */}
          <div className="footer-col">
            <h3>Contact Us</h3>
            <ul className="footer-contact">
              <li>
                <Phone size={18} />
                <span>{import.meta.env.VITE_CONTACT_PHONE}</span>
              </li>
              <li>
                <i className="fa-brands fa-whatsapp" style={{ fontSize: '18px' }}></i>
                <span>{import.meta.env.VITE_CONTACT_PHONE}</span>
              </li>
              <li>
                <Mail size={18} />
                <span>{import.meta.env.VITE_CONTACT_EMAIL}</span>
              </li>
              <li>
                <MapPin size={18} />
                <span>India | Global</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="footer-bottom">
          <p>&copy; {new Date().getFullYear()} HAMD Med Care. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
