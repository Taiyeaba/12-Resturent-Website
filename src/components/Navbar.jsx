import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, Calendar } from 'lucide-react';
import { restaurantConfig } from '../data/restaurantData';
import { getLenis } from '../hooks/useLenis';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 40) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (e, href) => {
    e.preventDefault();
    setMobileMenuOpen(false);
    const targetElement = document.querySelector(href);
    if (targetElement) {
      const lenis = getLenis();
      if (lenis) {
        lenis.scrollTo(targetElement, { offset: -60, duration: 1.2 });
      } else {
        targetElement.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  return (
    <>
      <motion.header
        initial={{ y: -80, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
        className={`fixed top-0 left-0 right-0 z-40 transition-all duration-500 ${
          scrolled
            ? 'bg-[#0B0B0A]/90 backdrop-blur-md border-b border-[#262624]/70 py-4 shadow-2xl'
            : 'bg-gradient-to-b from-[#0B0B0A]/80 via-[#0B0B0A]/20 to-transparent py-6'
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 md:px-12 flex items-center justify-between">
          
          {/* Logo */}
          <a
            href="#hero"
            onClick={(e) => handleNavClick(e, '#hero')}
            className="group flex flex-col items-start focus:outline-none"
          >
            <span className="font-serif text-2xl md:text-3xl tracking-[0.25em] font-light text-[#F4F0E8] group-hover:text-[#C5A46D] transition-colors duration-300">
              {restaurantConfig.name}
            </span>
            <span className="text-[8px] uppercase tracking-[0.35em] text-[#A8A39A] group-hover:text-[#F4F0E8] transition-colors -mt-0.5 font-sans font-light">
              BIRMINGHAM
            </span>
          </a>

          {/* Desktop Navigation Links */}
          <nav className="hidden lg:flex items-center space-x-9">
            {restaurantConfig.navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={(e) => handleNavClick(e, link.href)}
                className="text-[11px] uppercase tracking-[0.28em] text-[#F4F0E8]/80 hover:text-[#C5A46D] transition-colors duration-300 relative py-1.5 font-sans font-light group"
              >
                {link.label}
                <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-0 h-[1px] bg-[#C5A46D] transition-all duration-300 group-hover:w-full" />
              </a>
            ))}
          </nav>

          {/* Desktop Right CTA */}
          <div className="hidden lg:flex items-center">
            <a
              href="#reservation"
              onClick={(e) => handleNavClick(e, '#reservation')}
              className="relative group overflow-hidden border border-[#C5A46D]/60 px-5 py-2.5 text-[11px] tracking-[0.22em] uppercase text-[#F4F0E8] transition-all duration-500 hover:border-[#C5A46D] bg-[#0B0B0A]/40 backdrop-blur-sm shadow-lg"
            >
              <span className="absolute inset-0 bg-[#C5A46D] translate-y-full transition-transform duration-500 ease-out group-hover:translate-y-0" />
              <span className="relative z-10 font-sans group-hover:text-[#0B0B0A] transition-colors duration-500 flex items-center gap-2 font-medium">
                <Calendar className="w-3.5 h-3.5" />
                REQUEST A TABLE
              </span>
            </a>
          </div>

          {/* Mobile Hamburger Toggle */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden p-2 text-[#F4F0E8] hover:text-[#C5A46D] transition-colors focus:outline-none"
            aria-label="Toggle Navigation Menu"
          >
            {mobileMenuOpen ? <X className="w-6 h-6 text-[#C5A46D]" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </motion.header>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
            className="fixed inset-0 z-30 bg-[#0B0B0A]/98 backdrop-blur-2xl flex flex-col justify-between p-8 lg:hidden pt-28 border-b border-[#262624]"
          >
            <div className="flex flex-col space-y-6">
              <span className="text-[9px] tracking-[0.4em] uppercase text-[#C5A46D] font-sans">
                NAVIGATION
              </span>

              {restaurantConfig.navLinks.map((link, idx) => (
                <motion.a
                  key={link.label}
                  href={link.href}
                  onClick={(e) => handleNavClick(e, link.href)}
                  initial={{ x: -20, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  transition={{ delay: idx * 0.06 + 0.08, duration: 0.35 }}
                  className="font-serif text-3xl md:text-4xl text-[#F4F0E8] hover:text-[#C5A46D] transition-colors tracking-widest font-light"
                >
                  {link.label}
                </motion.a>
              ))}

              <motion.a
                href="#reservation"
                onClick={(e) => handleNavClick(e, '#reservation')}
                initial={{ y: 15, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.4 }}
                className="mt-6 inline-flex items-center justify-center gap-3 border border-[#C5A46D] px-6 py-4 text-xs tracking-[0.25em] uppercase text-[#0B0B0A] bg-[#C5A46D] font-sans font-medium hover:bg-[#D4B67E] transition-colors shadow-xl"
              >
                <Calendar className="w-4 h-4" />
                REQUEST A TABLE
              </motion.a>
            </div>

            <div className="border-t border-[#262624] pt-6 flex flex-col space-y-1.5 text-xs text-[#A8A39A]">
              <p className="font-serif text-sm text-[#F4F0E8] tracking-wider">LUMIÈRE BIRMINGHAM</p>
              <p className="font-sans font-light">{restaurantConfig.contact.address}, {restaurantConfig.contact.city}</p>
              <p className="font-sans font-light">{restaurantConfig.contact.displayPhone}</p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
