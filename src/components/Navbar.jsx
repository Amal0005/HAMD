import React, { useState, useEffect, useRef } from 'react';
import { Link, useLocation } from 'react-router-dom';
import {
  Menu,
  X,
  Home as HomeIcon,
  Info,
  Stethoscope,
  HeartHandshake,
  Sun,
  FileText,
  PhoneCall,
  ChevronRight,
  Search
} from 'lucide-react';
import SearchModal from './SearchModal';
import './Navbar.css';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const location = useLocation();
  const navRef = useRef(null);

  const toggleMenu = () => setIsOpen(!isOpen);
  const closeMenu = () => setIsOpen(false);
  const openSearch = () => {
    closeMenu();
    setIsSearchOpen(true);
  };

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
    { name: 'Home', path: '/', icon: <HomeIcon size={18} /> },
    { name: 'About Us', path: '/about', icon: <Info size={18} /> },
    { name: 'Medical Treatments', path: '/treatments', icon: <Stethoscope size={18} /> },
    { name: 'Ayurveda', path: '/wellness-ayurveda', icon: <Sun size={18} /> },
    { name: 'Our Services', path: '/services', icon: <HeartHandshake size={18} /> },
    { name: 'Patient Guide', path: '/services#patient-guide', icon: <FileText size={18} /> },
    { name: 'Contact Us', path: '/contact', icon: <PhoneCall size={18} /> },
  ];

  return (
    <>
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
            {/* Global Search Button Trigger */}
            <button className="navbar-search-btn" onClick={openSearch} title="Search treatments & services">
              <Search size={18} />
              <span>Search Treatments & Services...</span>
            </button>
          </div>

          {/* Mobile Right Bar Actions */}
          <div style={{ display: 'flex', alignItems: 'center' }}>
            <button className="mobile-search-btn" onClick={openSearch} aria-label="Open search">
              <Search size={22} />
            </button>

            {/* Mobile Toggle */}
            <button className={`mobile-toggle ${isOpen ? 'open' : ''}`} onClick={toggleMenu} aria-label="Toggle menu">
              <Menu size={24} className="icon-menu" />
              <X size={24} className="icon-close" />
            </button>
          </div>
        </div>

        {/* Mobile Nav */}
        <div className={`mobile-nav ${isOpen ? 'open' : ''}`}>
          <nav className="mobile-nav-links">
            <button className="mobile-nav-link" onClick={openSearch} style={{ border: 'none', background: '#f0f9ff', color: '#0284c7' }}>
              <span className="mobile-link-icon-box" style={{ background: '#0284c7', color: '#ffffff' }}>
                <Search size={18} />
              </span>
              <span className="mobile-link-text" style={{ fontWeight: '700' }}>Search Treatments & Services</span>
              <ChevronRight size={16} className="mobile-link-arrow" />
            </button>

            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.path}
                className={`mobile-nav-link ${location.pathname === link.path ? 'active' : ''}`}
                onClick={closeMenu}
              >
                <span className="mobile-link-icon-box">{link.icon}</span>
                <span className="mobile-link-text">{link.name}</span>
                <ChevronRight size={16} className="mobile-link-arrow" />
              </Link>
            ))}
          </nav>
        </div>
      </header>

      {/* Global Search Modal */}
      <SearchModal isOpen={isSearchOpen} onClose={() => setIsSearchOpen(false)} />
    </>
  );
};

export default Navbar;
