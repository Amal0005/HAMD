import React, { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import AOS from 'aos';
import 'aos/dist/aos.css';

// Pages
import Home from './pages/Home';
import About from './pages/About';
import Services from './pages/Services';
import Treatments from './pages/Treatments';
import CosmeticSurgery from './pages/CosmeticSurgery';
import OrthopedicCare from './pages/OrthopedicCare';
import WellnessAyurveda from './pages/WellnessAyurveda';
import Cardiology from './pages/Cardiology';
import Oncology from './pages/Oncology';
import IvfFertility from './pages/IvfFertility';
import Ophthalmology from './pages/Ophthalmology';
import Neurology from './pages/Neurology';
import Urology from './pages/Urology';
import Gastroenterology from './pages/Gastroenterology';
import Contact from './pages/Contact';
import FloatingWhatsApp from './components/FloatingWhatsApp';
import LoadingScreen from './components/LoadingScreen';

const ScrollToTop = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
};

const App = () => {
  useEffect(() => {
    AOS.init({
      duration: 800,
      once: true, // Whether animation should happen only once - while scrolling down
      offset: 50, // Offset (in px) from the original trigger point
      easing: 'ease-out-cubic',
    });
  }, []);

  return (
    <Router>
      <LoadingScreen />
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
          <Route path="/cardiology" element={<Cardiology />} />
          <Route path="/oncology" element={<Oncology />} />
          <Route path="/ivf-fertility" element={<IvfFertility />} />
          <Route path="/ophthalmology" element={<Ophthalmology />} />
          <Route path="/neurology" element={<Neurology />} />
          <Route path="/urology" element={<Urology />} />
          <Route path="/gastroenterology" element={<Gastroenterology />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </main>
      <Footer />
      <FloatingWhatsApp />
    </Router>
  );
};

export default App;
