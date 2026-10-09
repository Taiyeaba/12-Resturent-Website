import React, { useState } from 'react';
import { useLenisSmoothScroll } from './hooks/useLenis';

import Navbar from './components/Navbar';
import Hero from './components/Hero';
import AboutSection from './components/AboutSection';
import MenuSection from './components/MenuSection';
import ExperienceSection from './components/ExperienceSection';
import GallerySection from './components/GallerySection';
import ChefSection from './components/ChefSection';
import TestimonialsSection from './components/TestimonialsSection';
import VisitSection from './components/VisitSection';
import ReservationSection from './components/ReservationSection';
import MenuPage from './components/MenuPage';
import Footer from './components/Footer';

export default function App() {
  // Initialize global Lenis smooth scrolling synchronized with GSAP ScrollTrigger
  useLenisSmoothScroll();

  const [currentView, setCurrentView] = useState('home'); // 'home' | 'menu'
  const [initialMenuTab, setInitialMenuTab] = useState('MENU');

  const handleNavigateToMenu = (tab = 'MENU') => {
    setInitialMenuTab(tab);
    setCurrentView('menu');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleNavigateToHome = (targetId = null) => {
    setCurrentView('home');
    if (targetId) {
      setTimeout(() => {
        const id = targetId.replace('#', '');
        const el = document.getElementById(id);
        if (el) el.scrollIntoView({ behavior: 'smooth' });
      }, 100);
    } else {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-[#0B0B0A] text-[#F4F0E8] font-sans selection:bg-[#C5A46D] selection:text-[#0B0B0A] relative overflow-x-hidden">
      {currentView === 'home' ? (
        <>
          {/* Navigation Header */}
          <Navbar />

          {/* Main Sections */}
          <main>
            <Hero />
            <AboutSection />
            <MenuSection onNavigateToMenu={handleNavigateToMenu} />
            <ExperienceSection />
            <GallerySection />
            <ChefSection />
            <TestimonialsSection />
            <VisitSection />
            <ReservationSection />
          </main>
        </>
      ) : (
        /* Standalone Dedicated Menu Page */
        <MenuPage
          initialTab={initialMenuTab}
          onBackToHome={handleNavigateToHome}
        />
      )}

      {/* Footer */}
      <Footer />
    </div>
  );
}
