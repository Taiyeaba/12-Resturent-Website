import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, ChevronLeft, ChevronRight, Sparkles, Maximize2 } from 'lucide-react';

// ===== 8 Gallery Images =====
import chefImg from '../assets/gallery/chef.jpg';
import decorateImg from '../assets/gallery/decorate.jpg';
import gal4Img from '../assets/gallery/gal4.jpg';
import galleImg from '../assets/gallery/galle.jpg';
import gallery2Img from '../assets/gallery/gallery2.jpg';
import gallry1Img from '../assets/gallery/gallry1.jpg';
import gammery3Img from '../assets/gallery/gammery3.jpg';
import tableImg from '../assets/gallery/table.jpg';

const GALLERY_ITEMS = [
  {
    id: '01',
    image: gallry1Img,
    title: 'The Cocktail Bar',
    category: 'CRAFT COCKTAILS',
    aspect: 'aspect-[4/5]',
    colSpan: 'col-span-1 md:col-span-1',
  },
  {
    id: '02',
    image: gallery2Img,
    title: 'Main Dining Room',
    category: 'WARM CANDLELIGHT',
    aspect: 'aspect-[4/3] sm:aspect-square md:aspect-[16/10]',
    colSpan: 'col-span-1 md:col-span-2',
  },
  {
    id: '03',
    image: gammery3Img,
    title: 'The Chef’s Pass',
    category: 'PRECISION & ARTISTRY',
    aspect: 'aspect-[3/4]',
    colSpan: 'col-span-1 md:col-span-1',
  },
  {
    id: '04',
    image: tableImg,
    title: 'Table Setting',
    category: 'THOUGHTFUL DETAILS',
    aspect: 'aspect-square',
    colSpan: 'col-span-1 md:col-span-1',
  },
  {
    id: '05',
    image: decorateImg,
    title: 'Decor & Texture',
    category: 'REFINED ELEGANCE',
    aspect: 'aspect-[4/5]',
    colSpan: 'col-span-1 md:col-span-1',
  },
  {
    id: '06',
    image: gal4Img,
    title: 'Evening Ambiance',
    category: 'QUIET LUXURY',
    aspect: 'aspect-square',
    colSpan: 'col-span-1 md:col-span-1',
  },
  {
    id: '07',
    image: galleImg,
    title: 'The Dining Atmosphere',
    category: 'DESIGNED FOR LINGERING',
    aspect: 'aspect-[4/3] sm:aspect-[16/9]',
    colSpan: 'col-span-1 md:col-span-2',
  },
  {
    id: '08',
    image: chefImg,
    title: 'Kitchen Mastery',
    category: 'CULINARY EXPERTISE',
    aspect: 'aspect-[4/5]',
    colSpan: 'col-span-1 md:col-span-1',
  },
];

export default function GallerySection() {
  const [activeImageIndex, setActiveImageIndex] = useState(null);

  // Keyboard navigation & scroll locking for Lightbox
  useEffect(() => {
    if (activeImageIndex === null) return;

    const handleKeyDown = (e) => {
      if (e.key === 'Escape') setActiveImageIndex(null);
      if (e.key === 'ArrowRight') {
        setActiveImageIndex((prev) => (prev + 1) % GALLERY_ITEMS.length);
      }
      if (e.key === 'ArrowLeft') {
        setActiveImageIndex((prev) => (prev - 1 + GALLERY_ITEMS.length) % GALLERY_ITEMS.length);
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    document.body.style.overflow = 'hidden';

    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'auto';
    };
  }, [activeImageIndex]);

  const activeItem = activeImageIndex !== null ? GALLERY_ITEMS[activeImageIndex] : null;

  return (
    <section
      id="gallery"
      className="relative py-28 md:py-36 lg:py-44 bg-[#0B0B0A] text-[#F4F0E8] overflow-hidden border-t border-[#C5A46D]/15"
    >
      {/* Background Soft Glow */}
      <div className="pointer-events-none absolute inset-0 z-0">
        <div className="absolute top-1/3 left-1/4 w-[500px] h-[500px] rounded-full bg-[#C5A46D]/[0.03] blur-[120px]" />
        <div className="absolute bottom-1/3 right-1/4 w-[450px] h-[450px] rounded-full bg-[#8C6D3B]/[0.03] blur-[120px]" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-12">
        
        {/* ============ HEADER ============ */}
        <div className="max-w-3xl mb-16 md:mb-24 text-left">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="flex items-center gap-3 mb-3"
          >
            <Sparkles className="w-4 h-4 text-[#C5A46D]" />
            <span className="text-[10px] sm:text-xs uppercase tracking-[0.4em] text-[#C5A46D] font-sans font-medium">
              ATMOSPHERE & ARTISTRY
            </span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1, delay: 0.1 }}
            className="font-serif text-4xl sm:text-6xl md:text-7xl font-light uppercase tracking-[0.05em] text-[#F4F0E8] mb-5 leading-none"
          >
            THE GALLERY
          </motion.h2>

          <motion.div
            initial={{ opacity: 0, scaleX: 0 }}
            whileInView={{ opacity: 1, scaleX: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1, delay: 0.2 }}
            className="w-24 h-px bg-[#C5A46D]/60 mb-5 origin-left"
          />

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.9, delay: 0.25 }}
            className="font-serif italic text-lg sm:text-2xl text-[#C5A46D] font-light"
          >
            "An atmosphere designed for lingering evenings, fine dining, and unhurried conversation."
          </motion.p>
        </div>

        {/* ============ EDITORIAL MASONRY GRID ============ */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 md:gap-8">
          {GALLERY_ITEMS.map((item, idx) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.9, delay: (idx % 3) * 0.12 }}
              onClick={() => setActiveImageIndex(idx)}
              className={`group relative overflow-hidden bg-[#141413] border border-[#C5A46D]/20 hover:border-[#C5A46D]/70 shadow-2xl transition-all duration-700 cursor-pointer ${item.colSpan}`}
            >
              {/* Image Frame */}
              <div className={`relative w-full ${item.aspect} overflow-hidden`}>
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover transition-transform duration-1000 ease-out group-hover:scale-108"
                />

                {/* Vignette Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#0B0B0A]/90 via-[#0B0B0A]/20 to-transparent transition-opacity duration-500 group-hover:opacity-95" />

                {/* Expand Icon Prompt (Top Right) */}
                <div className="absolute top-4 right-4 z-20 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="w-9 h-9 rounded-full bg-[#0B0B0A]/80 border border-[#C5A46D]/50 flex items-center justify-center text-[#C5A46D] backdrop-blur-md">
                    <Maximize2 className="w-4 h-4" />
                  </div>
                </div>

                {/* Corner Accent Border Lines */}
                <span className="pointer-events-none absolute top-3 left-3 w-4 h-4 border-t border-l border-[#C5A46D]/0 group-hover:border-[#C5A46D]/80 transition-colors duration-500 z-10" />
                <span className="pointer-events-none absolute bottom-3 right-3 w-4 h-4 border-b border-r border-[#C5A46D]/0 group-hover:border-[#C5A46D]/80 transition-colors duration-500 z-10" />
              </div>

              {/* Caption Overlay */}
              <div className="absolute bottom-0 left-0 right-0 p-6 z-10 text-left">
               
                <h3 className="font-serif text-xl sm:text-2xl text-[#F4F0E8] group-hover:text-[#C5A46D] transition-colors duration-300 leading-tight">
                  {item.title}
                </h3>
                
                {/* Underline grow */}
                <div className="w-0 group-hover:w-12 h-px bg-[#C5A46D] mt-2 transition-all duration-500" />
              </div>

            </motion.div>
          ))}
        </div>

      </div>

      {/* ============ CINEMATIC LIGHTBOX MODAL ============ */}
      <AnimatePresence>
        {activeItem && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-8">
            
            {/* Dark Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.4 }}
              onClick={() => setActiveImageIndex(null)}
              className="fixed inset-0 bg-[#080807]/95 backdrop-blur-2xl"
            />

            {/* Modal Stage Container */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
              className="relative z-10 max-w-5xl w-full max-h-[90vh] bg-[#0F0F0E] border border-[#C5A46D]/30 shadow-2xl flex flex-col overflow-hidden my-auto"
            >
              {/* Modal Header Bar */}
              <div className="flex items-center justify-between px-6 py-4 border-b border-[#C5A46D]/20 bg-[#0B0B0A]">
                <div className="flex items-center gap-3">
                  <span className="font-serif text-sm text-[#C5A46D]">
                 
                  </span>
                  <span className="text-[#C5A46D]/40">•</span>
                  <span className="text-[10px] uppercase tracking-[0.25em] text-[#F4F0E8] font-sans">
                    {activeItem.title}
                  </span>
                </div>

                <button
                  onClick={() => setActiveImageIndex(null)}
                  className="flex items-center gap-2 text-xs uppercase tracking-[0.2em] text-[#A8A39A] hover:text-[#C5A46D] transition-colors cursor-pointer focus:outline-none"
                >
                  <span>CLOSE</span>
                  <X className="w-5 h-5 text-[#C5A46D]" />
                </button>
              </div>

              {/* Image Viewport */}
              <div className="relative w-full aspect-[4/3] sm:aspect-[16/10] bg-[#080807] overflow-hidden flex items-center justify-center">
                <motion.img
                  key={activeItem.id}
                  initial={{ opacity: 0, scale: 1.04 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.5 }}
                  src={activeItem.image}
                  alt={activeItem.title}
                  className="w-full h-full object-contain"
                />

                {/* Prev Arrow */}
                <button
                  onClick={() => setActiveImageIndex((prev) => (prev - 1 + GALLERY_ITEMS.length) % GALLERY_ITEMS.length)}
                  className="absolute left-4 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-[#0B0B0A]/80 border border-[#C5A46D]/40 hover:border-[#C5A46D] text-[#C5A46D] flex items-center justify-center transition-all duration-300 cursor-pointer backdrop-blur-md hover:scale-105"
                  aria-label="Previous Image"
                >
                  <ChevronLeft className="w-6 h-6" />
                </button>

                {/* Next Arrow */}
                <button
                  onClick={() => setActiveImageIndex((prev) => (prev + 1) % GALLERY_ITEMS.length)}
                  className="absolute right-4 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-[#0B0B0A]/80 border border-[#C5A46D]/40 hover:border-[#C5A46D] text-[#C5A46D] flex items-center justify-center transition-all duration-300 cursor-pointer backdrop-blur-md hover:scale-105"
                  aria-label="Next Image"
                >
                  <ChevronRight className="w-6 h-6" />
                </button>
              </div>

              {/* Modal Footer Caption */}
              <div className="px-6 py-4 border-t border-[#C5A46D]/20 bg-[#0B0B0A] flex flex-col sm:flex-row items-center justify-between text-center sm:text-left gap-2">
                <div>
                  <h4 className="font-serif text-lg text-[#F4F0E8] font-light">
                    {activeItem.title}
                  </h4>
                  <p className="text-[11px] text-[#A8A39A] font-sans font-light tracking-wider">
                    {activeItem.category}
                  </p>
                </div>
                <span className="text-[10px] uppercase tracking-[0.2em] text-[#C5A46D] font-sans">
                  USE ARROW KEYS ← → TO NAVIGATE
                </span>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
}