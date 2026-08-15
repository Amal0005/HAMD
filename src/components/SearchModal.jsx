import React, { useState, useEffect, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import {
  Search,
  X,
  Stethoscope,
  HeartHandshake,
  Sun,
  ArrowRight,
  Sparkles,
  FileText,
  PhoneCall,
  Info,
  ShieldCheck,
  Building2,
  Plane,
  Car,
  Hotel
} from 'lucide-react';
import {
  GiHeartOrgan,
  GiJoint,
  GiRibbon,
  GiBabyFace,
  GiEyeTarget,
  GiScalpel,
  GiBrain,
  GiKidneys,
  GiStomach,
  GiLotus
} from 'react-icons/gi';
import './SearchModal.css';

const searchableData = [
  // Treatments
  { title: 'Cardiology & Heart Surgery', category: 'Treatment', desc: 'Bypass surgery, angioplasty, valve replacement & cardiac care', path: '/cardiology', icon: <GiHeartOrgan /> },
  { title: 'Orthopedics & Joint Replacement', category: 'Treatment', desc: 'Hip & knee replacement, spine surgery, sports injury care', path: '/orthopedic-care', icon: <GiJoint /> },
  { title: 'Oncology & Cancer Care', category: 'Treatment', desc: 'Chemotherapy, radiation therapy, immunotherapy & surgical oncology', path: '/oncology', icon: <GiRibbon /> },
  { title: 'IVF & Fertility Treatment', category: 'Treatment', desc: 'Advanced ICSI, egg freezing & high success rate IVF in Kerala', path: '/ivf-fertility', icon: <GiBabyFace /> },
  { title: 'Ophthalmology & Eye Surgery', category: 'Treatment', desc: 'Blade-free LASIK, cataract surgery, retina care & pediatric eye care', path: '/ophthalmology', icon: <GiEyeTarget /> },
  { title: 'Cosmetic & Plastic Surgery', category: 'Treatment', desc: 'Rhinoplasty, liposuction, facelifts, body contouring & aesthetics', path: '/cosmetic-surgery', icon: <GiScalpel /> },
  { title: 'Neurology & Neurosurgery', category: 'Treatment', desc: 'Brain tumor surgery, spine surgery, stroke rehabilitation & epilepsy', path: '/neurology', icon: <GiBrain /> },
  { title: 'Urology & Kidney Care', category: 'Treatment', desc: 'Laser kidney stone removal, prostate treatment & dialysis', path: '/urology', icon: <GiKidneys /> },
  { title: 'Gastroenterology & Liver Care', category: 'Treatment', desc: 'Endoscopy, liver transplant, bariatric surgery & digestive health', path: '/gastroenterology', icon: <GiStomach /> },
  { title: 'Ayurveda & Panchakarma Rejuvenation', category: 'Ayurveda', desc: 'Authentic Kerala Ayurvedic care, detox programmes & wellness retreats', path: '/wellness-ayurveda', icon: <GiLotus /> },

  // Services
  { title: 'Free Second Medical Opinion', category: 'Service', desc: 'Get expert treatment plans & quotes from top doctors in 24 hours', path: '/contact', icon: <Stethoscope /> },
  { title: 'Trusted Hospital Network Selection', category: 'Service', desc: 'Top JCI & NABH accredited hospitals across Kerala', path: '/services', icon: <Building2 /> },
  { title: 'Arabic & English Interpreters', category: 'Service', desc: 'Multilingual language translation & 1-on-1 bilingual hospital guide', path: '/services', icon: <HeartHandshake /> },
  { title: 'Medical Visa & Travel Assistance', category: 'Service', desc: 'Embassy coordination, invitation letters & flight arrangements', path: '/services', icon: <Plane /> },
  { title: 'Accommodation & Resort Booking', category: 'Service', desc: 'Luxury, budget & family-friendly hotels near hospitals', path: '/services', icon: <Hotel /> },
  { title: 'Airport Pickup & Ground Transport', category: 'Service', desc: 'Chauffeur-driven private vehicles & wheelchair accessible transport', path: '/services', icon: <Car /> },
  { title: 'Post-Treatment Follow-up Care', category: 'Service', desc: 'Tele-consultations with surgeons after returning home', path: '/services', icon: <ShieldCheck /> },

  // Pages & Guides
  { title: 'Patient Journey Guide', category: 'Guide', desc: 'Step-by-step medical travel guide for international patients', path: '/services#patient-guide', icon: <FileText /> },
  { title: 'About HAMD Med Connect', category: 'Page', desc: 'Our mission, accreditation standards & patient support team', path: '/about', icon: <Info /> },
  { title: 'Contact Support & WhatsApp', category: 'Page', desc: '24/7 instant medical helpline & emergency response', path: '/contact', icon: <PhoneCall /> },
];

const trendingSearches = [
  { text: 'Cardiology', path: '/cardiology' },
  { text: 'Ayurveda', path: '/wellness-ayurveda' },
  { text: 'IVF Fertility', path: '/ivf-fertility' },
  { text: 'Orthopedics', path: '/orthopedic-care' },
  { text: 'Free Opinion', path: '/contact' },
  { text: 'Translation', path: '/services' },
];

const SearchModal = ({ isOpen, onClose }) => {
  const [query, setQuery] = useState('');
  const [results, setResults] = useState([]);
  const inputRef = useRef(null);
  const navigate = useNavigate();

  useEffect(() => {
    if (isOpen) {
      setTimeout(() => inputRef.current?.focus(), 100);
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
      setQuery('');
      setResults([]);
    }
  }, [isOpen]);

  useEffect(() => {
    const handleKeyDown = (e) => {
      if ((e.metaKey || e.ctrlKey) && e.key.toLowerCase() === 'k') {
        e.preventDefault();
        if (isOpen) onClose();
      }
      if (e.key === 'Escape' && isOpen) {
        onClose();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, onClose]);

  const handleSearch = (text) => {
    setQuery(text);
    if (!text.trim()) {
      setResults([]);
      return;
    }

    const q = text.toLowerCase();
    const filtered = searchableData.filter(
      (item) =>
        item.title.toLowerCase().includes(q) ||
        item.desc.toLowerCase().includes(q) ||
        item.category.toLowerCase().includes(q)
    );
    setResults(filtered);
  };

  const handleSelectResult = (path) => {
    onClose();
    navigate(path);
  };

  if (!isOpen) return null;

  return (
    <div className="search-modal-backdrop" onClick={onClose}>
      <div className="search-modal-container" onClick={(e) => e.stopPropagation()}>
        {/* Header Search Input Bar */}
        <div className="search-modal-header">
          <Search size={22} className="search-modal-icon" />
          <input
            ref={inputRef}
            type="text"
            className="search-modal-input"
            placeholder="Search medical treatments, Ayurveda, services..."
            value={query}
            onChange={(e) => handleSearch(e.target.value)}
          />
          {query && (
            <button className="search-clear-btn" onClick={() => handleSearch('')} aria-label="Clear search">
              <X size={18} />
            </button>
          )}
          <button className="search-modal-close-btn" onClick={onClose} aria-label="Close search modal">
            <X size={20} className="modal-close-icon" />
          </button>
        </div>

        {/* Modal Body */}
        <div className="search-modal-body">
          {query.trim() === '' ? (
            <div className="search-trending-section">
              <div className="search-section-label">
                <Sparkles size={14} />
                <span>Trending Searches & Popular Specialties</span>
              </div>
              <div className="trending-chips-grid">
                {trendingSearches.map((chip, idx) => (
                  <button
                    key={idx}
                    className="trending-chip-btn"
                    onClick={() => handleSelectResult(chip.path)}
                  >
                    <span>{chip.text}</span>
                    <ArrowRight size={14} />
                  </button>
                ))}
              </div>
            </div>
          ) : results.length > 0 ? (
            <div className="search-results-list">
              <div className="search-results-count">
                Found {results.length} result{results.length > 1 ? 's' : ''} for "{query}"
              </div>
              {results.map((item, idx) => (
                <div
                  key={idx}
                  className="search-result-item"
                  onClick={() => handleSelectResult(item.path)}
                >
                  <div className="search-item-icon-box">{item.icon}</div>
                  <div className="search-item-info">
                    <div className="search-item-top">
                      <span className="search-item-title">{item.title}</span>
                      <span className={`search-category-badge badge-${item.category.toLowerCase()}`}>
                        {item.category}
                      </span>
                    </div>
                    <p className="search-item-desc">{item.desc}</p>
                  </div>
                  <ArrowRight size={18} className="search-item-arrow" />
                </div>
              ))}
            </div>
          ) : (
            <div className="search-no-results">
              <div className="no-results-icon-box">
                <Search size={32} />
              </div>
              <h3>No matching results for "{query}"</h3>
              <p>Try searching for "Cardiology", "Orthopedics", "Ayurveda", "IVF", or "Free Opinion".</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default SearchModal;
