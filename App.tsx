import React, { useEffect } from 'react';
import { HashRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import DoubleAgent from './pages/DoubleAgent';
import Bootcamp from './pages/Bootcamp';
import Community from './pages/Community';
import BusinessCenter from './pages/BusinessCenter';

const ScrollToTop = () => {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
};

const App: React.FC = () => {
  return (
    <Router>
      <ScrollToTop />
      <div className="min-h-screen flex flex-col font-body text-neutral-900 selection:bg-ff-yellow selection:text-black">
        <Header />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/doble-agente" element={<DoubleAgent />} />
            <Route path="/bootcamp" element={<Bootcamp />} />
            <Route path="/comunidad" element={<Community />} />
            <Route path="/business-center" element={<BusinessCenter />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
};

export default App;