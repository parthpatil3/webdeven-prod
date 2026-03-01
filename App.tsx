import React, { useEffect, Suspense, lazy } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { m, useScroll, useSpring } from 'framer-motion';
import { HelmetProvider } from 'react-helmet-async';
import Navbar from './Navbar';
import Footer from './Footer';

// Code Splitting for Performance
const Home = lazy(() => import('./Home'));
const Contact = lazy(() => import('./Contact'));
const NotFound = lazy(() => import('./NotFound'));

const ScrollToTop = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
};

const AppContent = () => {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  return (
    <div className="min-h-screen bg-[#050505] text-white font-outfit selection:bg-primary selection:text-black">
      <ScrollToTop />
      {/* Scroll Progress Bar */}
      <m.div
        className="fixed top-0 left-0 right-0 h-1 bg-primary origin-left z-[100] mix-blend-screen"
        style={{ scaleX }}
      />

      <Navbar />

      <main>
        <Suspense fallback={<div className="min-h-screen flex items-center justify-center bg-background"><div className="w-8 h-8 rounded-full border-t-2 border-primary animate-spin"></div></div>}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </Suspense>
      </main>

      <Footer />
    </div>
  );
};

export default function App() {
  return (
    <HelmetProvider>
      <Router>
        <AppContent />
      </Router>
    </HelmetProvider>
  );
}
