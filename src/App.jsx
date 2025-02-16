import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import About from './pages/About';
import Services from './pages/Services';
import Contact from './pages/Contact';
import ServiceDetail from './pages/ServiceDetail';
import NotFound from './pages/NotFound';
import { MdKeyboardDoubleArrowUp } from "react-icons/md";
import { useEffect, useState } from 'react';


function App() {
  const [scrolled, setScrolled] = useState(false);
  useEffect(() => {
    const handleTopScroll = () => {
      setScrolled(window.scrollY > 400);
    }
    window.addEventListener('scroll', handleTopScroll);
    return () => window.removeEventListener('scroll', handleTopScroll);
  }, [])

  return (
    <Router>
      <div className="bg-white">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/services" element={<Services />} />
          <Route path="/services/:id" element={<ServiceDetail />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/404" element={<NotFound />} />
          <Route path="*" element={<Navigate to="/404" replace />} />
        </Routes>
        <div className={`fixed bottom-4 right-4 bg-primary text-white p-2 rounded-full cursor-pointer ${!scrolled ? 'hidden' : 'fixed'}`} onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
          <MdKeyboardDoubleArrowUp size={30}/>
        </div>
      </div>
    </Router>
  );
}

export default App;