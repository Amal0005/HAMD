import React, { useState, useEffect, useRef } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Phone, Home as HomeIcon, Info, Briefcase, HeartPulse, Mail } from 'lucide-react';
import Button from './Button';
import './Navbar.css';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();
  const navRef = useRef(null);

  const toggleMenu = () => setIsOpen(!isOpen);
  const closeMenu = () => setIsOpen(false);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (navRef.current && !navRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    };

    if (isOpen) {
      document.addEventListener('mousedown', handleClickOutside);
      document.addEventListener('touchstart', handleClickOutside);
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
      document.removeEventListener('touchstart', handleClickOutside);
    };
  }, [isOpen]);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', path: '/', icon: <HomeIcon size={16} /> },
    { name: 'About', path: '/about', icon: <Info size={16} /> },
    { name: 'Services', path: '/services', icon: <Briefcase size={16} /> },
    { name: 'Treatments', path: '/treatments', icon: <HeartPulse size={16} /> },
    { name: 'Contact', path: '/contact', icon: <Mail size={16} /> },
  ];

  return (
    <header ref={navRef} className={`navbar ${scrolled ? 'navbar-scrolled' : ''}`}>
      <div className="container navbar-container">
        <Link to="/" className="navbar-logo" onClick={closeMenu}>
          <img src="/LogoHAMD.png" alt="HAMD Med Connect" className="logo-img" />
        </Link>

        {/* Desktop Nav */}
        <nav className="navbar-links desktop-nav">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              to={link.path}
              className={`nav-link ${location.pathname === link.path ? 'active' : ''}`}
            >
              {link.name}
            </Link>
          ))}
        </nav>

        <div className="navbar-actions desktop-nav">
          <Button variant="primary" icon={<Phone size={18} />} to="/contact">
            Free Consultation
          </Button>
        </div>

        {/* Mobile Toggle */}
        <button className={`mobile-toggle ${isOpen ? 'open' : ''}`} onClick={toggleMenu} aria-label="Toggle menu">
          <Menu size={28} className="icon-menu" />
          <X size={28} className="icon-close" />
        </button>
      </div>

      {/* Mobile Nav */}
      <div className={`mobile-nav ${isOpen ? 'open' : ''}`}>
        <nav className="mobile-nav-links">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              to={link.path}
              className={`mobile-nav-link ${location.pathname === link.path ? 'active' : ''}`}
              onClick={closeMenu}
            >
              <span className="mobile-nav-icon">{link.icon}</span>
              {link.name}
              <i className="fa-solid fa-chevron-right mobile-nav-arrow"></i>
            </Link>
          ))}
          <div className="mobile-nav-actions">
            <Button variant="primary" className="full-width" icon={<Phone size={18} />} to="/contact" onClick={closeMenu}>
              Free Consultation
            </Button>
          </div>
        </nav>
      </div>
    </header>
  );
};

export default Navbar;
