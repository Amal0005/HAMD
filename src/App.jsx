import React, { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';

// Pages
import Home from './pages/Home';
import About from './pages/About';
import Services from './pages/Services';
import Treatments from './pages/Treatments';
import CosmeticSurgery from './pages/CosmeticSurgery';
import OrthopedicCare from './pages/OrthopedicCare';
import WellnessAyurveda from './pages/WellnessAyurveda';
import Contact from './pages/Contact';
import FloatingWhatsApp from './components/FloatingWhatsApp';

const ScrollToTop = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
};

const App = () => {
  return (
    <Router>
      <ScrollToTop />
      <Navbar />
      <main style={{ minHeight: '100vh', paddingTop: '80px' }}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/services" element={<Services />} />
          <Route path="/treatments" element={<Treatments />} />
          <Route path="/cosmetic-surgery" element={<CosmeticSurgery />} />
          <Route path="/orthopedic-care" element={<OrthopedicCare />} />
          <Route path="/wellness-ayurveda" element={<WellnessAyurveda />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </main>
      <Footer />
      <FloatingWhatsApp />
    </Router>
  );
};

export default App;
