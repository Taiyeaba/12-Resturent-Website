import React from 'react';
import { restaurantConfig } from '../data/restaurantData';
import { getLenis } from '../hooks/useLenis';

export default function Footer() {
  const handleNavClick = (e, href) => {
    e.preventDefault();
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
    <footer className="bg-[#0B0B0A] text-[#F4F0E8] border-t border-[#262624] pt-20 pb-12">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 pb-16 border-b border-[#262624]">
          
          {/* Brand Info */}
          <div className="lg:col-span-5 space-y-4">
            <a
              href="#hero"
              onClick={(e) => handleNavClick(e, '#hero')}
              className="inline-block font-serif text-3xl md:text-4xl tracking-[0.25em] text-[#F4F0E8] font-light hover:text-[#C5A46D] transition-colors"
            >
              {restaurantConfig.name}
            </a>
            <p className="text-xs uppercase tracking-[0.2em] text-[#A8A39A] font-sans">
              {restaurantConfig.tagline} IN BIRMINGHAM
            </p>
            <p className="text-xs text-[#A8A39A] font-sans font-light max-w-sm leading-relaxed">
              An intimate dining experience where seasonal ingredients, refined technique and contemporary European flavours come together.
            </p>
          </div>

          {/* Quick Navigation Links */}
          <div className="lg:col-span-3 space-y-4">
            <span className="text-[10px] uppercase tracking-[0.3em] text-[#C5A46D] font-sans block mb-2">
              NAVIGATION
            </span>
            <ul className="space-y-2.5">
              {restaurantConfig.navLinks.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    onClick={(e) => handleNavClick(e, link.href)}
                    className="text-xs uppercase tracking-[0.2em] text-[#A8A39A] hover:text-[#F4F0E8] transition-colors font-sans"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
              <li>
                <a
                  href="#reservation"
                  onClick={(e) => handleNavClick(e, '#reservation')}
                  className="text-xs uppercase tracking-[0.2em] text-[#C5A46D] hover:text-[#D4B67E] transition-colors font-sans"
                >
                  REQUEST A TABLE
                </a>
              </li>
            </ul>
          </div>

          {/* Contact & Socials */}
          <div className="lg:col-span-4 space-y-4">
            <span className="text-[10px] uppercase tracking-[0.3em] text-[#C5A46D] font-sans block mb-2">
              INQUIRIES & SOCIAL
            </span>
            <p className="text-xs text-[#A8A39A] font-sans">
              {restaurantConfig.contact.email}
            </p>
            <p className="text-xs text-[#A8A39A] font-sans">
              {restaurantConfig.contact.displayPhone}
            </p>

            <div className="pt-4 flex items-center space-x-6">
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-xs uppercase tracking-[0.2em] text-[#A8A39A] hover:text-[#C5A46D] transition-colors font-sans"
              >
                INSTAGRAM
              </a>
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-xs uppercase tracking-[0.2em] text-[#A8A39A] hover:text-[#C5A46D] transition-colors font-sans"
              >
                FACEBOOK
              </a>
            </div>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between text-[10px] uppercase tracking-[0.25em] text-[#A8A39A] font-sans">
          <p>© 2026 {restaurantConfig.name}. ALL RIGHTS RESERVED.</p>
          <p className="mt-2 sm:mt-0">ST PAUL'S SQUARE · BIRMINGHAM, UK</p>
        </div>
      </div>
    </footer>
  );
}
